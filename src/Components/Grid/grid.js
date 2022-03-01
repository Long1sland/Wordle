import React, { useEffect, useRef, useState } from "react";
import useInputFetch from "../../useInputFetch";
import { Wrapper, Tile, Content } from "./grid.styles";

const Grid = () => {
  console.log("rerendered");
  const gridItems = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  const { tiles } = useInputFetch();

  console.log(tiles);

  return (
    <Wrapper>
      <Content>
        {gridItems.map((id, i) => (
          <Tile className="tile" key={i}>
            {tiles[i]}
          </Tile>
        ))}
      </Content>
    </Wrapper>
  );
};

export default Grid;
