const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk meng-handle form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint untuk kirim email
app.post("/send-email", (req, res) => {
  const email = req.body.email;
  const message = req.body.message;

  if (!email || !message) {
    return res.status(400).send('Email dan pesan harus diisi!');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vioobot@gmail.com',  // Ganti dengan alamat email Anda
      pass: 'myzh ntdy xpjs hdmd'  // Ganti dengan password aplikasi Anda
    }
  });

  const mailOptions = {
    from: 'vioobot@gmail.com',
    to: email,  // Penerima email dari input form
    subject: 'Pesan dari Bot',
    text: message,  // Pesan dari input form
    html: `
      <h3>Pesan Anda:</h3>
      <p>${message}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      return res.status(500).send('Gagal mengirim email');
    }
    console.log('Email sent: ' + info.response);
    res.send('Pesan berhasil dikirim ke email Anda!');
  });
});

// Endpoint untuk menampilkan halaman utama (index.html)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
