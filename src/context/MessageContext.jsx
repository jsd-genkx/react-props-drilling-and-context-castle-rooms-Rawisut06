import { createContext, useState } from "react";

const MessageContext = createContext();

const MessageProvider = ({ children }) => {
  const [replyMessage, setReplyMessage] = useState("");

  const handleReply = (message) => {
    setReplyMessage(message);
  }

  const message = "Do you love React?";

  return (
    <MessageContext.Provider value={{replyMessage, handleReply, message}}>
      {children}
    </MessageContext.Provider>
  );
};
export {MessageContext, MessageProvider};