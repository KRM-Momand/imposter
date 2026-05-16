import React, { useContext, useState } from 'react'
import { PlayerContext } from '../contexts/playersContext';

import '../styles/imposter.scss'; 

function Imposter() {
    const {state, dispatch} = useContext(PlayerContext); 
    const totalImposters = state.imposter.length; 

    const playersQuantity = state.players.length; 
    const imposterQuantity = state.imposter.length; 
    const buttonActive = imposterQuantity + 3 < playersQuantity; 

    
    const handleAddImposter = () => {
        
        let randomImposter; 
        do {

             randomImposter = Math.floor(Math.random() * playersQuantity ) 
        } while(state.imposter.includes(randomImposter))


        dispatch({
            type: 'addImposter', 
            payload: randomImposter
        })
        console.log(state.imposter)
    }
    
    const handleRemoveImposter = () => {
        if(state.imposter.length === 1) return; 

        dispatch({
            type: 'removeImposter'
        })
    }

  return (
    <section className='container'>
        <h1> Imposters Total </h1>
        <div className='imposter-container'>
            <button disabled={!buttonActive} onClick={handleAddImposter}> Add Imposter </button>
            <h1>{totalImposters}</h1>
            <button disabled={state.imposter.length === 1} onClick={handleRemoveImposter}> Remove Imposter </button>

        </div>

        <small className='note'>At least, you must have 4 player to be able to add more imposters</small>
        
    </section>
  )
}

export default Imposter; 
