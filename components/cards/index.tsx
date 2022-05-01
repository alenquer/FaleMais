import styles from "../../styles/cards.module.scss";
import { MdLocationPin, MdCall, MdSupportAgent } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

export const Cards: React.FC = () => {
  return (
    <div className={styles["grid"]}>
      {/* CARD I */}
      <div className={styles.card}>
        <MdLocationPin className={styles["icon"]} size={70} />
        <h2>Escolha a sua localidade</h2>
        <p>Defina o seu local de origem para realizar as ligações.</p>
      </div>
      {/* CARD II */}
      <div className={styles.card}>
        <MdCall className={styles["icon"]} size={70} />
        <h2>Monte o seu pacote</h2>
        <p>Escolha o DDD de destino e os minutos do tempo de ligação.</p>
      </div>
      {/* CARD III */}
      <div className={styles.card}>
        <HiOutlineCurrencyDollar className={styles["icon"]} size={70} />
        <h2>Pague pelo que usar</h2>
        <p>
          Após montar o seu plano você pagará apenas pelo que gastar fora do seu
          pacote!
        </p>
      </div>
      {/* CARD IV */}
      <div className={styles.card}>
        <MdSupportAgent className={styles["icon"]} size={70} />
        <h2>Suporte 24H</h2>
        <p>Conte com a nossa equipe! Sempre que precisar iremos atende-lo.</p>
      </div>
    </div>
  );
};
