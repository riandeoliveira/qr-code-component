import styles from "../styles/Image.module.css";
import img from "../assets/images/image-qr-code.png";

export const Image: React.FC = () => {
  return (
    <>
      <img src={img} alt="QR code image" className={styles.image} />
    </>
  );
};
