import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";

import { logo, add } from "../../assets";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav
      className="w-full flex gap-2
    items-center bg-white   "
    >
      <NavLink to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </NavLink>
      <NavLink to="/create-post">
        <img src={add} alt="logo" className="w-6 object-contain" />
      </NavLink>
     
    </nav>
  );
};
