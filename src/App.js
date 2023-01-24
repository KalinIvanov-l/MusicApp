import React from "react";
import Song from "./components/song";
import Player from "./components/player";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
