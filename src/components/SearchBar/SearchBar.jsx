"use client";
import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import data from "../../data/holidayPackages/index.json";
import Link from "next/link";
import toCamelCase from "@/app/utils/toCamelCase";
export default function SearchBar() {
  const [destination, setDestination] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e) => {
    const str = e.target.value;
    setDestination(str);
  };
  const filteredData = data.filter((e) => {
    const label = e.label.toLowerCase().trim();
    const destinationLowerCase = destination.toLowerCase().trim();

    // Check if the label contains the destination string
    return label.includes(destinationLowerCase);
  });

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`${styles.backdrop} ${isOpen ? styles.open : ""}`}
      ></div>
      <div className={styles.container}>
        <div className={styles.input}>
          <input
            onChange={handleChange}
            placeholder="Find your destination, eg: singapore"
            type="text"
            onClick={() => setIsOpen(true)}
            value={destination}
          />
          {filteredData.length !== 0 && (
            <div className={`${styles.dropDown} ${isOpen ? styles.open : ""}`}>
              <ul>
                {filteredData.map((e) => (
                  <li key={e.value}>
                    <Link href={`/holidays/` + toCamelCase(e.value)}>
                      {e.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={styles.btn}>
          <button>search</button>
        </div>
      </div>
    </>
  );
}
