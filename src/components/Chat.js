import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:3001");
    socketRef.current.on("message", (message) => {
      let chatArea = document.querySelector(".chat"),
        chatAreaHeight = chatArea.scrollHeight;
      chatArea.scrollTop = chatAreaHeight;
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    if (message !== "") {
      socketRef.current.emit("message", message);
      setMessage("");
    } else {
      window.alert("テキストが入力されていません");
      setMessage("");
    }
  };

  return (
    <div className="chat">
      <form className="chat_form" onSubmit={handleMessageSubmit}>
        <input
          className="chat_input"
          type="text"
          value={message}
          onChange={handleMessageChange}
        />
        <button className="chat_btn" type="submit">
          送信
        </button>
      </form>
      <ul className="chat_text" id="chat-area">
        {messages.map((message, index) => (
          <li className="text" key={index}>
            {message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;
