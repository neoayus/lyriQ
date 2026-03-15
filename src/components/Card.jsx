import { Import, Logo} from "./SVGs";

export default function Card({data, ref, ratioStyle}) {

  // refactor: split the lyrics block in different bars on line brak.
  const lyricsBlock = data.lyrics.split("\n").map((bar, index)=>(
    <span className="bar" key ={index}>
      {bar} <br/>
    </span>
  ))
  

  return (
    <div className="card" ref={ref} style={ratioStyle}>
      {/* Conditionally Render this */}
      {!data.cover ? (
        <div className="import-screen">
          <Import />
          <p>Add an Image</p>
        </div>
      ) : (
        <div
          className="background"
          style={{
            backgroundImage: `url(${data.cover})`,
          }}
        >
          <div className="lyrics"> {lyricsBlock} </div>
        </div>
      )}

      <div className="card-footer">
        <p className="song-info">
          {data.artist || data.song ? `${data.artist}, "${data.song}"` : ""}
        </p>
        <Logo />
      </div>
    </div>
  );
}