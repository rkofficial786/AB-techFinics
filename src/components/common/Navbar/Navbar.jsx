"use client";

import React from "react";
import logo from "../../../Assets/logo.png";
import Image from "next/image";
import { navLinks } from "@/data/NavbarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import {RiArrowDropDownLine} from "react-icons/ri"
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.navContainer}>
      <Image src={logo} alt="" className={styles.image} />

      <div className={styles.linkContainer}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              className={
                isActive ? `${styles.activeNav}` : `${styles.inactiveNav}`
              }
              href={link.href}
              key={link.id}
            >
              {link.nav}
              <RiArrowDropDownLine className={styles.dropdown} />
            </Link>
          );
        })}
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.singleInfo}>
          <MdEmail />
          <p>contact@techfinics</p>
        </div>

        <div className={styles.singleInfo}>
          <BsFillTelephoneFill />
          <p>123456789</p>
        </div>

        <div className={styles.singleInfo}>
          <AiFillLinkedin />
          <p>/company/techfinics</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
