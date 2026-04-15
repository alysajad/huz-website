import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, phone, date, travelers, destination, tier } = data;

    const enquiryId = `HUZ-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Use Resend to send the email
    // Note: If you haven't verified your domain on Resend, you MUST use 'onboarding@resend.dev'
    // Once verified, you can use 'bookings@huztourandtravel.com' or similar.
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: 'Huz Point Tours <onboarding@resend.dev>',
      to: ['info@huztourandtravel.com'],
      subject: `[${enquiryId}] New Enquiry from ${name} - ${destination}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #004d40; border-bottom: 2px solid #004d40; padding-bottom: 10px;">New Travel Enquiry: ${enquiryId}</h2>
          <p style="color: #666; font-size: 13px;"><strong>Submitted On:</strong> ${timestamp}</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Destination:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${destination}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Package:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${tier}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Dates:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${date}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Travelers:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${travelers}</td></tr>
          </table>
          
          <p style="font-size: 11px; color: #999; margin-top: 30px; text-align: center;">This is an automated notification from Huz Point Tours & Travels via Resend.</p>
        </div>
      `,
    });

    if (resendError) {
      console.error('Resend API error:', resendError);
    } else {
      console.log('Email sent successfully via Resend:', resendData.id);
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Enquiry API error:', error);
    return Response.json({ success: false, error: 'Failed to process enquiry' }, { status: 500 });
  }
}
