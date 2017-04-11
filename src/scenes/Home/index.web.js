import React from 'react'
import Home from './component.web'
import { ScrollView } from '../../components/web/'

const HomeWithData = (props) =>
    <ScrollView>
        <Home {...props} />
    </ScrollView>

export default HomeWithData