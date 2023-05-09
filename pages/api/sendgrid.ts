import sendgrid from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body;

  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: 'info@futureanalytics.io', // Your email where you'll receive emails
      from: 'francis.castro@futureanalytics.io', // your website email address here
      subject: `You've got a mail from ${name}`,
      html: `<div>
          <strong>Name:</strong> ${name}
        </div>
        <div>
          <strong>Email:</strong> ${email}
        </div>
        <div>
          <strong>Message:</strong> <br />
        ${message}
        </div>

        `,
    });
    return res.status(200).json({ error: '' });
  } catch (error) {
    console.log(error);

    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
  }
};

export default sendEmail;
