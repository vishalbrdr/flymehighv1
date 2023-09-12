import { transporter, mailOptions } from "@/app/config/nodemailer";

export async function POST(req) {
  const { contact } = await req.json();
  console.log(contact);
  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          ...mailOptions,
          subject: "customer contact",
          text: `name: ${contact.name}, email:${contact.email}, message: ${contact.message}`,
          html: `
        <h1>New user contacted through contact us form</h1>
        <h2>Name: ${contact.name}</h2>
        <h2>Email: ${contact.email}</h2>
        <h3>Message: ${contact.message}</h3>
        `,
        },
        (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(info);
            console.log(info);
          }
        }
      );
    });
    return new Response(JSON.stringify({ message: "successful" }));
  } catch (error) {
    return new Response(JSON.stringify({ message: "something went wrong" }));
  }
}
