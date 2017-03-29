import React from 'react'
import styled from 'styled-components/native'

const { View } = {
    View: styled.View`
        borderBottomWidth: 1;
        borderColor: #ddd;
        padding: 5;
        backgroundColor: #fff;
        justifyContent: flex-start;
        flexDirection: row;
        position: relative;
    `
}

const CardSection = ({ children }) =>
    <View>{children}</View>



export { CardSection }