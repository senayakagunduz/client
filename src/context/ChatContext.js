import { createContext, useState, useContext } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const values = {
    messages,
    setMessages,
  };
  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};
// export default chatContext; 1)önce bunu sildik
//componentlere tek tek chatContext i import etmek yerine chat hook tanımlayacağım.

export const useChat = () => useContext(ChatContext); //useContext i import ettim
//şimdi chatliste gidiyorum ve useChati önce import ediyorum 2)sonra da bunu ekliyorum
