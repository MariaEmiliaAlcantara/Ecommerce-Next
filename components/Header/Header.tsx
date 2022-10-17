import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 160px);
  background-color: #f8f8f8;
  display: flex;
`;

const ContainerLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  padding: 5vw 0 0 5vw;
`;

const Title = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 50px;
  color: #3a408c;
  margin-bottom: 15px;
`;

const Paragraph = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #707070;
  margin-bottom: 10vh;
`;

const ButtonHeader = styled.div`
  width: 12vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #e2342d;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 14px;
  border-radius: 5px;
`;

const ContainerRigth = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageHeader = styled.img`
  height: 26vw;
  border-radius: 8px;
`;

export const Header = () => {
  return (
    <Wrapper>
      <ContainerLeft>
        <Title>THE BEST ELECTRONICS IN YOUR HAND IN JUST A FEW MINUTES</Title>
        <Paragraph>
          Our goal is “Order Online and Collect in Store”. You can place your
          orders online, and our app will instantly direct you to the closest
          affiliate where you can pick up your orders within minutes.
        </Paragraph>
        <ButtonHeader>DISCOVER MORE</ButtonHeader>
      </ContainerLeft>
      <ContainerRigth>
        <ImageHeader src="/headerImage.jpg" alt="electronicsW" />
      </ContainerRigth>
    </Wrapper>
  );
};
