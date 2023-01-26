import React, { useEffect, useState } from "react";
import { forEachChild } from "typescript";
import { getCarts } from "../../lib/cart/getCarts";

import ProductsGrid from "../products/ProductsGrid";

const CartProducts = ({ user }: any) => {
  const [data, setData] = useState();

  useEffect(() => {
    const getCartsHandler = async () => {
      try {
        const result = await getCarts(user);
        setData(result);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCartsHandler();
  }, [data, user]);

  if (!data) {
    return <div>장바구니가 비었습니다.</div>;
  }

  let newData: any = [];

  for (let ele in data as object) {
    newData = [...newData, { ...(data[ele] as any), id: ele }];
  }

  return (
    <>
      <ProductsGrid products={newData} />
    </>
  );
};

export default CartProducts;