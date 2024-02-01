import { useState, useContext } from 'react'
import { GameContext } from '../Context/GameContext.jsx';

export default function Settings() {

    const game = useContext(GameContext);
    const cycleAISettings = () => {
        game.aiMode = (game.aiMode + 1) % game.aiModes.length;
        setAIName(game.aiModes[game.aiMode]);
    }
    const cycleHandSettings = () => {
        game.handMode = (game.handMode + 1) % game.handModes.length;
        setHandName(game.handModes[game.handMode]);
    }
    const cycleGameSettings = () => {
        game.gameMode = (game.gameMode + 1) % game.gameModes.length;
        setGameName(game.gameModes[game.gameMode]);
        setGameDescription(game.gameModesDesc[game.gameMode]);
    }

    const [aiName, setAIName] = useState(game.aiModes[game.aiMode]);
    const [handName, setHandName] = useState(game.handModes[game.handMode]);
    const [gameName, setGameName] = useState(game.gameModes[game.gameMode]);
    const [gameDescription, setGameDescription] = useState(game.gameModesDesc[game.gameMode]);

    return (
        <div className='text-active grow' >
            <p> AI Logic </p>
            <p className={"clickable-text"} onClick={cycleAISettings}> {aiName} </p>
            <br />
            <p> Available Hands </p>
            <p className={"clickable-text"} onClick={cycleHandSettings}> {handName} </p>
            <br />
            <p> Gamemode </p>
            <p className={"clickable-text"} onClick={cycleGameSettings}> {gameName} </p>
            <p className={"text-active text-sm"}> {gameDescription} </p>
            <br />
            <p className={"clickable-text"} onClick={game.resetGame}> Reset </p>
        </div>
    )
}