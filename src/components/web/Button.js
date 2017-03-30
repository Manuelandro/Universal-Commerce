import React from 'react'
import styled from 'styled-components'

const { TouchableOpacity, Text } = {
    TouchableOpacity: styled.button`
        display: flex;
        flex: 1;
        align-self: stretch;
        background-color: #fff;
        border: 1px solid #007788;
        border-radius: 4px;
        margin-left: 5px;
        margin-right: 5px;
    `,
    Text: styled.span`
        flex: 1;
        color: #007788;
        font-size: 16px;
        font-weight: 600;
        padding-top: 10px;
        padding-bottom: 10px;
    `
}


const Button = ({ onPress, children }) =>
    <TouchableOpacity onClick={onPress}>
        <Text>{children}</Text>
    </TouchableOpacity>



export { Button }