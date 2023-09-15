import React from "react";
import styles from "./style.module.scss";
import Heading from "@/components/common/Heading/Heading";
import { serviceData } from "@/data/servicesData";
import Image from "next/image";
const Services = () => {
  return (
    <div className={styles.container}>
      <Heading text={"Our Services"} />
      <p>We Provide an extensive range of services to our esteemed client</p>

      <div className={styles.cardsContainer}>
        {serviceData.map((data, index) => {
          return (
            <div className={styles.card} key={index}>
              <Image alt="" src={data.image} />
              <div className={styles.textArea}>
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

export default Services;
