import React from 'react'
import styled from 'styled-components'

const { View, Text } = {
    View: styled.div`
        width: 100%;
    `,
    Text: styled.div`
        font-size: 20px;
        align-self: center;
        color: red;
    `
}

const ErrorMsg = ({ children }) =>
    <View>
        <Text>{children}</Text>
    </View>



export { ErrorMsg }