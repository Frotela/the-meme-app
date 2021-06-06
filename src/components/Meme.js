import React, { useEffect, useState } from "react";
import Title from './Title';

function Meme() {
  const [meme, setMeme] = useState({});

  useEffect(() => {
    getMeme();
  }, []);

  const getMeme = async () => {
    let memeData = await fetch("https://meme-api.herokuapp.com/gimme/wholesomememes").then(
      (data) => data.json()
    );
    setMeme(memeData);
  };

  return (
    <div>

      <button onClick={getMeme}>Next Meme</button>
      <div className="card">
      <Title title={meme.title} />
      <img src={meme.url} style={{width : "100%"}} alt={meme.title} />
      </div>
    </div>
  );
}

export default Meme;
