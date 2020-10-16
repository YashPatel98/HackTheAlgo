import React from "react";
import "./App.css";
//import Dtable from './Components/Dtable'
//import LcsInfo from "./Components/LcsInfo";
import Navigation from './Components/Navbar/Navbar';
import Routes from './Routes';
//import DenseAppBar from './Components/AppBar/DenseAppBar';
//import MediaCard from "./Components/LcsCard/MediaCard";
function App() {
  return (
    <div className="App">
            <Navigation />
            <Routes />
    </div>
  );
}

export default App;
