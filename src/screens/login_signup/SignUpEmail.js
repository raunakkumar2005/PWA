
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import Google from '../../assets/Google';
import IPhone from '../../assets/Phone';
import textStyles from '../../components/textStyles';
import CustomInputText from '../../components/CustomInputText';
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
    const [isVisible, setisVisible] = useState(false);
    const [countryCode, setCountryCode] = useState('+91');
    const [email, setEmail] = useState('');
    const [err, setErr] = useState(null);
    const navigation = useNavigation();
    const isValidEmail = (email) => {
        // Regular expression to match the pattern
        const emailPattern = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.)+com$/;
        return emailPattern.test(email);
    };
    const handleValidation = (text) => {
        setEmail(text);
        if (isValidEmail(text)) {
            setErr(''); // Clear error message if email is valid
        }
        else {
            setErr('Please enter a valid email id');
        }
    };
    const handleSignup = () => __awaiter(void 0, void 0, void 0, function* () {
        setisVisible(true);
        // navigation.navigate('VerifyEmail', { email: email })
        yield authApi.signupByEmail(email)
            .then(response => {
            console.log(response, 99);
            if (response.data) {
                console.log(response.data.token, 11);
                navigation.navigate('VerifyEmail', { token: response.data.token, email: email });
            }
        })
            .catch(error => {
            console.error(error);
        });
        setisVisible(false);
    });
    return (_jsx(View, Object.assign({ style: styles.container }, { children: _jsx(SafeAreaProvider, { children: _jsxs(View, Object.assign({ style: styles.innerContainer }, { children: [_jsx(HeaderComponent, { title: 'Create An Account' }), _jsx(View, Object.assign({ style: [styles.inputContainer, { borderColor: err == null || err == '' ? '#707371' : '#CC0000' }] }, { children: _jsx(CustomInputText, { PlaceHolder: 'Email', onTextChange: handleValidation, color: err == null || err == '' ? '#707371' : '#CC0000' }) })), _jsx(View, Object.assign({ style: styles.verificationTextContainer }, { children: _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: err == null || err == '' ? 'black' : '#CC0000' }] }, { children: err == null || err == '' ? 'Verification code will be sent to confirm your mobile number' : err })) })), _jsx(View, Object.assign({ style: styles.buttonContainer }, { children: _jsx(CustomButton, { role: 'iButton', text: 'Continue', txtcolor: '#FFFFFF', bgcolor: '#0C447D', borderColor: '#0C447D', onPress: () => handleSignup(), disabled: err != '' || err == null }) })), _jsxs(View, Object.assign({ style: styles.loginContainer }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB3, styles.loginText] }, { children: "Already have an account?" })), _jsx(TouchableOpacity, Object.assign({ onPress: () => navigation.navigate('LoginEmail', {}) }, { children: _jsx(Text, Object.assign({ style: textStyles.buttonTextUnderline }, { children: "Log in" })) }))] })), _jsxs(View, Object.assign({ style: styles.dividerContainer }, { children: [_jsx(View, { style: styles.divider }), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, styles.dividerText] }, { children: "or continue with" })), _jsx(View, { style: styles.divider })] })), _jsxs(View, Object.assign({ style: styles.socialButtonsContainer }, { children: [_jsx(CustomButton, { role: 'iButton', text: '   Mobile number', borderColor: '#0A3664', txtcolor: '#1C1C1C', onPress: () => navigation.navigate('SignupMob', {}), component: () => _jsx(IPhone, {}) }), _jsx(CustomButton, { role: 'iButton', text: '   Google', borderColor: '#0A3664', txtcolor: '#1C1C1C', component: () => _jsx(Google, {}) })] })), _jsx(CustomModal, { isVisible: isVisible, setIsVisible: setisVisible })] })) }) })));
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
    },
    innerContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 10,
        marginBottom: 16,
        borderColor: '#707371'
    },
    verificationTextContainer: {
        paddingHorizontal: 14,
        paddingBottom: 10,
    },
    buttonContainer: {
        padding: 10,
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 5,
        marginLeft: 10,
    },
    loginText: {
        color: '#1c1c1c',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginTop: '10%',
    },
    divider: {
        borderWidth: 0.2,
        flex: 1,
        height: 1,
        borderColor: '#D3D3D3',
    },
    dividerText: {
        color: '#1C1C1C',
    },
    socialButtonsContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        marginTop: '9%',
        justifyContent: 'center',
    },
});
export default Home;
