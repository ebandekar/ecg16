// const express = require("express");
// const router = express.Router();
// const Contact = require("../models/Contact");
// const nodemailer = require("nodemailer");

// // // Nodemailer configuration
// // const transporter = nodemailer.createTransport({
// //   service: "gmail",
// //   auth: {
// //     user: process.env.EMAIL_USER, // Use environment variables
// //     pass: process.env.EMAIL_PASS, // Use environment variables
// //   },
// // });

// // // POST route to handle the contact form submission
// // router.post("/", async (req, res) => {
// //   try {
// //     const { name, email, message } = req.body;

// //     // Save the contact message to the database
// //     const newContact = new Contact({ name, email, message });
// //     await newContact.save();

// //     // Send an email to the user thanking them
// //     const mailOptions = {
// //       from: process.env.EMAIL_USER, // Sender's email
// //       to: email,                    // Recipient's email (the user's email)
// //       subject: "Thank you for your message!",
// //       text: `Hello ${name},\n\nThank you for reaching out to us. We have received your message: "${message}". We will get back to you as soon as possible.\n\nBest regards,\nYour Company`,
// //     };

// //     // Send email
// //     transporter.sendMail(mailOptions, (error, info) => {
// //       if (error) {
// //         console.error("Error sending email:", error);
// //       } else {
// //         console.log("Thank you email sent: " + info.response);
// //       }
// //     });

// //     // Send response to the client
// //     res.status(201).json({ message: "Message received! A thank you email has been sent." });
// //   } catch (err) {
// //     console.error("Error:", err);
// //     res.status(500).json({ error: "Server error" });
// //   }
// // });

// // module.exports = router;
// router.post("/", async (req, res) => {
//     try {
//       const { name, email, message } = req.body;
  
//       // 1. Save the message to MongoDB
//       const newContact = new Contact({ name, email, message });
//       await newContact.save();
  
//       // 2. Configure Nodemailer
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: "sawalikarakanksha@gmail.com", // Use your Gmail
//           pass: "Akanksha1234#",       // Use App Password or real password
//         },
//       });
  
//       // 3. Prepare email to send back to user
//       const mailOptions = {
//         from: 'yourmail@gmail.com', // You (the sender)
//         to: email,                  // The user who just submitted the form
//         subject: "We received your message!",
//         text: `Hi ${name},\n\nThank you for contacting us!\n\nHere’s what you sent:\n"${message}"\n\nWe'll get back to you shortly.\n\n- Team`,
//         html: `
//           <p>Hi ${name},</p>
//           <p>Thank you for contacting us!</p>
//           <p><strong>Your message:</strong></p>
//           <blockquote>${message}</blockquote>
//           <p>We’ll get back to you shortly.</p>
//           <p>- Team</p>
//         `
//       };
  
//       // 4. Send email
//       await transporter.sendMail(mailOptions);
  
//       // 5. Respond to frontend
//       res.status(201).json({ message: "Message received and confirmation email sent!" });
  
//     } catch (err) {
//       console.error("Error saving contact or sending email:", err);
//       res.status(500).json({ error: "Server error" });
//     }
//   });
  
// module.exports = router;

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
//   port: 587,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "sawalikarakanksha@gmail.com",
    pass: "Akanksha1234#",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function emailService() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <sawalikarakanksha@gmail.com>', // sender address
    to: "akankshasa94@gmail.com, eshan.bandekar@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
