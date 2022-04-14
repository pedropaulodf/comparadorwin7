import { useRef, useState } from "react";
import { ButtonOptions } from "../../components/ButtonOptions";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { StripeColors } from "../../components/StripeColors";
import { Textarea } from "../../components/Textarea";
import styles from "./styles.module.scss";

export function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [separator, setSeparator] = useState("");
  const [customSeparator, setCustomSeparator] = useState("");
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

    const wrapperLeft =
      wrapIn === "quotes" ? '"' : wrapIn === "brackets" ? "[" : "";
    const wrapperRight =
      wrapIn === "quotes" ? '"' : wrapIn === "brackets" ? "]" : "";

    const wordsMerged = arrayTextarea1
      .map((text1) =>
        arrayTextarea2.map((text2) =>
          arrayTextarea3.map(
            (text3) =>
              `${wrapperLeft}${separator === "+" ? separator : ""}${text1}${
                separator === "%" ? customSeparator : separator
              }${text2}${
                separator === "%" ? customSeparator : separator
              }${text3}${wrapperRight}`
          )
        )
      )
      .flat(Infinity)
      .join("\n");

    setTextareaMerged(wordsMerged);
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
              <ButtonOptions
                isSelect={separator === ""}
                text="Nada"
                handleClick={() => setSeparator("")}
              />
              <ButtonOptions
                isSelect={separator === " "}
                text="Espaço"
                handleClick={() => setSeparator(" ")}
              />
              <ButtonOptions
                isSelect={separator === "+"}
                text="+"
                handleClick={() => setSeparator("+")}
              />
              <ButtonOptions
                isSelect={separator === "-"}
                text="-"
                handleClick={() => setSeparator("-")}
              />
              <ButtonOptions
                isSelect={separator === "%"}
                text="Outro"
                handleClick={() => {
                  setSeparator("%");
                  setCustomSeparator("");
                  setTimeout(() => {
                    inputRef.current?.focus();
                  }, 200);
                }}
              />
              {separator === "%" && (
                <input
                  ref={inputRef}
                  type="text"
                  onChange={(e) => setCustomSeparator(e.target.value)}
                />
              )}
            </div>
          </div>
          <div className={styles.optionsBox}>
            <p>Cercar por:</p>
            <div className={styles.buttonGroup}>
              <ButtonOptions
                isSelect={wrapIn === ""}
                text="Nada"
                handleClick={() => setWrapIn("")}
              />
              <ButtonOptions
                isSelect={wrapIn === "quotes"}
                text={`" "`}
                handleClick={() => setWrapIn("quotes")}
              />
              <ButtonOptions
                isSelect={wrapIn === "brackets"}
                text={`[ ]`}
                handleClick={() => setWrapIn("brackets")}
              />
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
