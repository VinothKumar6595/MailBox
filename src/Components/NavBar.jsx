import React from "react";

import CreateTwoToneIcon from "@mui/icons-material/CreateTwoTone";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-64  flex-col justify-center items-center border-r-2 border-gray-300">
      <ul className="flex-col  h-[820px] p-2 font-bold items-center">
        <li>
          <button
            className="p-2 bg-blue-300 rounded-md m-10 "
            onClick={() => {
              navigate("/composeMail");
            }}
          >
            Compose mail <CreateTwoToneIcon />
          </button>
        </li>
        <li
          className="p-2  hover:cursor-pointer  hover:bg-blue-300 "
          onClick={() => navigate("/inBox")}
        >
          Inbox
        </li>
        <li
          className="p-2  hover:bg-blue-300"
          onClick={() => {
            navigate("/sentBox");
          }}
        >
          Sent
        </li>
        <li className="p-2   hover:bg-blue-300">Unread</li>
        <li className="p-2 0 hover:bg-blue-300">Drafts</li>
        <li className="p-2  hover:cursor-pointer  hover:bg-blue-300">
          Starred
        </li>
        <li className="p-2  hover:bg-blue-300">Archive</li>
      </ul>
    </div>
  );
};

export default NavBar;
