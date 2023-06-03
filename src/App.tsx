import React from "react";
import "./App.css";
import Carousel from "./components/carousel";

function App() {
  return <div className="App">{/* write your component here */}
    <Carousel >
      <div className={'content iphone'}>
        <p className={'title'}>xPhone</p>
        <p className={'text'}>Lots to love.Less to spend.</p>
        <p className={'text'}>Starting at $399.</p>
      </div>
      <div className={'content tablet'}>
        <p className={'title'}>Tablet</p>
        <p className={'text'}>Just the right amount of everything.</p>
      </div>
      <div className={'content airPods'}>
        <p className={'title'}>Buy a Tablet or xPhone for college.</p>
        <p className={'title'}>Get airPods.</p>
      </div>
    </Carousel>
  </div>;
}

export default App;
