import React from 'react'
import { Score } from '../../../Components/Score'

export const CardDetail = () =>(
    <article className='Card-detail'>

        <img src='https://1.bp.blogspot.com/-ulmsddiK1hA/XgcFhkrSA0I/AAAAAAAADNU/Sygdg0Wd5wgUZTyoZYimy4bb4ZHSWCqYACEwYBhgL/w1200-h630-p-k-no-nu/Regalo%2BVuelo%2BParapente%2BParejas.png'/>
        <div>
         <p>descripcion de la esperiencia....
         </p>
         <h3>COP <small>30.000</small></h3>
         <Score  star ={2}  users = '12' size='16px'/>
      
        </div>
    </article>
    
)