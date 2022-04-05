import styled from "styled-components";
import theme from "./theme/theme.json";

export const CardContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 20px;
  box-shadow: 0 20px 25px ${theme.colors["cod_gray"]};
  margin: 20px;
  max-width: 375px;
  padding: 20px;
  text-align: center;
`;

export const QRCode = styled.img`
  animation: fade-in 0.5s ease, increase 0.5s ease forwards;
  border-radius: 13px;
  width: 0%;
`;

export const DescriptionContainer = styled.div`
  animation: fade-in 0.5s ease;
  margin: 20px 0;
`;

export const Title = styled.h1`
  color: ${theme.colors["cloud_burst"]};
  font-size: 26px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: ${theme.colors["regent_gray"]};
  font-size: 19px;
`;
