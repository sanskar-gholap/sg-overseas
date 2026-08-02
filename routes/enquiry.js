const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
    const { name, company, email, phone, country, product, message } = req.body;

    // Explicit SMTP configuration for Gmail
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // Use SSL
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject: `New Inquiry from ${name} (${product})`,
        html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Product Interest:</strong> ${product}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send(`
            <script>
                alert('Thank you! Your inquiry has been sent successfully.');
                window.location.href = '/contact.html';
            </script>
        `);
    } catch (error) {
        console.error('Nodemailer Error Details:', error);
        res.status(500).send(`
            <script>
                alert('Failed to send inquiry. Please try again or email us directly.');
                window.location.href = '/contact.html';
            </script>
        `);
    }
});

module.exports = router;