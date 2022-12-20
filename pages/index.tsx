import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Hero from "./components/home-page/Hero";
import FeaturedProduct from "./components/home-page/FeaturedProduct";

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

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProduct products={DUMMY_PRODUCTS} />
      <div className="text-3xl font-bold underline">hi</div>
    </>
  );
}
