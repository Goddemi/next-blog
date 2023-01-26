import React, { useEffect, useState } from "react";
import { forEachChild } from "typescript";
import { getCarts } from "../../lib/cart/getCarts";

import ProductsGrid from "../products/ProductsGrid";

const CartProducts = ({ user }: any) => {
  const [data, setData] = useState();

  const getCartsHandler = () => {
    getCarts(user)
      .then((result) => setData(result))
      .catch((error) => console.log(error))
      .finally(() => console.log(data));
  };

  useEffect(() => {
    getCartsHandler();
  }, []);

  if (!data) {
    return <div>장바구니가 비었습니다.</div>;
  }

  let newData: any = [];

  for (let ele in data as any) {
    newData = [...newData, data[ele]];
  }

  return (
    <>
      <ProductsGrid products={newData} />
    </>
  );
};

export default CartProducts;

//get 해서 정보를 가져온다.
//매핑한다.
