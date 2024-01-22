import { useState, useContext, useRef, useEffect } from 'react'
import { GameContext } from '../Context/GameContext.jsx';

export default function Log() {

    const game = useContext(GameContext);

    const print = () => {
        console.log(game);
    }

    const [showLoadText, setShowLoadText] = useState(false);
    const scrollAnchor = useRef(null);

    useEffect(() => {
        setShowLoadText(true);
        setTimeout(() => {
            setShowLoadText(false);
            const domNode = scrollAnchor.current.scrollIntoView({block: 'end', behavior: 'smooth'});
        }, 2000);
    }, [game.log])

    return (
        <div className='log' onClick={print}>
            {game.log.map((line, index) =>
                line
            )}
            <div className={"text-background " + (showLoadText ? "hidden" : "visible")}>Your turn</div>
            <div className={"text-background " + (showLoadText ? "visible" : "hidden")}>...</div>
            <div ref={scrollAnchor}></div>
        </div>
    )
}