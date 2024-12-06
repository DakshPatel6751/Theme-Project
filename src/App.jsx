import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './componrnts/Content'
import Navbar from './componrnts/Navbar'
import Button from './componrnts/Button'
import { ThemeContext } from './Context/thrmscontext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Navbar/>
      <Content/>
     </div>
     <Button/>
    </>
  )
}

export default App
