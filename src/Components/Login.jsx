import React, { useState } from "react";
import { signUpUrl } from "./Utils/Url";

const Login = () => {
  const [email, setEmail] = useState("");
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const [password, setPassword] = useState("");
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const [confirmPwd, setConfirmPwd] = useState("");
  const confirmPwdChangeHandler = (event) => {
    setConfirmPwd(event.target.value);
  };
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    // const endPoints = `/${email.replace(/\.|@/g, "")}`;

    if (password === confirmPwd) {
      try {
        const response = await fetch(signUpUrl, {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error.message);
        } else {
          alert("User Sign up Successfull !!!");
        }
      } catch (err) {
        console.log(err.message);
      }
    } else {
      alert("Password does't match");
    }
    const myObj = {
      email,
      password,
      confirmPwd,
    };
    console.log(myObj);
  };
  return (
    <div className=" bg-gray-200 h-[940px] pt-36">
      <div className="bg-gray-400 flex items-center justify-center w-[360px] h-[440px] m-auto rounded-xl">
        <form className="flex flex-col" onSubmit={formSubmitHandler}>
          <h1 className="flex justify-center text-2xl font-semibold mb-16">
            SignUp
          </h1>
          <input
            placeholder="Email"
            type="email"
            className="p-3 w-72 mb-2 rounded-lg"
            onChange={emailChangeHandler}
            value={email}
            required
          />
          <input
            placeholder="Password"
            type="password"
            className="p-3 w-72 mb-2 rounded-lg"
            onChange={passwordChangeHandler}
            value={password}
            required
          />
          <input
            placeholder="Confirm Password"
            type="password"
            className="p-3 w-72 mb-2 rounded-lg"
            onChange={confirmPwdChangeHandler}
            value={confirmPwd}
            required
          />
          <button className="p-3 bg-blue-400 w-72 mb-2 rounded-lg text-white mt-16 hover:bg-white hover:text-blue-400">
            Sign Up
          </button>
        </form>
      </div>
      <div className="flex items-center justify-center m-auto">
        <button className="p-3 w-[360px]  rounded-lg bg-blue-400 text-white mt-10 hover:bg-gray-400 hover:text-white">{`Have an account? Login`}</button>
      </div>
    </div>
  );
};

export default Login;
