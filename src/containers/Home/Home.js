import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.hero}></div>
      <div className={styles.nosotros}></div>
      <div className={styles.faq}></div>
      <div className={styles.contacto}></div>
    </>
  );
};

export default Home;
