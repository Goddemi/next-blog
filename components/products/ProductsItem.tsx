import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ProductType } from "../../type/products";

const ProductsItem = ({ product }: { product: ProductType }) => {
  const { slug, title, image, date, user } = product;
  const router = useRouter();
  const pathName = router.pathname;

  const formattedDate = new Date(date).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const linkPath = `/products/${slug}`;

  //mypage 에서 확인할 때.
  const deleteCartHandler = (e: any) => {
    e.preventDefault();
    const clickedProductId = e.target.parentElement.id;
    axios.delete("/api/cart", {
      data: {
        user,
        productId: clickedProductId,
      },
    });
  };

  return (
    <li className="mx-4 my-10">
      <Link href={linkPath}>
        <div>
          <Image src={image} alt={title} width={300} height={300} />
        </div>
        <div id={product.id} className="flex justify-between">
          <div>
            {" "}
            <h3>{title}</h3>
            <time>{formattedDate}</time>
          </div>
          {pathName === "/mypage" && (
            <button
              className="bg-gray-500 px-3 rounded"
              onClick={deleteCartHandler}
            >
              삭제
            </button>
          )}
        </div>
      </Link>
    </li>
  );
};

export default ProductsItem;
