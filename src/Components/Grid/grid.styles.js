import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(2.5rem, 4rem));
  grid-template-rows: repeat(6, minmax(2.5rem, 4rem));
  gap: 0.25em;
`;

export const Tile = styled.div`
  border: 0.05em solid hsl(240, 2%, 23%);
  font-size: 2em;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;
