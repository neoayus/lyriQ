export default function Form({ song, artist, lyrics, setSong, setArtist, setLyrics, setImage }) {
  return (
    <form className="form">
      <fieldset>

        <legend> lyrics card (info) </legend>

        <label id='image'>
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

        <label id='lyrics'>
          Lyrics :
          <textarea
            type="text"
            placeholder="here geos Lyrics..."
            rows="3"
            value={lyrics}
            onChange={(e) => setLyrics(e.target.value)}
          />
        </label>

        <label id='artist'>
          Artist Name :
          <input
            type="text"
            placeholder="Artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </label>

        <label id='song'>
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
