import { memo } from "react";
import styles from "./styles.module.scss";

interface TextareaPros {
  color: string;
  text?: string;
  handleChange: (e: string) => void;
  value?: string;
}

function TextareaComponent({
  color = "gray",
  text = "Insira palavras aqui",
  handleChange,
  value
}: TextareaPros) {
  return (
    <textarea
      className={`${styles.textarea} ${styles[color]}`}
      placeholder={text}
      onChange={(e) => handleChange(e.target.value)}
      value={value}
    ></textarea>
  );
}

export const Textarea = memo(
  TextareaComponent,
  (prevProps, nextProps) => {
    // Esse Object.is vai verificar de forma profunda os dois objetos
    return Object.is(prevProps.value, nextProps.value);
  }
)
