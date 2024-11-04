import Hall from "./05_Hall";

function Room({ message1 }) {
  return (
    <div>
      Room
      <Hall
        message1={ message1 }
      />
    </div>
  )
}
export default Room;