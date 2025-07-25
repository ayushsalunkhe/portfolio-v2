import { Hono } from "hono";
import { Env } from "./env";
import { cors } from "hono/cors";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
// ...existing code...

const app = new Hono<{ Bindings: Env }>();

// Enable CORS for all routes
app.use("/*", cors());

// Contact form schema
const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long")
});

// Submit contact form
app.post("/api/contact", zValidator("json", ContactSchema), async (c) => {
  try {
    const { name, email, subject, message } = c.req.valid("json");
    // Store in database
    const result = await c.env.DB.prepare(
      "INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)"
    ).bind(name, email, subject, message).run();

    return c.json({
      success: true,
      message: "Your message has been received! I'll get back to you soon.",
      id: result.meta.last_row_id
    });
  } catch (error) {
    // Error submitting contact form
    return c.json({
      success: false,
      message: "Failed to send message. Please try again or contact me directly."
    }, 500);
  }
});

// Get contact messages (for admin purposes)
app.get("/api/contact", async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      "SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 50"
    ).all();
    
    return c.json(results);
  } catch (error) {
    // Error fetching contact messages
    return c.json({ error: "Failed to fetch messages" }, 500);
  }
});

export default app;
