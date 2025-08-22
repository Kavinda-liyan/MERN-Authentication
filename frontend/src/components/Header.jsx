import {
  faBars,
  faClose,
  faCross,
  faSignIn,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [hidBars, setHideBars] = useState(false);

  const handleToggleClick = () => {
    setToggleNavigation((prev) => !prev);
    setHideBars((prev) => !prev);
  };
  const navLinks = (
    <>
      <h3 className="text-white text-[14px] font-semibold hover:text-[13px] hover:cursor-pointer duration-150">
        <FontAwesomeIcon icon={faSignInAlt} className="pr-1" />
        Sign in
      </h3>
      <h3 className="text-white text-[14px] font-semibold hover:text-[13px] hover:cursor-pointer duration-150">
        <FontAwesomeIcon icon={faSignIn} className="pr-1" />
        Sign up
      </h3>
    </>
  );

  return (
    <>
      <nav>
        <div className="w-full h-[50px] bg-cyan-950">
          <div className="w-full h-full pl-10 pr-10 flex items-center justify-between relative">
            <div className="headerLogo text-white">
              <h3 className="text-bold font-semibold text-xl">
                <span className="text-sky-400">MERN</span> Authentication
              </h3>
            </div>
            <div className="Auth flex gap-5 max-md:hidden">{navLinks}</div>
            <div className="max-2xl:hidden max-md:flex items-center">
              <button
                className={`${
                  hidBars ? "hidden" : "flex"
                } font-semibold text-[18px] text-white hover:text-neutral-300
              hover:cursor-pointer duration-150`}
                onClick={handleToggleClick}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <div
              className={`${
                toggleNavigation ? "flex opacity-100 duration-200" : "hidden opacity-0"
              } top-[50px] absolute w-full gap-10 flex-col bg-cyan-950 h-48 z-[100] left-0 items-center justify-center`}
            >
              <div
                className="absolute right-10 top-10 text-white font-semibold 
                hover:text-neutral-300 hover:cursor-pointer duration-150"
              >
                <button onClick={handleToggleClick}>
                  <FontAwesomeIcon icon={faClose} />
                </button>
              </div>
              {navLinks}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
