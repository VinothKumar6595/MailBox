import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { inboxActions, sentBoxActions } from "../Store/Redux";
import Header from "./Header";
import NavBar from "./NavBar";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const SentMail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("endpoint");
  const sentBoxItems = useSelector((state) => state.sentBox.sentBox);
  console.log(userEmail);

  const deleteMailHandler = (key) => {
    try {
      axios.delete(
        `https://mailbox-69d60-default-rtdb.firebaseio.com/${userEmail}/sentMails/${key}.json`
      );
      dispatch(sentBoxActions.updateSentBox());
      navigate("/sentBox");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      axios
        .get(
          `https://mailbox-69d60-default-rtdb.firebaseio.com/${userEmail}/sentMails.json`
        )
        .then((response) => {
          if (response.data != null) {
            console.log(Object.values(response.data));
            dispatch(
              sentBoxActions.addToSentBox(Object.entries(response.data))
            );
          }
        });
    }, 2000);

    return () => clearInterval(timer);
  }, [dispatch, userEmail]);

  console.log(sentBoxItems);
  const sentBoxList = sentBoxItems.map((sentBoxMails) => {
    // console.log(inboxMails[1].emailContent);
    return (
      <div>
        <ul
          className="flex m-2 p-3 bg-slate-200 w-[85%] justify-between h-16"
          key={sentBoxMails[0]}
        >
          <li className="w-64">{sentBoxMails[1].to}</li>
          <li className="w-64">{sentBoxMails[1].emailSub}</li>
          <li className="w-64">{sentBoxMails[1].emailContent}</li>
          <li className="w-64">{sentBoxMails[1].date}</li>
          <button
            className=" flex  items-center bg-gray-500 p-5  mr-10  "
            onClick={() => deleteMailHandler(sentBoxMails[0])}
          >
            <DeleteIcon />
          </button>
        </ul>
      </div>
    );
  });

  console.log(sentBoxList);
  return (
    <div>
      <div className="relative">
        <Header />
        <NavBar />
        <div className="absolute top-32 left-64  text-lg w-full">
          {sentBoxList}
        </div>
      </div>
    </div>
  );
};

export default SentMail;
