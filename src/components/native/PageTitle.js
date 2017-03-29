import React from 'react'
import styled from 'styled-components/native'

const { View, Text } = {
    View: styled.View`
        flex: 1;
        flexDirection: row;
        alignSelf: stretch;
        justifyContent: center;
        marginTop: 20;
        marginBottom: 5;
    `,
    Text: styled.Text`
        alignSelf: center;
        fontSize: 18;
        fontWeight: 600;
        color: #000;
    `
}

const PageTitle = ({ children }) =>
    <View>
        <Text>{children}</Text>
    </View>


export { PageTitle }