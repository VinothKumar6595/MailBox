import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { inboxActions } from "../Store/Redux";
import Header from "./Header";
import NavBar from "./NavBar";

const Inbox = () => {
  const dispatch = useDispatch();
  const recieverEmail = localStorage.getItem("endpoint");
  const inboxItems = useSelector((state) => state.inbox.inbox);
  console.log(recieverEmail);

  useEffect(() => {
    axios
      .get(
        `https://mailbox-913ab-default-rtdb.firebaseio.com/${recieverEmail}/recievedMails.json`
      )
      .then((response) => {
        console.log(Object.entries(response.data));
        dispatch(inboxActions.addToInbox(Object.entries(response.data)));
      });
  }, []);

  const inboxList = inboxItems.map((inboxMails) => {
    <ul className="bg-slate-400">
      {/* {console.log(inboxMails[1].from)} */}
      <li>{inboxMails[1].from}</li>
      <li>{inboxMails[1].emailSub}</li>
      <li>{inboxMails[1].emailContent}</li>
      <li>{inboxMails[1].date}</li>
    </ul>;
  });
  return (
    <div>
      {/* <div>
        <Header />
        <NavBar />
      </div> */}
      <div className="p-64 ml-60">{inboxList}</div>
    </div>
  );
};

export default Inbox;
