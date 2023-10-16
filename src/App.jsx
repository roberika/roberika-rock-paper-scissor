import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tab from './Tab/Tab.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'

import rockIcon from './assets/icons/rock.svg'
import paperIcon from './assets/icons/paper.svg'
import scissorsIcon from './assets/icons/scissors.svg'
import rPlainIcon from './assets/icons/r.svg'
import rFullIcon from './assets/icons/r_full.svg'
import winIcon from './assets/icons/win.svg'
import loseIcon from './assets/icons/lose.svg'
import tieIcon from './assets/icons/tie.svg'
import winShineIcon from './assets/icons/win_shine.svg'
import loseShineIcon from './assets/icons/lose_shine.svg'
import tieShineIcon from './assets/icons/tie_shine.svg'
import thunderIcon from './assets/icons/thunder.svg'
import lightningIcon from './assets/icons/lightning.svg'
import actualPaperIcon from './assets/icons/actual_paper.svg'
import actualGunIcon from './assets/icons/actual_gun.svg'
import bigGunIcon from './assets/icons/big_gun.svg'
import gunIcon from './assets/icons/gun.svg'
import nineSpadesIcon from './assets/icons/nine_spades.svg'
import aceHeartsIcon from './assets/icons/ace_hearts.svg'
import dragonIcon from './assets/icons/dragon.svg'
import fireIcon from './assets/icons/fire.svg'
import waterIcon from './assets/icons/water.svg'
import earthIcon from './assets/icons/earth.svg'
import swordIcon from './assets/icons/sword.svg'
import fingerIcon from './assets/icons/finger.svg'

import Game from './Game/Game.jsx'
import { ChartContext } from './Context/ChartContext'
import { PanelContext } from './Context/PanelContext'

