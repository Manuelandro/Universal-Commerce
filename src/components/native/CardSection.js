import React from 'react'
import { StyleSheet, View } from 'react-native'

const { containerStyle } = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
})

const CardSection = ({ children }) =>
    <View style={containerStyle}>{children}</View>



export { CardSection }