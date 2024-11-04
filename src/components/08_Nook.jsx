import SecretRoom from "./09_SecretRoom";

function Nook({ message1, handleReply }) {
  return (
    <div>
      Nook
      <SecretRoom
        message1={ message1 }
        handleReply={ handleReply }
      />
    </div>
  )
}
export default Nook;