import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RawPost/RowPost";
import {originals,action,horror,RomanceMovies,Documentaries} from './urls'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title="Netflix Originals" />
    <RowPost url={action} title="Action" isSmall />
    <RowPost url={horror} title="HorrorMovies" isSmall />
    <RowPost url={RomanceMovies} title="RomanceMovies" isSmall />
    <RowPost url={Documentaries} title="Documentaries" isSmall />




    </div>
  );
}

export default App;
