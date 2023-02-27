import React from "react";
import styles from "./styles.module.css";
import { useChat } from "../../context/ChatContext"; //import da ettim
import ChatItem from "./ChatItem";
import ScrollableFeed from 'react-scrollable-feed'


const ChatList = () => {
  const { messages } = useChat(); //ChatContext'te oluşturduğum  hook'u buraya bir değişkene atayarak ekledim.
  console.log(messages);

  return (
    <div className={styles.chatlist}>
      <ScrollableFeed forceScroll={true}>
        {messages.map((item, key) => (
          <ChatItem key={key} item={item} />
        ))}
     </ScrollableFeed>
    </div>
  );
};

export default ChatList;
