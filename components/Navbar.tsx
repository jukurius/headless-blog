import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo_v2.png";
import styles from "@/assets/styles/components/navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image className={styles.logo} src={logo} alt="logo"></Image>
      </Link>
      <ul className={styles.menu}>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
