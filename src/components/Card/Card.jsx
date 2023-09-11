"use client";

import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";
import Link from "next/link";
export default function Card({ data, dest }) {
  const {
    package: { Name },
    Duration,
    mpArr: { P },
    defaultStandard,
    ImgThumbnail,
    PkgSysId,
  } = data;
  const pricePerPerson = P[defaultStandard].price[0].PricePerPerson;

  return (
    <Link className={styles.CardLink} href={`/holidays/${dest}/${PkgSysId}`}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <div
          //   className={styles.Img}
          //   style={{ height: "25rem", width: "25rem", position: "relative" }}
          >
            <Image
              src={ImgThumbnail}
              style={{ objectFit: "cover" }}
              alt="package"
              width={250}
              height={200}
            />
          </div>
        </div>
        <div className={styles.row}>{Name.split("(")[0]}</div>
        <div className={styles.row}>{Duration} Nights</div>
        <div className={styles.row}>₹{pricePerPerson}</div>
      </div>
    </Link>
  );
}
