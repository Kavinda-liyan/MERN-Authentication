import Hero from "../components/Hero";
import { useSelector } from "react-redux";
import UserHero from "./User/UserHero";
import { PAGE_HEIGHT, PAGE_PADDINGS } from "../app/constants";

const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  return (
    <div className={`${PAGE_HEIGHT}`}>
      <div
        className={`h-full w-full  flex justify-center items-center ${PAGE_PADDINGS}`}
      >
        {userInfo ? <UserHero /> : <Hero />}
      </div>
    </div>
  );
};

export default Home;
