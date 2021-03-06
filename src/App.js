import './App.scss';
import React, {useState} from 'react'
import Card from './Card'
import CardDetailKru from './CardDetailKru'
import CardDetailCakru from './CardDetailCakru'
import imgKru from './img/img-kru.jpg'
import imgCakru from './img/img-cakru.jpg'

const App = () => {
  const [showDetailKru, setShowDetailKru]=useState(false)
  const [showDetailCakru, setShowDetailCakru]=useState(false)

  const showDetailFunctionKru = () =>{
    setShowDetailKru(!showDetailKru)
  }

  const showDetailFunctionCakru = () =>{
    setShowDetailCakru(!showDetailCakru)
  }
  return (
      <div className='App'>

          <header>
            <h1>Hasil Wawancara oleh Azhar Ikhtiarudin (16720327)</h1>
          </header>
          <h2>Wawancara Kru</h2>

          <div className="cardContainer">
            <Card primary='Ka Ivan' 
            image={imgKru} 
            onChange={showDetailFunctionKru}
            date='5 Maret 2021'
            />
            {showDetailKru?
            <CardDetailKru/>:
            ''
          }
          </div>

          <h2>Wawancara Ca Kru</h2>
          <div className="cardContainer">
            <Card primary='M Ardi dkk' 
            image={imgCakru} 
            onChange={showDetailFunctionCakru}
            date='5 Maret 2021'
            />
            {showDetailCakru?
            <CardDetailCakru/>:
            ''}
          </div>

      </div>
  )
}

export default App
