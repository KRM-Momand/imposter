import React from 'react'
import { Route, Routes } from 'react-router-dom'

import '../src/styles/app.scss'


import Hero from './components/Hero'
import Categories from './components/Categories'
import AddPlayer from './components/AddPlayer'
import Imposter from './components/Imposter'
import Players from './components/Players'
import Layout from './components/Layout'

function App() {
  return (
    <section className='container'>

      <Routes>
          <Route Path='/' element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path='play' element={<Players />} />
            <Route path='addPlayers' element={<AddPlayer />} />
            <Route path='addImposter' element={<Imposter />} />
            <Route path='selectCategory' element={<Categories />} />
          </Route>


      </Routes>
    </section>
  )
}

export default App
