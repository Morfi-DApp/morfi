import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/index";

const AuthNav = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="flex flex-col sm:flex-row w-24 sm:w-1/2 justify-end gap-1">
      {!isLoggedIn && (
        <>
          <NavLink
            to="/register"
            className="font-inter font-medium  bg-[#6469ff] text-white  px-1 py-1 border rounded-md  border-transparent"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/login"
            className="font-inter font-medium  bg-[#6469ff] text-white  px-1 py-1 border rounded-md  border-transparent"
          >
            Login
          </NavLink>
        </>
      )}
    </div>
  );
};

export default AuthNav;
