import { useDispatch } from "react-redux";
import { logOut } from "../redux/auth/operations";
import { useAuth } from "../hooks/index";

import { logout } from "../assets";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div
      className="w-full flex justify-end
    items-center bg-white  "
    >
      <p className="mr-2">Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        <img src={logout} alt="logo" className="w-6 object-contain" />
      </button>
    </div>
  );
};

export default UserMenu;
