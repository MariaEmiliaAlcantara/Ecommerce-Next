import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  gap: 10px;

  font-size: 32px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

const TitleRed = styled.span`
  color: #e2342d;
`;

const TitleBlue = styled.span`
  color: #004197;
`;

const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;

  margin: 0px;
  padding: 0 5px;
  list-style: none;
`;

export const CardArea = ({ children }) => {
  return (
    <Wrapper id="topSellings">
      <Title>
        <TitleRed>TOP</TitleRed> <TitleBlue>SELLINGS</TitleBlue>
      </Title>
      <CardContainer> {children}</CardContainer>
    </Wrapper>
  );
};
