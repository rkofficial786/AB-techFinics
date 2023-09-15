import Heading from "@/components/common/Heading/Heading";
import React from "react";
import { partnerData } from "@/data/partnersData";
import Image from "next/image";
import styles from "./style.module.scss";
const Partners = () => {
  return (
    <div className={styles.container}>
      <Heading text={"Partners"} />
      <div className={styles.cardsContainer}>
        {partnerData.map((partner, index) => {
          return (
            <div key={index} className={styles.card}>
              <Image className={styles.image} src={partner.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
