import React from "react";
import styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <small>Davi Pereira @2019 - {new Date().getFullYear()}</small>
  </footer>
);

export default Footer;
