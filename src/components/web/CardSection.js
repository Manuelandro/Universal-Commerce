import React from 'react'
import styled from 'styled-components'

const { View } = {
    View: styled.div`
        display: flex;
        border-bottom: 1px solid #ddd;
        padding: 5px;
        background-color: #fff;
        justify-content: flex-start;
        flex-direction: row;
        position: relative;
    `
}

const CardSection = ({ children }) =>
    <View>{children}</View>



export { CardSection }