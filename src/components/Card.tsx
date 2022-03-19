import data from "../data/data.json";
import {
  CardContainer,
  QRCode,
  DescriptionContainer,
  Title,
  Description,
} from "../styles/Card";
import qrCode from "../assets/images/qr-code.png";

const { qr_code_alt, title, description } = data;

export const Card: React.FC = () => {
  return (
    <CardContainer>
      <QRCode alt={qr_code_alt} src={qrCode} />
      <DescriptionContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </DescriptionContainer>
    </CardContainer>
  );
};
