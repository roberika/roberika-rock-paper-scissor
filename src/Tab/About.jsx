import { useState } from 'react'

import githubIcon from '../assets/github_icon.png'

export default function About() {
    return (
        <div className='text-active grow' >
            <p> """"Better""""" Rock Paper Scissors </p>
            <br />
            <p className='about-footer'>
                <span className='about-footer-text'> v0.3.0 - Roberika - 2024 </span>
                <a href='https://github.com/roberika'><img className='social-icon' src={githubIcon}></img></a>
                
            </p>
        </div>
    )
}