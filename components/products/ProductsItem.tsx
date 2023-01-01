import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ProductType } from "../../type/products";

const ProductsItem = ({ product }: { product: ProductType }) => {
  const { slug, title, image, date, description } = product;

  const formattedDate = new Date(date).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const linkPath = `/products/${slug}`;

  return (
    <li className="mx-4">
      <Link href={linkPath}>
        <div>
          <Image src={image} alt={title} width={300} height={300} />
        </div>
        <div>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default ProductsItem;