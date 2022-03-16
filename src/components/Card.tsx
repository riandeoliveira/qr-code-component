import styles from "../styles/Card.module.css";
import { Image } from "./Image";
import { Main } from "./Main";

export const Card: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image />
      <Main />
    </div>
  );
};
