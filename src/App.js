import React from "react";
import './App.css';
import Pattern from "./components/Pattern/Pattern";

function App() {
  return (
    <div className="App">
        <Pattern width={174} height={174} r={2.5} cx={2.5} cy={2.5} id={"smaller-pattern"} fill={"url(#smaller-pattern)"}/>
        <Pattern width={199} height={199} r={2} cx={2} cy={2} id={"bigger-pattern"} fill={"url(#bigger-pattern)"}/>

    </div>
  );
}

export default App;
