const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    console.log("data is ",req.body)
  const { email, subject, message } = req.body;
  
  // Configure nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or another email service
    auth: {
      user: 'pomkar303@gmail.com', // replace with your email
      pass: 'uftv ymcz uyhf qbcs', // replace with your email password
    },
  });

  const mailOptions = {
    from: 'pomkar303@gmail.com',
    to: 'indrajitpatil05@gmail.com',
    subject: "Portfolio contact",
    text: JSON.stringify(req.body),
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ status: 'Email sent' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email', details: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
