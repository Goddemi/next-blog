import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  findPasswordRequest,
  passwordRecheckRequest,
  withdrawal,
} from "../../lib/auth/auth";
import { loggedOut } from "../../store/auth/loginOut";
import InputForm from "../auth/formElements/InputForm";
import { useRouter } from "next/router";
import { User } from "firebase/auth";
interface Props {
  user: User;
  setRecheckPasswordResult: React.Dispatch<
    React.SetStateAction<undefined | string>
  >;
}

const PersonalInfoChange = ({ user, setRecheckPasswordResult }: Props) => {
  const recheckPasswordRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const router = useRouter();

  const recheckPasswordHandler = async () => {
    const recheckPassword = recheckPasswordRef.current?.value;
    const response = await passwordRecheckRequest(user, recheckPassword);

    setRecheckPasswordResult(response);

    return response;
  };

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

  const passwordChangeHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const response = await recheckPasswordHandler();

    if (response === "성공") {
      findPasswordRequest(user);
    }
  };

  return (
    <div className="my-10">
      <span className="text-lg font-bold">개인정보 </span>
      <form className="flex justify-center items-center my-5">
        <div className="flex items-center p-2 bg-white text-black">
          <InputForm
            label={"비밀번호 재확인"}
            id={"password"}
            ref={recheckPasswordRef}
          />
        </div>

        <button
          className="ml-5 p-2.5  bg-orange-500"
          onClick={passwordChangeHandler}
        >
          비밀번호 변경 <br />
          <span className="text-sm">(이메일로 변경 링크 전송)</span>
        </button>

        <button className="ml-5 p-5 bg-cyan-500" onClick={userDeleteHandler}>
          회원탈퇴
        </button>
      </form>
    </div>
  );
};

export default PersonalInfoChange;
