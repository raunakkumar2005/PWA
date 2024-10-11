import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import LoginBtn from '../../components/Modal';
const LoginMain = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleLoginButtonClick = () => {
        setIsModalVisible(true);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsx(Text, Object.assign({ style: [styles.text, { top: 84 }] }, { children: "Log in as" })), _jsx(LoginBtn, { top: 140, imageUrl: require("../../assets/Vector.png"), text: "Farmer/Trader" }), _jsx(LoginBtn, { top: 248, imageUrl: require('../../assets/Vector.png'), text: "Warehouse owner" }), _jsx(LoginBtn, { top: 356, imageUrl: require("../../assets/Vector.png"), text: "Bank employee" })] })), _jsxs(View, Object.assign({ style: [{ flexDirection: 'row', position: 'absolute' }] }, { children: [_jsx(Text, Object.assign({ style: [styles.signup, { top: 470, left: 16 }] }, { children: "Don\u2019t have an account?" })), _jsx(TouchableOpacity, { children: _jsx(Text, Object.assign({ style: [styles.signup, { top: 470, left: 165, textDecorationLine: 'underline', fontWeight: 'bold', }] }, { children: 'Sign up' })) })] }))] }));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        position: 'absolute',
        marginLeft: '5%',
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 24,
        textAlign: 'center',
        color: '#626262',
    },
    signup: {
        position: 'absolute',
        fontFamily: 'Noto Serif',
        fontSize: 14,
        lineHeight: 14,
        textAlign: 'center',
        color: '#232323',
    },
});
export default LoginMain;
