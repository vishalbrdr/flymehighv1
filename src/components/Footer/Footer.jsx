import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="contaier">
        <div className={styles.col}>
          <div className="logo">
            <Link href={"/"}>
              <Image
                src={"/images/logo.png"}
                width={40}
                height={40}
                alt="FlyMeHigh Logo"
              />
              <strong>flymehigh</strong>
            </Link>
          </div>
          <div className={styles.item}>
            <a href="mailto:contact@flymehigh.in">
              <AiOutlineMail />
              <span className={styles.email}>contact@flymehigh.in</span>
            </a>
            <a href="tel:+918926104050">
              <BsTelephone />
              <span>+91 8926 104 050</span>
            </a>
            <a href="tel:+918147853017">
              <BsTelephone />
              <span>+91 8147 853 017</span>
            </a>
          </div>
        </div>
        <div className={styles.col}>
          <h3>services</h3>
          <div className={styles.item}>
            <a target="_blank" href="https://wa.link/ywuznr">
              <AiOutlineWhatsApp /> <span>Holiday Packages</span>
            </a>
            <a target="_blank" href="https://wa.link/l8j4xd">
              <AiOutlineWhatsApp /> <span>Flights</span>
            </a>
            <a target="_blank" href="https://wa.link/g382ep">
              <AiOutlineWhatsApp /> <span>Hotels</span>
            </a>
            <a target="_blank" href="https://wa.link/7jxshs">
              <AiOutlineWhatsApp /> <span>Visa</span>
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h3>useful links</h3>
          <div className={styles.item}>
            <Link href="/about">About us</Link>
            <Link href="/contact">Contact us</Link>
            <Link href="/termsAndConditions">Terms and conditions</Link>
            <Link href="/privacyPolicy">Privacy Policy</Link>
          </div>
        </div>
        <div className={styles.col}>
          <h3>socials</h3>
          <div className={styles.item}>
            <a
              className="instagram"
              target="_blank"
              href="https://instagram.com/flymehigh.co"
            >
              <AiFillInstagram /> <span>instagram</span>
            </a>
            <a
              className="facebook"
              target="_blank"
              href="https://www.facebook.com/people/Fly-Me-High/100095395819876/"
            >
              <AiFillFacebook /> <span>facebook</span>
            </a>
            <a
              className="linkedin"
              target="_blank"
              href="https://www.linkedin.com/company/flymehigh-travels/"
            >
              <AiFillLinkedin /> <span>linkedIn</span>
            </a>
            <a
              className="whatsapp"
              target="_blank"
              href="https://wa.link/uq9cbf"
            >
              <AiOutlineWhatsApp /> <span>whatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
