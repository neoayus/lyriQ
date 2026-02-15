// import style
import { useState } from "react";
import "./index.css";

function App() {
  const [image, setImage] = useState(null);
  const [lyrics, setLyrics] = useState("");
  const [artist, setArtist] = useState("");

  return (
    <>
      <p>lyriQ</p>
      <div
        className="container"
        style={{
          overflow: "hidden",
          backgroundImage: `url(${image})`,
        }}
      >
        {/* The accept attribute value is a string that defines the file types the file input should accept. */}
        {/* LYRICS */}
        <p className="lyrics"> {lyrics} </p>
        <p className="artist"> {artist} </p>
      </div>


      <form>
        {/* Select Image */}
        <input
          type="file"
          accept=".png, .jpeg, .jpg"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setImage(URL.createObjectURL(file));
            }
          }}
        />
      
        {/* Set Lyrics */}
        <input type="text" placeholder="Set Lyrics..." value={lyrics} onChange={(e)=> setLyrics(e.target.value)}/>
        {/* Set Artist Name */}
        <input type="text" placeholder="Artist Name" value={artist} onChange={(e)=> setArtist(e.target.value)}/>

      </form>
    </>
  );
}

export default App;
