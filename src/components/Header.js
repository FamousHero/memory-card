import React, { useEffect, useState } from 'react'
import '../styles/header.css'

const Header = () => {
    const [highScore, setHighScore] = useState(0);
    let currScore = 0;
    useEffect(()=>{
        let prevHighScore = localStorage.getItem('highScore');
        if(prevHighScore){
            setHighScore(prevHighScore);
        }
        return () => {
            localStorage.setItem('highScore', highScore);
        }
    }, []);
  return (
    <header className='header'>
        <div className='scores'>Score: {currScore}</div>
        <div className='title'>Memory Card</div>
        <div className='scores'>Best Score: {highScore}</div>
    </header>
  )
}

export default Header