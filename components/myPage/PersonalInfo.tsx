import React, { useRef, useState } from "react";
import { passwordRecheckRequest } from "../../lib/auth/auth";
import InputForm from "../auth/formElements/InputForm";
import ChangePassword from "./personalInfoElement/ChangePassword";
import DeleteButton from "./personalInfoElement/DeleteButton";
import Notification from "../notification/Notification";
import { User } from "firebase/auth";
interface Props {
  user: User;
}

const PersonalInfoChange = ({ user }: Props) => {
  const recheckPasswordRef = useRef<HTMLInputElement>(null);

  const [recheckPasswordResult, setRecheckPasswordResult] = useState<
    undefined | string
  >();

  const recheckPasswordHandler = async () => {
    const recheckPassword = recheckPasswordRef.current?.value;
    const response = await passwordRecheckRequest(user, recheckPassword);
    setRecheckPasswordResult(response);
    return response;
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
        <ChangePassword
          user={user}
          recheckPasswordHandler={recheckPasswordHandler}
        />
        <DeleteButton
          user={user}
          recheckPasswordHandler={recheckPasswordHandler}
        />
      </form>
      {recheckPasswordResult && (
        <Notification id="recheckPassword" result={recheckPasswordResult} />
      )}
    </div>
  );
};

export default React.memo(PersonalInfoChange);
