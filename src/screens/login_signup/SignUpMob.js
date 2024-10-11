
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../../components/Header';
import PhoneInput from '../../components/PhoneInput';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton';
import Google from '../../assets/Google';
import textStyles from '../../components/textStyles';
import { authApi } from '../../service/api';
import IEmail from '../../assets/Email';
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
    const [isVisible, setisVisible] = useState(false);
    const [countryCode, setCountryCode] = useState('+91');
    const [mobile, setMobile] = useState("");
    const navigation = useNavigation();
    useEffect(() => {
        console.log('Items list updated:', mobile);
    }, [mobile]);
    const handleSignup = () => __awaiter(void 0, void 0, void 0, function* () {
        setisVisible(true);
        // navigation.navigate('VerifyMob', { mobile: mobile })
        yield authApi.signupByPhone(mobile)
            .then(response => {
            console.log(response, 99);
            if (response.data) {
                console.log(response.data.token, 11);
                navigation.navigate('VerifyMob', { token: response.data.token, mobile: mobile });
            }
        })
            .catch(error => {
            console.error(error);
        });
        setisVisible(false);
    });
    return (_jsx(View, Object.assign({ style: styles.wrapper }, { children: _jsx(SafeAreaProvider, { children: _jsxs(View, Object.assign({ style: styles.container }, { children: [_jsx(HeaderComponent, { title: 'Create An Account' }), _jsx(View, Object.assign({ style: styles.phoneInputWrapper }, { children: _jsx(PhoneInput, { onPhoneNumberChange: (text) => setMobile(text) }) })), _jsx(View, Object.assign({ style: styles.otpTextWrapper }, { children: _jsx(Text, Object.assign({ style: [textStyles.bodyB3, styles.otpText] }, { children: "OTP will be sent to confirm your mobile number" })) })), _jsx(View, Object.assign({ style: styles.continueButtonWrapper }, { children: _jsx(CustomButton, { role: 'iButton', text: 'Continue', bgcolor: '#0C447D', txtcolor: '#FFFFFF', borderColor: '#0C447D', onPress: () => handleSignup(), disabled: mobile.length < 10 }) })), _jsxs(View, Object.assign({ style: styles.loginTextWrapper }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB3, styles.loginText] }, { children: "Already have an account?" })), _jsx(TouchableOpacity, Object.assign({ onPress: () => { navigation.navigate('LoginMob', {}); } }, { children: _jsx(Text, Object.assign({ style: textStyles.buttonTextUnderline }, { children: "Login" })) }))] })), _jsxs(View, Object.assign({ style: styles.continueWithWrapper }, { children: [_jsx(View, { style: styles.line }), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, styles.continueWithText] }, { children: "or continue with" })), _jsx(View, { style: styles.line })] })), _jsxs(View, Object.assign({ style: styles.socialButtonsWrapper }, { children: [_jsx(CustomButton, { role: 'iButton', text: '   Email', borderColor: '#0A3664', txtcolor: '#1C1C1C', onPress: () => navigation.navigate('SignupEmail', {}), component: () => _jsx(IEmail, {}) }), _jsx(CustomButton, { role: 'iButton', text: '   Google', borderColor: '#0A3664', txtcolor: '#1C1C1C', component: () => _jsx(Google, {}) })] })), _jsx(CustomModal, { isVisible: isVisible, setIsVisible: setisVisible })] })) }) })));
};
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    phoneInputWrapper: {
        paddingHorizontal: 15,
    },
    otpTextWrapper: {
        padding: 16,
        paddingHorizontal: 15,
    },
    otpText: {
        color: "black",
    },
    continueButtonWrapper: {
        paddingHorizontal: 10,
    },
    loginTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 8,
        marginLeft: 16,
    },
    loginText: {
        color: '#1C1C1C',
    },
    continueWithWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginTop: '10%',
    },
    line: {
        borderWidth: 0.2,
        flex: 1,
        height: 1,
        borderColor: '#D3D3D3',
    },
    continueWithText: {
        color: '#1C1C1C',
    },
    socialButtonsWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        marginTop: '9%',
        justifyContent: "center",
    }
});
export default Home;
