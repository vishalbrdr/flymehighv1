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
import HolidayForm from "@/components/HolidayForm/HolidayForm";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Page({ params }) {
  const { destination } = params;
  const { data, error } = useSWR(
    `/api/holidays/${toCamelCase(destination)}`,
    fetcher
  );
  console.log(data);
  if (error) return "error";
  if (!data) return "loading";

  return (
    <>
      <main style={{ color: "black" }}>
        <div className={styles.bg}>
          <div className="container">
            <div className={styles.header}>
              <h1>{camelCaseToWords(destination)}</h1>
            </div>
          </div>
        </div>
        <div className={styles.inner}>
          <div className="container">
            {!data.rows
              ? "loading"
              : data.rows.map((e) => (
                  <Card
                    key={e.PkgSysId}
                    dest={toCamelCase(destination)}
                    data={e}
                  />
                ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
