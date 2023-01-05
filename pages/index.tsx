import Head from "next/head";
import Hero from "../components/home-page/Hero";
import FeaturedProduct from "../components/home-page/FeaturedProduct";
import { useQuery } from "@tanstack/react-query";
import { getProductsWithArray } from "../lib/getProducts";
import { GetStaticProps } from "next";
import { ProductsArrayType } from "../type/products";

export default function Home({
  productsData,
}: {
  productsData: ProductsArrayType;
}) {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsWithArray,
    initialData: productsData,
  });

  return (
    <>
      <Head>
        <title>planet shop</title>
        <meta name="description" content="next.js practice project" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <FeaturedProduct products={data} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let productsData;

  try {
    productsData = await getProductsWithArray();
  } catch (error) {
    console.log(error);
  }

  return { props: { productsData } };
};
