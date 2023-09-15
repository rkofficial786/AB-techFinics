import Image from "next/image";
import React from "react";
import img from "../../../../Assets/about.png";
import styles from "./style.module.scss"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h2>Seemlessly Engineered Futures</h2>
        <p>
          Welcome to TecFinics, your trusted partner in delivering cutting-edge
          solutions for the digital age. With a strong commitment to innovation
          and a deep understanding of todays technology landscape, we specialize
          in providing a comprehensive suite of services that empower businesses
          to excel in the modern world. We are driven by a passion for
          harnessing the full potential of technology to drive growth,
          efficiency, and transformation for our clients.
        </p>
      </div>

      <Image alt="" src={img}  className={styles.image} />
    </div>
  );
};

export default About;
