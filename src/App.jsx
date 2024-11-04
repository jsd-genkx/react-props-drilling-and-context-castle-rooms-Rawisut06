import { useState } from 'react';
import Castle from './components/01_Castle';

function App() {
  const [replyMessage, setReplyMessage] = useState("");

  const handleReply = (message) => {
    setReplyMessage(message);
  }

  const message1 = 'Do you love React?';

  return (
    <div className="text-center p-4 text-2xl">
      <p className='text-xl'>Message for JSD8: {message1}</p>
      <p className='text-xl text-blue-900'>Reply from the Secret Room:{" "}
        <span className='text-red-600'>
          {replyMessage ? replyMessage : "Waiting for Reply..."}
        </span>
      </p>
        <Castle
          message1={ message1 }
          handleReply={ handleReply }
        />
    </div>
  )
}

export default App
