import './App.css';
import { Routes, Route } from "react-router-dom";
import React, {useState, createContext, useContext} from "react";

import Homepage from "./pages/Homepage";
import ServantPage from "./pages/ServantPage";

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
            <Route path="/Servant/:id" element = {<ServantPage/>}/>
          </Routes>
    </Context.Provider>
  );
}

export default App;
