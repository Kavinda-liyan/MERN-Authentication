import {
  faBars,
  faClose,
  faSignIn,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, Links } from "react-router-dom";

const Header = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false);

  const handleToggleClick = () => {
    setToggleNavigation((prev) => !prev);
  };
  const navLinks = (
    <>
      <Link to={"/login"}>
        <h3 className="text-white text-[14px] font-semibold hover:text-neutral-300 hover:cursor-pointer duration-150">
          <FontAwesomeIcon icon={faSignInAlt} className="pr-1" />
          Sign in
        </h3>
      </Link>
      <Link to={"/register"}>
        <h3 className="text-white text-[14px] font-semibold hover:text-neutral-300 hover:cursor-pointer duration-150">
          <FontAwesomeIcon icon={faSignIn} className="pr-1" />
          Sign up
        </h3>
      </Link>
    </>
  );

  return (
    <>
      <nav>
        <div className="w-full h-[50px] bg-cyan-950">
          <div className="max-2xl:pl-[60px] max-2xl:pr-[60px] max-md:pl-[10px] max-md:pr-[10px] w-full h-full flex items-center justify-between relative">
            <Link to={"/"}>
              <div className="headerLogo text-white">
                <h3 className="text-bold font-semibold text-xl">
                  <span className="text-sky-400">MERN</span> Authentication
                </h3>
              </div>
            </Link>
            <div className="Auth flex gap-5 max-md:hidden">{navLinks}</div>
            <div className="max-2xl:hidden max-md:flex items-center">
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
