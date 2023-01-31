import { useEffect, useState } from "react";
import { getCarts } from "../../lib/cart/getCarts";

import ProductsGrid from "../products/ProductsGrid";

const CartProducts = ({ user }: any) => {
  const [data, setData] = useState();

  useEffect(() => {
    const getCartsHandler = async () => {
      try {
        const result = await getCarts(user);
        setData(result);
      } catch (error) {
        return <div>장바구니 데이터 get 에러</div>;
      }
    };

    getCartsHandler();
  }, [data, user]);

  if (!data) {
    return <div className="text-white">장바구니가 비었습니다.</div>;
  }

  let newData: any = [];

  for (let ele in data as object) {
    newData = [...newData, { ...(data[ele] as object), id: ele }];
  }

  return (
    <>
      <ProductsGrid products={newData} />
    </>
  );
};

export default CartProducts;
