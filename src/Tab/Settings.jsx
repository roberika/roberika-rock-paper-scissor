import { useState, useContext } from 'react'
import { GameContext } from '../Context/GameContext.jsx';

export default function Settings() {

    const game = useContext(GameContext);
    const cycleAISettings = () => {
        game.aiMode = (game.aiMode + 1) % game.aiModes.length;
        setAIName(game.aiModes[game.aiMode]);
    }

    const [aiName, setAIName] = useState(game.aiModes[game.aiMode]);

    return (
        <div className='black-text' >
            <p> AI Mode </p>
            <p className={"clickable-text"} onClick={cycleAISettings}> {aiName} </p>
            <br />
        </div>
    )
}