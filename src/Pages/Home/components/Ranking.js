import React from 'react'
import { Cards } from './Cards'
import {EXPERIENCES_DATA} from './../../../data/ExperiencesData'



export const Ranking = () => (
    <section className='Rankin-container' >
      {
       EXPERIENCES_DATA.map(item =><Cards key={item.id}{...item}/>)
      }
    </section>
)