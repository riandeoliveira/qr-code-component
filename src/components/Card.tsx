import {
  CardContainer,
  Image,
  DescriptionContainer,
  Title,
  Description,
} from "../styles/Card";
import img from "../assets/images/qr-code.png";

export const Card: React.FC = () => {
  return (
    <CardContainer>
      <Image src={img} alt="QR code image" />
      <DescriptionContainer>
        <Title>Improve your front-end skills by building projects</Title>
        <Description>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </Description>
      </DescriptionContainer>
    </CardContainer>
  );
};
