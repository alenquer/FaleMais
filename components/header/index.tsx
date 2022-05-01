import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import styles from "../../styles/header.module.scss";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles["nav-container"]}>
      <div className={styles["header-menu-box"]}>
        <a href="/" style={{ cursor: "pointer" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <MdCall size={40} color="var(--primary)" />
            <h1 style={{ fontWeight: 900, margin: "0 1rem" }}>
              <span style={{ color: "var(--primary)" }}>Fale</span>
              <span style={{ color: "var(--contrast)" }}>Mais</span>
            </h1>
          </div>
        </a>
        <a className={styles["header-menu"]} onClick={() => setOpen(!open)}>
          <HiMenu className={styles["menu-icon"]} size={40} />
        </a>
      </div>
      <div className={styles[open ? "links-active" : "links"]}>
        <ul>
          <a href="#simulator" className={styles["header-link"]}>
            Simulador
          </a>
          <a href="#plans" className={styles["header-link"]}>
            Planos
          </a>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="register"
            className={styles["header-link"]}
          >
            Fale conosco
          </a>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=558000410999&text=Gostaria%20de%20saber%20mais%20sobre%20o%20FaleMais."
            className={styles["header-button"]}
          >
            Assine agora
          </a>
        </ul>
      </div>
    </header>
  );
};
