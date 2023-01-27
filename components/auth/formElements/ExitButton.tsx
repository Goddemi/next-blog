import { useDispatch } from "react-redux";
import { authModalOff } from "../../../store/auth/authModal";

const ExitButton = () => {
  const dispatch = useDispatch();
  return (
    <span
      className="absolute top-2 right-3 text-gray-400 cursor-pointer"
      onClick={() => dispatch(authModalOff())}
    >
      ✕
    </span>
  );
};

export default ExitButton;
