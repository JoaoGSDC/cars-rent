import React, { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

import { FiMenu } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);

  return (
    <>
      <nav className={styles.nav}>
        <button onClick={() => setOpenNavbar(!openNavbar)}>
          <FiMenu />
        </button>

        <img src="logo.png" alt="logo" />

        <ul
          className={styles.options}
          style={{ left: openNavbar ? "0px" : "-100%" }}
        >
          <img
            src="outplay-logo.png"
            alt="Logo"
            onClick={() => setOpenNavbar(!openNavbar)}
          />

          <Link href="">
            <li>Estoque</li>
          </Link>

          <Link href="">
            <li>Alugados</li>
          </Link>

          <Link href="">
            <li>Logar</li>
          </Link>
        </ul>

        <div />
      </nav>
    </>
  );
};

export default Navbar;
