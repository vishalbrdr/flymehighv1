import "reset-css";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import { Lato, Viaoda_Libre } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

const viaodaLibre = Viaoda_Libre({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400"],
});

export const metadata = {
  title: "FlyMeHigh",
  description: "Your ultimate travel companion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${viaodaLibre.variable}`}>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
