import styled from "styled-components";
import { fadeIn, increase } from "./animations/animations";

export const CardContainer = styled.div`
  background-color: var(--card);
  border-radius: 20px;
  box-shadow: 0 20px 25px #0000001a;
  margin: 20px;
  max-width: 375px;
  padding: 20px;
  text-align: center;
`;

export const Image = styled.img`
  animation: increase 0.5s ease forwards, fadeIn 0.5s ease;
  border-radius: 13px;
  width: 0%;

  ${fadeIn}
  ${increase}
`;

export const DescriptionContainer = styled.div`
  animation: fadeIn 0.5s ease;
  margin: 20px 0;

  ${fadeIn}
`;

export const Title = styled.h1`
  color: var(--title);
  font-size: 26px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: var(--description);
  font-size: 19px;
`;
