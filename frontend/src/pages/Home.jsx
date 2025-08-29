import Hero from "../components/Hero";

const Home = () => {
  return <div className="h-[calc(100vh-50px)]  ">
    <div className="h-full w-full max-2xl:pl-[60px] max-2xl:pr-[60px] max-md:pl-[10px] max-md:pr-[10px] flex justify-center items-center ">
        <Hero/>
    </div>

  </div>;
};

export default Home;
