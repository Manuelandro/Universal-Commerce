import React from 'react'
import Home from './component.native'
import { ScrollView } from '../../components/native'

const HomeWithData = (props) =>
    <ScrollView>
        <Home {...props} />
    </ScrollView>

export default HomeWithData