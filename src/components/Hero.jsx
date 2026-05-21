import React, { useContext, useState } from 'react'
import {Outlet, useNavigate } from 'react-router-dom'
import { PlayerContext } from '../contexts/playersContext';

import '../styles/hero.scss'; 



function Hero() {
  const {state, dispatch} = useContext(PlayerContext)
  const [imposter, setImposter] = useState([]); 
  const navigate = useNavigate();
  const totalPlayers = state.players.length;  


  const handlePlay = () => {
    if(state.players.length <= 2) {
      alert('Please add at least 3 players'); 
      navigate('/'); 
    } else {
      navigate('/play'); 
    }
    const totalImposters = state?.imposter.length; 
    for(let i = 0; i < totalImposters ; i++){


      setImposter(prev => (
        prev = Math.floor(Math.random() * totalPlayers), 
        [...prev, prev]
      ))

    }

    dispatch({
      type: 'addImposter', 
      payload: imposter
    })
    alert(totalImposters); 
    console.log(totalImposters); 

    
  }
  const handleAddPlayer = () => {
    navigate('/addPlayers'); 
  }
  const handleAddImposter = () => {
    navigate('/addImposter'); 
  }
  const handleSelectCategory = () => {
    navigate('/selectCategory'); 
  }
  const handleTimer = () => {
    navigate('/setTimer'); 
  }


  return (
        <section className='hero'>
          <div className='buttons'>
            <button onClick={handlePlay}> Play  </button>
            <button onClick={handleAddPlayer}> Add Player  </button>
            <button onClick={handleAddImposter}> Add Imposter  </button>
            <button onClick={handleSelectCategory}> Select Category  </button>
            <button onClick={handleTimer}> SetTimer  </button>
          </div>
        </section>
  )
}

export default Hero
