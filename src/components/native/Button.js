import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const { buttonStyle, buttonTextStyle } = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#007788',
        marginLeft: 5,
        marginRight: 5
    },
    buttonTextStyle: {
        alignSelf: 'center',
        color: '#007788',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
})


const Button = ({ onPress, children }) =>
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={buttonTextStyle}>{children}</Text>
    </TouchableOpacity>


export { Button }