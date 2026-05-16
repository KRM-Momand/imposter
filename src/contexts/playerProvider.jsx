import React, {  act, useReducer } from 'react'
import { PlayerContext } from './playersContext';

function PlayerProvider ({children}) {
    
    const initialStatus = {
      players: [], 
      category: 'Sports', 
      imposter: [2 ]}; 
    
    
    const addPlayerReducer = (state = initialStatus, action) => {
        switch(action.type){
            case 'addPlayer': 
            return {...state, players: [...state.players, action.payload]}

            case 'selectCategory':
              return {...state, category: action.payload }
            case 'addImposter': 
              return {...state, imposter: [...state.imposter, action.payload]}
            case 'removeImposter':
              return {...state, imposter: state.imposter.slice(0, -1)}
    
            default:
                return state
        }
    }

    const [state, dispatch ] = useReducer(addPlayerReducer, initialStatus); 
  return (
    <PlayerContext.Provider value= {{state, dispatch}}>
      {children}
    </PlayerContext.Provider >
  )
}

export default PlayerProvider; 
