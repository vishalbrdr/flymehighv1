"use client";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Footer from "@/components/Footer/Footer";
import axios from "axios";
export default function Page() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState("send message");
  const handleChange = (name) => (e) => {
    setIsLoading("send message");
    setContact((prev) => ({ ...prev, [name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading("sending message...");
    axios
      .post("/api/mail/contact", {
        contact,
      })
      .then(() => {
        console.log("done");
        setIsLoading("message sent!");
        setContact({
          name: "",
          email: "",
          message: "",
        });
      });
  };
  return (
    <>
      <main className={styles.contact} id="contact">
        <div className="container">
          <Navbar />
          <div className={styles.contactInner}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  onChange={handleChange("name")}
                  value={contact.name}
                  required
                  type="text"
                  id="name"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">email</label>
                <input
                  onChange={handleChange("email")}
                  value={contact.email}
                  required
                  type="email"
                  id="email"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">message</label>
                <textarea
                  onChange={handleChange("message")}
                  value={contact.message}
                  required
                  type="message"
                  id="message"
                />
              </div>
              <div className={styles.formGroup}>
                <button className="cta" type="submit">
                  {isLoading}
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
