import "reset-css";
import "./globals.scss";
import { Roboto, Varela } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";

const lato = Roboto({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

const viaodaLibre = Varela({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400"],
});

export const metadata = {
  title: "travelay",
  description: "Your ultimate travel companion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${viaodaLibre.variable}`}>
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
