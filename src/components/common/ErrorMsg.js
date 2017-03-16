import React from 'react'
import { View, Text } from 'react-native'

const ErrorMsg = ({ children }) =>
    <View>
        <Text style={styles.errorTextStyles}>{children}</Text>
    </View>

const styles = {
    errorTextStyles: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export { ErrorMsg }