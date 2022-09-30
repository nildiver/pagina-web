import React from 'react'
import { Link } from 'react-router-dom'

export const Cards = ({id,title,place,image}) => (
    <Link to={`/detail/${id}`}>

    <div style={{backgroundImage:`url(${image})`}} className='Card-containes' >
      
        <h5>{title}</h5>
        <p>{place}</p>
       
    </div>
    </Link>
)