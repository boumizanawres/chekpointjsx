// import logo from './logo.svg';
// import './App.css';
import istanbulimg from "./istanbul.png"
import'./style.css';
import istanbulvid from "./turkey.mp4"
import React from "react";

function App() {
  return (
   <>
    <div className="turkey">

 <h1 className="titlered">turkey</h1>

 <br/>

 <img src={istanbulimg} alt='istanbul'/>

 <br/>

 <img src="/cabaducia.jpg"  alt="cabaducia"/>

</div>

<div>
<video width="320" height="240" controls>

 <source src={istanbulvid} alt="videoistanbul"/> 

</video>
</div>
</>

  );
}

export default App;
