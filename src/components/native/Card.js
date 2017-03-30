import React from 'react'
import styled from 'styled-components/native'

const { View } = {
    View: styled.View`
        borderWidth: 1;
        borderRadius: 2;
        borderColor: #ddd;
        borderBottomWidth: 0;
        elevation: 1;
        marginLeft: 5;
        marginRight: 5;
        marginTop: 10;
    `
}

const Card = ({ children }) =>
    <View>
        {children}
    </View>


export { Card }

