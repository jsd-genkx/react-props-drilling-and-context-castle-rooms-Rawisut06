import Corridor from "./06_Corridor";

function Hall({ message1 }) {
  return (
    <div>
      Hall
      <Corridor
        message1={ message1 }
      />
    </div>
  )
}
export default Hall;