import express from "express";

const router = express.Router();

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

router.post("/", async (req, res) => {
  try {
    const { name, email, message }: ContactFormData = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Invalid email address",
      });
    }

    // Log the contact form submission (for now)
    // In production, you would send an email here using a service like:
    // - Resend (resend.com)
    // - SendGrid
    // - Nodemailer with SMTP
    console.log("Contact form submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Add email sending functionality
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'contact@yourdomain.com',
    //   to: 'your-email@example.com',
    //   subject: `Contact Form: ${name}`,
    //   html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
    // });

    return res.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : "Failed to send message",
    });
  }
});

export default router;
