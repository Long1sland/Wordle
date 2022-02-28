import React from "react";
import { Wrapper } from "./keyboard.styles";

const Keys = () => {
  const handleKeyPress = (e) => {
    const key = e.key;

    if (key.match(/^[a-z]$/)) {
      console.log(key);
    }
    if (key === "Enter") {
      console.log("this is the enter key");
      return;
    }
    if (key === "Delete" || key === "Backspace") {
      console.log("this is the delete key");
      return;
    }
  };

  document.addEventListener("keydown", handleKeyPress);
  const handleClick = (e) => {
    const key = e.target.innerText;
    if (key === "Enter") {
      console.log("this is the enter key");
      return;
    }
    if (key === "Del") {
      console.log("this is the delete key");
      return;
    }
    console.log(key);
  };

  return (
    <Wrapper onClick={handleClick}>
      <button className="key">Q</button>
      <button className="key">W</button>
      <button className="key">E</button>
      <button className="key">R</button>
      <button className="key">T</button>
      <button className="key">Y</button>
      <button className="key">U</button>
      <button className="key">I</button>
      <button className="key">O</button>
      <button className="key">P</button>
      <div className="space"></div>
      <button className="key">A</button>
      <button className="key">S</button>
      <button className="key">D</button>
      <button className="key">F</button>
      <button className="key">G</button>
      <button className="key">H</button>
      <button className="key">J</button>
      <button className="key">K</button>
      <button className="key">L</button>
      <div className="space"></div>
      <button className="key large">Enter</button>
      <button className="key">Z</button>
      <button className="key">X</button>
      <button className="key">C</button>
      <button className="key wrong-location">V</button>
      <button className="key wrong">B</button>
      <button className="key correct">N</button>
      <button className="key">M</button>
      <button className="key large">Del</button>
    </Wrapper>
  );
};

export default Keys;
