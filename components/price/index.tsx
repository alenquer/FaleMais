import styles from "../../styles/price.module.scss";

interface IProps {
  highlight?: boolean;
  plan: "30" | "60" | "120";
  perYear?: boolean;
}

const plans = {
  "30": {
    users: 1,
    minutes: 30,
    internet: 2,
    monthly: 30,
    yearly: 320,
    description: "Plano inicial para começar a ligar",
  },
  "60": {
    users: 2,
    minutes: 60,
    internet: 3,
    monthly: 60,
    yearly: 680,
    description: "Ideal para a maioria dos usuários",
  },
  "120": {
    users: 2,
    minutes: 120,
    internet: 4,
    monthly: 120,
    yearly: 1199,
    description: "Para pessoas que precisam ligar sem se preocupar",
  },
};

export const Price: React.FC<IProps> = ({ highlight, plan, perYear }) => {
  const { yearly, monthly, users, internet, minutes, description } =
    plans[plan];

  return (
    <div className={styles[highlight ? "price-card-highlight" : "price-card"]}>
      <div className={styles["price-card-header"]}>
        {highlight && <p className={styles["highlight"]}>RECOMENDADO</p>}
        <h1>FaleMais {plan}</h1>
        <span>{description}</span>
        <h2>R$ {perYear ? yearly : monthly}</h2>
        <span>Pagamento {perYear ? "anual" : "mensal"}</span>
      </div>
      <div className={styles["price-card-content"]}>
        <a
          rel="noreferrer noopener"
          target="_blank"
          href={
            "https://api.whatsapp.com/send?phone=558000410999&text=Gostaria%20de%20saber%20mais%20sobre%20o%20FaleMais" +
            plan
          }
        >
          <button>CONTRATAR</button>
        </a>
        <p style={{ fontWeight: "bold", marginTop: 30 }}>O que está incluso?</p>
        <p className={styles["price-card-content-text"]}>{users} Usuário(s)</p>
        <p className={styles["price-card-content-text"]}>
          {minutes} Minutos inclusos
        </p>
        <p className={styles["price-card-content-text"]}>
          {internet} Gigas de internet *
        </p>
      </div>
    </div>
  );
};
