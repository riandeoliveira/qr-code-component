import {
  CardContainer,
  Image,
  DescriptionContainer,
  Title,
  Description,
} from "../styles/Card";
import img from "../assets/images/qr-code.png";
import data from "../data/data.json";

const { title, description } = data;

export const Card: React.FC = () => {
  return (
    <CardContainer>
      <Image src={img} alt="QR code image" />
      <DescriptionContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </DescriptionContainer>
    </CardContainer>
  );
};
