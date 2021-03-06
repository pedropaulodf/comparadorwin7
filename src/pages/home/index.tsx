import { useEffect, useRef, useState } from "react";
import { ButtonOptions } from "../../components/ButtonOptions";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { StripeColors } from "../../components/StripeColors";
import { Textarea } from "../../components/Textarea";
import styles from "./styles.module.scss";

export function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [separator, setSeparator] = useState(" ");
  const [customSeparator, setCustomSeparator] = useState("");
  const [wrapIn, setWrapIn] = useState("");
  const [totalMessage, setTotalMessage] = useState("combinações feitas!");

  const [textarea1, setTextarea1] = useState("");
  const [textarea2, setTextarea2] = useState("");
  const [textarea3, setTextarea3] = useState("");
  const [textareaMerged, setTextareaMerged] = useState("");
  const [totalWordsMerged, setTotalWordsMerged] = useState(0);

  const handleChangeTextarea1 = (value: string) => {
    setTextarea1(value);
  };
  const handleChangeTextarea2 = (value: string) => {
    setTextarea2(value);
  };
  const handleChangeTextarea3 = (value: string) => {
    setTextarea3(value);
  };

  useEffect(() => {
    const qttyWordsMerged = calcPossibleMerges();
    setTotalWordsMerged(qttyWordsMerged);
    setTotalMessage(
      qttyWordsMerged === 1 ? "combinação possível!" : "combinações possíveis!"
    );
  }, [textarea1, textarea2, textarea3]);

  const calcPossibleMerges = () => {
    if (!textarea1 && !textarea2 && !textarea3) {
      return 0;
    }

    const txt1 = textarea1.split("\n").filter((item) => item !== "");
    const txt2 = textarea2.split("\n").filter((item) => item !== "");
    const txt3 = textarea3.split("\n").filter((item) => item !== "");

    const arrayTextarea1 = txt1.length === 0 ? [""] : txt1;
    const arrayTextarea2 = txt2.length === 0 ? [""] : txt2;
    const arrayTextarea3 = txt3.length === 0 ? [""] : txt3;

    return (
      arrayTextarea1.length * arrayTextarea2.length * arrayTextarea3.length
    );
  };

  const handleMerge = () => {
    if (!textarea1 && !textarea2 && !textarea3) {
      return 0;
    }
    const txt1 = textarea1.split("\n").filter((item) => item !== "");
    const txt2 = textarea2.split("\n").filter((item) => item !== "");
    const txt3 = textarea3.split("\n").filter((item) => item !== "");

    const arrayTextarea1 = txt1.length === 0 ? [""] : txt1;
    const arrayTextarea2 = txt2.length === 0 ? [""] : txt2;
    const arrayTextarea3 = txt3.length === 0 ? [""] : txt3;

    const wrapperLeft =
      wrapIn === "quotes" ? '"' : wrapIn === "brackets" ? "[" : "";
    const wrapperRight =
      wrapIn === "quotes" ? '"' : wrapIn === "brackets" ? "]" : "";

    const wordsMerged = arrayTextarea1.map((text1) => {
      return arrayTextarea2.map((text2) => {
        const textMidle = text2 ? `${separator}${text2}` : "";
        return arrayTextarea3.map((text3) => {
          const textEnd = text3 ? `${separator}${text3}` : "";
          switch (separator) {
            case " ":
              return `${wrapperLeft}${text1}${textMidle}${textEnd}${wrapperRight}`;

            case "+":
              return `${separator}${wrapperLeft}${text1.replace(
                / /g,
                ` +`
              )} ${separator}${text2.replace(
                / /g,
                ` +`
              )} ${separator}${text3.replace(
                / /g,
                ` +`
              )}${wrapperRight}`.trim();

            case "-":
              return `${wrapperLeft}${text1}${separator}${text2}${separator}${text3}${wrapperRight}`.trim();

            case "%":
              return `${wrapperLeft}${text1}${
                separator === "%" ? customSeparator : separator
              }${text2}${
                separator === "%" ? customSeparator : separator
              }${text3}${wrapperRight}`.trim();

            default:
              return `${wrapperLeft}${text1}${separator}${text2}${separator}${text3}${wrapperRight}`.trim();
          }
        });
      });
    });

    const qttyWordsMerged = wordsMerged.flat(Infinity).length;

    setTotalMessage(
      qttyWordsMerged === 1 ? "combinação feita!" : "combinações feitas!"
    );
    setTotalWordsMerged(qttyWordsMerged);
    setTextareaMerged(wordsMerged.flat(Infinity).join("\n"));
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
          <p>
            {totalWordsMerged} {totalMessage}
          </p>
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
