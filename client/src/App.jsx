import { useState } from 'react'
import Home from '../src/pages/Home.jsx'
import Fetch from './services/Api.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/> 
    <Fetch />
    </> 
  )
}

export default App
