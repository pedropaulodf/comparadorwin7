import { ButtonOptions } from "../../components/ButtonOptions";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { StripeColors } from "../../components/StripeColors";
import { Textarea } from "../../components/Textarea";
import styles from "./styles.module.scss";

export function Home() {
  return (
    <>
      <StripeColors />
      <Header />

      <main className={styles.container}>
        <section className={styles.textAreasSection}>
          <Textarea color="blue" />
          <Textarea color="red" />
          <Textarea color="green" />
        </section>
        <section className={styles.optionsSection}>
          <div className={styles.optionsBox}>
            <p>Separador:</p>
            <div className={styles.buttonGroup}>
              <ButtonOptions text="Nada"/>
              <ButtonOptions text="Espaço"/>
              <ButtonOptions text="+"/>
              <ButtonOptions text="-"/>
              <div>
                <ButtonOptions text="Outro"/>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>
          <div className={styles.optionsBox}>
            <p>Cercar por:</p>
            <div className={styles.buttonGroup}>
              <ButtonOptions text="Nada"/>
              <ButtonOptions text={`" "`}/>
              <ButtonOptions text={`[ ]`}/>
            </div>
          </div>
        </section>
        <section className={styles.resultSection}>
          <p>1256 combinações feitas!</p>
          <button>Combinar!</button>
          <Textarea color="gray" text="" />
        </section>
      </main>


      <Footer />
      <StripeColors />
    </>
  );
}
