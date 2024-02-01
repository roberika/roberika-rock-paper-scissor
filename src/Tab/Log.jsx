import { useState, useContext, useRef, useEffect } from 'react'
import { GameContext } from '../Context/GameContext.jsx';

export default function Log() {

    const game = useContext(GameContext);

    const print = () => {
        console.log(game.log);
    }

    const [showLoadText, setShowLoadText] = useState(false);
    const scrollAnchor = useRef(null);

    useEffect(() => {
        setShowLoadText(true);
        setTimeout(() => {
            setShowLoadText(false);
            const domNode = scrollAnchor.current.scrollIntoView({block: 'end', behavior: 'smooth'});
        }, 500);
    }, [game.log])

    return (
        <div className='log grow' onClick={print}>
            {game.log.map((line, index) => 
                <div className={"log-text " + 
                    ((index < game.log.length-1 & index > game.log.length-8) 
                        ? "log-text-highlighted" : "" )
                    } key={index}> {line} 
                </div>
            )}
            <div className={"text-background " + (showLoadText ? "hidden" : "visible")}>{"" + game.wins + " wins - " + game.loses + " loses - " + game.ties + " ties"}</div>
            <div className={"text-background " + (showLoadText ? "hidden" : "visible")}>Your turn</div>
            <div className={"text-background " + (showLoadText ? "visible" : "hidden")}>...</div>
            <div className={"text-background " + (showLoadText ? "visible" : "hidden")}>...</div>
            <div ref={scrollAnchor}></div>
        </div>
    )
}