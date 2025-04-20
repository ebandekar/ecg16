
// const express = require("express");
// const mongoose = require("mongoose");
// const contactRoutes = require("./routes/contact");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect("mongodb://localhost:27017/contactform", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB error", err));

// app.use("/api/contact", contactRoutes);

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require("express");
const mongoose = require("mongoose");
const contactRoutes = require("./routes/contact");
const User = require("./models/User");
const nodemailer = require("nodemailer");

const authRoutes = require("./routes/auth"); // ✅ New auth route
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/ECG_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error", err));

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api", authRoutes); // ✅ Add auth route here
// Your Login Route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.status(200).json({ message: "Login successful" });
});
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
