import { useEffect, useState } from "react";
import styles from "../../styles/input.module.scss";

export const AddFields: React.FC<{ props: ISimulatorProps }> = ({ props }) => {
  const [origin, setOrigin] = useState("");
  const [destiny, setDestiny] = useState("");
  const [plan, setPlan] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [tempMinutes, setTempMinutes] = useState(0);

  function getItem() {
    return {
      origin,
      destiny,
      plan,
      minutes,
    };
  }

  useEffect(() => {
    if (origin && destiny && plan && minutes) {
      props.add(getItem());
      setOrigin("");
      setDestiny("");
      setPlan(0);
      setMinutes(0);
      setTempMinutes(0);
      alert("Novo item adicionado!");
    }
  }, [origin, destiny, plan, minutes]);

  return (
    <div className={styles["grid"]}>
      <select
        placeholder="Origem"
        value={origin}
        className={styles.contained}
        onChange={(e) => setOrigin(e.target.value)}
      >
        <option value="">Origem</option>
        <option value="011">011</option>
        <option value="016">016</option>
        <option value="017">017</option>
        <option value="018">018</option>
        <option value="019">019</option>
        <option value="021">021</option>
      </select>
      <select
        value={destiny}
        placeholder="Destino"
        className={styles.contained}
        onChange={(e) => setDestiny(e.target.value)}
      >
        <option value="">Destino</option>
        <option value="011">011</option>
        <option value="016">016</option>
        <option value="017">017</option>
        <option value="018">018</option>
        <option value="019">019</option>
        <option value="021">021</option>
      </select>
      <select
        placeholder="Plano"
        value={plan > 0 ? plan : ""}
        className={styles.contained}
        onChange={(e) => setPlan(Number(e.target.value))}
      >
        <option value="">Plano</option>
        <option value={30}>FaleMais 30</option>
        <option value={60}>FaleMais 60</option>
        <option value={120}>FaleMais 120</option>
      </select>
      <input
        value={tempMinutes > 0 ? tempMinutes : ""}
        placeholder="Minutos"
        type="number"
        onBlur={() => setMinutes(tempMinutes)}
        onChange={(e) => setTempMinutes(Number(e.target.value))}
        className={styles.contained}
      />
    </div>
  );
};
