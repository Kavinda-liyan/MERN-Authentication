import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useViewProfileQuery } from "../../../app/api/usersApiSlice.js";
import { PAGE_PADDINGS, PAGE_HEIGHT } from "../../../app/constants.js";
import ProfileAvatar from "../../../Assets/Avatar.png";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { data, isLoading, error, refetch } = useViewProfileQuery(undefined, {
    skip: !userInfo,
  });

  useEffect(() => {
    if (userInfo) {
      refetch();
    }
  }, [userInfo, refetch]);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error loading page</p>;
  }

  return (
    <div className={`${PAGE_HEIGHT}`}>
      <div
        className={`${PAGE_PADDINGS} flex items-center justify-center h-full w-full`}
      >
        <div className=" flex flex-col items-center justify-center">
          <div className="w-[150px] h-[150px] rounded-full  bg-cyan-800 shadow-md relative m-5">
            <img src={ProfileAvatar} alt="profile" />

            {data.isAdmin && (
              <div className="text-amber-400 absolute bottom-0 right-0 text-xs w-6 h-6 flex items-center justify-center bg-neutral-500 rounded-full p-1">
                <FontAwesomeIcon icon={faKey} />
              </div>
            )}
          </div>
          <div className="text-cyan-900 text-[18px] text-left">
            <p className="text-cyan-900">
              <span>Name :</span> <span>{data.name}</span>
            </p>
            <p className="text-cyan-900">
              <span>Email :</span> <span>{data.email}</span>
            </p>
            <p className="text-cyan-900">
              <span>Role :</span> <span>{data.isAdmin ? "Admin" : "User"}</span>
            </p>
          </div>
          <div className="text-right w-full float-end my-2">
            <Link
              className=" px-2 py-1 text-sm bg-blue-600 hover:bg-blue-500 text-white rounded-sm shadow-md flex items-center w-fit justify-end"
              to={"/profile/update"}
            >
              Update profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
