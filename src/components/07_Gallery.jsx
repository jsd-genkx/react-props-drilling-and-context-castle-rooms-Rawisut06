import Nook from "./08_Nook";

function Gallery({ message1, handleReply }) {
  return (
    <div>
      Gallery
      <Nook
        message1={ message1 }
        handleReply={ handleReply }
      />
    </div>
  )
}
export default Gallery;