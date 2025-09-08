import { PAGE_HEIGHT } from "../app/constants";

const FormContainer = ({ children }) => {
  return (
    <div className={`${PAGE_HEIGHT}`}>
      <div className="h-full w-full flex items-center justify-center">
        <div className="p-10 w-[456px] max-sm:w-[356px] border-[1.5px] rounded-md border-neutral-200 shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
