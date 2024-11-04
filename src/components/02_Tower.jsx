import Chamber from "./03_Chamber";

function Tower({ message1, handleReply }) {
  return (
    <div>
      Tower
      <Chamber
        message1={ message1 }
        handleReply={ handleReply }
      />
    </div>
  )
}
export default Tower;