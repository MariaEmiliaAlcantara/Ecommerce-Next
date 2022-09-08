import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import { IProduct } from "..";
import Header from "../../components/Header";
import useSWR from "swr";
import Link from "next/link";

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
  if (!data) return <Div>loading...</Div>;

  let productSWRFiltered: IProduct = data.filter(
    (product: IProduct) => product.id === Number(id)
  );

  return (
    <Div>
      <strong>Price: </strong>${productSWRFiltered[0].price.toFixed(2)}
    </Div>
  );
}

const WrapperMain = styled.div`
  height: 80vh;
  padding: 5vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PhotoContainer = styled.div`
  width: 35vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageProduct = styled.img`
  width: 80%;
  height: 80%;
`;

const InformationContainer = styled.div`
  width: 65vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Div = styled.div`
  text-align: center;
  width: 80%;
`;

const PriceRateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Product = (props: any) => {
  const router = useRouter();
  const { id } = router.query;
  const productSWRFiltered = PriceSWR(id);
  const productsSSG = props.products;

  return (
    <>
      <Header>
        <Link href={"/"}>
          <a>
            <h1>E-commerce</h1>
          </a>
        </Link>
      </Header>
      <WrapperMain>
        <PhotoContainer>
          <ImageProduct src={productsSSG.image} />
        </PhotoContainer>
        <InformationContainer>
          <Div>
            <strong>{productsSSG.title}</strong>
          </Div>
          <Div>{productsSSG.description}</Div>
          <PriceRateContainer>
            {productSWRFiltered}
            <Div>
              <strong>Rate:</strong> {productsSSG.rating.rate}
            </Div>
          </PriceRateContainer>
        </InformationContainer>
      </WrapperMain>
    </>
  );
};

export default Product;
