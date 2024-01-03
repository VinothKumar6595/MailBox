import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between h-24 bg-blue-300 items-center border-b-2 border-black">
      <h1
        className="text-5xl font-bold pl-10 hover:cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        The MailBox !!!
      </h1>

      {/* <button
      className="p-2 bg-blue-300 rounded-md mr-10"
      onClick={() => {
        navigate("/composeMail");
      }}
    >
      Compose mail <CreateTwoToneIcon />
    </button> */}
    </div>
  );
};

export default Header;
