import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body)
    await sendgrid.send({
      to: 'info@futureanalytics.io', // Your email where you'll receive emails
      from: 'francis.castro@futureanalytics.io', // your website email address here
      subject: `You've got a mail from ${req.body.name}`,
      html: `<div>
        <strong>Name:</strong> ${req.body.name}
      </div>
      <div>
        <strong>Email:</strong> ${req.body.email}
      </div>
      <div>
        <strong>Message:</strong> <br />
      ${req.body.message}
      </div>

      `,
    });
    return res.status(200).json({ error: '' });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}

export default sendEmail;
