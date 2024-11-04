import { useContext, useState } from "react";
import { MessageContext } from "../context/MessageContext";

function SecretRoom() {
  const { message, handleReply } = useContext(MessageContext);
  const [reply, setReply] = useState("");

  return (
    <div className="flex flex-col items-center gap-4">
      SecretRoom
      <p>Message for JSD8: {message}</p>
      <textarea
        className="w-[60%]"
        value={ reply }
        onChange={e => setReply(e.target.value)}
        placeholder="Type your reply here..."
      ></textarea>
      <button
        className="bg-blue-500 rounded-md py-2 px-4 text-white w-[200px]"
        onClick={() => handleReply(reply)}
      >
        Sent Reply
      </button>
    </div>
  )
}
export default SecretRoom;