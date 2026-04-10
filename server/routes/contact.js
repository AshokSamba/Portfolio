const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: "Portfolio Contact",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nReply-to: ${email}`
    });
    res.send("Email Sent");
  } catch (error) {
    console.error("Nodemailer Error Failed To Send:", error);
    res.status(500).send("Error sending email");
  }
});

module.exports = router;
