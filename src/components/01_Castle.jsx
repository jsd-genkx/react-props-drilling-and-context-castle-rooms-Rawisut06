import Tower from "./02_Tower";

function Castle({ message1, handleReply }) {
  return (
    <div>
      Castle
      <Tower
        message1={ message1 }
        handleReply={ handleReply }
      />
    </div>
  )
}
export default Castle;