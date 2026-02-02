import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL!,
    pass: process.env.ZOHO_PASSWORD!,
  },
  authMethod: "LOGIN",
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { fullName, mobile, email, bikeType, city, workingPreference } = body;

    // validation
    if (
      !fullName ||
      !mobile ||
      !email ||
      !bikeType ||
      !city ||
      !workingPreference
    ) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Giveat" <${process.env.ZOHO_EMAIL}>`,
      to: email,
      subject: "Your Rider Application Was Received 🚴",
      html: `
    <p>Hi ${fullName},</p>
    <p>Thanks for applying to be a rider with Giveat.</p>
    <p>We’ll contact you soon.</p>
    <p>– Team Giveat 🚀</p>
  `,
    });

    await transporter.sendMail({
      from: `"Giveat" <${process.env.ZOHO_EMAIL}>`,
      to: "Giveatfamqik@gmail.com", // you receive the mail
      replyTo: email,
      subject: "New Rider Application",
      html: `
        <h2>New Rider Application</h2>
        <p><b>Full Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Bike Type:</b> ${bikeType}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Working Preference:</b> ${workingPreference}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Rider email error:", error);
    return NextResponse.json(
      { error: "Email sending failed" },
      { status: 500 },
    );
  }
}
