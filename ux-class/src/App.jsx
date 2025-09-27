import { useState } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from react-router-dom;
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="bg-red-400">Hello this is my react app</h1>
    </>
  )
}

export default App
