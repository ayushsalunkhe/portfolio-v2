import { Hono } from "hono";
import { Env } from "./env";
import { cors } from "hono/cors";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

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
    // No database storage, just log the message
    console.log("Contact form submission:", { name, email, subject, message });

    return c.json({
      success: true,
      message: "Your message has been received! I'll get back to you soon."
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
  // Return empty array instead of database query
  return c.json([]);
});

export default app;
