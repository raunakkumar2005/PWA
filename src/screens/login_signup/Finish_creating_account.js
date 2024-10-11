
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import HeaderComponent from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CustomInputText from '../../components/CustomInputText';
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
const Register = ({ route }) => {
    const { mobile, token } = route === null || route === void 0 ? void 0 : route.params;
    const [isVisible, setisVisible] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [checked, setChecked] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [btnColor, setBtncolor] = useState('gray');
    const allFieldsFilled = (lname !== '') && (fname !== '') && (checked !== '');
    const handleCreateAccount = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setisVisible(true);
            if (checked === 'Farmer/FPO/Trader') {
                const response = yield authApi.CREATE_FARMER_WITH_PHONE(fname, lname, token);
                console.log(response.data.token);
                navigation.navigate('SelectRole', { token: response.data.token, nav: 'phone' });
            }
            else {
                const response = yield authApi.CREATE_ACCOUNT_WITH_PHONE(fname, lname, checked, token);
                if (response.data) {
                    const token = response.data.token;
                    const name = response.data.data.firstName;
                    const role = "owner";
                    yield storeRole(role);
                    yield storeToken(token);
                    yield storeName(name);
                    dispatch(updateLoggedIn(true));
                    dispatch(setRole(role));
                    dispatch(setToken(token));
                    dispatch(setName(name));
                }
            }
        }
        catch (error) {
            console.error('Account creation failed:', error);
        }
        finally {
            setisVisible(false);
        }
    });
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsx(HeaderComponent, { title: 'Finish creating account' }), _jsxs(View, Object.assign({ style: styles.inputContainer }, { children: [_jsx(CustomInputText, { PlaceHolder: 'First Name', onTextChange: text => setFname(text) }), _jsx(View, { style: styles.inputSeparator }), _jsx(CustomInputText, { PlaceHolder: 'Last Name', onTextChange: text => setLname(text) })] })), _jsx(View, Object.assign({ style: { marginHorizontal: 10 } }, { children: _jsxs(View, Object.assign({ style: styles.phoneContainer }, { children: [_jsx(Text, Object.assign({ style: [styles.countryCode, textStyles.headingH8] }, { children: "+91" })), _jsx(View, { style: styles.separator1 }), _jsxs(View, Object.assign({ style: styles.inputContainer1 }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB4] }, { children: "Phone number" })), _jsx(Text, Object.assign({ style: [textStyles.headingH8, { color: '#222222' }] }, { children: mobile }))] }))] })) })), _jsx(View, Object.assign({ style: styles.professionTextContainer }, { children: _jsx(Text, Object.assign({ style: styles.professionText }, { children: "Select a profession" })) })), _jsxs(View, Object.assign({ style: styles.radioButtonsContainer }, { children: [_jsxs(View, Object.assign({ style: styles.radioButton }, { children: [_jsx(RadioButton, { value: 'Farmer/FPO/Trader', status: checked === 'Farmer/FPO/Trader' ? 'checked' : 'unchecked', onPress: () => setChecked('Farmer/FPO/Trader') }), _jsx(Text, Object.assign({ style: styles.radioButtonText }, { children: "Farmer/FPO/Trader" }))] })), _jsxs(View, Object.assign({ style: styles.radioButton }, { children: [_jsx(RadioButton, { value: 'Warehouse owner', status: checked === 'Warehouse owner' ? 'checked' : 'unchecked', onPress: () => setChecked('Warehouse owner') }), _jsx(Text, Object.assign({ style: styles.radioButtonText }, { children: "Warehouse owner" }))] })), _jsxs(View, Object.assign({ style: styles.radioButton }, { children: [_jsx(RadioButton, { value: 'Pledge', status: checked === 'Pledge' ? 'checked' : 'unchecked', onPress: () => setChecked('Pledge') }), _jsx(Text, Object.assign({ style: styles.radioButtonText }, { children: "Pledge" }))] })), _jsx(View, Object.assign({ style: styles.buttonContainer }, { children: _jsx(CustomButton, { role: 'iButton', text: 'Register', txtcolor: '#FFFFFF', bgcolor: '#0C447D', borderColor: '#0C447D', onPress: handleCreateAccount, disabled: !allFieldsFilled }) }))] })), _jsx(CustomModal, { isVisible: isVisible, setIsVisible: setisVisible })] })));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    countryCode: {
        fontSize: 16,
        marginHorizontal: 8,
        color: '#1C1C1C',
    },
    separator1: {
        borderLeftWidth: 1,
        height: '100%',
        borderColor: '#707371',
        marginHorizontal: 9,
    },
    inputContainer: {
        margin: "3%",
        borderWidth: 1,
        borderColor: '#707371',
        borderRadius: 7,
    },
    inputContainer1: {
        gap: 5,
        padding: "2%",
    },
    inputSeparator: {
        borderTopWidth: 1,
        borderColor: '#707371',
        width: "100%",
    },
    professionTextContainer: {
        padding: "4%",
    },
    professionText: {
        fontWeight: "bold",
        color: '#1C1C1C',
        fontSize: 15,
    },
    radioButtonsContainer: {
        padding: '1%',
    },
    radioButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    radioButtonText: {
        fontSize: 18,
        fontWeight: "600",
        color: '#1C1C1C',
    },
    buttonContainer: {
        padding: 10,
        paddingTop: 15,
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'gray',
    },
});
export default Register;
