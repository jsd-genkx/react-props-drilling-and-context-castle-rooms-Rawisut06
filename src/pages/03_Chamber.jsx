import Room from "./04_Room";

function Chamber({ message1 }) {
  return (
    <div>
      Chamber
      <Room
        message1={ message1 }
      />
    </div>
  )
}
export default Chamber;