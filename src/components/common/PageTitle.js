import React from 'react'
import { View, Text } from 'react-native'

const PageTitle = ({ children }) =>
    <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{children}</Text>
    </View>


const styles = {
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 5
    },
    titleText: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: '#000'
    }
}

export { PageTitle }