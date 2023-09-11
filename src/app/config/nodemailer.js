import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "1ms19cv124@gmail.com",
    pass: "xfhjxciukmtdqewu",
  },
});

export const mailOptions = {
  from: "1ms19cv124@gmail.com",
  to: "contact@flymehigh.in",
};
