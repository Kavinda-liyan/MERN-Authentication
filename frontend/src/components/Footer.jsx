const Footer = () => {
  const date = new Date();

  return (
    <div className="p-2 bg-cyan-950 h-[50px] flex items-center flex-col justify-center text-white text-xs  font-semibold">
      <h3 className="">@{date.getFullYear()}</h3>{" "}
      <h3>Developed by: Kavinda Liyanaarachchi</h3>
    </div>
  );
};

export default Footer;
