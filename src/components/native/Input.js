import React from 'react'
import styled from 'styled-components/native'

const { View, TextInput, Text } = {
    View: styled.View`
        flex: 1;
        flexDirection: row;
        alignItems: center;
        borderWidth: 1;
        borderColor: #ccc;
        marginLeft: 5;
        marginRight: 5;
    `,
    TextInput: styled.TextInput`
        height: 40;
        flex: 3;
        paddingLeft: 5;
        paddingRight: 5;
        fontSize: 18;
        lineHeight: 23;
    `,
    Text: styled.Text`
        fontSize: 18;
        paddingLeft: 5;
        flex: 1;
    `
}


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, autoCapitalize }) =>
    <View>
        <Text>{label}</Text>
        <TextInput
            placeholder={placeholder}
            autoCorrect={false}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
        />
    </View>


export { Input }