import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [count,setCount]=useState(0);
  const increaseCount=()=>{
    setCount(count+1);
  }
  const decreaseCount=()=>{
    if(count===0){
      alert('Count cannot be less than 0.');
      return;
    }
    setCount(count-1);
  }
  const resetCount=()=>{
    setCount(0);
  }
  useEffect(()=>{
    console.log("useEffect 1 is executing....")
  });

  useEffect(()=>{
    console.log("useEffect 2 is executing....")
  },[count]);

  return (
    <div className="App">
      {console.log("Rendering....")}
      <div>Count is: {count}</div>
      <button onClick={decreaseCount}>-</button>
      <button onClick={increaseCount}>+</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default App;
