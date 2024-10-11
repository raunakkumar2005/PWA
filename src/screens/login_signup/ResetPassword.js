
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../../components/Header';
import CustomButton from '../../components/CustomButton';
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
const ResetPassword = ({ route }) => {
    const { Email } = route === null || route === void 0 ? void 0 : route.params;
    console.log(Email);
    const [isVisible, setisVisible] = useState(false);
    const [countryCode, setCountryCode] = useState('+91');
    const [email, setEmail] = useState(Email);
    const [err, setErr] = useState(null);
    const [mobile, setMobile] = useState('');
    const navigation = useNavigation();
    const isValidEmail = (email) => {
        // Regular expression to match the pattern
        const emailPattern = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.)+com$/;
        return emailPattern.test(email);
    };
    useEffect(() => {
        if (Email != '')
            handleValidation(Email);
    }, []);
    const handleValidation = (text) => {
        if (isValidEmail(text)) {
            setEmail(text);
            setErr(''); // Clear error message if email is valid
        }
        else {
            setErr('Please enter a valid email id');
        }
    };
    const hendleResetPassword = () => __awaiter(void 0, void 0, void 0, function* () {
        setisVisible(true);
        // navigation.navigate('VerifyEmail', { email: email })
        yield authApi.RESET_PASSWORD(email)
            .then(response => {
            console.log(response, 99);
            if (response.data) {
                console.log(response.data.token, 11);
                navigation.navigate('ResetOtp', { token: response.data.token, Email: email });
            }
        })
            .catch(error => {
            console.error(error);
        });
        setisVisible(false);
    });
    return (_jsx(View, Object.assign({ style: styles.container }, { children: _jsxs(SafeAreaProvider, { children: [_jsx(HeaderComponent, { title: 'Reset password' }), _jsxs(View, Object.assign({ style: styles.wraping }, { children: [_jsx(View, Object.assign({ style: styles.descriptionContainer }, { children: _jsx(Text, Object.assign({ style: [textStyles.bodyB3, styles.descriptionText] }, { children: "Enter your email address, we will send you a confirmation code." })) })), _jsxs(View, { children: [_jsx(View, Object.assign({ style: [styles.inputContainer, { borderColor: err == null || err == '' ? '#707371' : '#CC0000' }] }, { children: _jsx(CustomInputText, { PlaceHolder: 'Email', txt: Email, onTextChange: handleValidation, color: err == null || err == '' ? '#707371' : '#CC0000' }) })), err == null || err == '' ? null : _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: err == null || err == '' ? 'black' : '#CC0000' }] }, { children: err }))] }), _jsx(View, Object.assign({ style: styles.buttonContainer }, { children: _jsx(CustomButton, { role: 'iButton', text: 'Send', txtcolor: '#FFFFFF', bgcolor: '#0C447D', borderColor: '#0C447D', onPress: () => hendleResetPassword(), disabled: err != '' || err == null }) }))] })), _jsx(CustomModal, { isVisible: isVisible, setIsVisible: setisVisible })] }) })));
};
const styles = StyleSheet.create({
    wraping: {
        paddingHorizontal: 16
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#707371'
    },
    descriptionContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 24,
    },
    descriptionText: {
        color: '#1C1C1C',
    },
    buttonContainer: {
        marginTop: 24,
    },
});
export default ResetPassword;
