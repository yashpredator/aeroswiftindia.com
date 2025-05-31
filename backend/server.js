const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net', // GoDaddy's SMTP server
  port: 465, // Secure port for SMTP
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL, // Your GoDaddy email
    pass: process.env.PASSWORD, // Your email account's password
  },
});

// health check
app.get("/", (req, res) => {
  res.status(200).json({"Message": "Server running"})
})

// POST route to send email
app.post("/send", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const mailOptions = {
      from: email,
      to: "info@aeroswiftindia.com",
      subject: "Contact Form Submission",
      text: `You have a new message from ${name}, Email: ${email}, Phone: ${phone}. Message: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully", info });
} catch (error) {
    res.status(500).json({ error: "Error sending email", details: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
