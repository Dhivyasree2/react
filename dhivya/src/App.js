import React from "react";
import Home,{Voting} from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import {
  Route,Routes,
 } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
     <h1>hiii</h1>
     <Home/>
     <Voting/>
    </div>
  );
}

export default App;
