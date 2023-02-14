import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarts } from "../../lib/cart/getCarts";
import ProductsGrid from "../products/ProductsGrid";
import { setDeleteProductState } from "../../store/cart/deleteProduct";
import type { RootState } from "../../store/store";
import { CartType } from "./type/type";
import { CartProductType } from "./type/type";

const CartProducts = ({ user }: { user: string }) => {
  const [newData, setNewData] = useState<CartProductType[]>();
  const dispatch = useDispatch();
  const deleteState = useSelector(
    (state: RootState) => state.deleteProductState.isSuccess
  );

  const getCartsHandler = async () => {
    try {
      const result: CartType = await getCarts(user);

      let arrayData: CartProductType[] = [];
      for (let ele in result) {
        arrayData = [
          ...arrayData,
          { ...(result[ele] as CartProductType), id: ele },
        ];
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
