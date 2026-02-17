// import style
import { useEffect, useEffectEvent, useRef, useState } from "react";
import "./index.css";

// import Components
import { Logo, Import } from "./components/SVGs";

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
    console.log(card2export.current);
    toPng(card2export.current, {cacheBust: true})
      .then((imageURL)=>{
        const link = document.createElement('a');
        link.download = 'lyriq-card.png';
        link.href = imageURL;
        link.click()
      })
      .catch((err)=>{{
        console.log(err);
      }})
  }
  
  return (
    <>
      <p>lyriQ</p>
      <LyricsCard image={image} lyrics={lyrics} artist={artist} song={song} ref={card2export}/>

      <br />
      <button onClick={handleDownload}>Download!</button>
      <br />

      <AddInfo
        lyrics={lyrics}
        artist={artist}
        song={song}
        setImage={setImage}
        setLyrics={setLyrics}
        setArtist={setArtist}
        setSong={setSong}
      />

      {/* lyrics card */}
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
  );
}
