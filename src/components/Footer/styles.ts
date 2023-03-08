import styled from "styled-components";

export const FooterContainer = styled.div`
  max-width: 100%;
  height: 7vh;
  background: #eeeeee;
  display: flex;
  margin-top: 8%;
  align-items: center;

  @media (max-width: 672px) {
    display: none;
  }

  
`;

export const FooterText = styled.p`
  width: 100%;
  text-align: center;

  @media (max-width: 672px) {
    display: none;
  }
`;
