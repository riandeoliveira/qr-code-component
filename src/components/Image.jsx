import styles from '../styles/Image.module.css';
import img from '../assets/images/image-qr-code.png';

const Image = () => {
    return (
        <>
            <img src={img} alt="QR code image" className={styles.image} />
        </>
    );
}

export default Image;