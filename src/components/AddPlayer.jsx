import React, { useContext, useState } from 'react'
import { PlayerContext } from '../contexts/playersContext';
import '../styles/addPlayer.scss' 

function AddPlayer() {

    const {state, dispatch} = useContext(PlayerContext)
    const [name, setName] = useState('');

    const handleAddPlayer = () => {
        dispatch({
            type: 'addPlayer', 
            payload: name
        })

        setName('')
    }
  return (
    <section className='add-player'>
        <h1> Add Player</h1>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} /> 
        <button onClick={handleAddPlayer}> Add Player </button>
        
        <div className='players-list'>

            {state.players.map((player, index) => (
                <ul key={index}>
                    <li>{player}</li>
                </ul>
            ))}
        </div>
    </section>
  )
}

export default AddPlayer
