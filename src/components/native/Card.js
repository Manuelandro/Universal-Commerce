import React from 'react'
import styled from 'styled-components/native'

const { View } = {
    View: styled.View`
        borderWidth: 1;
        borderRadius: 2;
        borderColor: #ddd;
        borderBottomWidth: 0;
        shadowColor: #000;
        shadowOffset: { width: 0, height: 2 };
        shadowOpacity: 0.1;
        shadowRadius: 2;
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

