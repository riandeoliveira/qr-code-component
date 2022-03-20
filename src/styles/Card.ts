import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: var(--card);
  border-radius: 20px;
  box-shadow: 0 20px 25px var(--card-shadow);
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
  color: var(--title);
  font-size: 26px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: var(--description);
  font-size: 19px;
`;