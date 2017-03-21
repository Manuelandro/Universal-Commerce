import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const ErrorMsg = ({ children }) =>
    <View>
        <Text style={styles.errorTextStyles}>{children}</Text>
    </View>

const styles = StyleSheet.create({
    errorTextStyles: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
})

export { ErrorMsg }