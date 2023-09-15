import Heading from "@/components/common/Heading/Heading";
import React from "react";
import styles from "./style.module.scss";
import { industryData } from "@/data/industriesData";
import Image from "next/image";
const Industry = () => {
  return (
    <div className={styles.conatainer}>
      <Heading text={"Industries"} />

      <div className={styles.mainDataContainer}>
        {industryData.map((data, index) => {
          return (
            <div key={index} className={styles.imageContainer}>
              <Image className={styles.image} alt="" src={data.image} />
              <div className={styles.layer}></div>
              <div className={styles.textContainer}>
                <h1>{data.title}</h1>
                <p>{data.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Industry;
