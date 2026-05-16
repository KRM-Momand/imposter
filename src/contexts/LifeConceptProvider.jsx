import React from 'react'
import { LifeConceptContext } from './LifeConceptContext'
import { lifeConcepts } from '../data/lifeConcept'

function LifeConceptProvider({children}) {
  return (
    <LifeConceptContext.Provider value={{lifeConcepts}}>
      {children}
    </LifeConceptContext.Provider>
  )
}

export default LifeConceptProvider
