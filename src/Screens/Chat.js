import React, { useState } from "react";
import styles from "./Chat.module.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, { text: inputMessage, sender: "user" }]);
      
      setInputMessage("");
    }
  };

  return (
    <div name="Chat" className={styles.Chat}>
      <h2 className={styles.ChatTitle}>
        Chat Online
      </h2>

      
      <div className={styles.chat}>
        <div className={styles.messages}>
          {messages.map((message, index) => (
            <div key={index} className={styles.message}>
              <p className={message.sender === "user" ? styles.userMessage : styles.botMessage}>
                {message.text}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.input}
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button className={styles.sendButton} onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
