import React, { useState, useEffect } from "react";
import axios from "axios";
const ChatPage = () => {
  const [chats, setChats] = useState([]);
  async function fetchChats() {
    const data = await axios.get("api/chats");
    console.log(data);
    setChats(data.data);
  }
  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chats.map((item, index) => (
        <div>{item.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
