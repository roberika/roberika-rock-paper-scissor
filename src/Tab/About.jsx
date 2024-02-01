import { useState } from 'react'

import githubIcon from '../assets/github_icon.png'

export default function About() {
    const paperLink = <a href='https://www.researchgate.net/publication/221539739_Towards_a_Framework_for_Management_of_Strategic_Interaction'>here</a>;

    return (
        <div className='text-active grow' >
            <p className='font-bold text-lg'> ""Better"" Rock Paper Scissors </p>
            <hr />
            <br />
            <p className=''>
                BRPS is a project made to somehow "improve" the game Rock Paper 
                Scissors. It combines various playground rules like the gun being 
                the strongest hand with other dumb shit I could think of. It also
                adds limits to what hand you could pick, partially because I thought
                it could be a fun mechanic to force you to try different hands, but
                mostly because I can't fit the entire set of hands in 1 chart and
                I don't want them to go to waste. <br/> <br/>
                
                It is hella unbalanced, there's many things I could improve upon like
                an actual multiplayer mode, score tallying, a glossary of why I made
                some match up like they are, but for now I wish you enjoy this
                silly little game I made. Peace out. <br/> <br/>

                PS. Apparently other people had the same idea as me. There's a genuine
                research paper that I'll link {paperLink} about someone trying to make
                an algorithm to make a better RPS. Fun to see.
            </p>
            <br />
            <p className='about-footer'>
                <span className='about-footer-text'> v1.0.0 - Roberika - 2024 </span>
                <a href='https://github.com/roberika'><img className='social-icon' src={githubIcon}></img></a>
            </p>
            <br/>   
        </div>
    )
}