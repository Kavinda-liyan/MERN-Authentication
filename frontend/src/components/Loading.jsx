import { PAGE_HEIGHT, PAGE_PADDINGS } from "../app/constants";
import loading from "../Assets/Loadingside.svg";

const Loading = () => {
  return (
    <div className={`${PAGE_HEIGHT}`}>
      <div
        className={`${PAGE_PADDINGS} flex items-center justify-center flex-col h-full w-full`}
      >
        <img src={loading} alt="Error_M" className="w-[200px]" />
        <h1 className="text-cyan-950 text-2xl m-2">Loading...</h1>
      </div>
    </div>
  );
};

export default Loading;
