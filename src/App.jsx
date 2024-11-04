import { useContext } from 'react';
import Castle from './components/01_Castle';
import { MessageContext } from './context/MessageContext';


function App() {
  const { replyMessage, message } = useContext(MessageContext);


  return (
    <div className="p-4 text-2xl text-center">
      <p className='text-xl'>Message for JSD8: {message}</p>
      <p className='text-xl text-blue-900'>Reply from the Secret Room:{" "}
        <span className='text-red-600'>
          {replyMessage ? replyMessage : "Waiting for Reply..."}
        </span>
      </p>
        <Castle />
    </div>
  )
}

export default App
