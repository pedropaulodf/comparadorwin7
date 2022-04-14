import styles from "./styles.module.scss";

interface TextareaPros {
  text: string;
}

export function ButtonOptions({
  text,
}: TextareaPros) {
  return <button className={styles.button}>{text}</button>;
}
