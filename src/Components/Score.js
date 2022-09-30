import React from 'react'

const StarOutline = ({ size})=>(
    <ion-icon style = {{fontSize:size}} name="star-outline"></ion-icon>

)
const  StarFiell =({ size}) => (
    <ion-icon style = {{fontSize:size}} name="star"></ion-icon>
)

export const Score = ({star = 0 ,users = 0,size= '14px'}) =>(
    <section className='Score'>
        {
            [1,2,3,4,5].map(el => el<=star ?<StarFiell size= {size}/> :<StarOutline size= {size} />)
        }
        <div>
            <p style = {{fontSize:size}}>{users}</p>
        </div>
    </section>

)