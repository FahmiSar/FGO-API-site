import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import React, {useState, createContext, useContext} from "react";

export const Context = React.createContext();

function App() {
  const [activeLabel, setActiveLabel] = useState(null);
    
  const servant_classes = [
      "Shielder", "Saber", "Archer", "Lancer", "Rider", "Caster", "Assassin","Berserker",
      "Alter_Ego", "Ruler", "Avenger", "Moon_Cancer", "Foreigner", "Pretender"
  ]

  return (
    <Context.Provider value = {{activeLabel, setActiveLabel, servant_classes}}>
          <Routes>
            <Route path="/" element = {<Homepage/>}/>
            <Route path="/Homepage" element = {<Homepage/>}/>
          </Routes>
    </Context.Provider>
  );
}

export default App;
