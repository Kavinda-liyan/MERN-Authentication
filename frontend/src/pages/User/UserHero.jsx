import { useSelector } from "react-redux";
import AuthComplete from "../../Assets/AuthComplete.gif";

const UserHero = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-cyan-900 font-bold text-4xl m-2">
        Hola {" "} {userInfo.isAdmin && (
          <span className="text-green-600 ">Admin</span>
        )} !
        
      </h1>
      <img src={AuthComplete} className="h-32 w-32 m-2" />
      <p className="text-center text-xl w-[75%] text-cyan-950">
        Welcome <span className="font-semibold">{userInfo.name}</span>! You have
        successfully authenticated to my MERN Authentication project. This is
        just the beginning—explore and enjoy the features!
      </p>
    </div>
  );
};

export default UserHero;
