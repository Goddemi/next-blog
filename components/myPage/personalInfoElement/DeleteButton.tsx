import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { withdrawal } from "../../../lib/auth/auth";
import { loggedOut } from "../../../store/auth/loginOut";
import { InfoChangeType } from "../type/type";

const DeleteButton = ({ user, recheckPasswordHandler }: InfoChangeType) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const userDeleteHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (confirm("정말 삭제하시겠습니까?") === true) {
      const response = await recheckPasswordHandler();

      if (response === "성공") {
        withdrawal(user);
        dispatch(loggedOut());
        router.push("/");
      }
    }
  };

  return (
    <button className="ml-5 p-5 bg-cyan-500" onClick={userDeleteHandler}>
      회원탈퇴
    </button>
  );
};

export default DeleteButton;
