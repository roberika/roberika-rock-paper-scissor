import { useState, useContext, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tab from './Tab/Tab.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'

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

import resetIcon from './assets/icons/reset.svg'
import rPlainIcon from './assets/icons/r.svg'
import rFullIcon from './assets/icons/r_full.svg'
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
    cornerURL: "https://www.wikihow.com/Play-Rock,-Paper,-Scissors",
    show: [
      "rock", "paper", "scissors", "gun", "bigGun", "actualGun", "sword", "finger", "earth", "water", "fire", "thunder", "lightning", "actualPaper", "nineSpades", "aceHearts", "dragon"
    ], elementDetail: {
      none: { key: "none", text: "None", handIcon: paperHandIcon },
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
      finger: { key: "finger", text: "The Finger", icon: fingerIcon, handIcon: fingerHandIcon, className: "chart-element-finger" },
    }, outcomeTable: {
      corner: { text: "Corner", icons: [rPlainIcon, down1Icon, down3Icon, down2Icon,] },
      reset: { text: "Reset", icon: resetIcon },
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
        thunder: "tie", //it's just sound
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
        thunder: "tie", //it's just sound
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
        finger: "win", //scissor finger challenge gone wrong 
        earth: "loseShine", //basically rock
        water: "lose", //rust
        fire: "lose", //melt
        thunder: "tie", //just sound
        lightning: "loseShine", //not just sound
        actualPaper: "win", //basically paper
        nineSpades: "win", //basically paper
        aceHearts: "win", //basically paper
        dragon: "lose", //good luck
      },
      gun: {
        rock: "win", //playground rules
        paper: "win", //playground rules
        scissors: "win", //playground rules
        gun: "lose", //the bot is faster
        bigGun: "lose", //big gun better
        actualGun: "lose", //lmao
        sword: "win", //dagger to gunfight
        finger: "loseShine", //nice
        earth: "tie", //nothing happens
        water: "lose", //rust
        fire: "lose", //melt
        thunder: "tie", //the thunder is louder
        lightning: "lose", //get zapped
        actualPaper: "win", //literal target
        nineSpades: "lose", //throw the card to cut the barrel
        aceHearts: "lose", //throw the card to cut the barrel
        dragon: "lose", //good luck 
      },
      bigGun: {
        rock: "lose", //the rock is faster
        paper: "win", //it's paper
        scissors: "lose", //faster
        gun: "lose", //faster
        bigGun: "win", //block with the barrel
        actualGun: "lose", //yeah
        sword: "lose", //big gun slow
        finger: "loseShine", //nice
        earth: "tie", //still nothing happens
        water: "lose", //still rust
        fire: "lose", //still melt
        thunder: "tie", //the big gun is louder
        lightning: "lose", //get zapped
        actualPaper: "win", //literal target
        nineSpades: "lose", //throw the card to cut the barrel
        aceHearts: "lose", //throw the card to cut the barrel
        dragon: "win", //eat rocket lizard boy
      },
      actualGun: {
        rock: "win", //deadground rules
        paper: "win", //deadground rules
        scissors: "win", //deadground rules
        gun: "win", //deadground rules
        bigGun: "win", //deadground rules
        actualGun: "loseShine", //the bot is still faster
        sword: "win", //sword to real gunfight
        finger: "win", //get fucked
        earth: "tie", //earth vs a gun
        water: "tie", //water vs a gun
        fire: "lose", //still melt
        thunder: "tie", //a sound vs a gun
        lightning: "lose", //zeus sends his regards
        actualPaper: "win", //basically paper
        nineSpades: "win", //basically paper
        aceHearts: "win", //basically paper
        dragon: "win", //don't exist vs exist
      },
      sword: {
        rock: "lose", //excalibur
        paper: "win", //basically paper
        scissors: "win", //stronger sword
        gun: "lose", //gunned
        bigGun: "win", //slow gun
        actualGun: "lose", //gunned
        sword: "lose", //robots aren't that agile
        finger: "win", //yeah
        earth: "win", //earth splitting sword
        water: "lose", //rust
        fire: "win", //fire sword
        thunder: "win", //thunder sword
        lightning: "lose", //lighting rod
        actualPaper: "win", //basically paper
        nineSpades: "win", //basically paper
        aceHearts: "win", //basically paper
        dragon: "win", //hero kills the dragon
      },
      finger: {
        rock: "win", //don't do this to kids
        paper: "win", //they'll follow you
        scissors: "win", //don't do this to kids
        gun: "tieShine", //it's both bullshit
        bigGun: "tieShine", //still both bullshit
        actualGun: "loseShine", //get gunned
        sword: "loseShine", //get stabbed
        finger: "winShine", //eat this AI
        earth: "tie", //the earth don't care
        water: "tie", //the water don't care
        fire: "loseShine", //the flames does care
        thunder: "winShine", //fuck you zeus
        lightning: "loseShine", //fuck you zeus
        actualPaper: "tie", //the paper don't care
        nineSpades: "tie", //the paper don't care
        aceHearts: "tie", //the paper don't care
        dragon: "loseShine", //the dragon REALLY cares
      },
      earth: {
        rock: "win", //bigger rock
        paper: "win", //decompose
        scissors: "winShine", //bigger rock
        gun: "tie", //no shot
        bigGun: "tie", //no shot
        actualGun: "tie", //no shot
        sword: "lose", //earth splitting sword
        finger: "tie", //the earth don't care
        earth: "loseShine", //planetary collision
        water: "win", //water is containable in earth
        fire: "win", //earth is not flammable
        thunder: "tie", //it's just sound
        lightning: "winShine", //earth absorbs charge
        actualPaper: "win", //decompose
        nineSpades: "win", //decompose
        aceHearts: "win", //decompose
        dragon: "win", //bury me bury me
      },
      water: {
        rock: "win", //washed
        paper: "win", //washed
        scissors: "win", //rust
        gun: "tie", //no shot
        bigGun: "tie", //no shot
        actualGun: "tie", //no shot
        sword: "win", //rust
        finger: "tie", //poseidon chill
        earth: "lose", //earth contain water
        water: "tie", //they just mix
        fire: "win", //washed
        thunder: "tie", //thunder does nothing
        lightning: "lose", //conductor
        actualPaper: "win", //washed
        nineSpades: "win", //washed
        aceHearts: "win", //washed
        dragon: "tie", //not much dragon could do
      },
      fire: {
        rock: "lose", //rocks don't burn
        paper: "win", //burned
        scissors: "win", //burned
        gun: "win", //burned
        bigGun: "win", //burned
        actualGun: "win", //burned
        sword: "win", //burned
        finger: "win", //burned
        earth: "lose", //put out
        water: "lose", //put out 
        fire: "lose", //extra fuel
        thunder: "lose", //bad day in new york
        lightning: "lose", //create flames
        actualPaper: "win", //burned
        nineSpades: "win", //burned
        aceHearts: "win", //burned
        dragon: "loseShine", //flames against dragon really
      },
      thunder: {
        rock: "tie", //it's just sound
        paper: "win", //with enough shockwave
        scissors: "tie", //it's just sound
        gun: "tie", //it's just sound
        bigGun: "tie", //it's just sound
        actualGun: "tie", //it's just sound
        sword: "lose", //thunder sword
        finger: "lose", //fuck off zeus
        earth: "tie", //it's just sound
        water: "tie", //it's just sound
        fire: "tie", //it's just sound
        thunder: "tie", //same thing
        lightning: "lose", //lightning is faster
        actualPaper: "win", //with enough shockwave
        nineSpades: "win", //with enough shockwave
        aceHearts: "win", //with enough shockwave
        dragon: "lose", //dragon roars create thunder
      },
      lightning: {
        rock: "lose", //absorb charge
        paper: "win", //burned
        scissors: "win", //zapped
        gun: "win", //zapped
        bigGun: "win", //zapped
        actualGun: "win", //zapped
        sword: "win", //zapped
        finger: "win", //zapped
        earth: "lose", //absorb charge
        water: "win", //zapped
        fire: "lose", //lightning creates fire
        thunder: "win", //faster
        lightning: "tie", //same thing
        actualPaper: "win", //burned
        nineSpades: "win", //burned
        aceHearts: "win", //burned
        dragon: "lose", //shell armor bitch
      },
      actualPaper: {
        rock: "winShine", //better paper
        paper: "win", //actual paper
        scissors: "lose", //cut
        gun: "win", //real bullshit
        bigGun: "win", //real bullshit
        actualGun: "lose", //shot
        sword: "lose", //cut
        finger: "win", //eyeshield block
        earth: "lose", //bury me
        water: "lose", //melted
        fire: "lose", //melted
        thunder: "lose", //with enough shockwave
        lightning: "lose", //melted
        actualPaper: "win", //a real human vs a bot in using real things
        nineSpades: "win", //made from paper
        aceHearts: "win", //made from paper
        dragon: "win", //contracts
      },
      nineSpades: {
        rock: "win", //digging
        paper: "lose", //made from paper
        scissors: "lose", //cut
        gun: "win", //flushed
        bigGun: "win", //flushed
        actualGun: "lose",//shot
        sword: "lose", //cut
        finger: "lose", //lost at poker
        earth: "win", //digging
        water: "lose", //melted
        fire: "lose", //melted
        thunder: "tie", //does nothing
        lightning: "win", //lightning rod with handle
        actualPaper: "lose", //made from paper
        nineSpades: "lose", //impossible pair
        aceHearts: "lose", //worse card
        dragon: "lose", //poker vs dragon
      },
      aceHearts: {
        rock: "lose", //stoned heart
        paper: "lose", //made from paper
        scissors: "lose", //cut
        gun: "win", //royal straight
        bigGun: "win", //royal straight
        actualGun: "lose", //shot
        sword: "lose", //cut
        finger: "win", //won at poker
        earth: "lose", //buried heart
        water: "tie", //water heart meh
        fire: "win", //flame heart nice
        thunder: "lose", //thunder bad for heart
        lightning: "win", //shock therapy
        actualPaper: "lose", //made from paper
        nineSpades: "win", //better card
        aceHearts: "lose", //impossible pair
        dragon: "win", //dragon heart
      },
      dragon: {
        rock: "lose", //goliathed
        paper: "win", //playground rules
        scissors: "win", //tiny sword
        gun: "win", //dead
        bigGun: "lose", //big gun better
        actualGun: "winShine", //actually dead
        sword: "lose", //excaliburred
        finger: "tie", //you win but at what cost
        earth: "lose", //bury me bury me
        water: "tie", //just dodge
        fire: "win", //historically bad match up
        thunder: "win", //historically bad match up
        lightning: "win", //shell armor
        actualPaper: "lose", //oh no ndas
        nineSpades: "win", //need a weapon
        aceHearts: "lose", //dragon deez hearts
        dragon: "lose", //classic 2x effectiveness
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

  const confirmThis = (hand) => {
    setGame((prev) => ({
      ...prev,
      selection: hand,
      resetBanner: 0,
    }));
  }

  const chooseThis = (event, hand, gameContext) => {
    if (hand == "header") {
      const win = window.open(chart.cornerURL, '_blank');
      if (win != null) {
        win.focus();
      }
      return;
    }

    if ( gameContext.selection == "none" | gameContext.selection != hand){
      confirmThis(hand);
      return;
    }
    
    let newPlayerHand = hand;
    let newComputerHand = getComputerHand(hand, gameContext);
    let newResult = chart.outcomeTable[newPlayerHand][newComputerHand];
    let newWins = gameContext.wins;
    let newLoses = gameContext.loses;
    let newTies = gameContext.ties;
    let newShow = gameContext.show;
    let log4 = null;
    let log1 = <div className="text-active">{"You played [" + chart.elementDetail[newPlayerHand].text + "]."}</div>;
    let log2 = <div className="text-active">{"They played [" + chart.elementDetail[newComputerHand].text + "]."}</div>;
    let log3 = null;
    switch(newResult){
      case "none" : 
        log3 = <div className="text-background">{"But nothing happened..."}</div>
        newTies++;
        break
      case "tie" : 
        log3 = <div className="text-background">{"And it's a tie."}</div>
        newTies++;
        break
      case "tieShine" : 
        log3 = <div className="text-tie-shine">{"AND NOTHING HAPPENED!"}</div>
        newTies++;
        break

      case "win" : 
        log3 = <div className="text-win">{"And you won. Nice."}</div>
        newWins++;
        if (gameContext.gameMode == 1) {
          newShow = newShow.filter((e) => e != newPlayerHand);
          log4 = <div className="text-active"> {"Removing " + chart.elementDetail[newPlayerHand].text + "..."} </div>;
        }
        break
      case "winShine" : 
        log3 = <div className="text-win-shine">{"AND YOU DECIMATED THEM! HURRAH!"}</div>
        newWins++;
        if (gameContext.gameMode == 1) {
          newShow = newShow.filter((e) => e != newPlayerHand);
          log4 = <div className="text-active"> {"Removing " + chart.elementDetail[newPlayerHand].text + "..."} </div>;
        }
        break

      case "lose" : 
        log3 = <div className="text-lose">{"And you lost. What a shame."}</div>
        newLoses++;
        break
      case "loseShine" : 
        log3 = <div className="text-lose-shine">{"AND YOU\'RE FUCKING DESTROYED!"}</div>
        newLoses++;
        break
    }
    if (gameContext.gameMode == 2) {
      newShow = newShow.filter((e) => e != newPlayerHand);
      log4 = <div className="text-active"> {"Removing " + chart.elementDetail[newPlayerHand].text + "..."} </div>;
    }
    if (gameContext.gameMode == 3) {
      console.log(gameContext.round, gameContext.result, newResult)
      if (gameContext.result != "none" & gameContext.result != newResult & gameContext.result != (newResult + "Shine")) {
        console.log(gameContext.result)
        newShow = [];
        let resultText = gameContext.result.length > 5 ? gameContext.result.substr(0, gameContext.result.length-5) : gameContext.result
        log4 = <div className="text-active"> {"You lost your " + resultText + " streak."} </div>;
      }
    }
    let newRound = gameContext.round + 1;
    let log5 = <div className="text-hidden"> blank text </div>;
    let log6 = <div className="text-background"> {"== == == Round " + newRound + " == == =="} </div>;
    let newHands = getAvailableHands(gameContext, newShow)
    setGame((prev) => ({
      ...prev,
      selection: "none",
      playerHand: newPlayerHand,
      computerHand: newComputerHand,
      wins: newWins,
      loses: newLoses,
      ties: newTies,
      result: newResult,
      hands: newHands,
      round: newRound,
      resetBanner: 1,
      show: newShow,
      log: [...prev.log, log1, log2, log3, log4, log5, log6,  ],
    }));
  }
  
  const getAvailableHands = (gameContext, newShow) => {
    let handsLimit = gameContext.handModes[gameContext.handMode];
    if (handsLimit >= newShow.length) {
      return newShow
    }
    let hands = [];
    while (hands.length < handsLimit) {
      let handCandidate = newShow[Math.floor(Math.random() * newShow.length)]
      if (!hands.includes(handCandidate)) {
        hands.push(handCandidate)
      }
    }
    return hands;
  }

  const getComputerHand = (hand, gameContext) => {
    switch(gameContext.aiMode){
      case 0:
        return "scissors"
      case 1 : 
        return gameContext.hands[Math.floor(Math.random() * gameContext.hands.length)];
    }
  }

  const resetGame = () => {
    setGame((prev) => ({
      ...prev,
      show: chart.show,
      hands: ["rock", "paper", "scissors"],
      wins: 0,
      loses: 0,
      ties: 0,
      round: 1,
      resetBanner: 0,
      selection: "none",
      playerHand: "none",
      computerHand: "none",
      result: "none",
      log: [
        <div className="text-background">Initiating Better Rock Paper Scissors...</div>,
        <div className="text-background">Welcome, contender!</div>,
        <div className="text-hidden"> blank text </div>,
        <div className="text-background"> == == == Round 1 == == == </div>,
      ],
    }))
  }

  const [game, setGame] = useState({
    show: chart.show,
    hands: ["rock", "paper", "scissors"],
    wins: 0,
    loses: 0,
    ties: 0,
    round: 1,
    resetBanner: 0,
    selection: "none",
    playerHand: "none",
    computerHand: "none",
    result: "none",
    log: [
      <div className="text-background">Initiating Better Rock Paper Scissors...</div>,
      <div className="text-background">Welcome, contender!</div>,
      <div className="text-hidden"> blank text </div>,
      <div className="text-background"> == == == Round 1 == == == </div>,
    ],

    resetGame: resetGame,
    onClick: chooseThis,
    
    aiMode: 1,
    aiModes: ["Robert Mode", "Random Mode",],
    handMode: 1,
    handModes: [3, 5, 9, 17],
    gameMode: 0,
    gameModes: ["Standard", "Cascading Elimination", "Card Game", "Streak Master"],

    gameModesDesc: [
      "Each round is indistinct from each other except for the different hand selection.", 
      "Every round you win, eliminate the hand you win with. Win with every hand as fast as possible.",
      "You draw a hand every round and discard the hand you use. Win as much as possible before running out of hands with this classic challenge.",
      "Get a streak of wins, loses, or ties. Any streak break would remove the hand pool.",
    ],
    turns: [ "Player", "Computer" ],
    results: { 
      none: {text: "None", classNames: {layer2: "text-win-active bg-slate-200", layer3: "opacity-80"}},
      win: {text: "Win", classNames: {layer2: "text-win bg-green-200", layer3: "opacity-80"}},
      lose: {text: "Lose", classNames: {layer2: "text-lose bg-red-200", layer3: "opacity-80"}},
      tie: {text: "Tie", classNames: {layer2: "text-background bg-yellow-200", layer3: "opacity-80"}}, 
      winShine: {text: "Great Victory", classNames: {layer2: "text-win-shine bg-green-300", layer3: "opacity-100"}},
      loseShine: {text: "Great Defeat", classNames: {layer2: "text-lose-shine bg-red-300", layer3: "opacity-100"}},
      tieShine: {text: "Even Fight", classNames: {layer2: "text-tie-shine bg-yellow-300", layer3: "opacity-100"}}, },
  })

  return (
    <div className='background' style={{backgroundImage: `url(${backgroundImage})`}}>
      <ChartContext.Provider value={chart}>
        <PanelContext.Provider value={panel}>
          <GameContext.Provider value={game}>
          <div className='app'>
            <div className='tabs left-tabs'>
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
