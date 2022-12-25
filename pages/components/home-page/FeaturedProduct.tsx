import React from "react";
import ProductsGrid from "../products/ProductsGrid";

import { ProductsType } from "../../../type/products";

const FeaturedProduct = ({ products }: { products: ProductsType[] }) => {
  console.log(products);
  const FeaturedProducts = products.filter((product) => product.isFeatured);

  return (
    <div className="flex">
      <ProductsGrid products={FeaturedProducts} />
    </div>
  );
};

export default FeaturedProduct;
