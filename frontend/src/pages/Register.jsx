import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormContainer from "../components/FormContainer";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visiblePw, setVisiblePw] = useState(false);
  const [visibleCPw, setVisibleCPw] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log(email, " ", password);
  };

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
            onChange={handleChangeName}
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
            onChange={handleChangeEmail}
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
              onChange={handleChangePassword}
              className="bg-neutral-100 border-[1.5px] border-neutral-200 rounded-md p-1"
            />
            <button
              onMouseDown={() => setVisiblePw(true)}
              onMouseUp={() => setVisiblePw(false)}
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
              onChange={handleChangeConfirmPassword}
              className="bg-neutral-100 border-[1.5px] border-neutral-200 rounded-md p-1"
            />
            <button
              onMouseDown={() => setVisiblePw(true)}
              onMouseUp={() => setVisiblePw(false)}
              className="absolute bottom-1 right-2 text-neutral-400 hover:cursor-pointer hover:text-neutral-500"
            >
              <FontAwesomeIcon icon={faEye} />
            </button>
          </div>
        </div>
        <button
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
