import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const { errorTextStyles } = StyleSheet.create({
    errorTextStyles: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
})

const ErrorMsg = ({ children }) =>
    <View>
        <Text style={errorTextStyles}>{children}</Text>
    </View>



export { ErrorMsg }