import styles from "./styles.module.scss";
import logoImg from '../../assets/images/logo.jpg'
import { memo } from "react";

function HeaderComponent() {

  return (
    <div className={styles.container}>
      <div>
        <img src={logoImg} alt="Logo da Win7 Cursos" />
      </div>
      <div>
        <h1>Curso de Google Ads</h1>
        <p>Aprenda na prática com passos simples e rápidos de aplicar. Faça já a sua inscrição e aprenda tudo sobre Google Ads</p>
        <button>Clique aqui e acesse!</button>
      </div>
    </div>
  )
}

export const Header = memo(
  HeaderComponent,
  (prevProps, nextProps) => {
    // Esse Object.is vai verificar de forma profunda os dois objetos
    return Object.is(prevProps, nextProps);
  }
)