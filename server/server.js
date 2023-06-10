import express from "express";
import { Router } from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

// server used to send send emails
const app = express();
const PORT = process.env.PORT || 5000;
console.log("🚀 ~ file: server.js:14 ~ PORT:", PORT)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.get("/", (req, res) => {
  res.send('Hello worldie.')
});

// email transmitter
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `
          <h1>Contact Form<h1>
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.log('this is the error =>',error);
      res.json(error);
    } else {
      console.log("Email sent:", info.response);
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});


app.listen(PORT, (req, error) => {
  if (error) {
    console.log("Server failed!");
  } else {
    console.log(`Listening at port ${PORT}`);
  }
});
