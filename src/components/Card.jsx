import styles from '../styles/Card.module.css';
import Image from './Image';
import Main from './Main';

const Card = () => {
    return (
        <div className={styles.container}>
            <Image />
            <Main />
        </div>
    );
}

export default Card;