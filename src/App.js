import React,{useState} from 'react';
import {Message} from './Message.js'
import './App.css';

function App() {
  let [count,setCount]=useState(1);
  let [isMorning,setMorning]=useState(true);
  return (
    <div className={`box ${isMorning ? 'dayLight':''}`}>
      <h1>Day time={isMorning ? 'Morning':'Night'}</h1>
     <Message count={count} />
      <br />
      <button onClick={()=>setCount(++count)}>Update COunter</button>
      <button onClick={()=>setMorning(!isMorning)}>Update Day</button>
    </div>
  );
  }

export default App;
