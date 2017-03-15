import React from 'react'
import { View, Text } from 'react-native'

const PageTitle = ({ title }) =>
    <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
    </View>


const styles = {
    titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginTop: 20
    },
    titleText: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '600'
    }
}

export { PageTitle }