import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CardList from "./components/CardList";
import Quotes from "./components/Quotes";
import Gambar from "./assets/images/gambar1.png";
const quotes =
  "Disaat payung teduh ku dengar , disitu lah tugas-tugas terbabat abis";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList
      name="Alvin Alvrahesta"
      nim="21120118120025"
      kelompok="38"
      isNameBold
      image={Gambar}
    />
    <Quotes author="Orang" quotes={quotes} />
  </React.StrictMode>,
  document.getElementById("root")
);
