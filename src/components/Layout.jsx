import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import '../styles/layout.scss'

function Layout() {
    const navigate = useNavigate(); 
    const handleBack = () => {
    navigate('/'); 
  }
  return (
    <section className='layout'>
        <div className='hero-heading'>
            <button onClick={handleBack}> back </button>
            <h1> Imposter Game</h1>
            <hr style={{color: 'white', fontWeight: 'bold'}}/>
        </div>

        <div className='outlet-container'>
          <Outlet> </Outlet>

        </div>

    </section>
  )
}

export default Layout
