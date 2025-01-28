const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const app = express();
const port = 3000;

// Middleware untuk mengakses file statis (HTML, CSS, JS, dll)
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Menyajikan index.html saat diakses di root ("/")
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // pastikan file index.html ada di direktori yang sama dengan server.js
});

// Endpoint untuk mengirim email
app.post("/send-email", async (req, res) => {
  const { email, subject, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vioobot@gmail.com", // Ganti dengan email pengirim
      pass: "myzh ntdy xpjs hdmd", // Ganti dengan password atau app password
    },
  });

  let mailOptions = {
    from: "vioobot@gmail.com", // Ganti dengan email pengirim
    to: email,
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.json({ success: false });
  }
});

// Menjalankan server pada port yang ditentukan
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
