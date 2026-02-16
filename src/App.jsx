// import style
import { useState } from "react";
import "./index.css";

// import Components 
import {Logo, Import} from './components/SVGs';

function App() {
  // const [image, setImage] = useState("/doom.png");
  const [image, setImage] = useState(null);
  const [lyrics, setLyrics] = useState("");
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  // Tu aake mera chain cheen le sangeeta, tu kahe to rozz likhu kaveeta :3 

  return (
    <>
      <p>lyriQ</p>

      {/* lyrics card */}
      <div className="card">

      {/* Conditionally Render this */}
      {!image ? 
        <div className="import-screen"> 
          <Import />
          <p>Add an Image</p>
        </div> 
          :
        <div
          className="background"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <p className="lyrics"> {lyrics} </p>
        </div>
      } 

        <div className="card-footer">
          <p className="song-info">
            {(artist || song) ? 
              `${artist}, "${song}"` : ""  
            }
          </p>
          <Logo />
        </div>
      </div>

      <form className="form">
        <fieldset>
            <legend> lyrics card (i) </legend>
          
          {/* set image: */}
            <label>
              choose image :
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
            </label>

          {/* set song: */}
            <label>
              Lyrics :
              <textarea
                type="text"
                placeholder="here geos Lyrics..."
                rows="3"
                value={lyrics}
                onChange={(e) => setLyrics(e.target.value)}
              />
            </label>

          {/* set song: */}
            <label>
              Artist Name :
              <input
                type="text"
                placeholder="Artist"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
              />
            </label>

          {/* set song: */}
            <label>
              Song Name :
              <input
                type="text"
                placeholder="Song"
                value={song}
                onChange={(e) => setSong(e.target.value)}
              />
            </label>
        </fieldset>
      </form>
    </>
  );
}

export default App;
