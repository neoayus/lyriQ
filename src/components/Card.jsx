import { Import, Logo} from "./SVGs";

export default function Card({data, ref}) {
  return (
    <div className="card" ref={ref}>
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
          <p className="lyrics"> {data.lyrics} </p>
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