import React from "react";
import ProductsGrid from "../products/ProductsGrid";

import { ProductsType } from "../../../type/products";

const FeaturedProduct = ({ products }: { products: ProductsType[] }) => {
  return (
    <div>
      <ProductsGrid products={products} />
    </div>
  );
};

export default FeaturedProduct;
