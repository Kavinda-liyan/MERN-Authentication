import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../../../app/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useUpdateProfileMutation } from "../../../app/api/usersApiSlice";
import FormContainer from "../../../components/FormContainer";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.name, userInfo.email]);

  const updateHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();

        dispatch(setCredentials({ ...res }));
        navigate("/profile");
        toast.success("profile updated successfully");
      } catch (error) {
        toast.error(error?.data?.message || error.message);
      }
    }
  };

  const inputTxtStyle =
    "bg-neutral-100 border-[1.5px] border-neutral-200 rounded-md p-1 text-neutral-500";
  return (
    <FormContainer>
      <h1 className="text-left mb-4 text-2xl font-semibold">Update profile</h1>
      <form className="" onSubmit={updateHandler}>
        <div className="flex flex-col my-2">
          <label className="my-1">Name:</label>
          <input
            type="text"
            placeholder="Enter your name here..."
            value={name}
            autoComplete="username"
            onChange={(e) => setName(e.target.value)}
            className={inputTxtStyle}
          />
        </div>
        <div className="flex flex-col my-2">
          <label className="my-1">Email:</label>
          <input
            type="email"
            placeholder="Enter your email here..."
            value={email}
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
            className={inputTxtStyle}
          />
        </div>
        <div className="flex flex-col my-2">
          <label className="my-1">Password:</label>
          <input
            type="password"
            placeholder="Enter your password here..."
            value={password}
            className={inputTxtStyle}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-2">
          <label className="my-1">Confirm password:</label>
          <input
            type="password"
            placeholder="Confirm password here..."
            value={confirmPassword}
            className={inputTxtStyle}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="bg-blue-600 w-full my-1 py-1 text-white font-semibold rounded-md shadow-md 
        hover:cursor-pointer hover:bg-blue-500"
        >
          Update profile
        </button>
      </form>
    </FormContainer>
  );
};

export default UpdateProfile;
