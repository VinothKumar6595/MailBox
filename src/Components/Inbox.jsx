import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { inboxActions } from "../Store/Redux";
import Header from "./Header";
import NavBar from "./NavBar";

const Inbox = () => {
  const dispatch = useDispatch();
  const userEmail = localStorage.getItem("endpoint");
  const inboxItems = useSelector((state) => state.inbox.inbox);
  console.log(userEmail);

  useEffect(() => {
    axios
      .get(
        `https://mailbox-6185a-default-rtdb.firebaseio.com/${userEmail}/recievedMails.json`
      )
      .then((response) => {
        console.log(Object.entries(response.data));
        dispatch(inboxActions.addToInbox(Object.entries(response.data)));
      });
  }, []);

  console.log(inboxItems);
  const inboxList = inboxItems.map((inboxMails) => {
    // console.log(inboxMails[1].emailContent);
    return (
      <div>
        <ul className="bg-slate-200">
          <li className="w-full h-10 flex items-center" key={Math.random()}>
            {inboxMails[1].from}-{inboxMails[1].emailSub}-
            {inboxMails[1].emailContent}-{inboxMails[1].date}
          </li>
        </ul>
      </div>
    );
  });

  console.log(inboxList);
  return (
    <div>
      <div className="relative">
        <Header />
        <NavBar />
        <div className="absolute top-32 left-64  text-lg w-full">
          {inboxList}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
