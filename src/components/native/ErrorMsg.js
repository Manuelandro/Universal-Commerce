import React from 'react'
import styled from 'styled-components/native'

const { Text, View } = {
    View: styled.View`

    `,
    Text: styled.Text`
        fontSize: 20;
        alignSelf: center;
        color: red;
    `
}

const ErrorMsg = ({ children }) =>
    <View>
        <Text>{children}</Text>
    </View>



export { ErrorMsg }