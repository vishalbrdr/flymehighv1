import { transporter, mailOptions } from "@/app/config/nodemailer";

export async function POST(req) {
  const { email } = await req.json();

  try {
    await transporter.sendMail(
      {
        ...mailOptions,
        subject: "newsletter subscription",
        text: email,
        html: `<h1>New user subscribed to newsletter</h1><p>${email}</p>`,
      },
      (err) => console.log(err)
    );
    return new Response(JSON.stringify({ message: "successful" }));
  } catch (error) {
    return new Response(JSON.stringify({ message: "something went wrong" }));
  }
}
