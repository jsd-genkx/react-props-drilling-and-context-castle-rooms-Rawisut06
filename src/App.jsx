import { useState } from 'react';
import Castle from './pages/01_Castle';

function App() {
  const [reply, setReply] = useState(false)

  const message1 = 'Message for JSD8: Do you love React?';
  return (
    <div>
      <p>{message1}</p>
      <p>Reply from the Secret Room: Waiting for Reply...</p>
    <Castle
      message1={ message1 }
    />
    </div>
  )
}

export default App
