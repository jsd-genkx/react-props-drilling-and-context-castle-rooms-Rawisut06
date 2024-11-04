import SecretRoom from "./09_SecretRoom";

function Nook({ message1 }) {
  return (
    <div>
      Nook
      <SecretRoom
        message1={ message1 }
      />
    </div>
  )
}
export default Nook;