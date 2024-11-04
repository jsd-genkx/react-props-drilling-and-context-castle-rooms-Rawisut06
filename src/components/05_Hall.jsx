import Corridor from "./06_Corridor";

function Hall({ message1, handleReply }) {
  return (
    <div>
      Hall
      <Corridor
        message1={ message1 }
        handleReply={ handleReply }
      />
    </div>
  )
}
export default Hall;