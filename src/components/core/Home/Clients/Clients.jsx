import Heading from "@/components/common/Heading/Heading";
import React from "react";
import styles from "./style.module.scss";
import { companyData } from "@/data/companyaData";
import Image from "next/image";
const Clients = () => {
  return (
    <div className={styles.container}>
      <Heading text={"Clients"} />
      <div className={styles.bg}>
        <div className={styles.bgData}>
          <div className={styles.singleData}>
            <h3>30+</h3>
            <p>Clients</p>
          </div>
          <div className={styles.singleData}>
            <h3>100+</h3>
            <p>Projects</p>
          </div>
          <div className={styles.singleData}>
            <h3>95</h3>
            <p>NPS</p>
          </div>
        </div>
      </div>

      {/* company mapping */}
      <div className={styles.companyContainer}>
         {
            companyData.map((company,index)=>{
                return (
                    <div key={index} className={styles.singleImage}>
                    <Image className={styles.image} alt="" src={company.logo}/>
                    </div>
                )
            })
         }
      </div>
    </div>
  );
};

export default Clients;
