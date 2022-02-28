import React from "react";
import { GlobalStyle } from "./Global.styles";
import Header from "./Components/Header/header";
import Grid from "./Components/Grid/grid";
import Keys from "./Components/Keyboard/keyboard";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header></Header>
      <Grid></Grid>
      <Keys></Keys>
      <GlobalStyle></GlobalStyle>
    </div>
  );
}

export default App;
