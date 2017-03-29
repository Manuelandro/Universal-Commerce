import React from 'react'
import styled from 'styled-components'

const { View, Text } = {
    View: styled.div`
        height: 60px;
        padding-top: 15px;
        justify-content: center;
        align-items: center;
        background-color: #fcfcfc;
        box-shadow: 0 2px 8px #000;
        position: relative;
    `,
    Text: styled.p`
        font-size: 20px;
    `
}

const Header = ({ headerText }) =>
    (
        <View>
            <Text>{headerText}</Text>
        </View>
    )



export { Header }
