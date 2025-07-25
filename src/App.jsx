import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListComponent from "./components/listComponent.jsx";

function App() {
  //const [count, setCount] = useState(0)
  //load initial data


  return (
    <>
      <h1>CockTail Drink App</h1>
      <ListComponent />
    </>
  )
}

export default App
