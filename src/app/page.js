"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import Image from "next/image";
import { FaRegCalendarAlt, FaSmile, FaGlobeAsia } from "react-icons/fa";
import destdata from "../data/holidayPackages/topDestinations.json";
import Link from "next/link";
import toCamelCase from "@/app/utils/toCamelCase";
import axios from "axios";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState("subscribe");
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading("subscribing...");
    axios
      .post("/api/mail/newsletter", {
        email: email,
      })
      .then(() => {
        console.log("done");
        setIsLoading("subscribed!");
        setEmail("");
      });
    // console.log(res);
  }
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.mainInner}>
          <Navbar />
          <h1 className={styles.heading}>
            Unveil the World&apos;s Wonders with <span>Fly Me High</span>
          </h1>
          <SearchBar />
        </div>
      </div>
      <div
        style={{
          width: "100vw",
          height: "10rem",
          position: "relative",
          transform: "translateY(-100%)",
        }}
      >
        <Image
          alt="waves"
          src={"/images/wave1.svg"}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <section className={styles.intro} id="intro">
        <div className={`container ${styles.introContainer}`}>
          <div className={styles.introInner}>
            <div className={styles.left}>
              <div className={styles.row1}>
                <div className={styles.item}>
                  <FaRegCalendarAlt />
                  <span>Years of Experience</span>
                  <strong>5+</strong>
                </div>
                <div className={styles.item}>
                  <FaGlobeAsia />
                  <span>Destinations</span>
                  <strong>50+</strong>
                </div>
                <div className={styles.item}>
                  <FaSmile />
                  <span>Satisfied Clients</span>
                  <strong>3500+</strong>
                </div>
              </div>
              <div className={styles.row2}>
                <p>
                  Our tours offer a diverse range of destinations that cater to
                  a wide variety of interests. From sun drenched sandy beaches
                  with crystal-clear blue oceans, to breathtaking mountain
                  landscapes, tranquil lakes, and lush forests, we&apos;ve got
                  you covered.
                </p>
                <p>
                  Dont waste your chance! We have a tempting offer for the first
                  50 people who apply for the tour will receive a 15% discount.
                </p>
              </div>
            </div>
            <div className={styles.right}>
              <div
                className={`${styles.introImage} ${styles.introImage_1}`}
              ></div>
              <div
                className={`${styles.introImage} ${styles.introImage_2}`}
              ></div>
              <div
                className={`${styles.introImage} ${styles.introImage_3}`}
              ></div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "12rem",
            position: "relative",
            // transform: "translateY(-50%)",
          }}
        >
          <Image
            alt="waves"
            src={"/images/wave2.svg"}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
      <section id="destination" className={styles.destination}>
        <div className="container">
          <header className={styles.destinationHeader}>
            <h2 className={styles.destinationHeader_heading}>
              Top Destinations
            </h2>
          </header>
          <div className={styles.destinationMain}>
            {destdata.map((e, i) => (
              <Link key={e.name} href={`/holidays/${toCamelCase(e.name)}`}>
                <div>
                  <div
                    style={{ position: "relative" }}
                    className={styles.destImg}
                  >
                    <Image
                      // width={100}
                      // height={100}
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      src={e.imgSrc}
                      fill
                      alt={e.name}
                    />
                  </div>
                  <span className={styles.destName}>{e.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.newsletter}>
        <div className="container">
          <h2 className={styles.newsletter_heading}>
            Unlock Exclusive Travel Discounts & Offers!
          </h2>
          <p>
            Subscribe Now to Receive Our Best Deals, Limited-time Offers, and
            Insider Savings. Your Passport to Affordable Adventures Awaits!
          </p>
          <form onSubmit={handleSubmit} className={styles.newletterInner}>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email eg: name@example.com"
            />
            <button type="submit">{isLoading}</button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
