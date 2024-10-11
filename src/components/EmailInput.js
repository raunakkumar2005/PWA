import { jsx as _jsx } from "react/jsx-runtime";
// @ts-nocheck
import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
const EmailInput = ({ onPhoneNumberChange }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleTextChange = (input) => {
        setPhoneNumber(input);
        if (onPhoneNumberChange) {
            onPhoneNumberChange(input); // Notify parent component of the text change
        }
    };
    return (_jsx(View, Object.assign({ style: styles.container }, { children: _jsx(View, Object.assign({ style: styles.phoneContainer }, { children: _jsx(TextInput, { style: styles.input, placeholder: "Email", placeholderTextColor: "gray", inputMode: 'email', 
                // keyboardType="phone-pad"
                onChangeText: handleTextChange, value: phoneNumber }) })) })));
};
const styles = StyleSheet.create({
    container: {
    // paddingHorizontal: 10,
    // marginVertical: 15
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'gray',
    },
    countryCode: {
        fontSize: 16,
        marginHorizontal: 8,
    },
    separator: {
        width: 1,
        height: '100%',
        backgroundColor: 'gray',
        marginHorizontal: 8,
    },
    input: {
        flex: 1,
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
});
export default EmailInput;
