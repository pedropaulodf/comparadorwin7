import { useState } from "react";
import { ButtonOptions } from "../../components/ButtonOptions";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { StripeColors } from "../../components/StripeColors";
import { Textarea } from "../../components/Textarea";
import styles from "./styles.module.scss";

export function Home() {
  const [separator, setSeparator] = useState("");
  const [wrapIn, setWrapIn] = useState("");

  const [textarea1, setTextarea1] = useState("");
  const [textarea2, setTextarea2] = useState("");
  const [textarea3, setTextarea3] = useState("");
  const [textareaMerged, setTextareaMerged] = useState("");

  const handleChangeTextarea1 = (value: string) => {
    setTextarea1(value);
  };
  const handleChangeTextarea2 = (value: string) => {
    setTextarea2(value);
  };
  const handleChangeTextarea3 = (value: string) => {
    setTextarea3(value);
  };

  const handleMerge = () => {
    const arrayTextarea1 = textarea1.split("\n");
    const arrayTextarea2 = textarea2.split("\n");
    const arrayTextarea3 = textarea3.split("\n");

    // setTextareaMerged(textarea1);
    console.log(arrayTextarea1);
    console.log(arrayTextarea2);
    console.log(arrayTextarea3);
  };

  return (
    <>
      <StripeColors />
      <Header />

      <main className={styles.container}>
        <section className={styles.textAreasSection}>
          <Textarea color="blue" handleChange={handleChangeTextarea1} />
          <Textarea color="red" handleChange={handleChangeTextarea2} />
          <Textarea color="green" handleChange={handleChangeTextarea3} />
        </section>
        <section className={styles.optionsSection}>
          <div className={styles.optionsBox}>
            <p>Separador:</p>
            <div className={styles.buttonGroup}>
              <ButtonOptions isSelect={separator === ""} text="Nada" handleClick={() => setSeparator("")} />
              <ButtonOptions isSelect={separator === " "}
                text="Espaço"
                handleClick={() => setSeparator(" ")}
              />
              <ButtonOptions isSelect={separator === "+"} text="+" handleClick={() => setSeparator("+")} />
              <ButtonOptions isSelect={separator === "-"} text="-" handleClick={() => setSeparator("-")} />
              <div>
                <ButtonOptions isSelect={separator === "%"}
                  text="Outro"
                  handleClick={() => setSeparator("%")}
                />
                {separator === "%" && <input type="text" name="" id="" />}
              </div>
            </div>
          </div>
          <div className={styles.optionsBox}>
            <p>Cercar por:</p>
            <div className={styles.buttonGroup}>
              <ButtonOptions isSelect={wrapIn === ""} text="Nada" handleClick={() => setWrapIn("")} />
              <ButtonOptions isSelect={wrapIn === "quotes"} text={`" "`} handleClick={() => setWrapIn("quotes")} />
              <ButtonOptions isSelect={wrapIn === "brackets"} text={`[ ]`} handleClick={() => setWrapIn("brackets")} />
            </div>
          </div>
        </section>
        <section className={styles.resultSection}>
          <p>1256 combinações feitas!</p>
          <button onClick={() => handleMerge()}>Combinar!</button>
          <Textarea
            color="gray"
            handleChange={() => {}}
            text=""
            value={textareaMerged}
          />
        </section>
      </main>

      <Footer />
      <StripeColors />
    </>
  );
}
