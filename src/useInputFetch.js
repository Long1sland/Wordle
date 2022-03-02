import { useEffect, useState } from "react";

const useInputFetch = () => {
  const [tiles, setTiles] = useState([]);

  //For Inputs from Keyboard
  const handleKeyPress = (e) => {
    const key = e.key;

    if (key.match(/^[a-z]$/)) {
      const newData = [...tiles, key.toUpperCase()];
      setTiles((prev) => {
        if (prev.length === 30) {
          return prev;
        }
        return newData;
      });
    }

    if (key === "Backspace") {
      setTiles((prev) => {
        const newData = [...prev];
        newData.pop();
        return newData;
      });
    }

    //if (key === "Enter") {
    //  console.log("this is the enter key");
    //  return;
    //}

    //   console.log("pushed");
    // }
  };

  //For Inputs from Onscreen Keyboard
  const handleClick = (e) => {
    const key = e.target.innerText;

    if (e.target.tagName === "BUTTON") {
      if (key === "Enter") {
        console.log("this is the enter key");
        return;
      }
      if (key === "Del") {
        setTiles((prev) => {
          const newData = [...prev];
          newData.pop();
          return newData;
        });
        return;
      }
      setTiles([...tiles, key]);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("click", handleClick);
    };
  });

  return { tiles };
};

export default useInputFetch;
