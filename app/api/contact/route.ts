import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'info@streetracingkills.org',
        pass: 'izmfnhrcaejuumpz',
      },
    })

    await transporter.sendMail({
      from: `"SRK Website" <info@streetracingkills.org>`,
      to: 'info@streetracingkills.org',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto;">
          <h2 style="font-family: sans-serif; color: #DC2626; border-bottom: 2px solid #DC2626; padding-bottom: 12px;">
            New Contact Form Submission
          </h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 16px; border-left: 4px solid #DC2626;">
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="margin-top: 24px; border-color: #eee;" />
          <p style="font-size: 12px; color: #999;">Sent from streetracingkills.org contact form</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
