import React from 'react'
import styled from 'styled-components'

const { View, Text, TextInput } = {
    View: styled.div`
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        border-width: 1px;
        border-color: #ccc;
        margin-left: 5px;
        margin-right: 5px;
    `,
    Text: styled.label`
        height: 40px;
        flex: 3;
        padding-left: 5px;
        padding-right: 5px;
        font-size: 18px;
        line-height: 40px;
    `,
    TextInput: styled.input`
        font-size: 18px;
        padding-left: 5px;
        flex: 1;
        text-transform: ${props => props.autoCapitalize ? 'capitalize' : 'none'};
    `
}



const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, autoCapitalize }) => {
    const type = (!secureTextEntry) ? 'text' : 'password'

    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                type={type}
                placeholder={placeholder}
                autoCapitalize={autoCapitalize}
                value={value}
                onChange={onChangeText}
            />
        </View>
    )
}


export { Input }