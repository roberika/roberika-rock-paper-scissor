import { useState, useContext, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tab from './Tab/Tab.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'

import rPlainIcon from './assets/icons/r.svg'
import rFullIcon from './assets/icons/r_full.svg'
import winIcon from './assets/icons/win.svg'
import loseIcon from './assets/icons/lose.svg'
import tieIcon from './assets/icons/tie.svg'
import winShineIcon from './assets/icons/win_shine.svg'
import loseShineIcon from './assets/icons/lose_shine.svg'
import tieShineIcon from './assets/icons/tie_shine.svg'

import rockIcon from './assets/icons/rock.svg'
import paperIcon from './assets/icons/paper.svg'
import scissorsIcon from './assets/icons/scissors.svg'
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

import rockHandIcon from './assets/hands/rock.svg'
import paperHandIcon from './assets/hands/paper.svg'
import scissorsHandIcon from './assets/hands/scissors.svg'
import thunderHandIcon from './assets/hands/thunder.svg'
import lightningHandIcon from './assets/hands/lightning.svg'
import actualPaperHandIcon from './assets/hands/actual_paper.svg'
import actualGunHandIcon from './assets/hands/actual_gun.svg'
import bigGunHandIcon from './assets/hands/big_gun.svg'
import gunHandIcon from './assets/hands/gun.svg'
import nineSpadesHandIcon from './assets/hands/nine_spades.svg'
import aceHeartsHandIcon from './assets/hands/ace_hearts.svg'
import dragonHandIcon from './assets/hands/dragon.svg'
import fireHandIcon from './assets/hands/fire.svg'
import waterHandIcon from './assets/hands/water.svg'
import earthHandIcon from './assets/hands/earth.svg'
import swordHandIcon from './assets/hands/sword.svg'
import fingerHandIcon from './assets/hands/finger.svg'

import backgroundImage from './assets/background.svg'
import down1Icon from './assets/icons/down1.svg'
import down2Icon from './assets/icons/down2.svg'
import down3Icon from './assets/icons/down3.svg'

import Chart from './Tab/Chart.jsx'

import { ChartContext } from './Context/ChartContext'
import { PanelContext } from './Context/PanelContext'
import { GameContext } from './Context/GameContext'

function App() {

  const setCornerIconFrame = (frame) => {
    setChart((prev) => ({
      ...prev,
      cornerIconFrame: frame,
    }))
  };

  const [chart, setChart] = useState({
    cornerIconFrame: 0,
    setCornerIconFrame: setCornerIconFrame,
    show: [
      "rock", "paper", "scissors", "gun", "bigGun",
    ], elementDetail: {
      none: { handIcon: paperHandIcon },
      rock: { key: "rock", text: "Rock", icon: rockIcon, handIcon: rockHandIcon, className: "chart-element-rock" },
      paper: { key: "paper", text: "Paper", icon: paperIcon, handIcon: paperHandIcon, className: "chart-element-paper" },
      scissors: { key: "scissors", text: "Scissors", icon: scissorsIcon, handIcon: scissorsHandIcon, className: "chart-element-scissors" },
      thunder: { key: "thunder", text: "Thunder", icon: thunderIcon, handIcon: thunderHandIcon, className: "chart-element-thunder" },
      lightning: { key: "lightning", text: "Lightning", icon: lightningIcon, handIcon: lightningHandIcon, className: "chart-element-lightning" },
      fire: { key: "fire", text: "Fire", icon: fireIcon, handIcon: fireHandIcon, className: "chart-element-fire" },
      water: { key: "water", text: "Water", icon: waterIcon, handIcon: waterHandIcon, className: "chart-element-water" },
      earth: { key: "earth", text: "Earth", icon: earthIcon, handIcon: earthHandIcon, className: "chart-element-earth" },
      nineSpades: { key: "nineSpades", text: "Nine of Spades", icon: nineSpadesIcon, handIcon: nineSpadesHandIcon, className: "chart-element-nine-spades" },
      aceHearts: { key: "aceHearts", text: "Ace of Hearts", icon: aceHeartsIcon, handIcon: aceHeartsHandIcon, className: "chart-element-ace-hearts" },
      actualPaper: { key: "actualPaper", text: "Actual Paper", icon: actualPaperIcon, handIcon: actualPaperHandIcon, className: "chart-element-actual-paper" },
      actualGun: { key: "actualGun", text: "Actual Gun", icon: actualGunIcon, handIcon: actualGunHandIcon, className: "chart-element-actual-gun" },
      bigGun: { key: "bigGun", text: "Big Gun", icon: bigGunIcon, handIcon: bigGunHandIcon, className: "chart-element-big-gun" },
      gun: { key: "gun", text: "Gun", icon: gunIcon, handIcon: gunHandIcon, className: "chart-element-gun" },
      dragon: { key: "dragon", text: "Dragon", icon: dragonIcon, handIcon: dragonHandIcon, className: "chart-element-dragon" },
      sword: { key: "sword", text: "Sword", icon: swordIcon, handIcon: swordHandIcon, className: "chart-element-sword" },
      finger: { key: "finger", text: "Finger", icon: fingerIcon, handIcon: fingerHandIcon, className: "chart-element-finger" },
    }, outcomeTable: {
      corner: { text: "Corner", icons: [rPlainIcon, down1Icon, down3Icon, down2Icon,] },
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
      "log", "glossary", "about", "settings",
    ], panelDetail: {
      log: { text: "Log" },
      glossary: { text: "Glossary" },
      about: { text: "About" },
      settings: { text: "Settings" },
    }, selected: 0
    , focused: 0
    , onClick: moveTab,
  })

  const [delayedText, setDelayedText] = useState("");

  const confirmThis = (hand, gameContext) => {
    setGame((prev) => ({
      ...prev,
      selection: hand,
    }));
  }

  const chooseThis = (event, hand, gameContext) => {
    // setTimeout(() => {
    //   setDelayedText("Computer's Turn");
    // }, 1000);

    if ( gameContext.selection == "none" | gameContext.selection != hand){
      confirmThis(hand);
      return;
    }
    
    let newPlayerHand = hand;
    let newComputerHand = getComputerHand(hand, gameContext);
    let newResult = chart.outcomeTable[newPlayerHand][newComputerHand];
    let log1 = <div className="text-active">{"You played [" + newPlayerHand + "]."}</div>;
    let log2 = <div className="text-active">{"Our contender played [" + newComputerHand + "]."}</div>;
    let log3 = null;
    switch(newResult){
      case "none" : 
        log3 = <div className="text-background">{"But nothing happened..."}</div>
        break
      case "win" : 
        log3 = <div className="text-win">{"And you won. Nice."}</div>
        break
      case "lose" : 
        log3 = <div className="text-lose">{"And you lost. What a shame."}</div>
        break
      case "tie" : 
        log3 = <div className="text-background">{"And it's a tie."}</div>
        break
      case "winShine" : 
        log3 = <div className="text-win-shine">{"AND YOU DECIMATED THEM! HURRAH!"}</div>
        break
      case "loseShine" : 
        log3 = <div className="text-lose-shine">{"AND YOU\'RE FUCKING DESTROYED!"}</div>
        break
      case "tieShine" : 
        log3 = <div className="text-tie-shine">{"AND NOTHING HAPPENED."}</div>
        break
    }
    let newRound = gameContext.round + 1;
    let log4 = <div className="text-hidden"> blank text </div>;
    let log5 = <div className="text-background"> {"== == == == Round " + newRound + " == == == =="} </div>;
    setGame((prev) => ({
      ...prev,
      selection: "none",
      playerHand: newPlayerHand,
      computerHand: newComputerHand,
      result: newResult,
      round: newRound,
      log: [...prev.log, log1, log2, log3, log4, log5 ],
    }));
    
    console.log([gameContext.round, gameContext.playerHand, gameContext.computerHand, gameContext.result])
  }

  const getComputerHand = (hand, gameContext) => {
    switch(gameContext.aiMode){
      case 0:
        return chart.show[2]
      case 1 : 
        return chart.show[Math.floor(Math.random() * chart.show.length)];
    }
  }

  const [game, setGame] = useState({
    aiMode: 0,
    aiModes: ["Robert Mode", "Random Mode",],
    round: 1,
    selection: "none",
    turns: [ "Player", "Computer" ],
    playerHand: "none",
    computerHand: "none",
    result: "none",
    results: { 
      none: "None",
      win: "Win", 
      lose: "Lose", 
      tie: "Draw", 
      winShine: "Great Victory",
      loseShine: "Great Defeat",
      tieShine: "Even Fight", },
    onClick: chooseThis,
    log: [
      <div className="text-background">Initiating Better Rock Paper Scissors...</div>,
      <div className="text-background">Welcome, contender!</div>,
      <div className="text-hidden"> blank text </div>,
      <div className="text-background"> == == == == Round 1 == == == == </div>,
    ],
  })

  return (
    <div className='background' style={{backgroundImage: `url(${backgroundImage})`}}>
      <ChartContext.Provider value={chart}>
        <PanelContext.Provider value={panel}>
          <GameContext.Provider value={game}>
          <div className='app'>
            <div className='tabs'>
              
            <div className='tab-panel'>
              <Chart />
            </div>
            </div>
            <Tab></Tab>
            <Sidebar></Sidebar>
          </div>
          </GameContext.Provider>
        </PanelContext.Provider>
      </ChartContext.Provider>
    </div>
  )
}

export default App
