import type { NextPage } from "next";
import styled from "styled-components";
import Card from "../components/Card";
import { Navbar } from "../components/Navbar/Navbar";
import React from "react";
import { Header } from "../components/Header/Header";

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

export interface IISRProps {
  props: {
    products: IProduct[];
  };
  revalidate: number;
}

const WrapperPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding: 20px;
`;

export async function getStaticProps(): Promise<IISRProps> {
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
    <WrapperPage>
      <Navbar />
      <Header />
      <List>
        {products &&
          products
            .sort((a, b) => b.rating.rate - a.rating.rate)
            .map((product: IProduct) => (
              <Card product={product} key={product.id} />
            ))}
      </List>
    </WrapperPage>
  );
};

export default Products;
