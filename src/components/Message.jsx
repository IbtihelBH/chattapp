import React from "react";
import { auth } from "../firebase";

const style = {
  messageContainer: `flex flex-col items-start m-2`,
  message: `shadow-xl py-2 px-3 rounded-full`,
  name: `text-gray-500 text-xs mt-1`,
  sent: `bg-blue-500 text-white rounded-br-full mt-1 ml-auto`,
  received: `bg-[#e5e5ea] text-black rounded-bl-full mt-1 mr-auto`,
};

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  return (
    <div className={`${style.messageContainer}`}>
      <div className={`${style.message} ${messageClass}`}>
        <p>{message.text}</p>
      </div>
      <p
        className={`${style.name} ${
          message.uid === auth.currentUser.uid ? "ml-auto" : "mr-auto"
        }`}
      >
        {message.name}
      </p>
    </div>
  );
};

export default Message;
