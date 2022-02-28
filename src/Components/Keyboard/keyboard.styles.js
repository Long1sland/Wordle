import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(20, minmax(auto, 1.25rem));
  grid-auto-rows: 3em;

  @media screen and (max-width: 450px) {
    grid-auto-rows: 4em;
  }

  gap: 0.25em;
  justify-content: center;
  padding: 10px;

  .key {
    grid-column: span 2;
    background-color: hsl(
      var(--hue, 200),
      var(--saturation, 1%),
      calc(var(--lightnessOffset, 0%) + var(--lightness, 51%))
    );
    color: white;
    border: none;
    padding: 0;
    cursor: pointer;
    user-select: none;
    font-size: inherit;
    border-radius: 0.25em;
  }

  .key.large {
    grid-column: span 3;
  }

  .key.wrong {
    --lightness: 23%;
  }

  .key:hover,
  .key:focus {
    --lightnessOffset: 10%;
  }

  .key.wrong-location {
    --hue: 49;
    --saturation: 51%;
    --lightness: 47%;
  }

  .key.correct {
    --hue: 115;
    --saturation: 51%;
    --lightness: 47%;
  }
`;
