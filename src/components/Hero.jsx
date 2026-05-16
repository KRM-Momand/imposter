import React from 'react'
import {Outlet, useNavigate } from 'react-router-dom'

import '../styles/hero.scss'; 



function Hero() {
  const navigate = useNavigate(); 


  const handlePlay = () => {
    navigate('/Play'); 
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


  return (
        <section className='hero'>
          <div className='buttons'>
            <button onClick={handlePlay}> Play  </button>
            <button onClick={handleAddPlayer}> Add Player  </button>
            <button onClick={handleAddImposter}> Add Imposter  </button>
            <button onClick={handleSelectCategory}> Select Category  </button>
          </div>
        </section>
  )
}

export default Hero
