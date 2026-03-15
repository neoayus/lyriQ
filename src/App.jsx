// import library function to export lyric card
import { toPng } from "html-to-image";
import { useRef, useState } from "react";

import Navbar from "./components/Navbar";
import Card from "./components/Card"
import Form from "./components/Form";

import "./index.css";

export default function App() {

  const [data, setData] = useState({
    cover: null,
    lyrics: "",
    artist: "",
    song: "",
  });

  // feature : option for card ratio
  const [ratio, setRatio] = useState("fourOFive");

  const ratioStyle = {
    height: ratio == "fourOFive" ? "500px" : "400px",
  }

  const card2export = useRef(null);

  function handleDownload() {
    // console.log(card2export.current);
    toPng(card2export.current, { cacheBust: true })
      .then((imageURL) => {
        const link = document.createElement("a");
        link.download = "lyriq-card.png"; // specify file name on download
        link.href = imageURL; // donwload url, from toPng function

        // make download conditional, to only run when there's an image
        data.cover && link.click(); // trigger aclick on this element
      })
      .catch((err) => {
        {
          console.log(err);
        }
      });
  }

  return (
    <>
      <Navbar />
      <div className="page">

        <Card
          data={data}
          ref={card2export}
          ratioStyle={ratioStyle}
        />

        <select id="ratio" onChange={(e)=> setRatio(e.target.value)}> 
          <option value="" hidden> x &nbsp; : &nbsp; x</option>
          <option value="fourOFive">4 : 5</option>
          <option value="oneOone">1 : 1</option>
        </select>

        <button onClick={handleDownload} className="download">
          Download!
        </button>

        <Form data={data} setData={setData} />

      </div>
    </>
  );
}
