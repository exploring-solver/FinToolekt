import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/Standard/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element= {<Home/>}/>
      </Routes>
    </>
  )
}

export default App
