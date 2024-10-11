import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../../components/Header';
import PasswordInput from '../../components/PasswordInput';
import CustomButton from '../../components/CustomButton';
import textStyles from '../../components/textStyles';
import { authApi } from '../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateLoggedIn } from '../../redux/slices/user';
import { useDispatch } from 'react-redux';
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
const ResetAndLogin = ({ route }) => {
    // const { email } = route?.params
    const { token, Email } = route === null || route === void 0 ? void 0 : route.params;
    const [isVisible, setisVisible] = useState(false);
    const [countryCode, setcountryCode] = useState('+91');
    const [Pass1, setPass1] = useState('');
    const [Pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [err, setErr] = useState(null);
    const [mobile, setMobile] = useState("");
    const dispatch = useDispatch();
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
    const handleUpdatePassword = () => __awaiter(void 0, void 0, void 0, function* () {
        setisVisible(true);
        // navigation.navigate('VerifyMob', { mobile: mobile })
        yield authApi.UPDATE_PASSWORD(Email, Pass)
            .then((response) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(response, 99);
            if (response.data) {
                yield AsyncStorage.setItem('responseData', JSON.stringify(response.data));
                dispatch(updateLoggedIn(true));
                console.log(response.data, 11);
                const role = response.data.data.role;
                // navigation.navigate('Home', {})
                return  role == 'Farmer/FPO/Trader' ? navigation.navigate('Home', {}) : role == 'Warehouse owner' ? navigation.navigate('Dashboard', { variant: 'owner' }) : null;
                // navigation.navigate('VerifyMob', { token: response.data.token, mobile: mobile })
            }
        }))
            .catch(error => {
            console.error(error);
        });
        setisVisible(false);
    });
    return (_jsx(View, Object.assign({ style: styles.container }, { children: _jsxs(SafeAreaProvider, { children: [_jsx(HeaderComponent, { title: 'Reset password and login' }), _jsxs(View, Object.assign({ style: styles.inputContainer }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB4, styles.text] }, { children: "Email" })), _jsx(Text, Object.assign({ style: [textStyles.headingH8, styles.text1, { color: '#222222' }] }, { children: Email }))] })), err == null || err == '' ? null : _jsx(Text, Object.assign({ style: [textStyles.bodyB3, styles.passs, { color: err == null || err == '' ? 'black' : '#CC0000' }] }, { children: err })), _jsx(View, Object.assign({ style: styles.passs1 }, { children: _jsx(PasswordInput, { onTextChange: txt => setPass(txt), PlaceHolder: 'Create new password' }) })), _jsx(View, Object.assign({ style: styles.infoTextContainer }, { children: _jsx(Text, Object.assign({ style: styles.infoText }, { children: "Use 6 or more characters" })) })), _jsx(View, Object.assign({ style: styles.passs }, { children: _jsx(PasswordInput, { onTextChange: txt => setPass1(txt), PlaceHolder: 'Confirm password' }) })), _jsx(View, Object.assign({ style: styles.buttonContainer }, { children: _jsx(CustomButton, { role: 'iButton', text: 'Reset password and login', txtcolor: '#FFFFFF', bgcolor: '#0C447D', borderColor: '#0C447D', onPress: () => handleUpdatePassword(), disabled: (Pass == '' || Pass1 == '' || Pass != Pass1) }) })), _jsx(CustomModal, { isVisible: isVisible, setIsVisible: setisVisible })] }) })));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center"
    },
    infoTextContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
        marginLeft: 10
    },
    infoText: Object.assign({}, textStyles.bodyB4),
    buttonContainer: {
        padding: 10
    },
    inputContainer: {
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 10,
        gap: 4,
        borderColor: '#707371'
    },
    text: {
        paddingTop: "2%",
    },
    text1: {
        // paddingTop: "2%",
        paddingBottom: "2%",
    },
    passs: {
        marginHorizontal: '2.5%'
    },
    passs1: {
        marginHorizontal: '2.5%',
        marginTop: 24,
    }
});
export default ResetAndLogin;
