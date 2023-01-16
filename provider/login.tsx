import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

const LoginProvider = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default LoginProvider;
