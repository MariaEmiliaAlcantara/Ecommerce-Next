import Link from "next/link";
import styled from "styled-components";
import { IProduct } from "../pages";

const ListItem = styled.li`
  background-color: white;
  border: 2px solid #8ba58b;
  border-radius: 10px;
  padding: 30px;
  width: 280px;
  height: 280px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Title = styled.div`
  height: 80px;
  font-size: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-top: 20px;
`;

const Rate = styled.div`
  margin-top: 10px;
`;

const Card = ({ product }) => {
  return (
    <ListItem>
      <Link href={`/products/${product.id}`}>
        <a>
          <ImageContainer>
            <Image src={product.image} />
          </ImageContainer>
          <Title>{product.title}</Title>
          <Rate>
            <strong>Rate:</strong> {product.rating.rate}
          </Rate>
        </a>
      </Link>
    </ListItem>
  );
};

export default Card;
