import Image from "next/image";
import styles from "./page.module.css";
import Fotopokemon from "./components/fotopokemon";
//soy el pokemon 70
export default function Home() {
  return (
    <main className={styles.main}>
      <Fotopokemon/>
    </main>
  );
}
