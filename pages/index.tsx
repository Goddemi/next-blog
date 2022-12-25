import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Hero from "./components/home-page/Hero";
import FeaturedProduct from "./components/home-page/FeaturedProduct";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../utils/getProducts";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
  const productsData = props.productsData;

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    initialData: productsData,
  });

  return (
    <>
      <Hero />
      <FeaturedProduct products={data} />
      <div className="text-3xl font-bold underline">hi</div>
    </>
  );
}

export const getStaticProps = async () => {
  let productsData;

  try {
    productsData = await getProducts();
  } catch (error) {
    console.log(error);
  }

  return { props: { productsData } };
};
