// import style
import { useState } from "react";
import "./index.css";

function App() {
  const [image, setImage] = useState();
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
        <p> imma div </p>

        {/* The accept attribute value is a string that defines the file types the file input should accept. */}
        <input
          type="file"
          accept=".png, .jpeg, .jpg"
          // value={image}
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setImage(URL.createObjectURL(file));
            }
          }}
        />
      </div>
    </>
  );
}

export default App;
