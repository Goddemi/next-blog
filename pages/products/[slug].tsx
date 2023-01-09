import Image from "next/image";
import React from "react";
import { getProducts } from "../../lib/getProducts";
import { GetStaticProps, GetStaticPaths } from "next";
import { ProductType } from "../../type/products";
import Head from "next/head";
const ProductDetailPage = (props: ProductType) => {
  const { date, description, image, isFeatured, slug, title } = props;

  return (
    <div className="flex justify-center mt-5">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={`planet detail page for ${title}`}
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { params } = context;
  const { slug } = params;

  const detailProduct = await getProducts(slug);

  return { props: detailProduct, revalidate: 600 };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "mercury" } }],
    fallback: "blocking",
  };
};
