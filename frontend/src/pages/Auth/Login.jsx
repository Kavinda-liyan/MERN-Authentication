import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormContainer from "../../components/FormContainer";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../../app/api/usersApiSlice";
import { setCredentials } from "../../app/features/auth/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePw, setVisiblePw] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email or password field is empty");
    }

    try {
      const res = await login({ email, password }).unwrap();

      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  return (
    <FormContainer>
      <h1 className="text-left mb-4 text-2xl font-semibold">Sign In</h1>
      <form className="" onSubmit={handleLoginSubmit}>
        <div className="flex flex-col my-2">
          <label className="my-1">Email:</label>
          <input
            type="email"
            placeholder="Enter your email here..."
            value={email}
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-neutral-100 border-[1.5px] border-neutral-200 rounded-md p-1"
          />
        </div>
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
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 w-full my-1 py-1 text-white font-semibold rounded-md shadow-md 
        hover:cursor-pointer hover:bg-blue-500"
        >
          Log in
        </button>
      </form>
      <p className="text-[14px] my-1">
        New Customer?{" "}
        <Link to={"/register"} className="text-blue-800 underline ">
          Register here
        </Link>
      </p>
    </FormContainer>
  );
};

export default Login;
