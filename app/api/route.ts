import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
// import { type } from '@types/nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Validate environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            throw new Error('Missing email configuration');
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',  // Explicitly specify the host
            port: 587,               // Use port 587 for TLS
            secure: false,           // Use TLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false  // Only use during development
            }
        });

        // Verify the connection configuration
        await transporter.verify();

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'amosokello04@gmail.com',
            subject: 'New Portfolio Contact Form Submission',
            text: `
                Name: ${name}
                Email: ${email}
                
                Message:
                ${message}
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        // Log the actual error for debugging
        console.error('Email error:', error);
        return NextResponse.json(
            { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}