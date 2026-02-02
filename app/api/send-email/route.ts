import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
  authMethod: "LOGIN",
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { ownerName, restaurantName, email, mobile, address } = body;

    // basic validation
    if (!ownerName || !restaurantName || !email || !mobile || !address) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Giveat" <${process.env.ZOHO_EMAIL}>`,
      to: email,
      subject: "Your Restaurant Registration Was Successful 🍽️",
      html: `
    <p>Hi ${ownerName},</p>
    <p>Thank you for registering <b>${restaurantName}</b> with Giveat.</p>
    <p>Our team will contact you shortly.</p>
    <p>– Team Giveat 🚀</p>
  `,
    });

    await transporter.sendMail({
      from: `"Giveat" <${process.env.ZOHO_EMAIL}>`,
      to: "Giveatfamqik@gmail.com", // you receive the mail
      replyTo: email, // so you can reply to user
      subject: "New Restaurant Registration",
      html: `
        <h2>New Restaurant Application</h2>
        <p><b>Owner Name:</b> ${ownerName}</p>
        <p><b>Restaurant Name:</b> ${restaurantName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Address:</b> ${address}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Email sending failed" },
      { status: 500 },
    );
  }
}
