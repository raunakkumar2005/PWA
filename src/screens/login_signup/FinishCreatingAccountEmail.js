
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import HeaderComponent from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import CustomInputText from '../../components/CustomInputText';
import PasswordInput from '../../components/PasswordInput';
import textStyles from '../../components/textStyles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
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
const FinishWithEmail = ({ route }) => {
    const { email } = route === null || route === void 0 ? void 0 : route.params;
    const { token } = route === null || route === void 0 ? void 0 : route.params;
    const navigation = useNavigation();
    const [isVisible, setisVisible] = useState(false);
    const [checked, setChecked] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();
    const allFieldsFilled = (pass !== '') && (lname !== '') && (fname !== '') && (checked !== '');
    const handleCreateAccount = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setisVisible(true);
            if (checked == 'Farmer/FPO/Trader') {
                const response = yield authApi.SIGNUP_WITH_FARMER_WITH_EMAIL(fname, lname, pass, token);
                console.log(response.data.token);
                navigation.navigate('SelectRole', { token: response.data.token, nav: 'email' });
            }
            else {
                const response = yield authApi.CREATE_ACCOUNT_WITH_EMAIL(fname, lname, checked, pass, token);
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
                    return checked == 'Warehouse owner' ? navigation.navigate('Dashboard', { variant: 'owner' }) : null;
                }
            }
        }
        catch (error) {
            console.error('Verification failed:', error);
        }
        finally {
            setisVisible(false);
        }
    });
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsx(HeaderComponent, { title: 'Finish creating account' }), _jsxs(View, Object.assign({ style: styles.inputContainer }, { children: [_jsx(CustomInputText, { PlaceHolder: 'First Name', onTextChange: text => setFname(text) }), _jsx(View, { style: styles.inputSeparator }), _jsx(CustomInputText, { PlaceHolder: 'Last Name', onTextChange: text => setLname(text) })] })), _jsxs(View, Object.assign({ style: styles.inputContainer }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB4, styles.text] }, { children: "Email" })), _jsx(Text, Object.assign({ style: [textStyles.headingH8, { color: '#222222' }] }, { children: email }))] })), _jsx(View, Object.assign({ style: styles.EmailContainer }, { children: _jsx(PasswordInput, { onTextChange: text => setPass(text) }) })), _jsx(View, Object.assign({ style: styles.professionTextContainer }, { children: _jsx(Text, Object.assign({ style: styles.professionText }, { children: "Select a profession" })) })), _jsxs(View, Object.assign({ style: styles.radioButtonsContainer }, { children: [_jsxs(View, Object.assign({ style: styles.radioButton }, { children: [_jsx(RadioButton, { value: 'Farmer/FPO/Trader', status: checked === 'Farmer/FPO/Trader' ? 'checked' : 'unchecked', onPress: () => setChecked('Farmer/FPO/Trader') }), _jsx(Text, Object.assign({ style: styles.radioButtonText }, { children: "Farmer/FPO/Trader" }))] })), _jsxs(View, Object.assign({ style: styles.radioButton }, { children: [_jsx(RadioButton, { value: 'Warehouse owner', status: checked === 'Warehouse owner' ? 'checked' : 'unchecked', onPress: () => setChecked('Warehouse owner') }), _jsx(Text, Object.assign({ style: styles.radioButtonText }, { children: "Warehouse owner" }))] })), _jsxs(View, Object.assign({ style: styles.radioButton }, { children: [_jsx(RadioButton, { value: 'Pledge', status: checked === 'Pledge' ? 'checked' : 'unchecked', onPress: () => setChecked('Pledge') }), _jsx(Text, Object.assign({ style: styles.radioButtonText }, { children: "Pledge" }))] })), _jsx(View, Object.assign({ style: styles.buttonContainer }, { children: _jsx(CustomButton, { role: 'iButton', text: 'Register', txtcolor: '#FFFFFF', bgcolor: '#0C447D', borderColor: '#0C447D', onPress: () => handleCreateAccount(), disabled: !allFieldsFilled }) }))] })), _jsx(CustomModal, { isVisible: isVisible, setIsVisible: setisVisible })] })));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    inputContainer: {
        margin: "3%",
        borderWidth: 1,
        borderRadius: 7,
    },
    EmailContainer: {
        height: 55,
        paddingHorizontal: 10,
    },
    inputSeparator: {
        borderTopWidth: 1,
        width: "100%",
    },
    text: {
        paddingLeft: 12,
        padding: "2%",
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
});
export default FinishWithEmail;
