import React from 'react'
import styled from 'styled-components/native'

const { TouchableOpacity, Text } = {
    TouchableOpacity: styled.TouchableOpacity`
        flex: 1;
        alignSelf: stretch;
        backgroundColor: #fff;
        borderRadius: 4;
        borderWidth: 1;
        borderColor: #007788;
        marginLeft: 5;
        marginRight: 5;
    `,
    Text: styled.Text`
        alignSelf: center;
        color: #007788;
        fontSize: 16;
        fontWeight: 600;
        paddingTop: 10;
        paddingBottom: 10;
    `
}


const Button = ({ onPress, children }) =>
    <TouchableOpacity onPress={onPress}>
        <Text>{children}</Text>
    </TouchableOpacity>


export { Button }