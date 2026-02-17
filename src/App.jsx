// import style
import { useRef, useState } from "react";
import "./index.css";

// import Components
import { Logo, Import } from "./components/SVGs";
import Navbar from './components/Navbar';

// import library function to export lyric card 
import { toPng } from 'html-to-image';

function App() {

  // hooks: 
  const [image, setImage] = useState(null);
  const [lyrics, setLyrics] = useState("");
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");

  const card2export  = useRef(null);

  function handleDownload(){
    // console.log(card2export.current);
    toPng(card2export.current, {cacheBust: true})
      .then((imageURL)=>{
        const link = document.createElement('a');
        link.download = 'lyriq-card.png'; // specify file name on download  
        link.href = imageURL; // donwload url, from toPng function 

        // make download conditional, to only run when there's an image
        image && link.click() // trigger aclick on this element
      })
      .catch((err)=>{{
        console.log(err);
      }})
  }
  
  return (
    <>
      {/* FEAT: Add Nav Bar  */}
      <Navbar /> 

      {/* <LyricsCard image={image} lyrics={lyrics} artist={artist} song={song} ref={card2export}/> */}
      {/* <br />
      <button onClick={handleDownload} className="download">Download!</button>
      <br />

      <AddInfo
        lyrics={lyrics}
        artist={artist}
        song={song}
        setImage={setImage}
        setLyrics={setLyrics}
        setArtist={setArtist}
        setSong={setSong}
      /> */}

    </>
  );
}

export default App;

function LyricsCard({ image, lyrics, artist, song, ref}) {

  return (
    <div className="card" ref={ref}>

      {/* Conditionally Render this */}
      {!image ? (
        <div className="import-screen">
          <Import />
          <p>Add an Image</p>
        </div>
      ) : (
        <div
          className="background"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <p className="lyrics"> {lyrics} </p>
        </div>
      )}

      <div className="card-footer">
        <p className="song-info">
          {artist || song ? `${artist}, "${song}"` : ""}
        </p>
        <Logo />
      </div>
    </div>
  );
}

function AddInfo({ song, artist, lyrics, setSong, setArtist, setLyrics, setImage }) {
  return (
    <form className="form">
      <fieldset>
        <legend> lyrics card (i) </legend>

        {/* set image: */}
        <label>
          choose image :
          <input
            type="file"
            accept=".png, .jpeg, .jpg"

            // ERROR : image can't be exported with html-to-image with blobURL, hence, it's need to be converted to base64 first.
            // use file reader here, instead of blobUrl 
            // bloburl is just used to preview things, it dosen't read the whole file but makes a temporary pointer to it, which is causing the error.
            onChange={(e) => {
              const fileObject = e.target.files[0];
              if(!fileObject) return ; 
              
              const reader = new FileReader();  // create a file reader 
              reader.onload =() => { // callback function to run after the file has been fully read (async) operation
                setImage(reader.result); // update image state
              }
              reader.readAsDataURL(fileObject); // read the file as data url 
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
  );
}
