import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, children }) =>
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Text style={styles.buttonTextStyle}>{children}</Text>
    </TouchableOpacity>

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#00788',
        marginLeft: 5,
        marginRight: 5
    },
    buttonTextStyle: {
        alignSelf: 'center',
        color: '#00788',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export { Button }