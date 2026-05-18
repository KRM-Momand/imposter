import React, { useContext } from 'react'
import {Outlet, useNavigate } from 'react-router-dom'
import { PlayerContext } from '../contexts/playersContext';

import '../styles/hero.scss'; 



function Hero() {
  const {state} = useContext(PlayerContext)
  const navigate = useNavigate(); 


  const handlePlay = () => {
    if(state.players.length <= 2) {
      alert('Please add at least 3 players'); 
      navigate('/'); 
    } else {
      navigate('/play'); 
    }

    
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
    navigate('/timer'); 
  }


  return (
        <section className='hero'>
          <div className='buttons'>
            <button onClick={handlePlay}> Play  </button>
            <button onClick={handleAddPlayer}> Add Player  </button>
            <button onClick={handleAddImposter}> Add Imposter  </button>
            <button onClick={handleSelectCategory}> Select Category  </button>
            <button onClick={handleTimer}> Timer  </button>
          </div>
        </section>
  )
}

export default Hero
