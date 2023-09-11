import React, { useState } from "react";
import styles from "./HolidayForm.module.scss";

import { DatePicker } from "antd";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";

export default function HolidayForm({ isOpen, setIsOpen, name }) {
  const [query, setQuery] = useState({
    name: "",
    packageName: name,
    email: "",
    phone: "",
    nights: "",
    date: null,
    traveller: "",
    hotel: "",
  });
  const [IsLoading, setIsLoading] = useState("send");
  const handleDateChange = (date, datestr) => {
    console.log(date, datestr);
    setQuery((prev) => ({ ...prev, date: datestr }));
  };
  const handleChange = (name) => (e) => {
    setIsLoading("send");
    setQuery((prev) => ({ ...prev, [name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading("submitting...");
    axios
      .post("/api/mail/holidayQuery", {
        query,
      })
      .then(() => {
        setIsLoading("sent!");
      });
  };
  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={isOpen ? styles.overlayOpen : styles.overlayClose}
      ></div>
      <div className={isOpen ? styles.formOpen : styles.form}>
        <button onClick={() => setIsOpen(false)}>
          <AiFillCloseCircle />
        </button>
        <div className={styles.inner}>
          <header>
            <h2>Get Customised Itinerary</h2>
            <p>We are here to help you plan your holiday</p>
          </header>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                onChange={handleChange("name")}
                value={query.name}
                type="text"
                id="name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChange("email")}
                value={query.email}
                id="email"
                type="email"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">mobile number</label>
              <input
                onChange={handleChange("phone")}
                value={query.phone}
                id="phone"
                type="tel"
                required
              />
            </div>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label htmlFor="traveller">Traveller count</label>
                <input
                  onChange={handleChange("traveller")}
                  value={query.traveller}
                  id="traveller"
                  type="number"
                  min={1}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="name">number of nights</label>
                <input
                  onChange={handleChange("nights")}
                  value={query.nights}
                  id="nights"
                  type="number"
                  min={1}
                  max={15}
                  required
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label htmlFor="date">date</label>
                <DatePicker required onChange={handleDateChange} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="hotel">hotel type</label>
                <select
                  onChange={handleChange("hotel")}
                  name="hoteltype"
                  id="hotel"
                  value={query.hotel}
                >
                  <option value="3 star">Standard - 3⭐</option>
                  <option value="4 star">Premium - 4⭐</option>
                  <option value="5 star">Luxury - 5⭐</option>
                </select>
              </div>
            </div>
            <button type="submit" className="cta">
              {IsLoading}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
