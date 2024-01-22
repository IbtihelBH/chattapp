import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";

const style = {
  chatContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "auto", // Allow scrolling of the chat container
  },
  main: {
    overflowY: "auto",
    flex: 1,
    padding: "10px",
    maxHeight: "calc(100vh - 60px)", // Adjusted for the height of the Navbar
  },
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);

      // Scroll to the bottom on each message update
      if (scroll.current) {
        scroll.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div style={style.chatContainer}>
      <main style={style.main} ref={scroll}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      {/* Send Message Component */}
      <SendMessage />
    </div>
  );
};

export default Chat;
