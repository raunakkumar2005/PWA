
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
// import {
//     CodeField,
//     Cursor,
//     useBlurOnFulfill,
//     useClearByFocusCell,
// } from 'react-native-confirmation-code-field';
import { useNavigation } from "@react-navigation/native";
import HeaderComponent from "../../components/Header";
import CustomButton from "../../components/CustomButton";
import textStyles from "../../components/textStyles";
import { authApi } from "../../service/api";
import CustomModal from "../../components/LoadingModal";
const CELL_COUNT = 5;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ResetOtp = ({ route }) => {
    const { token } = route === null || route === void 0 ? void 0 : route.params;
    const { Email } = route === null || route === void 0 ? void 0 : route.params;
    const [isVisible, setisVisible] = useState(false);
    const navigation = useNavigation();
    const [code, setCode] = useState("");
    // const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
    // const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    //     value: code,
    //     setValue: setCode,
    // });
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
        if (e.nativeEvent.key === "Backspace") {
            const newCode = [...code];
            newCode[index] = "";
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
    const handleVerifyOtp = () => __awaiter(void 0, void 0, void 0, function* () {
        // navigation.navigate('FinishCreatingAccountEmail', { email: email })
        try {
            setisVisible(true);
            // Call the verifyOtpByEmail function
            const response = yield authApi.VERIFY_OTP_PASSWORD(code.join(""), token);
            if (response.data) {
                console.log(response.data, 14);
                // If verification is successful, navigate to the next screen
                navigation.navigate("ResetAndLogin", {
                    token: response.data.token,
                    Email: Email,
                });
            }
        }
        catch (error) {
            // Handle error if verification fails
            console.error("Verification failed:", error);
        }
        finally {
            setisVisible(false);
        }
    });
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsx(HeaderComponent, { title: "Reset password" }), _jsxs(View, Object.assign({ style: styles.content }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB3, styles.enterCodeText] }, { children: "Enter the 5 digit code sent in the email" })), Array.from({ length: CELL_COUNT }).map((_, index) => (_jsx(TextInput, { style: styles.cell, value: code[index], onChangeText: (text) => handleChangeText(text, index), onKeyPress: (e) => handleKeyPress(e, index), keyboardType: "number-pad", maxLength: 1, textAlign: "center", "data-index": index }, index))), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, styles.resendCodeText] }, { children: "You didn't receive the code? Resend" })), _jsx(CustomButton, { role: "iButton", text: "Reset password", txtcolor: "#ffffff", borderColor: "#0C447D", bgcolor: "#0C447D", onPress: () => handleVerifyOtp(), disabled: code.length !== 5 })] })), _jsx(CustomModal, { isVisible: isVisible, setIsVisible: setisVisible })] })));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        padding: 20,
        backgroundColor: "white",
        flex: 1,
    },
    enterCodeText: {
        color: "black",
    },
    resendCodeText: {
        color: "black",
        marginVertical: "8%",
    },
    codeFieldRoot: {
        marginTop: 20,
    },
    cell: {
        width: 57,
        height: 68,
        color: "#1C1C1C",
        lineHeight: 69,
        fontSize: 24,
        textAlign: "center",
        backgroundColor: "#CEDAE5",
        borderRadius: 6,
    },
    focusCell: {
        borderColor: "#000",
    },
});
export default ResetOtp;
