import { Hono } from "hono";
import { cors } from "hono/cors";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { Resend } from "resend";

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

    // Send email notification using Resend
    if (c.env.RESEND_API_KEY && c.env.CONTACT_EMAIL) {
      try {
        const resend = new Resend(c.env.RESEND_API_KEY);
        
        await resend.emails.send({
          from: "VisionFolio Contact <noreply@portfolio-v2.app>",
          to: [c.env.CONTACT_EMAIL],
          subject: `New Contact Form Submission: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
              <div style="background: linear-gradient(135deg, #8b5cf6, #ec4899); padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
              </div>
              
              <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <div style="margin-bottom: 20px;">
                  <h3 style="color: #374151; margin: 0 0 8px 0; font-size: 16px;">From:</h3>
                  <p style="color: #6b7280; margin: 0; font-size: 18px; font-weight: 600;">${name}</p>
                  <p style="color: #8b5cf6; margin: 5px 0 0 0; font-size: 14px;">${email}</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                  <h3 style="color: #374151; margin: 0 0 8px 0; font-size: 16px;">Subject:</h3>
                  <p style="color: #111827; margin: 0; font-size: 18px; font-weight: 500;">${subject}</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                  <h3 style="color: #374151; margin: 0 0 8px 0; font-size: 16px;">Message:</h3>
                  <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; border-left: 4px solid #8b5cf6;">
                    <p style="color: #374151; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                  </div>
                </div>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                  <p style="color: #6b7280; margin: 0; font-size: 14px; text-align: center;">
                    Sent via VisionFolio Contact Form • ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          `,
          text: `
New Contact Form Submission

From: ${name} (${email})
Subject: ${subject}

Message:
${message}

Sent via VisionFolio Contact Form
${new Date().toLocaleString()}
          `
        });
        
        // Email sent successfully
      } catch (emailError) {
        // Failed to send email, continuing without failing the request
        // Don't fail the request if email sending fails
      }
    }

    return c.json({
      success: true,
      message: "Your message has been sent successfully! I'll get back to you soon.",
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
