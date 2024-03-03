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
                src={"/images/travelay.svg"}
                width={140}
                height={80}
                alt="travelay Logo"
              />
              {/* <strong>travelay</strong> */}
            </Link>
          </div>
          <div className={styles.item}>
            <a href="mailto:travelay000@gmail.com">
              <AiOutlineMail />
              <span className={styles.email}>travelay000@gmail.com</span>
            </a>
            <a href="tel:+918884903207">
              <BsTelephone />
              <span>+91 88849 03207</span>
            </a>
          </div>
        </div>
        <div className={styles.col}>
          <h3>services</h3>
          <div className={styles.item}>
            <a target="_blank" href="https://wa.link/iyutgd">
              <AiOutlineWhatsApp /> <span>Holiday Packages</span>
            </a>
            <a target="_blank" href="https://wa.link/wenuix">
              <AiOutlineWhatsApp /> <span>Flights</span>
            </a>
            <a target="_blank" href="https://wa.link/v4wpb5">
              <AiOutlineWhatsApp /> <span>Hotels</span>
            </a>
            <a target="_blank" href="https://wa.link/xy4zg9">
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
        {/* <div className={styles.col}>
          <h3>socials</h3>
          <div className={styles.item}>
            <a
              className="instagram"
              target="_blank"
              href="https://instagram.com/travelay.co"
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
              href="https://www.linkedin.com/company/travelay-travels/"
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
        </div> */}
      </div>
    </footer>
  );
}
