import Image from "next/image";
import { getProducts } from "../../lib/getProducts";
import { GetStaticProps, GetStaticPaths } from "next";
import { ProductType } from "../../type/products";
import Head from "next/head";

import type { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../store/login-slice";

const ProductDetailPage = (props: ProductType) => {
  const { date, description, image, slug, title } = props;

  const loginState = useSelector((state: RootState) => state.login.active);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center mt-5">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={`planet detail page for ${title}`}
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Image src={image} width={300} height={300} alt={slug} />
      <div className="relative mx-20 mt-20 max-w-md">
        <div>{title}</div>
        <div>{date}</div>
        <div className="mt-5">{description}</div>
        <button
          className="absolute right-5 py-4 px-5 rounded bg-orange-600"
          onClick={() => dispatch(change())}
        >
          장바구니
        </button>
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
