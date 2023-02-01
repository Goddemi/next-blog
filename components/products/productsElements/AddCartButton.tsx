import { useDispatch } from "react-redux";
import { authModalOn } from "../../../store/auth/authModal";
import { auth } from "../../../lib/auth/auth";
import { putContent } from "../../../lib/cart/putContent";

const AddCartButton = ({
  data,
  setCartRequestResult,
  setPutCartLoading,
}: any) => {
  const dispatch = useDispatch();

  const addCartHandler = async () => {
    const loginUser = auth.currentUser;

    if (!loginUser) {
      dispatch(authModalOn());
      return;
    }
    setPutCartLoading(true);
    const uid = loginUser.uid;
    const reqBody = {
      uid,
      cartData: data,
    };

    const response = await putContent("/api/cart", reqBody);
    if (typeof response === "string") {
      return <div>{response}</div>;
    }
    setPutCartLoading(false);
    setCartRequestResult(response.data);
  };
  return (
    <div className="text-end">
      <button
        className="py-4 px-5 rounded bg-orange-600"
        onClick={addCartHandler}
      >
        장바구니
      </button>
    </div>
  );
};

export default AddCartButton;
