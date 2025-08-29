import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full h-full  flex items-center justify-center">
      <div className="w-[80%] h-auto shadow-md border-[1.5px] rounded-md border-neutral-300/70 bg-neutral-100">
        <h1 className="text-center my-[20px] font-semibold text-2xl">
          MERN Authentication
        </h1>
        <p className="my-[15px] text-center">
          This is my MERN Authentication project that use JWT and HTTP-Only
          cookies.
        </p>
        <div className="text-center flex justify-center items-center gap-5 my-[20px] text-white text-sm font-semibold">
          <Link to={"/login"}>
            <button className="bg-blue-600  py-1 px-2 rounded-sm hover:bg-blue-500 hover:cursor-pointer duration-150 shadow-md ">
              Sign In
            </button>
          </Link>
          <Link to={"/register"}>
            <button className="bg-neutral-600  py-1 px-2 rounded-sm hover:bg-neutral-500 hover:cursor-pointer duration-150 shadow-md">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
