import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Timer from './components/Timer'
import Clock from './components/Clock'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <div>
        {Header()}
        <Timer />
        <Clock />
      </div>
    </>
  )
}

export default App
