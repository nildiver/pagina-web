import React from 'react'
import {Serchs} from './components/Serchs'
import {Header} from '../../Components/Header'
import {Ranking} from './components/Ranking'
import {Experiences} from './components/Experiences'
import { Page } from '../Page'
const HeaderStyle = {
  fontWeight: '700',
  color:'#484848',
  fontSize:'1.2em'


}

export const Home = () => (

  <Page>

  <Serchs/>
  <Header style = {HeaderStyle} title='Top de aventuras'/>
  <Ranking/>
  <Header style = {HeaderStyle} title='Lista de aventuras' />
  <Experiences/>
  </Page>

)
