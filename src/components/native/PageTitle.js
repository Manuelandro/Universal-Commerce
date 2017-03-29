import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const { titleContainer, titleText } = StyleSheet.create({
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
})

const PageTitle = ({ children }) =>
    <View style={titleContainer}>
        <Text style={titleText}>{children}</Text>
    </View>


export { PageTitle }