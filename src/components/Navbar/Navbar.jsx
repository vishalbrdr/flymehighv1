"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleMenuOpen(e) {
    setIsMenuOpen(() => e.target.checked);
  }
  return (
    <header className={styles.Header}>
      <div className={"logo"}>
        <Link href={"/"}>
          <Image
            src={"/images/logo.png"}
            width={40}
            height={40}
            alt="travelay Logo"
          />
          <strong>travelay</strong>
        </Link>
      </div>
      <div className={styles.menu}>
        <input
          type="checkbox"
          onChange={handleMenuOpen}
          name="menu"
          id="menu"
          checked={isMenuOpen}
        />
        <label htmlFor="menu" className={styles.menu}>
          <HiOutlineMenuAlt3 />
        </label>
      </div>
      <nav className={isMenuOpen ? styles.show : undefined}>
        <ul>
          <li>
            <Link href={"/about"}>About us</Link>
          </li>
          <li>
            <Link href={"/#destination"}>Destinations</Link>
          </li>
          {/* <li>
            <Link href={"/exclusive-tour"}>Exclusive Tour</Link>
          </li> */}
          {/* <li>
            <Link href={"/about"}>Reviews</Link>
          </li> */}
          <li>
            <Link className="cta" href={"/contact"}>
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
