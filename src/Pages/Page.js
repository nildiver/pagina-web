import React from 'react'
import { Topbar } from '../Components/Topbar'
import {MenuResponcil} from '../Components/MenuResponcil'
import { MenuWeb } from '../Components/MenuWeb'

export const Page = (props) => (
    <>
      <MenuWeb/>
      <section className='main-page'>
      <Topbar/>
      <MenuResponcil/>
      <div className='Page'>
        {props.children}
      </div>
     </section>
    </>
)
