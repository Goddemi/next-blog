import ProductsGrid from "../products/ProductsGrid";

import { ProductsArrayType } from "../../type/products";

const FeaturedProduct = ({ products }: { products: ProductsArrayType }) => {
  const FeaturedProducts = products.filter((product) => product.isFeatured);

  return (
    <div className="flex justify-center">
      <ProductsGrid products={FeaturedProducts} />
    </div>
  );
};

export default FeaturedProduct;
