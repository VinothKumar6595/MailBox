import React from "react";
import CreateTwoToneIcon from "@mui/icons-material/CreateTwoTone";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between h-24 bg-gray-200 items-center border-b-2 border-black">
        <h1 className="text-3xl font-bold font-serif pl-10">
          Welcome to Your MailBox!!!
        </h1>
        <button
          className="p-2 bg-blue-300 rounded-md mr-10"
          onClick={() => {
            navigate("/composeMail");
          }}
        >
          Compose mail <CreateTwoToneIcon />
        </button>
      </div>
    </div>
  );
};

export default Home;
