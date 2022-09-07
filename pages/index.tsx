import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IStaticProps {
  props: {
    products: IProduct[];
  };
  revalidate: number;
}

const Header = styled.div`
  background-color: #577c57;
  color: white;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
`;

const List = styled.ul`
  list-style: none;
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  background-color: green;
  width: 200px;
  height: 250px;
  margin-top: 20px;
`;

export async function getStaticProps(): Promise<IStaticProps> {
  const products: IProduct[] = await fetch(
    "https://fakestoreapi.com/products/category/electronics?sort=asc"
  ).then((res) => res.json());

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}

const Products: NextPage = (props: any) => {
  const products: IProduct[] = props.products;

  return (
    <div>
      <Header>
        <h1>E-commerce</h1>
      </Header>
      <List>
        {products.map((product: IProduct) => {
          return (
            <ListItem key={product.id}>
              <Link href={`/products/${product.id}`}>
                <a>{product.title}</a>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Products;
