import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, revenue, struggles, help } = req.body;

  if (!name || !email || !revenue || !struggles || !help) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let recipients: string[] = [];
    if (process.env.INQUIRY_EMAILS) {
      recipients = process.env.INQUIRY_EMAILS.split(",").map(e => e.trim());
    } else if (process.env.OWNER_EMAIL) {
      recipients = [process.env.OWNER_EMAIL];
    }
    
    // Always include the new emails
    const requiredRecipients = ["evanvicino@esscaled.com", "stepanlebedev@esscaled.com"];
    requiredRecipients.forEach(email => {
      if (!recipients.includes(email)) {
        recipients.push(email);
      }
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: recipients,
      subject: 'New Client Inquiry',
      text: `
Name: ${name}
Email: ${email}
Company: ${company}
Monthly Revenue: ${revenue}
Business Struggles: ${struggles}
Requested Help: ${help}
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Inquiry sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send inquiry' });
  }
}
