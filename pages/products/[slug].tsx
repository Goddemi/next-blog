import Image from "next/image";
import { getProducts } from "../../lib/products/getProducts";
import { GetStaticProps, GetStaticPaths } from "next";
import { ProductType } from "../../type/products";
import Head from "next/head";

import { useDispatch } from "react-redux";
import { authModalOn } from "../../store/auth/authModal";
import { auth } from "../../lib/auth/auth";
import { putContent } from "../../lib/cart/putContent";

const ProductDetailPage = (props: ProductType) => {
  const { date, description, image, slug, title } = props;

  const dispatch = useDispatch();

  const addCartHandler = () => {
    const loginUser = auth.currentUser;

    if (!loginUser) {
      dispatch(authModalOn());
      return;
    }

    const uid = loginUser.uid;
    const reqBody = {
      uid,
      cartData: props,
    };

    putContent("/api/cart", reqBody).then((res) => console.log(res));
    //장바구니 담기 성공 ! 혹은 실패 ! 해야함
  };

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
        <span>{title}</span>
        <span className="block">{date}</span>
        <div className="mt-5">{description}</div>
        <button
          className="absolute right-5 py-4 px-5 rounded bg-orange-600"
          onClick={addCartHandler}
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
