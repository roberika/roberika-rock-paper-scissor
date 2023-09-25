import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tab from './Tab/Tab.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [chart, setChart] = useState({
    show: [
      "rock", "paper", "scissors",
    ],
    outcomeTable: {
      header: ["Rock", "Paper", "Scissors",],
      rock: ["tie", "lose", "win",],
      paper: ["lose", "win", "tie",],
      scissors: ["win", "tie", "lose",],
    }, outcomeDetail: {
      tie: { className: "chart-outcome-tie", outcome: "Tie", },
      lose: { className: "chart-outcome-lose", outcome: "Lose", },
      win: { className: "chart-outcome-win", outcome: "Win", },
    }
  })
  const [panels, setPanels] = useState([
    "Chart",
    "Settings",
    "About",
  ])

  return (
    <div className='app'>
      <div className='game'>
        <p className='m-auto'>
          Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! Hi! v
        </p>
      </div>
      <Tab chart={chart} panels={panels}></Tab>
      <Sidebar panels={panels}></Sidebar>
    </div>
  )
}

export default App
