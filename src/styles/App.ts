import styled from "styled-components";
import theme from "./theme/theme.json";

const AppBox = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 20px;
  box-shadow: 0 20px 25px ${theme.colors.cod_gray};
  margin: 20px;
  max-width: 375px;
  padding: 20px;
  text-align: center;

  img {
    animation: fade-in 0.5s ease, increase 0.5s ease forwards;
    border-radius: 13px;
    width: 0%;
  }

  div {
    animation: fade-in 0.5s ease;
    margin: 20px 0;

    h1 {
      color: ${theme.colors.cloud_burst};
      font-size: 26px;
      margin-bottom: 20px;
    }

    p {
      color: ${theme.colors.regent_gray};
      font-size: 19px;
    }
  }
`;

export default AppBox;
