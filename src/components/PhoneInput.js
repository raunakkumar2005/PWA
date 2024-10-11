import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
const PhoneInput = ({ onPhoneNumberChange }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleTextChange = (input) => {
        setPhoneNumber(input);
        if (onPhoneNumberChange) {
            onPhoneNumberChange(input); // Notify parent component of the text change
        }
    };
    return (_jsx(View, Object.assign({ style: styles.container }, { children: _jsxs(View, Object.assign({ style: styles.phoneContainer }, { children: [_jsx(Text, Object.assign({ style: styles.countryCode }, { children: "+91" })), _jsx(View, { style: styles.separator }), _jsx(TextInput, { style: styles.input, placeholder: "Phone Number", placeholderTextColor: "gray", keyboardType: "phone-pad", onChangeText: handleTextChange, value: phoneNumber, maxLength: 10 })] })) })));
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
        color: "black",
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
        fontSize: 16,
        color: "black",
        paddingVertical: 8,
    },
});
export default PhoneInput;
