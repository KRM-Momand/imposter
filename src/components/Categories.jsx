import React, { useContext, useState } from 'react'
import '../styles/categories.scss'

import { LifeConceptContext } from '../contexts/LifeConceptContext'
import {PlayerContext} from '../contexts/playersContext'

function Categories() {
    const {lifeConcepts}  = useContext(LifeConceptContext)
    const {dispatch} = useContext(PlayerContext)
    const [selectedCategory, setSelectedCategory] = useState('')

    const handleselectCategory = (category) => {
       // const newCategory = category.category; 
        setSelectedCategory(category)
        dispatch({
            type: 'selectCategory', 
            payload: category
        })
        console.log(category)
    } 

  return (
    <div className='category-container'>
        <h2> Categories </h2>
        {lifeConcepts.map((c, index ) => (
            <div key={index} className='category-list'>
                <h4 onClick={() => handleselectCategory(c.category)}>{c.category}</h4>
            </div>

        ))}
    </div>
  )
}

export default Categories
