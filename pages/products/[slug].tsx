import Image from "next/image";
import React from "react";
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

  console.log(detailProduct);

  return { props: detailProduct, revalidate: 600 };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "mercury" } }],
    fallback: "blocking",
  };
};
