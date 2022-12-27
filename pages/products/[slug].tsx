import Image from "next/image";

import React from "react";
import { Params } from "react-router-dom";
import { Context } from "vm";
import { getProducts } from "../../lib/getProducts";

const ProductDetailPage = (props: any) => {
  const { date, description, image, isFeatured, slug, title } = props;

  return (
    <div className="flex justify-center mt-5">
      <Image src={image} width={300} height={300} alt={slug} />
      <div className="mx-3">
        <div>{title}</div>
        <div>{description}</div>
        <div>{date}</div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

export const getStaticProps = async (context: any) => {
  const { params } = context;
  const { slug } = params;

  const detailProduct = await getProducts(slug);

  return { props: detailProduct, revalidate: 600 };
};

export const getStaticPaths = () => {
  return {
    paths: [{ params: { slug: "uranus" } }],
    fallback: "blocking",
  };
};
