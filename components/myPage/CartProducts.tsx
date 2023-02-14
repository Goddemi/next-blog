import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarts } from "../../lib/cart/getCarts";
import ProductsGrid from "../products/ProductsGrid";
import type { RootState } from "../../store/store";
import { setDeleteProductState } from "../../store/cart/deleteProduct";

const CartProducts = ({ user }: any) => {
  const [newData, setNewData] = useState();
  const dispatch = useDispatch();
  const deleteState = useSelector(
    (state: RootState) => state.deleteProductState.isSuccess
  );

  const getCartsHandler = async () => {
    try {
      const result = await getCarts(user);

      let arrayData: any = [];
      for (let ele in result as any) {
        arrayData = [...arrayData, { ...(result[ele] as any), id: ele }];
      }

      setNewData(arrayData);
      dispatch(setDeleteProductState(false));
    } catch (error) {
      return <div>장바구니 데이터 get 에러</div>;
    }
  };

  useEffect(() => {
    getCartsHandler();
  }, [deleteState, user]);

  if (!newData || !newData[0]) {
    return <div className="text-white">장바구니가 비었습니다.</div>;
  }

  return (
    <div className="my-5">
      <ProductsGrid products={newData} />
    </div>
  );
};

export default CartProducts;
