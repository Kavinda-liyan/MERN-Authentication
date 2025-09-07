import {
  faCheckCircle,
  faTimes,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Confirm = ({ varient, fn, message }) => {
  const [toggleModel, setToggleModel] = useState(false);

  const renderIcon = (varient) => {
    switch (varient) {
      case "warning":
        return <FontAwesomeIcon icon={faWarning} />;
      case "confirm":
        return <FontAwesomeIcon icon={faCheckCircle} />;
    }
  };
  return (
    <div
      
      className={`absolute h-full  w-full z-10 flex justify-center items-center bg-gray-500/50 ${
        toggleModel ? "hidden" : ""
      }`}
    >
      <div className=" bg-white h-[40%] w-[30%] flex flex-col rounded-sm shadow-md">
        <div className="w-full float-end text-right h-[10%]">
          <button
            className="p-1 h-8 w-8 text-gray-500 hover:cursor-pointer hover:text-gray-700 duration-150"
            onClick={() => setToggleModel((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="h-[70%] flex items-center justify-center flex-col">
          <h4 className="text-6xl text-amber-500 my-2">
            {renderIcon(varient)}
          </h4>
          <h3 className="text-2xl my-2 text-cyan-950">{message}</h3>
        </div>
        <div className="h-[20%] flex justify-end items-center mx-2 gap-1">
          <button
            onClick={() => fn()}
            className="px-2 py-1  h-fit  bg-blue-600 hover:bg-blue-500 hover:cursor-pointer duration-150 text-white rounded-md shadow-md font-semibold text-md"
          >
            Confirm
          </button>
          <button
            onClick={() => setToggleModel((prev) => !prev)}
            className="px-2 py-1  h-fit  bg-gray-600 hover:bg-gray-500 hover:cursor-pointer duration-150 text-white rounded-md shadow-md font-semibold text-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
