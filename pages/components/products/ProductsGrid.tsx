import React from "react";
import ProductsItem from "./ProductsItem";

import { ProductsType } from "../../../type/products";

const ProductsGrid = ({ products }: { products: ProductsType[] }) => {
  return (
    <div>
      <ul className="flex justify-between flex-wrap">
        {products.map((product) => (
          <ProductsItem product={product} key={product?.title} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsGrid;
