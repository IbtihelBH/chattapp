import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
  form: `w-full flex items-center justify-between p-4 bg-gray-200 rounded-full`,
  input: `flex-grow text-xl p-3 bg-white text-gray-900 outline-none rounded-l-full border-none`,
  button: `ml-2 px-6 py-3 bg-blue-500 text-white rounded-r-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (input === "") {
      alert("Please enter a valid message");
      return;
    }

    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });

    setInput("");
    if (scroll.current) {
      scroll.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Type your message..."
      />
      <button className={style.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
