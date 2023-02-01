import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getCarts } from "../../lib/cart/getCarts";
import ProductsGrid from "../products/ProductsGrid";
import type { RootState } from "../../store/store";

const CartProducts = ({ user }: any) => {
  const [newData, setNewData] = useState();
  const deleteId = useSelector((state: RootState) => state.deleteId.id);

  const getCartsHandler = async () => {
    try {
      const result = await getCarts(user);

      let arrayData: any = [];
      for (let ele in result as any) {
        arrayData = [...arrayData, { ...(result[ele] as any), id: ele }];
      }

      setNewData(arrayData);
    } catch (error) {
      return <div>장바구니 데이터 get 에러</div>;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getCartsHandler();
    }, 500);
  }, [deleteId, user]);

  if (!newData || !newData[0]) {
    return <div className="text-white">장바구니가 비었습니다.</div>;
  }

  return (
    <>
      <ProductsGrid products={newData} />
    </>
  );
};

export default CartProducts;
