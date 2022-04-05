import content from "../content/card.json";
import {
  CardContainer,
  QRCode,
  DescriptionContainer,
  Title,
  Description,
} from "../styles/Card";
import { qrCode } from "../assets/media";

const { qr_code_alt, title, description } = content;

const Card: React.FC = () => {
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

export default Card;
