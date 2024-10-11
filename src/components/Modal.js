import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './CustomButton';
import Or from '../assets/Or';
const { width, height } = Dimensions.get('window');
const LoginBtn = ({ visibility }) => {
    const [isVisible, setIsVisible] = useState(visibility);
    const handleLogin = (method) => {
        console.log(`Logging in with ${method}`);
        // You can implement your login logic here
        // After successful login, you might want to close the modal
        setIsVisible(false);
    };
    const openModal = () => {
        setIsVisible(true);
    };
    const navigation = useNavigation();
    return (_jsx(_Fragment, { children: _jsxs(Modal, Object.assign({ animationType: "fade", transparent: true, visible: isVisible, onRequestClose: () => setIsVisible(false) }, { children: [_jsx(TouchableOpacity, { style: { backgroundColor: 'rgba(0, 0, 0, 0.5)', width: width, height: height }, onPress: () => setIsVisible(false) }), _jsxs(View, Object.assign({ style: [styles.modalContainer] }, { children: [_jsx(Text, Object.assign({ style: styles.textmodal }, { children: "Choose a log in method" })), _jsxs(View, { children: [_jsx(CustomButton, { text: 'Sign up with phone number', bgcolor: '#999999', txtcolor: '#FFFFFF', onPress: () => { navigation.navigate({ name: "Login", params: {} }), setIsVisible(false); } }), _jsx(Or, {}), _jsx(CustomButton, { text: 'Sign up with email', bgcolor: 'white', txtcolor: '#2B2B2B', onPress: () => { navigation.navigate({ name: "Login", params: {} }), setIsVisible(false); } })] })] }))] })) }));
};
const styles = StyleSheet.create({
    container: {
        width: width * 0.9,
        height: height * 0.12,
        position: 'absolute',
        left: '5%',
        paddingVertical: '4%',
        paddingHorizontal: '4%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#909090',
        opacity: 1,
    },
    box: {
        // position: 'absolute',
        // width: width * 0.5,
        // left: '5%',
        // paddingVertical: '3%', 
        // paddingHorizontal: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderRadius: 8,
        // borderWidth: 1,
        // borderColor: '#909090',
        // opacity: 1,
    },
    image: {
        width: 68,
        height: 60,
        // borderRadius: 25,
    },
    text: {
        marginLeft: '5%',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 19.2,
        textAlign: 'center',
        color: '#626262',
    },
    textmodal: {
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 24,
        textAlign: 'center',
        color: '#626262',
    },
    modalContainer: {
        width: width,
        height: height * 0.48,
        top: height * 0.48,
        borderRadius: 24,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'absolute',
    },
});
export default LoginBtn;
