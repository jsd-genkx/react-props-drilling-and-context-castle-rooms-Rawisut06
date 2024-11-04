import { useState } from "react";

function SecretRoom({ message1, handleReply }) {
  const [reply, setReply] = useState("");

  return (
    <div className="flex flex-col gap-4 items-center">
      SecretRoom
      <p>Message for JSD8: {message1}</p>
      <textarea
        value={ reply }
        onChange={e => setReply(e.target.value)}
        placeholder="Type your reply here..."
        className="w-[60%]"
      ></textarea>
      <button
        onClick={() => handleReply(reply)}
        className="bg-blue-500 rounded-md py-2 px-4 text-white w-[200px]"
      >
        Sent Reply
      </button>
    </div>
  )
}
export default SecretRoom;