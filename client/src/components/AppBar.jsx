import { Navigation } from "../components/Navigation/Navigation";
import { UserMenu, AuthNav } from "../components/index";
import { useAuth } from "../hooks/index";

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="w-full flex justify-between items-center bg-white  ">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
