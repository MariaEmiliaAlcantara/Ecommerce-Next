import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5vh;
  border-top: 1px solid #d2d2d2;

  font-family: "Montserrat", sans-serif;
  font-size: 14px;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <p>Developed by Maria Emilia</p>
    </FooterContainer>
  );
};
