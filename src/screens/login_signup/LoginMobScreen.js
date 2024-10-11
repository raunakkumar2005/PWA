
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../../components/Header';
import PhoneInput from '../../components/PhoneInput';
// import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomButton from '../../components/CustomButton';
import IEmail from '../../assets/Email';
import Google from '../../assets/Google';
import Layout from '../../layouts/layout';
import textStyles from '../../components/textStyles';
import { authApi } from '../../service/api';
import CustomModal from '../../components/LoadingModal';
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
    const [countryCode, setcountryCode] = useState('+91');
    const [isVisible, setisVisible] = useState(false);
    const [mobile, setMobile] = useState("");
    const navigation = useNavigation();
    const handleLogin = () => __awaiter(void 0, void 0, void 0, function* () {
        setisVisible(true);
        // navigation.navigate('VerifyMob', { mobile: mobile })
        yield authApi.LOGIN_WITH_PHONE(mobile)
            .then((response) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(response, 99);
            if (response.data) {
                console.log(response.data.token, 11);
                navigation.navigate('LoginOTP', { token: response.data.token, });
                // navigation.navigate('VerifyMob', { token: response.data.token, mobile: mobile })
            }
        }))
            .catch(error => {
            console.error(error);
        });
        setisVisible(false);
    });
    return (_jsx(Layout, { children: _jsx(View, Object.assign({ style: styles.container }, { children: _jsxs(SafeAreaProvider, { children: [_jsx(HeaderComponent, { title: 'Log in' }), _jsx(View, Object.assign({ style: styles.phoneInputWrapper }, { children: _jsx(PhoneInput, { onPhoneNumberChange: (text) => setMobile(text) }) })), _jsx(View, Object.assign({ style: styles.infoTextContainer }, { children: _jsx(Text, Object.assign({ style: [textStyles.bodyB3, styles.infoText] }, { children: "OTP will be send to confirm your mobile number" })) })), _jsx(View, Object.assign({ style: styles.buttonContainer }, { children: _jsx(CustomButton, { role: 'iButton', text: 'Continue', txtcolor: '#FFFFFF', bgcolor: '#0C447D', borderColor: '#0C447D', onPress: () => handleLogin(), disabled: mobile.length < 10 }) })), _jsxs(View, Object.assign({ style: styles.signUpContainer }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB3, styles.signUpText] }, { children: "Don\u2019t have an account? " })), _jsx(TouchableOpacity, Object.assign({ onPress: () => navigation.navigate('SignupMob', {}) }, { children: _jsx(Text, Object.assign({ style: textStyles.buttonTextUnderline }, { children: "Sign up" })) }))] })), _jsxs(View, Object.assign({ style: styles.separatorContainer }, { children: [_jsx(View, { style: styles.separator }), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, styles.separatorText] }, { children: "or continue with" })), _jsx(View, { style: styles.separator })] })), _jsxs(View, Object.assign({ style: styles.socialButtonContainer }, { children: [_jsx(CustomButton, { role: 'iButton', text: '   Email', borderColor: '#0A3664', txtcolor: '#1C1C1C', onPress: () => navigation.navigate('LoginEmail', {}), component: () => _jsx(IEmail, {}) }), _jsx(CustomButton, { role: 'iButton', text: '   Google', borderColor: '#0A3664', txtcolor: '#1C1C1C', component: () => _jsx(Google, {}) })] })), _jsx(CustomModal, { isVisible: isVisible, setIsVisible: setisVisible })] }) })) }));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center"
    },
    infoTextContainer: {
        padding: 8
    },
    infoText: {
        color: "black",
    },
    buttonContainer: {
        padding: 10
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 5,
        marginLeft: 7
    },
    signUpText: {
        color: '#1C1C1C'
    },
    signUpLink: {
        fontSize: 14,
        color: '#0C447D',
        textDecorationLine: 'underline'
    },
    separatorContainer: {
        gap: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '10%'
    },
    separator: {
        borderBottomWidth: 1,
        flex: 1,
        height: 1,
        borderColor: '#D3D3D3'
    },
    separatorText: {
        color: '#1C1C1C'
    },
    socialButtonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '9%',
        justifyContent: "center",
        gap: 20
    },
    phoneInputWrapper: {
        paddingHorizontal: 8,
    },
});
export default Home;
