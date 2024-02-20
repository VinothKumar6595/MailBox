import React from "react";
import CreateTwoToneIcon from "@mui/icons-material/CreateTwoTone";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <div className="flex justify-between h-24 bg-yellow-100 items-center border-b-2 border-black">
        <h1 className="text-5xl font-bold pl-10">The MailBox !!!</h1>

         <button
          className="p-2 bg-blue-300 rounded-md mr-10"
          onClick={() => {
            navigate("/composeMail");
          }}
        >
          Compose mail <CreateTwoToneIcon />
        </button> 
      </div> */}
      <Header />
      <div className="flex bg-gray-200">
        <NavBar />
        <h1 className="font-bold text-8xl w-[720px] ml-96 mt-48 ">
          Welcome to Home of your MailBox
        </h1>
      </div>
    </div>
  );
};

export default Home;
