import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormContainer from "../../components/FormContainer";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../app/api/usersApiSlice";
import { setCredentials } from "../../app/features/auth/authSlice";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visiblePw, setVisiblePw] = useState(false);
  const [visibleCPw, setVisibleCPw] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading, error }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please complete all the input fields");
    }

    if (password !== confirmPassword) {
      toast.error("Password do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();

        dispatch(setCredentials({ ...res }));
        navigate(redirect);
        toast.success("User Successfully registered");
      } catch (error) {
        toast.error(error?.data?.message || error.message);
      }
    }
  };

  if(isLoading){
    return <Loading/>
  }

  if(error){
    return <Error/>
  }

  return (
    <FormContainer>
      <h1 className="text-left mb-4 text-2xl font-semibold">Sign Up</h1>
      <form className="" onSubmit={handleRegisterSubmit}>
        <div className="flex flex-col my-2">
          <label className="my-1">Name:</label>
          <input
            type="text"
            placeholder="Enter your name here..."
            value={name}
            autoComplete="username"
            onChange={(e) => setName(e.target.value)}
            className="bg-neutral-100 border-[1.5px] border-neutral-200 rounded-md p-1"
          />
        </div>

        <div className="flex flex-col my-2">
          <label className="my-1">Email:</label>
          <input
            type="email"
            placeholder="Enter your email here..."
            value={email}
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            className="bg-neutral-100 border-[1.5px] border-neutral-200 rounded-md p-1"
          />
        </div>
        <div className="my-2">
          <div className="flex flex-col my-2 relative">
            <label className="my-1">Password:</label>
            <input
              type={visiblePw ? "text" : "password"}
              placeholder="Enter your password here..."
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-neutral-100 border-[1.5px] border-neutral-200 rounded-md p-1"
            />
            <button
              onClick={() => setVisiblePw((prev) => !prev)}
              className="absolute bottom-1 right-2 text-neutral-400 hover:cursor-pointer hover:text-neutral-500"
            >
              <FontAwesomeIcon icon={faEye} />
            </button>
          </div>
          <div className="flex flex-col my-2 relative">
            <label className="my-1">Confirm Password:</label>
            <input
              type={visibleCPw ? "text" : "password"}
              placeholder="Confirm password..."
              value={confirmPassword}
              autoComplete="current-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-neutral-100 border-[1.5px] border-neutral-200 rounded-md p-1"
            />
            <button
              onClick={() => setVisibleCPw((prev) => !prev)}
              className="absolute bottom-1 right-2 text-neutral-400 hover:cursor-pointer hover:text-neutral-500"
            >
              <FontAwesomeIcon icon={faEye} />
            </button>
          </div>
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="bg-blue-600 w-full my-1 py-1 text-white font-semibold rounded-md shadow-md 
        hover:cursor-pointer hover:bg-blue-500"
        >
          Register
        </button>
      </form>
      <p className="text-[14px] my-1">
        Alredy have an account?{" "}
        <Link to={"/login"} className="text-blue-800 underline ">
          Login
        </Link>
      </p>
    </FormContainer>
  );
};

export default Register;
