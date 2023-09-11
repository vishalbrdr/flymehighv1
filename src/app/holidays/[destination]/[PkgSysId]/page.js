"use client";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import styles from "./page.module.scss";
import useSWR from "swr";
import axios from "axios";
import toCamelCase from "@/app/utils/toCamelCase";
import Footer from "@/components/Footer/Footer";
import camelCaseToWords from "@/app/utils/camelCaseToTitleCase";
import Card from "@/components/Card/Card";
import Image from "next/image";
import HolidayForm from "@/components/HolidayForm/HolidayForm";
const parse = require("html-react-parser");

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Page({ params }) {
  const { destination, PkgSysId } = params;
  const { data, error } = useSWR(
    `/api/holidays/${toCamelCase(destination)}`,
    fetcher
  );
  const [isOpen, setIsOpen] = useState(false);
  if (error) return "error";
  if (!data) return "loading";
  const holidaypackage = data.rows.find((e) => e.PkgSysId === PkgSysId);
  const {
    package: { Name },
    ImgThumbnail,
    Inclusion,
    Exclusions,
    hotelTypeArr,
    itineraryArr1,
  } = holidaypackage;
  const hotelType = hotelTypeArr[hotelTypeArr.length - 1].type;
  return (
    <>
      <main style={{ color: "black" }}>
        <div className={styles.bg}>
          <div className="container">
            <div className={styles.header}>
              <Navbar />
              <h1>{camelCaseToWords(Name)}</h1>
            </div>
          </div>
        </div>
        <div className={styles.inner}>
          <div className={styles.imgOuter}>
            <div className={styles.img}>
              <Image
                src={ImgThumbnail}
                style={{ objectFit: "cover" }}
                alt="package"
                fill
              />
            </div>
            <button onClick={() => setIsOpen(true)} className="cta">
              Get Customised Itinerary
            </button>
          </div>
          <div className={styles.inclusion}>
            <h2>Hotels</h2>
            <ul>
              {itineraryArr1[hotelType].map((e) => (
                <li key={e.hid}>
                  {e.hotel} ({e.nights}N){" "}
                </li>
              ))}
            </ul>
            <h2>Inclusions</h2>
            {parse(Inclusion)}
            <h2>Exclusions</h2>
            {parse(Exclusions)}

            <button onClick={() => setIsOpen(true)} className="cta">
              Get Customised Itinerary
            </button>
          </div>
        </div>
      </main>
      <HolidayForm isOpen={isOpen} name={Name} setIsOpen={setIsOpen} />
      <Footer />
    </>
  );
}
