import React from "react";
import ProductsItem from "./ProductsItem";

import { ProductsArrayType } from "../../../type/products";

const ProductsGrid = ({ products }: { products: ProductsArrayType }) => {
  return (
    <div>
      <ul className="flex justify-between flex-wrap mt-5">
        {products.map((product) => (
          <ProductsItem product={product} key={product?.title} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsGrid;
