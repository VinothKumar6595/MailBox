import React, { Fragment, useState, useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import GifBoxRoundedIcon from "@mui/icons-material/GifBoxRounded";
import SentimentVerySatisfiedRoundedIcon from "@mui/icons-material/SentimentVerySatisfiedRounded";
import { EditorState, convertToRaw } from "draft-js";
import { convertFromHTML, convertToHTML } from "draft-convert";
import NavBar from "./NavBar";
import Header from "./Header";

const ComposeMail = () => {
  const [editorState, updateEditorState] = useState("");
  const sendToEmailInputRef = useRef();
  const subInputRef = useRef();
  const sendEmailHandler = async (event) => {
    event.preventDefault();
    const emailObj = {
      id: Math.random().toString(),
      to: sendToEmailInputRef.current.value,
      emailSub: subInputRef.current.value,
      emailContent: convertToHTML(editorState.getCurrentContent()),
      date: new Date(),
      unread: true,
    };
    const senderMail = localStorage.getItem("endpoint");
    try {
      const response = fetch(
        `https://mailbox-6185a-default-rtdb.firebaseio.com//${senderMail}/sentMails.json`,
        {
          method: "Post",
          body: JSON.stringify({ ...emailObj }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        console.log("sent");
      }
    } catch (err) {
      alert("error");
    }
    const emailObj2 = {
      id: Math.random().toString(),
      from: senderMail,
      emailSub: subInputRef.current.value,
      emailContent: convertToHTML(editorState.getCurrentContent()),
      date: new Date(),
      unread: true,
    };
    const htmlContent = convertToHTML(editorState.getCurrentContent());

    console.log(htmlContent);

    const recieverMail1 = sendToEmailInputRef.current.value;
    const recieverMail = recieverMail1.replace(/[.@]/g, "");
    try {
      const response = fetch(
        `https://mailbox-6185a-default-rtdb.firebaseio.com//${recieverMail}/recievedMails.json`,
        {
          method: "POST",
          body: JSON.stringify({ ...emailObj2 }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        console.log("sent");
      }
    } catch (err) {
      alert(err);
    }
    updateEditorState("");
    sendToEmailInputRef.current.value = "";
    subInputRef.current.value = "";
  };
  return (
    <Fragment>
      <div className="flex-col ">
        <Header />
        <div className="flex bg-gray-200 h-[880px] ">
          <div>
            <NavBar />
          </div>
          <div className="w-[1380px] h-[720px] m-auto border-b-2 border-gray-500 bg-white ">
            <form className="w-[1380px]  ">
              <div className="flex relative">
                <input
                  placeholder="To"
                  type="email"
                  className="p-2 w-full border-b-2 border-gray-500"
                  required
                  ref={sendToEmailInputRef}
                />
                <button
                  className="bg-white border-b-2 border-gray-500 font-light"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Cc/Bcc
                </button>
              </div>
              {/* <input
            placeholder="Cc"
            type="email"
            className="p-2 w-full border-b-2 border-gray-300"
          />
          <input
            placeholder="Bcc"
            type="email"
            className="p-2 w-full border-b-2 border-gray-300"
          /> */}
              <input
                placeholder="Subject"
                type="email"
                className="p-2 w-full border-b-2 border-gray-500"
                ref={subInputRef}
              />
              <div className="">
                <Editor
                  editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  className="bg-white"
                  onEditorStateChange={updateEditorState}
                />
                <div className="flex mt-[500px] ml-96 absolute bottom-0 left-0 ">
                  <button
                    className="bg-blue-200 p-2 rounded-md ml-5"
                    onClick={sendEmailHandler}
                  >
                    Send <SendRoundedIcon />
                  </button>
                  <button className="ml-5">
                    <AttachFileRoundedIcon />
                  </button>
                  <button className="ml-5">
                    <SentimentVerySatisfiedRoundedIcon />
                  </button>
                  <button className="ml-5">
                    <GifBoxRoundedIcon className="" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ComposeMail;
