import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

const Spinner = ({ size }) =>
    <View style={styles.containerStyle}>
        <ActivityIndicator size={size || 'small'} />
    </View>

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export { Spinner }