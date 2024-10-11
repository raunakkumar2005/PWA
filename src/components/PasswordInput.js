import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import EyeOff from '../assets/EyeOff';
import textStyles from './textStyles';
const PasswordInput = ({ onTextChange, PlaceHolder }) => {
    const [text, setText] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [secureText, setSecureText] = useState(true);
    const handleTextChange = (input) => {
        setText(input);
        if (onTextChange) {
            onTextChange(input); // Notify parent component of the text change
        }
    };
    // const handlePhoneNumberChange = (text: string) => {
    //     // Remove non-numeric characters from the input
    //     // const formattedPhoneNumber = text.replace(/[^\d]/g, '');
    //     // Limit input to 10 digits
    //     // if (formattedPhoneNumber.length <= 10) {
    //     //     setPhoneNumber(formattedPhoneNumber);
    //     //     //   onPhoneNumberChange(formattedPhoneNumber); // Notify parent component of the phone number change
    //     // }
    // };
    return (_jsx(View, Object.assign({ style: styles.container }, { children: _jsxs(View, Object.assign({ style: styles.phoneContainer }, { children: [_jsx(TextInput, { style: [styles.input, textStyles.bodyB3,{ outline: 'none' }], placeholder: PlaceHolder || "Password", placeholderTextColor: "gray", 
                    // keyboardType="phone-pad"
                    secureTextEntry: secureText, onChangeText: handleTextChange, value: text }), _jsx(TouchableOpacity, Object.assign({ style: { marginRight: 10 }, onPressIn: () => setSecureText(false), onPressOut: () => setSecureText(true) }, { children: _jsx(EyeOff, {}) }))] })) })));
};
const styles = StyleSheet.create({
    container: {},
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
        paddingVertical: 12,
        color: '#707371'
    },
});
export default PasswordInput;
