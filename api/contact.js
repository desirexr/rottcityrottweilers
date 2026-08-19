import { Resend } from 'resend';

// RESEND_API_KEY is set by the developer in Vercel → Project Settings → Environment Variables
// Sign up free at https://resend.com — client credentials are never needed.
const resend = new Resend(process.env.RESEND_API_KEY);

// The client's email — where all inquiries land
const CLIENT_EMAIL = 'rottcityllc@gmail.com';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'Rott City Website <onboarding@resend.dev>', // free-tier sender — no domain setup needed
      to: CLIENT_EMAIL,
      reply_to: email,   // reply goes straight back to the visitor
      subject: `New Inquiry from ${name} — ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a1a; color: #f0e6d0; padding: 2rem; border-radius: 8px;">
          <h2 style="color: #c39843; margin-top: 0;">New Inquiry — Rott City Kennels</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #aaa; width: 120px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #aaa;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #c39843;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #aaa;">Phone</td><td style="padding: 8px 0;">${phone || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px 0; color: #aaa;">Subject</td><td style="padding: 8px 0;">${subject}</td></tr>
          </table>
          <hr style="border-color: #333; margin: 1.5rem 0;" />
          <p style="color: #aaa; margin-bottom: 0.5rem;">Message:</p>
          <p style="line-height: 1.7; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
          <hr style="border-color: #333; margin: 1.5rem 0;" />
          <p style="color: #555; font-size: 0.8rem;">Sent via rottcitykennels.com contact form</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
