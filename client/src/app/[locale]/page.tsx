import styles from "./page.module.css";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import { useTranslations } from "next-intl";

export default function MainPage() {
  const t = useTranslations("Index");
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_video}>
          <div className={styles.overlay}></div>
          <video src="/videos/hero_video.mp4" autoPlay muted loop></video>
        </div>
        <div className={styles.navigation}>
          <Header />
        </div>
        <div className={styles.hero_content}>
          <Hero />
        </div>
      </div>
      <div>
        <h1>test</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi
          explicabo molestias esse veritatis sapiente nostrum voluptas libero
          omnis? Corporis reiciendis libero quaerat amet sapiente, vitae
          quisquam fugit eos. Ratione incidunt, molestiae voluptatum culpa sint
          quia tenetur eveniet cupiditate magnam est porro in obcaecati ea ipsa
          sapiente. Quisquam, deserunt cum!
        </p>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>v<h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
      </div>
    </>
  );
}
