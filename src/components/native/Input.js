import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, autoCapitalize }) =>
    <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{label}</Text>
        <TextInput
            placeholder={placeholder}
            autoCorrect={false}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
            style={styles.inputStyles}
        />
    </View>

const styles = StyleSheet.create({
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

export { Input }