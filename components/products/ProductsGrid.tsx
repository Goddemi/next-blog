import ProductsItem from "./ProductsItem";

import { ProductsArrayType } from "../../type/products";

const ProductsGrid = ({ products }: { products: ProductsArrayType }) => {
  return (
    <div>
      <ul className="flex justify-between flex-wrap my-10">
        {products.map((product) => (
          <ProductsItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsGrid;
