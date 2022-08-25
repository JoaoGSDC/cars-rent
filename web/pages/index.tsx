import React from "react";
import Header from "../components/Header";

import styles from "../styles/Home.module.scss";

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />

        <h2>Conheça nossos carros</h2>
        <h4>As melhores opções você só encontra aqui!</h4>
      </div>
    </>
  );
};

export default Home;
