import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import { IProduct } from "..";
import { Navbar } from "../../components/Navbar/Navbar";
import useSWR from "swr";
import Link from "next/link";
import { Footer } from "../../components/Footer/Footer";

export interface IStaticProps {
  props: {
    products: IProduct[];
  };
}

export interface IStaticPaths {
  paths: {
    params: {
      id: string;
    };
  }[];
  fallback: boolean;
}

export async function getStaticPaths(): Promise<IStaticPaths> {
  const products: IProduct[] = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
  ).then((res) => res.json());

  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }): Promise<IStaticProps> {
  const products: IProduct[] = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  ).then((res) => res.json());

  return {
    props: {
      products,
    },
  };
}

function PriceSWR(id: string | string[]) {
  const address = `https://fakestoreapi.com/products/category/electronics`;
  const fetcher = async (url) => await fetch(url).then((res) => res.json());
  const { data, error } = useSWR(address, fetcher, { refreshInterval: 5000 });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  let productSWRFiltered: IProduct = data.filter(
    (product: IProduct) => product.id === Number(id)
  );

  return <span>${productSWRFiltered[0].price.toFixed(2)}</span>;
}

const Wrapper = styled.div``;

const MainContainer = styled.main`
  height: calc(100vh - 160px - 15vh);
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 32px;
`;

const ImageContainer = styled.div`
  width: 50vw;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ImageBackground = styled.div`
  height: 60vh;
  width: 30vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f3f3f3;
`;

const ImageProduct = styled.img`
  width: 70%;
  height: 70%;
`;

const InformationContainer = styled.div`
  width: 60vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.div`
  width: 80%;

  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  text-align: justify;
`;

const Price = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #e2342d;
  margin: 15px 0;
`;

const Description = styled.div`
  width: 80%;

  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  text-align: justify;
`;

const Rate = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 16px;
  margin: 15px 0;
`;

const Addcart = styled.button`
  width: 80%;
  height: 8vh;
  background-color: #004197;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: white;
  border: none;
  cursor: pointer;
`;

const Product = (props: any) => {
  const router = useRouter();
  const { id } = router.query;
  const productSWRFiltered = PriceSWR(id);
  const productsSSG = props.products;

  return (
    <Wrapper>
      <Navbar />
      <MainContainer>
        <ImageContainer>
          <ImageBackground>
            <ImageProduct src={productsSSG.image} />
          </ImageBackground>
        </ImageContainer>
        <InformationContainer>
          <Title>{productsSSG.title.toUpperCase()}</Title>
          <Price>{productSWRFiltered}</Price>
          <Description>{productsSSG.description}</Description>
          <Rate>Rate: {productsSSG.rating.rate}</Rate>
          <Addcart>ADD TO CART</Addcart>
        </InformationContainer>
      </MainContainer>
      <Footer />
    </Wrapper>
  );
};

export default Product;
