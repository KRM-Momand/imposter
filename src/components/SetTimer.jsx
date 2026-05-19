import React, { useContext, useState } from 'react'
import '../styles/timer.scss'; 
import { PlayerContext } from '../contexts/playersContext';

function SetTimer() {
    const {state, dispatch} = useContext(PlayerContext);  

    const handleTime = (e) => {
        
        dispatch({
            type: 'setTime', 
            payload: Number(e.target.value)
        })
    }

  return (
    <section className='setTimer'>
        <h1>Set Timer</h1>
        <div>

            <span> 1 min</span>
                <input type='range' min='1' max='60' value={state.timer} onChange={handleTime} />
            <span> 60 min</span>
        </div>
        <h3>{state.timer} minute{state.timer > 1 ? 's' : ''}</h3>
      
    </section>
  )
}

export default SetTimer
