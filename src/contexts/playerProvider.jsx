import React, {  act, useEffect, useReducer } from 'react'
import { PlayerContext } from './playersContext';

function PlayerProvider ({children}) {
    
    const initialStatus = {
      players: [], 
      category: 'Sports', 
      imposter: [1], 
      timer: 0.1 }; 

    const savedData = () => {
      const saved = localStorage.getItem('savedState'); 
      if(!saved) return initialStatus; 

      return {...initialStatus, ...JSON.parse(saved)} 
    }
    
    
    const addPlayerReducer = (state, action) => {
        switch(action.type){
            case 'addPlayer': 
            return {...state, players: [...state.players, action.payload]}

            case 'selectCategory':
              return {...state, category: action.payload }
            case 'addImposter': 
              return {...state, imposter: action.payload}
            case 'removePlayer': 
              return {
                ...state, players: state.players.filter((_, i) => i !== action.payload)
              }
            case 'removeImposter':
              return {...state, imposter: state.imposter.slice(0, -1)}
            case 'setTime': 
              return {...state, timer: action.payload}
    
            default:
                return state
        }
    }

    const [state, dispatch ] = useReducer(addPlayerReducer, undefined, savedData); 

    useEffect(() => {
      const {imposter, ...rest} = state; 
      localStorage.setItem('savedState', JSON.stringify(rest))
    }, [state.players, state.category, state.timer]); 

  return (
    <PlayerContext.Provider value= {{state, dispatch}}>
      {children}
    </PlayerContext.Provider >
  )
}

export default PlayerProvider; 
