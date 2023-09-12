import { transporter, mailOptions } from "@/app/config/nodemailer";

export async function POST(req) {
  const { query } = await req.json();
  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          ...mailOptions,
          subject: "holiday query",
          text: `name: ${query.name}, email:${query.email}, phone: ${query.phone}, Date: ${query.date}, Nights: ${query.nights}, Destination: ${query.packageName}`,
          html: `
        <h1> Customer sent a Holiday package Enquiry</h1>
        <h2>Destination: ${query.packageName}</h2>
        <h2>Name: ${query.name}</h2>
        <h3>Email: ${query.email}</h3>
        <h3>Phone: ${query.phone}</h3>
        <h3>Date: ${query.date}</h3>
        <h3>Nights: ${query.nights}</h3>
        <h3>no of people: ${query.traveller}</h3>
        <h3>Hotel Type: ${query.hotel}</h3>
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
