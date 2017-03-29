import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

const { containerStyle, inputStyles, labelStyle } = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        marginLeft: 5,
        marginRight: 5
    },
    inputStyles: {
        height: 40,
        flex: 3,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 5,
        flex: 1
    }
})



const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, autoCapitalize }) =>
    <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
            placeholder={placeholder}
            autoCorrect={false}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
            style={inputStyles}
        />
    </View>


export { Input }