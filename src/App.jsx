import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tab from './Tab/Tab.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
import rockIcon from './assets/rock.svg'
import paperIcon from './assets/paper.svg'
import scissorsIcon from './assets/scissors.svg'
import rIndoIcon from './assets/r-indo.svg'
import rPlainIcon from './assets/r-plain.svg'
import winIcon from './assets/win.svg'
import loseIcon from './assets/lose.svg'
import tieIcon from './assets/tie.svg'
import Game from './Game/Game.jsx'
import { ChartContext } from './Context/ChartContext'
import { PanelContext } from './Context/PanelContext'

function App() {
  const [chart, setChart] = useState({
    show: [
      "rock", "paper", "scissors",
    ], elementDetail: {
      rock: { text: "Rock", icon: rockIcon, className: "chart-element-rock" },
      paper: { text: "Paper", icon: paperIcon, className: "chart-element-paper" },
      scissors: { text: "Scissors", icon: scissorsIcon, className: "chart-element-scissors" },
    }, outcomeTable: {
      corner: { text: "Corner", icon: rPlainIcon },
      header: ["rock", "paper", "scissors",],
      rock: ["tie", "lose", "win",],
      paper: ["win", "tie", "lose",],
      scissors: ["lose", "win", "tie",],
    }, outcomeDetail: {
      tie: { className: "chart-outcome-tie", text: "=", icon: tieIcon, },
      lose: { className: "chart-outcome-lose", text: "-", icon: loseIcon, },
      win: { className: "chart-outcome-win", text: "+", icon: winIcon, },
    }
  })

  const moveTab = (event, tab) => {
    setPanel((prev) => ({
      ...prev,
      selected: tab,
      focused: tab,
    }));
  }

  const [panel, setPanel] = useState({
    show: [
      "chart", "settings", "about",
    ], panelDetail: {
      chart: { text: "Chart" },
      settings: { text: "Settings" },
      about: { text: "About" },
    }, selected: 0
    , focused: 0
    , onClick: moveTab,
  })

  return (
    <ChartContext.Provider value={chart}>
      <PanelContext.Provider value={panel}>
        <div className='app'>
          <Game />
          <Tab></Tab>
          <Sidebar></Sidebar>
        </div>
      </PanelContext.Provider>
    </ChartContext.Provider>
  )
}

export default App
