
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import HeaderComponent from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import PasswordInput from '../../components/PasswordInput';
import textStyles from '../../components/textStyles';
import CustomInputText from '../../components/CustomInputText';
import Layout from '../../layouts/layout';
import { authApi } from '../../service/api';
import { updateLoggedIn, setRole, setToken, setName } from '../../redux/slices/user';
import CustomModal from '../../components/LoadingModal';
import { storeRole, storeToken, storeName } from '../../utils/auth';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Home = () => {
    const { width, height } = Dimensions.get('window');
    const [Pass, setPass] = useState("");
    const [Email, setEmail] = useState("");
    const [isVisible, setisVisible] = useState(false);
    const [err, setErr] = useState(null);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.)+com$/;
        return emailPattern.test(email);
    };
    const handleValidation = (text) => {
        if (isValidEmail(text)) {
            setEmail(text);
            setErr(''); // Clear error message if email is valid
        }
        else {
            setErr('Please enter a valid email id');
        }
    };
    const handleLogin = () => __awaiter(void 0, void 0, void 0, function* () {
        setisVisible(true);
        try {
            const response = yield authApi.LOGIN_WITH_EMAIL(Email, Pass);
            if (response.data) {
                const role = response.data.data.role === "Farmer" ? "user" : response.data.data.role === "manager" ? "manager" : "owner";
                const name = response.data.data.role === "manager" ? response.data.data.name : response.data.data.firstName;
                const token = response.data.token;
                console.log("Token in login screen", token);
                console.log(role);
                yield storeRole(role);
                yield storeToken(token);
                yield storeName(name);
                dispatch(updateLoggedIn(true));
                dispatch(setRole(role));
                dispatch(setToken(token));
                dispatch(setName(name));
            }
        }
        catch (error) {
            console.error(error.response.data);
        }
        finally {
            setisVisible(false);
        }
    });
    return (_jsx(Layout, { children: _jsx(View, Object.assign({ style: styles.container }, { children: _jsxs(SafeAreaProvider, { children: [_jsx(HeaderComponent, { title: 'Log in' }), _jsxs(View, Object.assign({ style: { gap: 24, marginHorizontal: 10 } }, { children: [_jsxs(View, { children: [_jsx(View, Object.assign({ style: [styles.inputContainer, { borderColor: err == null || err == '' ? '#707371' : '#CC0000' }] }, { children: _jsx(CustomInputText, { PlaceHolder: 'Email', onTextChange: handleValidation, color: err == null || err == '' ? '#707371' : '#CC0000', keyboard: 'email-address' }) })), err == null || err == '' ? null : _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: err == null || err == '' ? 'black' : '#CC0000' }] }, { children: err }))] }), _jsx(PasswordInput, { onTextChange: text => setPass(text) })] })), _jsx(TouchableOpacity, Object.assign({ style: styles.forgotPassword, onPress: () => navigation.navigate('ResetPassword', { Email }) }, { children: _jsx(Text, Object.assign({ style: styles.forgotPasswordText }, { children: "Forgot password?" })) })), _jsx(View, Object.assign({ style: styles.loginButton }, { children: _jsx(CustomButton, { role: 'iButton', text: 'Log in', txtcolor: '#FFFFFF', bgcolor: '#0C447D', borderColor: '#0C447D', onPress: handleLogin, disabled: ((err != '' || err == null) || Pass == '') }) })), _jsxs(View, Object.assign({ style: styles.signUpContainer }, { children: [_jsx(Text, Object.assign({ style: [styles.signUpText, textStyles.bodyB3] }, { children: "Don\u2019t have an account? " })), _jsx(TouchableOpacity, Object.assign({ onPress: () => navigation.navigate('SignupEmail', {}) }, { children: _jsx(Text, Object.assign({ style: [styles.signUpLink, textStyles.buttonTextUnderline] }, { children: "Sign up" })) }))] })), _jsxs(View, Object.assign({ style: styles.dividerContainer }, { children: [_jsx(View, { style: styles.divider }), _jsx(Text, Object.assign({ style: [styles.dividerText, textStyles.bodyB3] }, { children: "or continue with" })), _jsx(View, { style: styles.divider })] })), _jsxs(View, Object.assign({ style: styles.socialButtonsContainer }, { children: [_jsx(CustomButton, { role: 'iButton', text: '   Mobile number', borderColor: '#0A3664', txtcolor: '#1C1C1C', onPress: () => navigation.navigate('LoginMob', {}) }), _jsx(CustomButton, { role: 'iButton', text: '   Google', borderColor: '#0A3664', txtcolor: '#1C1C1C' })] })), _jsx(CustomModal, { isVisible: isVisible, setIsVisible: setisVisible })] }) })) }));
};
const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#707371'
    },
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center"
    },
    forgotPassword: {
        padding: 8
    },
    forgotPasswordText: {
        fontSize: 14,
        lineHeight: 14,
        color: "#0C447D",
        fontWeight: '600',
        textDecorationLine: 'underline'
    },
    loginButton: {
        padding: 10
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 5,
        marginLeft: 7
    },
    signUpText: {
        fontSize: 14,
        color: '#1C1C1C'
    },
    signUpLink: {
        fontSize: 14,
        color: '#0C447D',
        textDecorationLine: 'underline'
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginTop: '10%'
    },
    divider: {
        borderTopWidth: 1,
        flex: 1,
        height: 1,
        borderColor: '#E0E1E1'
    },
    dividerText: {
        fontSize: 14
    },
    socialButtonsContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        marginTop: '9%',
        justifyContent: "center"
    }
});
export default Home;
