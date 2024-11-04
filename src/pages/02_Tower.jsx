import Chamber from "./03_Chamber";

function Tower({ message1 }) {
  return (
    <div>
      Tower
      <Chamber
        message={ message1 }
      />
    </div>
  )
}
export default Tower;