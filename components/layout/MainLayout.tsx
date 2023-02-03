import Nav from "../nav/Nav";
import AuthModal from "../auth/Auth";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const MainLayout = (props: React.PropsWithChildren) => {
  const authModalOpen = useSelector((state: RootState) => state.auth.isOpen);

  return (
    <>
      {authModalOpen && <AuthModal />}
      <Nav />
      <main>{props.children}</main>
    </>
  );
};

export default MainLayout;
