import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/register.module.scss";

const Register: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  function send() {
    if (!name || !email || !description) {
      return alert("Por favor, preencha os campos corretamente!");
    }

    setName("");
    setEmail("");
    setDescription("");

    alert("Agradecemos o seu contato!");
  }

  return (
    <div>
      <Head>
        <title>FaleMais - Serviços de telefonia Telzir</title>
        <meta name="description" content="Os melhores planos de telefonia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles["main"]}>
        <aside className={styles["left-content"]}>
          <div className={styles["contact-image"]}>
            <Image
              src="/contact.svg"
              width="100%"
              height="100%"
              layout="responsive"
              priority
            />
          </div>
        </aside>
        <aside className={styles["right-content"]}>
          <div className={styles["form"]}>
            <h1>Contato</h1>
            <div>
              <p>Nome *</p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite o seu nome"
                type="text"
              />
            </div>
            <div>
              <p>E-mail *</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite o seu e-mail"
                type="text"
              />
            </div>
            <div>
              <p>Descrição *</p>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Informe o motivo do contato"
                style={{ resize: "none" }}
              />
            </div>
            <button onClick={send}>ENVIAR</button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Register;
