import React from 'react'
import styled from 'styled-components/native'

const { View, Text } = {
    View: styled.View`
        height: 60;
        justifyContent: center;
        alignItems: center;
        backgroundColor: #fff;
        elevation: 2;
        position: relative;
    `,
    Text: styled.Text`
        fontSize: 20;
    `
}

const Header = ({ headerText }) =>
    (
        <View>
            <Text>{headerText}</Text>
        </View>
    )



export { Header }
