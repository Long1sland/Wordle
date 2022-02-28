import React from "react";
import { Wrapper, Tile, Content } from "./grid.styles";

const Grid = () => {
  const tiles = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  return (
    <Wrapper>
      <Content>
        {tiles.map((id) => (
          <Tile className="tile" id={id} key={id}>
            A
          </Tile>
        ))}
      </Content>
    </Wrapper>
  );
};

export default Grid;
