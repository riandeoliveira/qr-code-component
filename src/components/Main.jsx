import styles from '../styles/Main.module.css';

const Main = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Improve your front-end skills by building projects</h1>
            <p className={styles.paragraph}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    );
}

export default Main;