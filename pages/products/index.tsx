import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProductsWithArray } from "../../lib/getProducts";
import ProductsGrid from "../../components/products/ProductsGrid";
import { GetStaticProps } from "next";
import { ProductsArrayType } from "../../type/products";

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
