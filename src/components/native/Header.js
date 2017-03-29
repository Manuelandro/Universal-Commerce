import React from 'react'
import styled from 'styled-components/native'

const { View, Text } = {
    View: styled.View`
        height: 60;
        paddingTop: 15;
        justifyContent: center;
        alignItems: center;
        backgroundColor: #fcfcfc;
        shadowColor: #000;
        shadowOffset: { width: 0, height: 2 };
        shadowOpacity: 0.2;
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
