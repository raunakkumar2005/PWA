import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
// import {
//   CodeField,
//   Cursor,
//   useBlurOnFulfill,
//   useClearByFocusCell,
// } from 'react-native-confirmation-code-field';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import HeaderComponent from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import textStyles from '../../components/textStyles';
import { authApi } from '../../service/api';
import { storeName, storeRole, storeToken } from '../../utils/auth';
import { updateLoggedIn, setRole, setToken, setName } from '../../redux/slices/user';
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

const CELL_COUNT = 4;
const Otp = ({ route }) => {
    const { token } = route === null || route === void 0 ? void 0 : route.params;
    const [isVisible, setisVisible] = useState(false);
    const navigation = useNavigation();
    const [code, setCode] = useState('');
    // const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
    // const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    //     value: code,
    //     setValue: setCode,
    // });
    const dispatch = useDispatch();
    const handleVerifyPhone = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setisVisible(true);
            const response = yield authApi.VERIFY_OTP_LOGIN_PHONE(code.join(""), token);
            if (response.data) {
                const role = response.data.data.role === 'Warehouse owner' ? 'owner' : 'user';
                const token = response.data.token;
                const name = response.data.data.firstName;
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
            console.error('Verification failed:', error);
        }
        finally {
            setisVisible(false);
        }
    });
    const handleChangeText = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
        // Focus the next input field if the text is not empty
        if (text && index < CELL_COUNT - 1) {
            const nextInput = document.querySelector(`input[data-index="${index + 1}"]`);
            if (nextInput) {
                nextInput.focus();
            }
        }
    };
    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace') {
            const newCode = [...code];
            newCode[index] = '';
            setCode(newCode);
            // Focus the previous input field if the backspace key is pressed
            if (index > 0) {
                const prevInput = document.querySelector(`input[data-index="${index - 1}"]`);
                if (prevInput) {
                    prevInput.focus();
                }
            }
        }
    };
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsx(HeaderComponent, { title: "Verify OTP" }), _jsxs(View, Object.assign({ style: styles.content }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB3, styles.infoText] }, { children: "Enter the 4 digit code sent in sms" })), _jsx(View, Object.assign({ style: styles.cells }, { children: Array.from({ length: CELL_COUNT }).map((_, index) => (_jsx(TextInput, { style: styles.cell, value: code[index], onChangeText: (text) => handleChangeText(text, index), onKeyPress: (e) => handleKeyPress(e, index), keyboardType: "number-pad", maxLength: 1, textAlign: "center", "data-index": index }, index))) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, styles.resendText] }, { children: "You didn't receive the code? Resend" })), _jsx(CustomButton, { role: "iButton", text: "Verify OTP", bgcolor: "#0C447D", txtcolor: "#FFFFFF", borderColor: "#0C447D", onPress: handleVerifyPhone, disabled: code.length !== 4 })] })), _jsx(CustomModal, { isVisible: isVisible, setIsVisible: setisVisible })] })));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
        backgroundColor: 'white',
        flex: 1,
    },
    infoText: {
        color: 'black',
    },
    codeFieldRoot: {
        marginTop: 20,
    },
    cell: {
        width: 64,
        height: 72,
        color: '#1C1C1C',
        lineHeight: 69,
        fontSize: 24,
        textAlign: 'center',
        backgroundColor: '#CEDAE5',
        borderRadius: 10,
    },
    focusCell: {
        borderColor: '#000',
    },
    resendText: {
        color: 'black',
        marginTop: '8%',
        marginBottom: '8%',
    },
    cells: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row'
    }
});
export default Otp;
