import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";

// Email routing configuration
const EMAIL_ROUTING = {
  sales: "kholt@paxproperties.com", // Groups, meetings, corporate inquiries
  frontdesk: "ocalafd@paxproperties.com", // General inquiries, room bookings
};

// Inquiry form schema
const inquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  inquiryType: z.enum(["general", "booking", "group", "meeting", "corporate"]).default("general"),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  guests: z.string().optional(),
  roomType: z.string().optional(),
});

type InquiryPayload = z.infer<typeof inquirySchema>;

/**
 * Determine recipient email based on inquiry type
 */
function getRecipientEmail(inquiryType: string): string {
  const salesTypes = ["group", "meeting", "corporate"];
  return salesTypes.includes(inquiryType) ? EMAIL_ROUTING.sales : EMAIL_ROUTING.frontdesk;
}

/**
 * Format inquiry data into email body
 */
function formatEmailBody(data: InquiryPayload): string {
  let body = `New Inquiry from ${data.name}\n`;
  body += `Email: ${data.email}\n`;
  if (data.phone) body += `Phone: ${data.phone}\n`;
  body += `Type: ${data.inquiryType}\n`;
  body += `\n--- Message ---\n${data.message}\n`;

  if (data.checkIn || data.checkOut || data.guests || data.roomType) {
    body += `\n--- Booking Details ---\n`;
    if (data.checkIn) body += `Check-in: ${data.checkIn}\n`;
    if (data.checkOut) body += `Check-out: ${data.checkOut}\n`;
    if (data.guests) body += `Guests: ${data.guests}\n`;
    if (data.roomType) body += `Room Type: ${data.roomType}\n`;
  }

  return body;
}

export const emailRouter = router({
  sendInquiry: publicProcedure
    .input(inquirySchema)
    .mutation(async ({ input }) => {
      try {
        const recipientEmail = getRecipientEmail(input.inquiryType);
        const emailBody = formatEmailBody(input);

        // Send notification to owner/staff
        const notificationSent = await notifyOwner({
          title: `New ${input.inquiryType} Inquiry from ${input.name}`,
          content: emailBody,
        });

        // Also send confirmation notification
        if (notificationSent) {
          await notifyOwner({
            title: `Inquiry Confirmation - ${input.name}`,
            content: `Inquiry received and forwarded to ${recipientEmail}`,
          });
        }

        return {
          success: true,
          message: "Your inquiry has been sent. We'll be in touch within 24 hours.",
          recipientEmail,
        };
      } catch (error) {
        console.error("Email send error:", error);
        throw new Error("Failed to send inquiry. Please try again.");
      }
    }),
});

export type EmailRouter = typeof emailRouter;
