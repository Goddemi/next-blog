import React from "react";
import ProductsGrid from "../products/ProductsGrid";

import { ProductsArrayType } from "../../type/products";

const FeaturedProduct = ({ products }: { products: ProductsArrayType }) => {
  const FeaturedProducts = products.filter((product) => product.isFeatured);

  return (
    <div className="flex">
      <ProductsGrid products={FeaturedProducts} />
    </div>
  );
};

export default FeaturedProduct;
