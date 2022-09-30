import React from 'react'
import{Score} from './../../../Components/Score'
import { Link } from 'react-router-dom'

export const Adventure = (props) => (
    <Link to={`/Detail/${props.id}`}>
    <div className='adventure-container'>
        <img src={props.image} alt='' />
        <article>
        <h3>{props.title}</h3>
        <p>{props.place}</p>
        <h5>Cop {props.price}</h5>
        <Score size='14px' star={props.score} users={props.users} />
        </article>
        
    </div>
    </Link>
) 