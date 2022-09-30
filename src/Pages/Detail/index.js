import React from 'react'
import { Page } from '../Page'
import {Header} from '../../Components/Header'
import { CardDetail } from './Components/CardDetail'

export const Detail = () => (
    <Page>
        <Header  title='Parapente en san felix'/>
        <CardDetail/>
    </Page>
)