const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const { MAIL, PASS } = process.env;

router.post('/contact', async (req, res) => {
  const { name, email, message, subject, phone } = req.body;
  let  forward = "elie-atia@hotmail.fr";
  let subject_ = subject ? subject : `Nouvelle requête de contact sur Ariel-Labs`;

  const transporter = nodemailer.createTransport({
    host: "ssl0.ovh.net",
    port: 465,  
    secure: true, // true for 465, false for other ports
    auth: {
      user: MAIL,
      pass: PASS,
    },
  });
 
  const info = await transporter.sendMail({
    from: `"Ariel Labs" <${MAIL}>`,
    to: forward,
    subject: subject_,
    text: `
    Nouvelle requête de contact de ${name},
    Email: ${email},
    Message: ${message},
    Téléphone: ${phone}
    `
  });

  console.log("Message sent: %s", info.messageId);
});

module.exports = router;

