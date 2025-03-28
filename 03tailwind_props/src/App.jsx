import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Abhishek",
    age:21
  }
  let myArr=[1,2,3]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
      {/* <Card channel="Chai aur react" someObj={myObj} someArr={myArr}/> */}
      <Card username="Abhishek"/>
      <Card username="Chai aur react"/>
    </>
  )
}

export default App
