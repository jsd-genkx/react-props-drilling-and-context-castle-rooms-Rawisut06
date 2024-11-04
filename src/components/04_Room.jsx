import Hall from "./05_Hall";

function Room({ message1, handleReply }) {
  return (
    <div>
      Room
      <Hall
        message1={ message1 }
        handleReply={ handleReply }
      />
    </div>
  )
}
export default Room;