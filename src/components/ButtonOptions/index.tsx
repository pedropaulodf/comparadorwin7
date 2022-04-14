import { memo } from "react";
import styles from "./styles.module.scss";

interface TextareaPros {
  text: string;
  isSelect: boolean;
  handleClick: () => void;
}

export function ButtonOptions({ text, isSelect, handleClick }: TextareaPros) {
  return (
    <button
      className={`${styles.button} ${isSelect ? styles.selected : ""}`}
      onClick={() => handleClick()}
    >
      {text}
    </button>
  );
}
