"use client";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  if (show == false) {
    return <></>;
  }
  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        className={styles.header}
      >
        <div className="container">
          <div className={styles.header_content}>
            <div className={styles.logo}>
              <h1>Eyüp Can Esen</h1>
            </div>
            <div className={styles.nav}>
              <ul>
                <li>
                  <a href="#">About Me</a>
                </li>
                <li>
                  <a href="#">Contant</a>
                </li>
                <li>
                  <a href="#">Skills</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}
