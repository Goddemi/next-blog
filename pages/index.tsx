import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Hero from "../components/home-page/Hero";
import FeaturedProduct from "../components/home-page/FeaturedProduct";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductsWithArray } from "../lib/getProducts";

export default function Home(props: any) {
  const productsData = props.productsData;

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

export const getStaticProps = async () => {
  let productsData;

  try {
    productsData = await getProductsWithArray();
  } catch (error) {
    console.log(error);
  }

  return { props: { productsData } };
};
