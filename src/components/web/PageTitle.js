import React from 'react'
import styled from 'styled-components'

const { View, Text } = {
    View: styled.div`
        display: flex;
        flex: 1;
        flex-direction: row;
        align-self: stretch;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 5px;
    `,
    Text: styled.p`
        align-self: center;
        font-size: 18px;
        font-weight: 600;
        color: #000;
    `
}

const PageTitle = ({ children }) =>
    <View>
        <Text>{children}</Text>
    </View>


export { PageTitle }