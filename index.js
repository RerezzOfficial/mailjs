<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f7fa;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background-color: #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            width: 100%;
            max-width: 480px;
            padding: 30px;
            box-sizing: border-box;
        }

        h1 {
            text-align: center;
            color: #007bff;
            margin-bottom: 20px;
            font-size: 26px;
        }

        label {
            font-size: 16px;
            color: #333;
            margin-bottom: 8px;
            display: block;
        }

        input[type="text"],
        input[type="email"],
        textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 2px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
            font-size: 16px;
        }

        textarea {
            height: 120px;
        }

        input[type="submit"] {
            width: 100%;
            padding: 12px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        input[type="submit"]:hover {
            background-color: #0056b3;
        }

        .footer {
            text-align: center;
            font-size: 14px;
            margin-top: 20px;
            color: #777;
        }

        .footer a {
            color: #007bff;
            text-decoration: none;
        }

        .footer a:hover {
            text-decoration: underline;
        }
    </style>
    <script type="text/javascript">
        (function() {
            // Inisialisasi SDK EmailJS dengan public key
            emailjs.init("f_WJD6vagy2xmw-b_");  // Ganti dengan kunci publik EmailJS kamu
        })();

        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // Mengirim data form ke EmailJS menggunakan layanan dan template yang sudah dikonfigurasi
                emailjs.sendForm('service_y9m3nxd', 'template_cpj4k8n', this)
                    .then(() => {
                        alert('Pesan berhasil dikirim!');
                    }, (error) => {
                        console.log('Pengiriman Gagal...', error);
                        alert('Terjadi kesalahan, coba lagi!');
                    });
            });
        }
    </script>
</head>
<body>
    <div class="container">
        <h1>Contact Us</h1>
        <form id="contact-form">
            <input type="hidden" name="contact_number" value="697483">
            <label for="user_name">Name</label>
            <input type="text" id="user_name" name="user_name" required>
            <label for="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" required>
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
            <input type="submit" value="Send Message">
        </form>
        <div class="footer">
            <p>&copy; 2025 Your Company. <a href="#">Privacy Policy</a></p>
        </div>
    </div>
</body>
</html>
