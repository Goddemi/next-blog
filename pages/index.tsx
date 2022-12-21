import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Hero from "./components/home-page/Hero";
import FeaturedProduct from "./components/home-page/FeaturedProduct";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

const DUMMY_PRODUCTS = [
  {
    slug: "space-shopping-rhea",
    title: "RHEA",
    image:
      "https://res.cloudinary.com/dhfmls9fs/image/upload/v1671507955/space/rhea_kixj0w.jpg",
    date: "1000-02-10",
    description: "Saturn V",
  },
];

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
