import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProductsWithArray } from "../../lib/getProducts";
import ProductsGrid from "../components/products/ProductsGrid";

const AllProductsPage = (props: any) => {
  const productsData = props.productsData;

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

export const getStaticProps = async () => {
  let productsData;

  try {
    productsData = await getProductsWithArray();
  } catch (error) {
    console.log(error);
  }

  return { props: { productsData } };
};
