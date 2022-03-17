import {
  CardContainer,
  Image,
  DescriptionContainer,
  Title,
  Description,
} from "../styles/Card";
import img from "../assets/images/qr-code.png";
import data from "../data/data.json";

export const Card: React.FC = () => {
  return (
    <CardContainer>
      <Image src={img} alt="QR code image" />
      <DescriptionContainer>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
      </DescriptionContainer>
    </CardContainer>
  );
};
