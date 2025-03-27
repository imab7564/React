import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // useState is one of the most commonly used hooks in React.
  //It allows React to re-render the component when the state changes.
  //setCounter is a function that updates the state.
  let[counter,setCounter]=useState(15)

  const addValue= ()=>{
    //counter=counter+1
    if(counter<=19)
    setCounter(counter+1)
  }

  //if condition so that counter does not go below 0
  const removeValue=()=>{
    if(counter>=1)
    setCounter(counter-1)
  }
  return (
    <>
      <h1 >Chai aur React</h1>
      <h2>Counter Value:{counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br/><br/>
      <button  onClick={removeValue}>Remove Value{counter}</button>
    </>
  )
}

export default App
