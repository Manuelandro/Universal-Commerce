import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const Spinner = ({ size }) =>
    <View style={styles.containerStyle}>
        <ActivityIndicator size={size || 'small'} />
    </View>

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export { Spinner }