
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { View } from "react-native";
import { Text } from "react-native";
import textStyles from "../../components/textStyles";
import CustomInputText from "../../components/CustomInputText";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import PasswordInput from "../../components/PasswordInput";
import { warehouseApi } from "../../service/api";
import HeaderComponent from "../../components/Header";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const EditManager = ({ navigation }) => {
    const [inputs1, setInputs1] = useState({
        managerName: "",
        email: "",
        password: ""
    });
    const allFieldsFilled1 = Object.values(inputs1).every(input => input !== '');
    const handleTextChange1 = (key) => (text) => {
        setInputs1(prevInputs => (Object.assign(Object.assign({}, prevInputs), { [key]: text })));
    };
    const handleAddManager = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(inputs1, 100);
            const response = yield warehouseApi.addWarehouseManager(inputs1);
            console.log(response, 100);
            if (response.data) {
                console.log("Manager data : ", response.data);
            }
        }
        catch (error) {
            console.error(error);
        }
    });
    const handleNavigation = () => {
        navigation.navigate('Warehouse');
    };
    return (_jsxs(View, Object.assign({ style: { marginHorizontal: 16, flex: 1 } }, { children: [_jsx(HeaderComponent, { title: 'Add manager' }), _jsx(Text, Object.assign({ style: [
                    textStyles.headingH6_5,
                    { color: '#1c1c1c', marginTop: 24, marginBottom: 14 },
                ] }, { children: "Manager details" })), _jsx(View, Object.assign({ style: { marginVertical: '2%', borderWidth: 1, borderRadius: 7 } }, { children: _jsx(CustomInputText, { PlaceHolder: "Manager name", onTextChange: handleTextChange1('managerName') }) })), _jsx(View, Object.assign({ style: { marginVertical: '2%', borderWidth: 1, borderRadius: 7 } }, { children: _jsx(CustomInputText, { PlaceHolder: "Manager email id", onTextChange: handleTextChange1('email') }) })), _jsx(View, Object.assign({ style: { marginVertical: '2%', borderRadius: 7 } }, { children: _jsx(PasswordInput, { onTextChange: handleTextChange1('password'), PlaceHolder: "Create password" }) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB4, { color: '#707371', marginBottom: 16 }] }, { children: "Use 6 or more characters" })), _jsx(CustomButton, { text: "Register", txtcolor: "#FFFFFF", bgcolor: "#0C447D", borderColor: "#0C447D", role: "iButton", onPress: () => {
                    handleAddManager();
                    handleNavigation();
                }, disabled: !allFieldsFilled1 })] })));
};
export default EditManager;
