import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

const { containerStyle } = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const Spinner = ({ size }) =>
    <View style={containerStyle}>
        <ActivityIndicator size={size || 'small'} />
    </View>


export { Spinner }