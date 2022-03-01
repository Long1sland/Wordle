import { useState, useEffect, useRef } from "react";

const useInputFetch = () => {
  const [tiles, setTiles] = useState([""]);
  const [currentLetter, setCurrentLetter] = useState("");
  const count = useRef(-1);
  const initalRender = useRef(true);
  useEffect(() => {
    if (initalRender.current) {
      initalRender.current = false;
      return;
    }
    if (count.current === 29) {
      return;
    }
    setTiles((tiles) => {
      const newTile = [...tiles];
      newTile[count.current] = currentLetter;
      return newTile;
    });
    count.current = count.current + 1;
  }, [currentLetter]);

  //For Inputs from Keyboard
  const handleKeyPress = (e) => {
    const key = e.key;

    if (key.match(/^[a-z]$/)) {
      setCurrentLetter(key.toUpperCase());
      return;
    }
    if (key === "Enter") {
      console.log("this is the enter key");
      return;
    }
    if (key === "Backspace" || key === "Delete") {
      //setTiles((prev) => {
      //  const test = [...prev];
      //  test[count.current] = null;
      //  count.current = count.current;
      //  return test;
      //});
      console.log("pushed");
    }
  };

  //For Inputs from Onscreen Keyboard
  const handleClick = (e) => {
    const key = e.target.innerText;
    if (e.target.tagName !== "BUTTON") {
      return;
    }
    if (key === "Enter") {
      console.log("this is the enter key");
      return;
    }
    if (key === "Del") {
      console.log("this is the delete key");
      return;
    }
    setCurrentLetter(key);
  };

  document.addEventListener("keydown", handleKeyPress);
  document.addEventListener("click", handleClick);

  return { tiles };
};

export default useInputFetch;
