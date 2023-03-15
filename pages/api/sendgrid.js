import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  console.log(req.body);
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: 'francis@aadatasolutions.com', // Your email where you'll receive emails
      from: 'francis.castro@futureanalytics.io', // your website email address here
      subject: `You've got a mail from ${req.body.name}`,
      html: `<div>${req.body.message}</div>

      
      `,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
