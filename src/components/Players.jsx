import React, { useContext, useReducer, useState , useRef} from 'react'
import '../styles/players.scss'

import { PlayerContext } from '../contexts/playersContext'
import { LifeConceptContext } from '../contexts/LifeConceptContext'
import Imposter from './Imposter'
import { useNavigate } from 'react-router-dom'

function Players() {
    const {lifeConcepts} = useContext(LifeConceptContext)
    const {state } = useContext(PlayerContext)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dragY , setDragY] = useState(0); 
    const [isDragging, setIsDragging] = useState(false)
    const startY = useRef(0); 
    const [isReady, setIsReady] = useState(false); 

    const handlePointerDown = (e) => {
        setIsDragging(true);
        setIsReady(false)
        startY.current = e.clientY; 

        e.currentTarget.setPointerCapture(e.pointerId); 
    }

    const handlePointerMove = (e) => {
        if (!isDragging) return; 
        const delta = e.clientY - startY.current; 

        if (delta < 0 ){
            setDragY(delta)
        }
    }

    const handlePointerUp = (e) => {
        setIsDragging(false); 
        setDragY(0); 
        setIsReady(true); 

        e.currentTarget.releasePointerCapture(e.pointerId); 
    }

    const playerQuantity = state.players.length; 
    const selectedCategory = state.category;
    const categoryData = lifeConcepts.find(c => c.category === selectedCategory);




  return (
    <section className='player-container'>
        <div className='track-wrapper'>

            <div className='player-track' style={{transform: `translateX(-${currentIndex * 100}%)`}}>

                {state.players.map((player , index) => (
                    <div key={index} className={`player-card ${index === currentIndex ?' is-active' : ''}`}>
                        <h1 className='player-name'>{ player }</h1>
                        <div className='card-content'>
                            {state.imposter.includes(index) ? 'Imposter' : categoryData?.items?.[index]}
                        </div>
                    </div>
                ))}
            </div>
            <div className='card-cap' style={{transform: `translateY(${dragY}px)`}}
            onPointerDown={handlePointerDown} onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp} onPointerCancel={handlePointerUp}>
            </div>
        </div>

        <button className='player-btn' disabled={!isReady} onClick={() => {
            setCurrentIndex(prev => (
                prev + 1 < playerQuantity ? prev + 1 : 0
            ))

            setIsReady(false)

        }}> {isReady ? 'Next' : 'Drag To Preview'} </button>
      
    </section>
  )
}

export default Players
