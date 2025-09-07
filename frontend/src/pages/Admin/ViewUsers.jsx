import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PAGE_HEIGHT, PAGE_PADDINGS } from "../../app/constants";
import {
  faCheck,
  faCircle,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../../app/api/usersApiSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Confirm from "../../components/Popup Models/Confirm";
const ViewUsers = () => {
  const { data: users, isLoading, refetch, error } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [showModel, setShowModel] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const deleteHandler = async () => {
    if (selectedUser) {
      try {
        await deleteUser(selectedUser._id);
        navigate("/users");
        toast.success(`You have successfully deleted ${selectedUser.name}.`);
      } catch (error) {
        toast.error(error.data.message || error.error);
      }
    } else return;
  };

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={`${PAGE_HEIGHT} relative`}>
      {showModel && (
        <Confirm
          message={"Are you sure you want to delete this user?"}
          varient={"warning"}
          fn={deleteHandler}
        />
      )}

      <div
        className={`${PAGE_PADDINGS} flex items-center justify-center h-full w-full`}
      >
        <div className="max-[2160px]:w-[75%] max-xl:w-[90%] max-md:w-[100%]">
          <table className="table-auto w-full border-collapse border border-cyan-900/10">
            <thead className="bg-cyan-950 text-left text-white">
              <tr className="p-20">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Admin</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody className="text-left bg-cyan-950/5 font-semibold">
              {users?.map((user) => (
                <tr
                  key={user._id}
                  className={userInfo._id == user._id ? "underline" : ""}
                >
                  <td className="px-4 py-2">{user._id}</td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">
                    {user.isAdmin ? (
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon
                          icon={faCheck}
                          aria-hidden={true}
                          className="font-extrabold text-green-600 "
                        />
                        {user._id == userInfo._id ? (
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="text-[8px] text-green-600 animate-pulse "
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                    ) : (
                      <FontAwesomeIcon
                        icon={faTimes}
                        aria-hidden={true}
                        className="font-bold text-red-600"
                      />
                    )}
                  </td>

                  <td className="px-4 py-2">
                    {!user.isAdmin && (
                      <button
                        disabled={userInfo._id == user._id}
                        onClick={() => {
                          setSelectedUser(user);
                          setShowModel(true);
                        }}
                        className={
                          userInfo._id == user._id
                            ? "text-gray-400 text-xs p-2 flex items-center"
                            : "text-white text-xs hover:cursor-pointer p-2  bg-cyan-950 hover:bg-cyan-800 duration-150 flex items-center justify-center rounded-md"
                        }
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewUsers;
