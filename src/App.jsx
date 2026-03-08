import { useRef, useState } from "react";
import { Logo, Import } from "./components/SVGs";

import Navbar from './components/Navbar';
import Form from './components/Form'

import "./index.css";

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
      <Navbar /> 

      <div className="page">
        <LyricsCard image={image} lyrics={lyrics} artist={artist} song={song} ref={card2export}/>

        <button onClick={handleDownload} className="download">Download!</button>

        <Form
          lyrics={lyrics}
          artist={artist}
          song={song}
          setImage={setImage}
          setLyrics={setLyrics}
          setArtist={setArtist}
          setSong={setSong}
        />

      </div>

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

