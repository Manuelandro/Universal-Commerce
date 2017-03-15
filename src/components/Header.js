import React from 'react'
import { Text, View } from 'react-native'

const Header = ({ headerText }) => {
    const { textStyle, viewStyle } = styles

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        height: 60,
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcfcfc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}

export default Header
