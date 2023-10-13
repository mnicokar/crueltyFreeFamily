import { useState } from "react";
import NavBar from "./components/NavBar";
import bunny from "./assets/icons/bunny.svg";
import "./index.css";
import Search from "./components/Search";

//https://www.youtube.com/watch?v=5R9jFHlG6ik

function App() {
  return (
    <>

      <NavBar />
      <img
        src={bunny}
        alt="Picture of bunny"
        style={{ width: "150px", height: "150px" }}
      />

      <Search/>
    </>
  );
}

export default App;
