import React from 'react'
import styled from 'styled-components'

const { button, Text } = {
    button: styled.button`
        flex: 1;
        align-self: stretch;
        background-color: #fff;
        border-radius: 4px;
        border-width: 1px;
        border-color: #007788;
        margin-left: 5px;
        margin-right: 5px;
    `,
    Text: styled.span`
        align-self: center;
        color: #007788;
        font-size: 16px;
        font-weight: 600;
        padding-top: 10px;
        padding-bottom: 10px;
    `
}


const Button = ({ onPress, children }) =>
    <button onClick={onPress}>
        <Text >{children}</Text>
    </button>



export { Button }