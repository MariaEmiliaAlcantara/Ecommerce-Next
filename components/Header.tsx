import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #577c57;
  color: white;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
`;

const Header = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Header;
