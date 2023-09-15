import React from "react";
import { footerLink } from "@/data/footerLinks";
import Link from "next/link";
import styles from "./style.module.scss"
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.singleContainer}>
        <h1>PISCES BUSINESS</h1>
        <p className={styles.para1}>
          Nunc ut vehicula ante. Donec cursus felis diam, at vulputate ligula
          sollicitudin at. Vivamus massa lorem
        </p>
      </div>

      <div className={styles.singleContainer} >
        <h1 className={styles.title2}>CONTACT INFO</h1>
        <div className={styles.infoContainer}>
          <p>+61292515600 </p>

          <p> info@example.com</p>

          <p>PO Box 16122 Street Australia</p>
        </div>
      </div>

      <div className={styles.singleContainer}>
        <h1>USEFUL LINK</h1>
        <div className={styles.linksContainer}>
          {footerLink.map((link, index) => {
            return (
              <Link className={styles.links} key={index} href={link.href}>
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
