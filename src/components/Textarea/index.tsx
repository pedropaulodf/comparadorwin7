import styles from "./styles.module.scss";

interface TextareaPros {
  color: string;
  text?: string;
}

export function Textarea({
  color = "gray",
  text = "Insira palavras aqui",
}: TextareaPros) {
  return <textarea className={`${styles.textarea} ${styles[color]}`} placeholder={text} ></textarea>;
}
