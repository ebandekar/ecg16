// // // models/Contact.js
// // import mongoose from "mongoose";

// // const contactSchema = new mongoose.Schema({
// //   name: {
// //     type: String,
// //     required: true,
// //   },
// //   email: {
// //     type: String,
// //     required: true,
// //   },
// //   message: {
// //     type: String,
// //     required: true,
// //   },
// // });

// // const Contact = mongoose.model("Contact", contactSchema);

// // export default Contact;
// const mongoose = require("mongoose");

// const contactSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   message: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = mongoose.model("Contact", contactSchema);
// CommonJS style if no "type": "module" in package.json
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

module.exports = mongoose.model("Contact", contactSchema);
