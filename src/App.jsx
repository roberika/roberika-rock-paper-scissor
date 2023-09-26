import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tab from './Tab/Tab.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
import rockIcon from './assets/rock.svg'
import paperIcon from './assets/paper.svg'
import scissorsIcon from './assets/scissors.svg'

function App() {
  const [count, setCount] = useState(0)
  const [chart, setChart] = useState({
    show: [
      "rock", "paper", "scissors",
    ],
    elementDetail: {
      rock: { element: "Rock", icon: rockIcon, className: "chart-element-rock" },
      paper: { element: "Paper", icon: paperIcon, className: "chart-element-paper" },
      scissors: { element: "Scissors", icon: scissorsIcon, className: "chart-element-scissors" },
    }, outcomeTable: {
      corner: "-",
      header: ["rock", "paper", "scissors",],
      rock: ["tie", "lose", "win",],
      paper: ["win", "tie", "lose",],
      scissors: ["lose", "win", "tie",],
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
