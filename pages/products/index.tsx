import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProductsWithArray } from "../../lib/getProducts";
import ProductsGrid from "../../components/products/ProductsGrid";
import { GetStaticProps } from "next";
import { ProductsArrayType } from "../../type/products";
import Head from "next/head";

const AllProductsPage = ({
  productsData,
}: {
  productsData: ProductsArrayType;
}) => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsWithArray,
    initialData: productsData,
  });

  return (
    <>
      <Head>
        <title>Products</title>
        <meta
          name="description"
          content="all planet products with next js practice"
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="text-6xl text-center">All products</div>
      <ProductsGrid products={data} />
    </>
  );
};

export default AllProductsPage;

export const getStaticProps: GetStaticProps = async () => {
  let productsData;

  try {
    productsData = await getProductsWithArray();
  } catch (error) {
    console.log(error);
  }

  return { props: { productsData } };
};
