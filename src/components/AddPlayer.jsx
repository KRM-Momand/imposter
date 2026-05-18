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

    const handleRemovePlayer = (e) => {
        dispatch({
            type: 'removePlayer',
            payload: e
        })
    }
  return (
    <section className='add-player'>
        <h1> Add Player</h1>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} /> 
        <button onClick={handleAddPlayer}> Add Player </button>
        
        <div className='players-list'>

            {state.players.map((player, index) => (
                <ul key={index}>
                    <li onClick={() => handleRemovePlayer(index)}>{player}</li>
                </ul>
            ))}
        </div>

        <small> To remove Players simple click on his/her name</small>
    </section>
  )
}

export default AddPlayer
