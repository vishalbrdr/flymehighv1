import "reset-css";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";

export const metadata = {
  title: "FlyMeHigh",
  description: "Your ultimate travel companion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
