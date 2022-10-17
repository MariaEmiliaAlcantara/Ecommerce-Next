import Link from "next/link";
import styled from "styled-components";
import { IProduct } from "../../pages";

const ListItem = styled.li`
  width: 320px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  height: 360px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f3f3f3;
`;

const Image = styled.img`
  width: 200px;
  height: 180px;
`;

const TitleContainer = styled.div`
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  width: 90%;

  display: flex;
  text-align: center;
  align-items: center;

  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
`;

const Card: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <ListItem>
      <Link href={`/products/${product.id}`}>
        <a>
          <ImageContainer>
            <Image src={product.image} />
          </ImageContainer>
          <TitleContainer>
            <Title>{product.title.toUpperCase()}</Title>
          </TitleContainer>
        </a>
      </Link>
    </ListItem>
  );
};

export default Card;
