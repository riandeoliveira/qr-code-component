import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: var(--card);
  border-radius: 20px;
  box-shadow: 0 20px 25px #0000001a;
  margin: 20px;
  max-width: 375px;
  padding: 20px;
`;

export const Image = styled.img`
  border-radius: 13px;
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  margin: 20px 0;
  text-align: center;
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
