// src/pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("API route /api/contact is being hit");
    if (req.method === "POST") {
        const { name, email, subject, message } = req.body;

        // Configure Nodemailer (you may need to install nodemailer if not yet done)
        const transporter = nodemailer.createTransport({
            service: "gmail", // or another service (e.g., SendGrid, SMTP)
            auth: {
                user: process.env.EMAIL_USER, // email user stored in .env
                pass: process.env.EMAIL_PASS, // email pass stored in .env
            },
        });

        const mailOptions = {
            from: email,
            to: "ashwini.kashyap@openxcell.com", // your email where the message will be sent
            subject: subject,
            text: `You have a new message from ${name} (${email}):\n\n${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: "Message sent successfully!" });
        } catch (error) {
            return res.status(500).json({ error: "Error sending message." });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
