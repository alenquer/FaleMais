import { useState } from "react";
import type { NextPage } from "next";
import Switch from "react-switch";
import Head from "next/head";
import Image from "next/image";
import LottieView from "lottie-react";
import Call from "../assets/lottie/call.json";
import styles from "../styles/home.module.scss";
import { Cards } from "../components/cards";
import { AddFields } from "../components/add";
import { Simulator } from "../components/simulator";
import { Price } from "../components/price";
import { useManager } from "../hooks/useManager";
import { Header } from "../components/header";

const Home: NextPage = () => {
  const { simulator } = useManager();
  const [yearly, setYearly] = useState(false);

  return (
    <div id="container">
      <Head>
        <title>FaleMais - Serviços de telefonia Telzir</title>
        <meta name="description" content="Os melhores planos de telefonia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles["main"]}>
        {/* HEADER */}
        <Header />
        {/* ART-CONTENT */}
        <div className={styles["sub-header"]}>
          <aside className={styles["art-container"]}>
            <div className={styles["overlay"]} />
            <div className={styles["art-content"]}>
              <h1 className={styles["title"]}>
                Encontre os melhores planos de telefonia
              </h1>
              <span className={styles["text"]}>
                Agora contamos com nosso serviço de Telefonia, proporcionando
                mais velocidade, mais estabilidade, sem precisar abrir mão da
                economia.
              </span>
              <span className={styles["text"]}>
                Nosso sonho é conectar pessoas cada vez mais, abrindo novas
                possibilidades que só a tecnologia pode proporcionar.
              </span>
              <span className={styles["text"]}>
                Saiba o valor que irá gastar de forma transparente e pague
                apenas pelo que usar!
              </span>
              <a href="#simulator">
                <button className={styles["button"]}>FAZER SIMULAÇÃO</button>
              </a>
            </div>
          </aside>
          <aside className={styles["lottie-content"]}>
            <LottieView
              loop
              animationData={Call}
              style={{ width: "70%", height: "90%" }}
            />
          </aside>
        </div>
        {/* DISCOVER */}
        <div id="discover" className={styles["discover"]}>
          <div className={styles["box"]}>
            <span className={styles["highlight"]}>Veja como é simples</span>
            <h1 className={styles["title"]}>Procurando um plano?</h1>
            <span className={styles["text"]}>
              Sem Limites, sem fidelidade e sem complicações com preços que
              cabem no seu bolso! Tudo com o melhor atendimento pra você.
            </span>
            <a href="#plans">
              <button>PLANOS</button>
            </a>
            <div className={styles["image"]}>
              <Image
                priority
                src="/phone-call.svg"
                height="100%"
                width="100%"
                layout="responsive"
              />
            </div>
          </div>
          <Cards />
        </div>
        {/* SIMULATOR */}
        <div id="simulator" className={styles["simulator-container"]}>
          <div className={styles["header"]}>
            <div className={styles["box"]}>
              <h1 className={styles["title"]}>VOCÊ NO CONTROLE</h1>
              <p className={styles["text"]}>Simule o seu plano agora mesmo</p>
            </div>
            <AddFields props={simulator} />
          </div>
          <Simulator props={simulator} />
        </div>
        {/* PLANS */}
        <div id="plans" className={styles["price-container"]}>
          <div className={styles["price-box"]}>
            <h1 className={styles["title"]}>Conheça os nossos pacotes</h1>
            <p className={styles["text"]}>
              Encontre o plano que melhor se adapta para você, e não se esqueça
              de simular os valores em nosso gerenciador.
            </p>
            <div className={styles["switch-container"]}>
              <p style={{ color: yearly ? "grey" : "var(--primary)" }}>
                Pagamento mensal
              </p>
              <Switch
                onColor="#5cb1ff"
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={(event) => setYearly(event)}
                checked={yearly}
              />
              <p style={{ color: !yearly ? "grey" : "var(--primary)" }}>
                Pagamento anual
              </p>
            </div>
          </div>
          <div className={styles["price-content"]}>
            <Price plan="30" perYear={yearly} />
            <Price highlight plan="60" perYear={yearly} />
            <Price plan="120" perYear={yearly} />
          </div>
        </div>
      </main>
      {/* FOOTER */}
      <footer className={styles["footer"]}>
        <div className={styles["box"]}>
          <h1 style={{ cursor: "pointer" }}>Telzir</h1>
          <p style={{ fontSize: "0.8rem" }}>TODOS OS DIREITOS RESERVADOS.</p>
          <div>
            <p>CENTRAL DE ATENDIMENTO</p>
            <p style={{ fontWeight: "900" }}>0800 041 0999</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
