import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  function getMemeImage() {
    const memeImg = document.getElementById("meme--img");
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * 100);
    // console.log(memesData.data.memes[0].url);
    memeImg.src = memesArray[randomNumber].url;
    // console.log(memeImg.src);
    // console.log(memeSrc);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <img id="meme--img" src="" />
    </main>
  );
}
