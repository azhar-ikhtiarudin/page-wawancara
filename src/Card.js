import React from 'react'
import './App.scss';


const Card = ({ primary,image, onChange, date }) => {

    return (

        <div className='cardItem' onClick={onChange}>
            <img src={image} alt="" className={'mainImage'}/>
            <h4>{primary}</h4>
            <h4>{date}</h4>

        </div>

    )
}

export default Card