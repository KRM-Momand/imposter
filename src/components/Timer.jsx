import React, { useContext, useEffect, useState } from 'react'
import { PlayerContext } from '../contexts/playersContext';
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/timer.scss'; 

function Timer() {
  const {state } = useContext(PlayerContext);
  const [seconds, setSeconds] = useState(state.timer * 60); 
  const [toShow, setToShow] = useState(true); 
  const navigate = useNavigate(); 

  useEffect(() => {

    const timerInterval = setInterval(() => {
      console.log(seconds); 
      setSeconds(prev => {
        if(prev <= 1){
          clearInterval(timerInterval);
          setToShow(false); 
          return 0; 
        }
        return prev - 1; 
      })
    }, 1000);
    return () => clearInterval(timerInterval); 
  }, [seconds])

  const minutes = Math.floor(seconds / 60); 
  const remainingSeconds = seconds % 60; 

  const handleRestart = () => {
    navigate('/'); 
  }

  return (
    <section className='timer'>

        {toShow ? (

        <h1>{minutes}: {remainingSeconds.toString().padStart(2, '0')}</h1>
        ) : (
          <>

            <h1>Imposter(s) of the Game </h1>
            {state.imposter.map((imposter, index) => (
              <ul key={index}>
                <li>{state.players[imposter]}</li>
              </ul>
            ))}

            <button onClick={handleRestart}> Restart Game </button>
          </>
        )}

        


        
    
    </section>
  )
}

export default Timer
