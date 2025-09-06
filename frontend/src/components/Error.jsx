import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PAGE_HEIGHT, PAGE_PADDINGS } from "../app/constants";
import error404 from "../Assets/Error_404.gif";
import { faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className={`${PAGE_HEIGHT}`}>
      <div
        className={`${PAGE_PADDINGS} flex items-center justify-center flex-col h-full w-full`}
      >
        <img src={error404} alt="Error_M" className="w-[200px]" />
        <h1 className="text-5xl m-2">Page not found !</h1>
        <Link
          to={"/"}
          replace={true}
          className="bg-sky-500 hover:bg-sky-400 duration-150 px-2 py-1 text-white text-2xl m-2 rounded-md shadow-md "
        >
          <FontAwesomeIcon icon={faHomeAlt} /> Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