function App() {
  const [chart, setChart] = useState({
    show: [
      "rock", "paper", "scissors", "gun", "bigGun",
    ], elementDetail: {
      rock: { text: "Rock", icon: rockIcon, className: "chart-element-rock" },
      paper: { text: "Paper", icon: paperIcon, className: "chart-element-paper" },
      scissors: { text: "Scissors", icon: scissorsIcon, className: "chart-element-scissors" },
      thunder: { text: "Thunder", icon: thunderIcon, className: "chart-element-thunder" },
      lightning: { text: "Lightning", icon: lightningIcon, className: "chart-element-lightning" },
      fire: { text: "Fire", icon: fireIcon, className: "chart-element-fire" },
      water: { text: "Water", icon: waterIcon, className: "chart-element-water" },
      earth: { text: "Earth", icon: earthIcon, className: "chart-element-earth" },
      nineSpades: { text: "Nine of Spades", icon: nineSpadesIcon, className: "chart-element-nine-spades" },
      aceHearts: { text: "Ace of Hearts", icon: aceHeartsIcon, className: "chart-element-ace-hearts" },
      actualPaper: { text: "Actual Paper", icon: actualPaperIcon, className: "chart-element-actual-paper" },
      actualGun: { text: "Actual Gun", icon: actualGunIcon, className: "chart-element-actual-gun" },
      bigGun: { text: "Big Gun", icon: bigGunIcon, className: "chart-element-big-gun" },
      gun: { text: "Gun", icon: gunIcon, className: "chart-element-gun" },
      dragon: { text: "Dragon", icon: dragonIcon, className: "chart-element-dragon" },
      sword: { text: "Sword", icon: swordIcon, className: "chart-element-sword" },
      finger: { text: "Finger", icon: fingerIcon, className: "chart-element-finger" },
    }, outcomeTable: {
      corner: { text: "Corner", icon: rPlainIcon },
      header: [
        "rock", "paper", "scissors", "gun", "bigGun", "actualGun", "sword", 
        "finger", "earth", "water", "fire", "thunder", "lightning", "actualPaper",
        "nineSpades", "aceHearts", "dragon",],
      rock: {
        rock: "tie", //basic
        paper: "lose", //basic
        scissors: "win", //basic
        gun: "lose", //gun
        bigGun: "win", //slow gun
        actualGun: "lose", //gun
        sword: "win", //excalibur
        finger: "win", //taunting
        earth: "lose", //bigger rock
        water: "lose", //just a pebble
        fire: "win", //not flammable
        thunder: "lose", //big electricity split rock
        lightning: "win", //small electricity do nothing
        actualPaper: "tie", //literal paper
        nineSpades: "tie", //literal paper
        aceHearts: "tie", //literal paper
        dragon: "win", //david and dragon goliath
      },
      paper: {
        rock: "win", //basic
        paper: "tie", //basic
        scissors: "lose", //basic
        gun: "lose", //gun
        bigGun: "lose", //paper 0 attack power
        actualGun: "lose", //gun
        sword: "win", //pen and paper beats the sword
        finger: "win", //paper cut
        earth: "win", //just bigger rock
        water: "win", //dissolved
        fire: "lose", //burned
        thunder: "lose", //burned
        lightning: "lose", //burned
        actualPaper: "lose", //paper cut
        nineSpades: "tie", //paper on paper
        aceHearts: "tie", //paper on paper
        dragon: "lose", //fucking dragon
      },
      scissors: {
        rock: "lose", //basic
        paper: "win", //basic
        scissors: "tie", //basic
        gun: "lose", //gun
        bigGun: "win", //slow gun
        actualGun: "lose", //gun
        sword: "lose", //stronger steel
        finger: "", 
        earth: "",
        water: "",
        fire: "",
        thunder: "",
        lightning: "",
        actualPaper: "",
        nineSpades: "",
        aceHearts: "",
        dragon: "",
      },
      gun: {
        rock: "win", 
        paper: "win", 
        scissors: "win", 
        gun: "lose",
        bigGun: "win",
        actualGun: "lose",
        sword: "win",
        finger: "",
        earth: "",
        water: "",
        fire: "",
        thunder: "",
        lightning: "",
        actualPaper: "",
        nineSpades: "",
        aceHearts: "",
        dragon: "",
      },
      bigGun: {
        rock: "lose", 
        paper: "win", 
        scissors: "lose", 
        gun: "lose",
        bigGun: "tie",
        actualGun: "lose",
        sword: "lose",
        finger: "",
        earth: "",
        water: "",
        fire: "",
        thunder: "",
        lightning: "",
        actualPaper: "",
        nineSpades: "",
        aceHearts: "",
        dragon: "",
      },
      actualGun: {
        rock: "win", 
        paper: "win", 
        scissors: "win", 
        gun: "win",
        bigGun: "win",
        actualGun: "loseShine",
        sword: "",
        finger: "",
        earth: "",
        water: "",
        fire: "",
        thunder: "",
        lightning: "",
        actualPaper: "",
        nineSpades: "",
        aceHearts: "",
        dragon: "",
      },
      sword: {
        rock: "",
        paper: "",
        scissors: "",
        gun: "",
        bigGun: "",
        actualGun: "",
        sword: "",
        finger: "",
        earth: "",
        water: "",
        fire: "",
        thunder: "",
        lightning: "",
        actualPaper: "",
        nineSpades: "",
        aceHearts: "",
        dragon: "",
      },
      finger: {
        rock: "",
        paper: "",
        scissors: "",
        gun: "",
        bigGun: "",
        actualGun: "",
        sword: "",
        finger: "",
        earth: "",
        water: "",
        fire: "",
        thunder: "",
        lightning: "",
        actualPaper: "",
        nineSpades: "",
        aceHearts: "",
        dragon: "",
      },
      earth: {
        rock: "",
        paper: "",
        scissors: "",
        gun: "",
        bigGun: "",
        actualGun: "",
        sword: "",
        finger: "",
        earth: "",
        water: "",
        fire: "",
        thunder: "",
        lightning: "",
        actualPaper: "",
        nineSpades: "",
        aceHearts: "",
        dragon: "",
      },
      water: {
        rock: "",
        paper: "",
        scissors: "",
        gun: "",
        bigGun: "",
        actualGun: "",
        sword: "",
        finger: "",
        earth: "",
        water: "",
        fire: "",
        thunder: "",
        lightning: "",
        actualPaper: "",
        nineSpades: "",
        aceHearts: "",
        dragon: "",
      },
      fire: {
        rock: "",
        paper: "",
        scissors: "",
        gun: "",
        bigGun: "",
        actualGun: "",
        sword: "",
        finger: "",
        earth: "",
        water: "",
        fire: "",
        thunder: "",
        lightning: "",
        actualPaper: "",
        nineSpades: "",
        aceHearts: "",
        dragon: "",
      },
      thunder: {
        rock: "",
        paper: "",
        scissors: "",
        gun: "",
        bigGun: "",
        actualGun: "",
        sword: "",
        finger: "",
        earth: "",
        water: "",
        fire: "",
        thunder: "",
        lightning: "",
        actualPaper: "",
        nineSpades: "",
        aceHearts: "",
        dragon: "",
      },
      lightning: {
        rock: "",
        paper: "",
        scissors: "",
        gun: "",
        bigGun: "",
        actualGun: "",
        sword: "",
        finger: "",
        earth: "",
        water: "",
        fire: "",
        thunder: "",
        lightning: "",
        actualPaper: "",
        nineSpades: "",
        aceHearts: "",
        dragon: "",
      },
      actualPaper: {
        rock: "",
        paper: "",
        scissors: "",
        gun: "",
        bigGun: "",
        actualGun: "",
        sword: "",
        finger: "",
        earth: "",
        water: "",
        fire: "",
        thunder: "",
        lightning: "",
        actualPaper: "",
        nineSpades: "",
        aceHearts: "",
        dragon: "",
      },
      nineSpades: {
        rock: "",
        paper: "",
        scissors: "",
        gun: "",
        bigGun: "",
        actualGun: "",
        sword: "",
        finger: "",
        earth: "",
        water: "",
        fire: "",
        thunder: "",
        lightning: "",
        actualPaper: "",
        nineSpades: "",
        aceHearts: "",
        dragon: "",
      },
      aceHearts: {
        rock: "",
        paper: "",
        scissors: "",
        gun: "",
        bigGun: "",
        actualGun: "",
        sword: "",
        finger: "",
        earth: "",
        water: "",
        fire: "",
        thunder: "",
        lightning: "",
        actualPaper: "",
        nineSpades: "",
        aceHearts: "",
        dragon: "",
      },
      dragon: {
        rock: "",
        paper: "",
        scissors: "",
        gun: "",
        bigGun: "",
        actualGun: "",
        sword: "",
        finger: "",
        earth: "",
        water: "",
        fire: "",
        thunder: "",
        lightning: "",
        actualPaper: "",
        nineSpades: "",
        aceHearts: "",
        dragon: "",
      },
    }, outcomeDetail: {
      tie: { className: "chart-outcome-tie", text: "/", icon: tieIcon, },
      lose: { className: "chart-outcome-lose", text: "-", icon: loseIcon, },
      win: { className: "chart-outcome-win", text: "+", icon: winIcon, },
      tieShine: { className: "chart-outcome-tie-shine", text: "/", icon: tieShineIcon, },
      loseShine: { className: "chart-outcome-lose-shine", text: "-", icon: loseShineIcon, },
      winShine: { className: "chart-outcome-win-shine", text: "+", icon: winShineIcon, },
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
