
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, View } from "react-native";
import HeaderComponent from "../../components/Header";
import { TouchableOpacity, ScrollView } from 'react-native';
import Plus from "../../assets/Plus";
import { Text } from "react-native";
import textStyles from "../../components/textStyles";
import { RadioButton } from "react-native-paper";
import CustomButton from "../../components/CustomButton";
import { useEffect, useState } from "react";
import { warehouseApi } from "../../service/api";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const managers = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Ritesh Smith" },
    { id: 3, name: "Charlie Brown" },
    { id: 4, name: "David Williams" },
    { id: 5, name: "Emma Davis" },
    { id: 6, name: "Fiona Clark" },
    { id: 7, name: "George Harris" },
    { id: 8, name: "Hannah Lewis" },
    { id: 9, name: "Ian Walker" },
    { id: 10, name: "Julia Scott" }
];
const ListManager = ({ navigation, route }) => {
    const [checked, setChecked] = useState('');
    const [managers, setmanagers] = useState([]);
    const { warehouse } = route.params;
    const getmanagers = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield warehouseApi.getWarehouseManagerbyOwner();
            console.log(response, 100);
            if (response) {
                console.log("Manager data : ", response);
                setmanagers(response);
            }
        }
        catch (error) {
            console.error(error);
        }
    });
    const assignManager = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(checked);
            const response = yield warehouseApi.assignWarehouseManager((warehouse === null || warehouse === void 0 ? void 0 : warehouse._id) || '', checked);
            if (response) {
                console.log("Manager data : ", response.data);
            }
            navigation.navigate('Warehouse');
        }
        catch (error) {
            console.error(error);
        }
    });
    useEffect(() => {
        getmanagers();
    }, []);
    return (_jsxs(View, Object.assign({ style: { flex: 1, backgroundColor: '#ffffff', gap: 4 } }, { children: [_jsx(View, Object.assign({ style: {
                    marginTop: 25
                } }, { children: _jsx(HeaderComponent, { title: "List of managers" }) })), _jsx(Text, Object.assign({ style: [textStyles.bodyBoldB3, {
                        marginLeft: 20, color: 'black', marginBottom: 10
                    }] }, { children: "Select a manager from the following list" })), _jsx(ScrollView, Object.assign({ style: styles.radioButtonsContainer }, { children: managers.map((manager) => (_jsxs(View, Object.assign({ style: styles.radioButton }, { children: [_jsx(RadioButton, { value: manager.name, status: checked === manager._id ? 'checked' : 'unchecked', onPress: () => setChecked(manager._id) }), _jsx(Text, Object.assign({ style: styles.radioButtonText }, { children: manager.name }))] })))) })), _jsxs(TouchableOpacity, Object.assign({ style: {
                    gap: 4,
                    padding: 4,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }, onPress: () => {
                    navigation.navigate('Add Manager');
                } }, { children: [_jsx(Plus, { color: '#0C447D', props: undefined }), _jsx(Text, Object.assign({ style: [textStyles.buttonTextUnderline] }, { children: "Add manager" }))] })), _jsx(View, Object.assign({ style: styles.buttonContainer }, { children: _jsx(CustomButton, { role: 'iButton', text: 'Select a manager', txtcolor: '#FFFFFF', bgcolor: '#0C447D', borderColor: '#0C447D', onPress: assignManager, disabled: checked === "" }) }))] })));
};
const styles = StyleSheet.create({
    radioButtonsContainer: {
        padding: '1.5%',
        marginLeft: 10
    },
    radioButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    radioButtonText: {
        fontSize: 16,
        fontWeight: "500",
        color: '#1C1C1C',
        marginLeft: 5
    },
    buttonContainer: {
        padding: 10,
        paddingTop: 15,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default ListManager;
