import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, phone, date, travelers, destination, tier } = data;

    // Create a transporter using environment variables.
    // User will need to configure EMAIL_PASS (App Password) for Gmail in their deployment (e.g. Vercel/.env)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'huzpointmagam@gmail.com',
        pass: process.env.EMAIL_PASS || '', 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'huzpointmagam@gmail.com',
      to: 'info@huztourandtravel.com',
      subject: `New Enquiry from ${name} - ${destination}`,
      html: `
        <h2>New Enquiry Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Travel Date:</strong> ${date}</p>
        <p><strong>No. of Travelers:</strong> ${travelers}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Selected Package:</strong> ${tier}</p>
      `,
    };

    // We use a try-catch for the email sending specifically. 
    // This ensures that even if SMTP fails (e.g., missing App Password), 
    // we still return true so the frontend WhatsApp redirect logic can complete.
    try {
      if (process.env.EMAIL_PASS || process.env.NODE_ENV === 'production') {
          await transporter.sendMail(mailOptions);
          console.log("Email sent successfully!");
      } else {
          console.log("Skipping email send in dev because EMAIL_PASS is not configured. Add it to .env.local to test emails.");
      }
    } catch (emailError) {
      console.warn("SMTP email failed (likely missing App Password):", emailError);
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Enquiry API error:', error);
    return Response.json({ success: false, error: 'Failed to process enquiry' }, { status: 500 });
  }
}
