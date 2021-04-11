import React from 'react'
import SingleFiltro from './singleFiltro/SingleFiltro'

const GroupFiltro = () => {
  return (
    <div>
      <SingleFiltro id='1' nombre='test1' />
      <SingleFiltro id='2' nombre='test2' />
      <SingleFiltro id='3' nombre='test3' />
    </div>
  )
}

export default GroupFiltro
