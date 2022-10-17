import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
`;

const ContainerTop = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  padding-right: 55px;

  color: #4a4b4d;
  border-bottom: 1px solid #d2d2d2;
`;

const ContainerBottom = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DivIcons = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-right: 20px;
`;

const MenuItems = styled.p`
  cursor: pointer;
`;

export const Navbar = () => {
  return (
    <Wrapper>
      <ContainerTop>
        <MenuItems>Help</MenuItems>
        <MenuItems>Register / Sign In</MenuItems>
      </ContainerTop>
      <ContainerBottom>
        <DivIcons>
          <img src="/search.svg" alt="" />
        </DivIcons>
        <MenuItems>SHOP</MenuItems>
        <MenuItems>ESSENTIALS</MenuItems>
        <img src="/logo.svg"></img>
        <MenuItems>
          <a href="/#topSellings">TOP SELLINGS</a>
        </MenuItems>
        <MenuItems>ABOUT US</MenuItems>
        <DivIcons>
          <img src="/user.svg" alt="" />
          <img src="/alarm.svg" alt="" />
          <img src="/bag.svg" alt="" />
        </DivIcons>
      </ContainerBottom>
    </Wrapper>
  );
};
