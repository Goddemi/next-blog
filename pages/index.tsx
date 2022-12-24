import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Hero from "./components/home-page/Hero";
import FeaturedProduct from "./components/home-page/FeaturedProduct";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
  const productsData = props.productsData;

  return (
    <>
      <Hero />
      <FeaturedProduct products={productsData} />
      <div className="text-3xl font-bold underline">hi</div>
    </>
  );
}

export const getStaticProps = async () => {
  let productsData;

  try {
    const response = await axios(
      "https://youneedverse-e9492-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    );

    productsData = await response.data;
  } catch (error) {
    console.log(error);
  }

  return { props: { productsData } };
};
