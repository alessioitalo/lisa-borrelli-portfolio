const senderEmail = process.env.NEXT_PUBLIC_EMAIL_SENDER;
const receiverEmail = process.env.NEXT_PUBLIC_EMAIL_RECEIVER;
const pwd = process.env.NEXT_PUBLIC_PASSWORD;

export default function (req, res) {
  require('dotenv').config();
  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: senderEmail,
      pass: pwd,
    },
    secure: true,
  });

  const emailData = {
    from: senderEmail,
    to: receiverEmail,
    subject: `lisa-borrelli.com - message from ${req.body.name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`,
  };

  transporter.sendMail(emailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200).end();
}
