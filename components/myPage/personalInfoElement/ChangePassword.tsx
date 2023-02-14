import { findPasswordRequest } from "../../../lib/auth/auth";
import { InfoChangeType } from "../type/type";

const ChangePassword = ({ user, recheckPasswordHandler }: InfoChangeType) => {
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
    <button
      className="ml-5 p-2.5  bg-orange-500"
      onClick={passwordChangeHandler}
    >
      비밀번호 변경 <br />
      <span className="text-sm">(이메일로 변경 링크 전송)</span>
    </button>
  );
};

export default ChangePassword;
