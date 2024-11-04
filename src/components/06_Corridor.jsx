import Gallery from "./07_Gallery";

function Corridor({ message1, handleReply }) {
  return (
    <div>
      Corridor
      <Gallery
        message1={ message1 }
        handleReply={ handleReply }
      />
    </div>
  )
}
export default Corridor;