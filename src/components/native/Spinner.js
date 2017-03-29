import React from 'react'
import styled from 'styled-components/native'

const { View, ActivityIndicator } = {
    View: styled.View`
        flex: 1;
        justifyContent: center;
        alignItems: center;
    `,
    ActivityIndicator: styled.ActivityIndicator``
}

const Spinner = ({ size }) =>
    <View>
        <ActivityIndicator size={size || 'small'} />
    </View>


export { Spinner }