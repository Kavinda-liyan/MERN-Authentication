import {
  faBars,
  faCaretDown,
  faCaretUp,
  faClose,
  faSignIn,
  faSignInAlt,
  faSignOutAlt,
  faUserAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../app/api/usersApiSlice";
import { logout } from "../app/features/auth/authSlice";
import List from "./Components/List";
import { PAGE_PADDINGS } from "../app/constants";

const Header = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropDownRef = useRef(null);

  const [logoutApiCall] = useLogoutMutation();

  const handleToggleClick = () => {
    setToggleNavigation((prev) => !prev);
  };
  const handleDropdown = () => {
    setToggleDropdown((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const authProfile = (
    <>
      <List>
        <Link to={"/profile"}>
          <FontAwesomeIcon icon={faUserAlt} className="pr-1" />
          Profile
        </Link>
      </List>

      <List>
        <button onClick={handleLogout} className="hover:cursor-pointer">
          <FontAwesomeIcon icon={faSignOutAlt} className="pr-1" />
          Sign out
        </button>
      </List>
    </>
  );

  const authLinks = (
    <>
      <List>
        <Link to={"/login"}>
          <FontAwesomeIcon icon={faSignInAlt} className="pr-1" />
          Sign in
        </Link>
      </List>
      <List>
        <Link to={"/register"}>
          <FontAwesomeIcon icon={faSignIn} className="pr-1" />
          Sign up
        </Link>
      </List>
    </>
  );

  const navLinks = userInfo ? (
    <>
      <button
        onClick={handleDropdown}
        aria-haspopup="true"
        aria-expanded={toggleDropdown}
        className="text-sm font-semibold text-white hover:cursor-pointer hover:text-neutral-300"
      >
        {userInfo.name}
        {toggleDropdown ? (
          <FontAwesomeIcon icon={faCaretUp} className="pl-1" />
        ) : (
          <FontAwesomeIcon icon={faCaretDown} className="pl-1" />
        )}
      </button>
      {toggleDropdown && (
        <ul
          className="absolute top-10 right-10 bg-cyan-900  rounded-md shadow-md"
          ref={dropDownRef}
        >
          {userInfo.isAdmin ? (
            <>
              <List>
                <Link to={"/profile"}>
                  <FontAwesomeIcon icon={faUserAlt} className="pr-1" />
                  Profile
                </Link>
              </List>

              <List>
                <FontAwesomeIcon icon={faUsers} className="pr-1" />
                <Link to={"/users"}>All Users</Link>
              </List>

              <List>
                <button onClick={handleLogout} className="hover:cursor-pointer">
                  <FontAwesomeIcon icon={faSignOutAlt} className="pr-1" />
                  Sign out
                </button>
              </List>
            </>
          ) : (
            <>{authProfile}</>
          )}
        </ul>
      )}
    </>
  ) : (
    <>
      <button
        onClick={handleDropdown}
        className="text-sm font-semibold text-white hover:cursor-pointer hover:text-neutral-300"
      >
        Sign in
        {toggleDropdown ? (
          <FontAwesomeIcon icon={faCaretUp} className="pl-1" />
        ) : (
          <FontAwesomeIcon icon={faCaretDown} className="pl-1" />
        )}
      </button>
      {toggleDropdown && (
        <ul className="absolute top-10 right-10 bg-cyan-900 p-2 rounded-md ">
          {authLinks}
        </ul>
      )}
    </>
  );

  return (
    <>
      <nav>
        <div className="w-full h-[50px] bg-cyan-950">
          <div
            className={`w-full h-full flex items-center justify-between relative ${PAGE_PADDINGS}`}
          >
            <Link to={"/"}>
              <div className="headerLogo text-white">
                <h3 className="text-bold font-semibold text-xl">
                  <span className="text-sky-400">MERN</span> Authentication
                </h3>
              </div>
            </Link>
            <div className="Auth flex gap-5 max-md:hidden">{navLinks}</div>
            <div className=" max-[2160px]:hidden max-md:flex items-center">
              {!toggleNavigation && (
                <button
                  aria-label="Open menu"
                  className="z-[51] font-semibold text-[18px] text-white hover:text-neutral-300 duration-150"
                  onClick={handleToggleClick}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              )}
              {toggleNavigation && (
                <button
                  aria-label="Close menu"
                  className="z-[51]  font-semibold text-[18px] text-white hover:text-neutral-300 duration-150"
                  onClick={handleToggleClick}
                >
                  <FontAwesomeIcon icon={faClose} />
                </button>
              )}
            </div>
            <div
              className={`${
                toggleNavigation
                  ? "scale-y-100 opacity-100"
                  : "scale-y-0 opacity-0 pointer-events-none"
              } top-[0px] absolute w-full gap-10 flex flex-col bg-cyan-950 h-[100vh] z-[50] left-0 items-center justify-center transform transition-all duration-300 origin-top `}
            >
              {navLinks}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
