import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

router.post("/send-inquiry", async (req, res) => {
  try {
    const { teamName, contactName, email, phone, teamSize, tournament, message, type, recipientEmail } = req.body;

    // Validate required fields
    if (!teamName || !contactName || !email || !phone || !teamSize || !tournament) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const subject = `${type === "baseball" ? "Baseball" : "Swim"} Tournament Group Inquiry - ${teamName}`;
    
    const htmlContent = `
      <h2>${type === "baseball" ? "Baseball" : "Swim"} Tournament Group Inquiry</h2>
      <p><strong>Team Name:</strong> ${teamName}</p>
      <p><strong>Contact Name:</strong> ${contactName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Team Size:</strong> ${teamSize}</p>
      <p><strong>Tournament:</strong> ${tournament}</p>
      <p><strong>Additional Details:</strong></p>
      <p>${message || "No additional details provided"}</p>
      <hr />
      <p><em>This inquiry was submitted from the ${type === "baseball" ? "Baseball" : "Swim"} Tournament landing page.</em></p>
    `;

    // Send email to recipient
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@equusinn.com",
      to: recipientEmail,
      subject: subject,
      html: htmlContent
    });

    // Send confirmation email to inquirer
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@equusinn.com",
      to: email,
      subject: `We Received Your ${type === "baseball" ? "Baseball" : "Swim"} Tournament Inquiry - Equus Inn`,
      html: `
        <h2>Thank You for Your Inquiry!</h2>
        <p>Hi ${contactName},</p>
        <p>We've received your group inquiry for your ${type === "baseball" ? "baseball" : "swim"} tournament team <strong>${teamName}</strong>.</p>
        <p>Our team will review your request and contact you shortly with special group rates and availability.</p>
        <p><strong>Your Information:</strong></p>
        <ul>
          <li>Team Size: ${teamSize}</li>
          <li>Tournament: ${tournament}</li>
          <li>Contact: ${phone}</li>
        </ul>
        <p>If you have any immediate questions, feel free to call us at <strong>(352) 854-1234</strong>.</p>
        <p>Best regards,<br />Equus Inn Team</p>
      `
    });

    res.json({ success: true, message: "Inquiry submitted successfully" });
  } catch (error) {
    console.error("Error sending inquiry email:", error);
    res.status(500).json({ error: "Failed to submit inquiry" });
  }
});

export default router;
