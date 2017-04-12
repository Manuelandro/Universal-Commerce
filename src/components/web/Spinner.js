import React from 'react'
import styled from 'styled-components'
import { Image } from './'


const { View } = {
    View: styled.div`
        flex: 1;
        position: fixed;
        z-index: 2;
        left: 0;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    `
}

const Spinner = ({ size }) =>
    <View>
        <Image source={{ uri: '../images/spinner.svg' }} />
    </View>


export { Spinner }