const FormContainer = ({ children }) => {
  return (
    <div className="h-[calc(100vh-50px)]">
      <div className="h-full w-full flex items-center justify-center">
        <div className="p-10 w-[456px] border-[1.5px] rounded-md border-neutral-200 shadow-md">{children}</div>
      </div>
    </div>
  );
};

export default FormContainer;
