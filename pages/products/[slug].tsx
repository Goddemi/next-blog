import { useState } from "react";
import { getProducts } from "../../lib/products/getProducts";
import Head from "next/head";
import Image from "next/image";
import AddCartButton from "../../components/products/productsElements/AddCartButton";
import Notification from "../../components/notification/Notification";
import { ProductType } from "../../type/products";
import { GetStaticProps, GetStaticPaths } from "next";

const ProductDetailPage = (props: ProductType) => {
  const { date, description, image, slug, title } = props;
  const [cartRequestResult, setCartRequestResult] = useState<any>();

  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <Head>
          <title>{title}</title>
          <meta
            name="description"
            content={`planet detail page for ${title}`}
          ></meta>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <Image src={image} width={300} height={300} alt={slug} />

        <div className="mx-20 mt-20 max-w-md">
          <div>
            {" "}
            <span>{title}</span>
            <span className="block">{date}</span>
            <div className="mt-5">{description}</div>
          </div>
          <AddCartButton
            data={props}
            setCartRequestResult={setCartRequestResult}
          />
        </div>
      </div>
      <div className="flex justify-center">
        {cartRequestResult && (
          <Notification id="cart" result={cartRequestResult} />
        )}
        {cartRequestResult === "성공" && (
          <span className="ml-3 text-green-400">
            mypage에서 항목을 확인해 주세요~
          </span>
        )}
      </div>
    </>
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
