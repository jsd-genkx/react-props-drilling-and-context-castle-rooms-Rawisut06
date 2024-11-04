import Room from "./04_Room";

function Chamber({ message1, handleReply }) {
  return (
    <div>
      Chamber
      <Room
        message1={ message1 }
        handleReply={ handleReply }
      />
    </div>
  )
}
export default Chamber;