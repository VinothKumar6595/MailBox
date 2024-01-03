import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { inboxActions } from "../Store/Redux";

const Inbox = () => {
  const dispatch = useDispatch();
  const recieverEmail = localStorage.getItem("endpoint");
  console.log(recieverEmail);

  useEffect(() => {
    axios
      .get(
        `https://mailbox-913ab-default-rtdb.firebaseio.com/${recieverEmail}/recievedMails.json`
      )
      .then((response) => {
        console.log(response.data);
        dispatch(inboxActions.addToInbox(response.data));
      });
  }, []);

  return <div>Inbox</div>;
};

export default Inbox;
