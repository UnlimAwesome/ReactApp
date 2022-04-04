import React, {useState} from "react";
import Pattern from "./components/Pattern/Pattern";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Slider from "./components/Slider/Slider";
import Content from "./components/Content/Content";
import "./App.css"

function App() {

  return (
    <div className="App">
        <div className="page">
            <div className="page_header">
                <h1 className="page_title">
                    Наши топ-блогеры
                </h1>
                <h4 className="page_subtitle">
                    Лучше специалисты в своем деле,
                    средний опыт работы в профессии - 27 лет
                </h4>
            </div>
            <Content/>
            <Pattern width={174} height={174} r={2.5} cx={2.5} cy={2.5} id={"right-pattern"} fill={"url(#right-pattern)"} className={"right_pattern"}/>
            <Pattern width={199} height={199} r={2} cx={2} cy={2} id={"left-pattern"} fill={"url(#left-pattern)"} className={"left_pattern"}/>
        </div>
    </div>
  );
}

export default App;
