
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { useEffect, useState } from 'react';
import HeaderComponent from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import CustomInputText from '../../components/CustomInputText';
import statesOfIndia from '../../components/State';
import textStyles from '../../components/textStyles';
import ButtonWithAutoWidth from '../../components/ButtonWithAutoWidth';
import ArrowUpload from '../../assets/ArrowUpload';
import CheckBox from '../../components/CheckBox';
// import DocumentPicker from 'react-native-document-picker';
import { warehouseApi } from '../../service/api';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { width, height } = Dimensions.get('window');
const AddWarehouse = ({ route }) => {
    const data = route.params ? route.params.data : [];
    console.log(data, 44);
    const [isClickedUnit, setIsClickedUnit] = useState(false);
    const [SelectedUnit, setSelectedUnit] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [menu, setMenu] = useState(0);
    const [doc3, setDoc3] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [Address, setAddress] = useState(null);
    const navigation = useNavigation();
    const [warehouseId, setWarehouseId] = useState("");
    const mappingFunction = (item) => `${item.name}`;
    const [inputs, setInputs] = useState({
        warehouse_name: '',
        warehouse_id: '',
        locality_area: '',
        pincode: '',
        city: '',
        mobile_number: '',
        total_capacity: '',
        filled_capacity: '',
    });
    const [inputs1, setInputs1] = useState({
        managerName: "",
        email: "",
        password: ""
    });
    const Unit = [{ unit: 'MT' }, { unit: 'QT' }];
    const selectDoc = (setDoc) => __awaiter(void 0, void 0, void 0, function* () {
        // try {
        //   const doc = await DocumentPicker.pickSingle({
        //     type: [DocumentPicker.types.pdf], // You can add more types if needed
        //   });
        //   const maxSizeInBytes = 10 * 1024 * 1024; // 10 MB in bytes
        //   if (doc.size > maxSizeInBytes) {
        //     setErrorMessage('Document size exceeds the limit (10 MB)');
        //     return;
        //   } else {
        //     setDoc(doc as Document);
        //     setErrorMessage(null);
        //     console.log(doc);
        //   }
        // } catch (err) {
        //   if (DocumentPicker.isCancel(err)) {
        //     console.log('User cancelled the upload', err);
        //   } else {
        //     console.log(err);
        //   }
        // }
    });
    const handleTextChange = (key) => (text, num) => {
        setInputs(prevInputs => (Object.assign(Object.assign({}, prevInputs), { [key]: num ? Number(text) : text })));
    };
    const handleTextChange1 = (key) => (text) => {
        setInputs1(prevInputs => (Object.assign(Object.assign({}, prevInputs), { [key]: text })));
    };
    useEffect(() => {
        if (Address) {
            setInputs(prevInputs => (Object.assign(Object.assign({}, prevInputs), { locality_area: Address.locality_area, landmark: Address.landmark, pincode: Address.pincode, city: Address.city, state: Address.State })));
        }
    }, [Address]);
    const handleAddWarehouse = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(inputs, 100);
            const response = yield warehouseApi.addWarehouse(inputs);
            console.log(response.data, 100);
            if (response.data) {
                console.log("Added_Warehouse : ", response.data.data);
                setWarehouseId(response.data.data._id);
            }
        }
        catch (error) {
            console.error(error);
        }
        setMenu(1);
    });
    const handleNavigation = () => {
        const temp = data;
        temp.push(inputs);
        navigation.navigate('Warehouse', {});
    };
    useEffect(() => {
        console.log('Items list updated:', inputs);
    }, [inputs]);
    useEffect(() => {
        console.log('Items list updated:', inputs1);
    }, [inputs1]);
    const allFieldsFilled = 
    // Object.values(inputs).every(input => input !== '') &&
    selectedItem !== null &&
        SelectedUnit !== '';
    return (_jsxs(View, Object.assign({ style: { flex: 1, backgroundColor: '#ffffff' } }, { children: [_jsx(HeaderComponent, { title: 'Add warehouse' }), _jsxs(View, Object.assign({ style: { marginHorizontal: 16, flex: 1 } }, { children: [menu == 0 ? (_jsxs(_Fragment, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(View, { style: {
                                            width: 100,
                                            height: 6,
                                            borderRadius: 4,
                                            backgroundColor: '#0038FF',
                                        } }), _jsx(View, { style: {
                                            width: 100,
                                            height: 6,
                                            borderRadius: 4,
                                            backgroundColor: '#CEDAE5',
                                        } })] })), _jsx(Text, Object.assign({ style: [
                                    textStyles.headingH6_5,
                                    { color: '#1c1c1c', marginTop: 24, marginBottom: 6 },
                                ] }, { children: "Warehouse details" })), _jsxs(ScrollView, Object.assign({ scrollEnabled: !isClicked }, { children: [_jsxs(View, { children: [_jsx(View, Object.assign({ style: {
                                                    marginVertical: '2%',
                                                    borderWidth: 1,
                                                    borderRadius: 7,
                                                } }, { children: _jsx(CustomInputText, { PlaceHolder: "Warehouse name", onTextChange: handleTextChange('warehouse_name') }) })), _jsx(View, Object.assign({ style: {
                                                    marginVertical: '2%',
                                                    borderWidth: 1,
                                                    borderRadius: 7,
                                                } }, { children: _jsx(CustomInputText, { PlaceHolder: "Warehouse ID", onTextChange: handleTextChange('warehouse_id') }) })), _jsx(View, { style: {
                                                    marginVertical: '2%',
                                                    height: 250,
                                                    zIndex: 1,
                                                    borderWidth: 1,
                                                    borderRadius: 7,
                                                } }), _jsx(View, Object.assign({ style: {
                                                    marginVertical: '2%',
                                                    borderWidth: 1,
                                                    borderRadius: 7,
                                                } }, { children: _jsx(CustomInputText, { PlaceHolder: "Locality / Area / Street ", txt: (Address === null || Address === void 0 ? void 0 : Address.locality_area) || "", onTextChange: handleTextChange('locality_area') }) })), _jsx(View, Object.assign({ style: {
                                                    marginVertical: '2%',
                                                    borderWidth: 1,
                                                    borderRadius: 7,
                                                } }, { children: _jsx(CustomInputText, { PlaceHolder: "Landmark (optional)" }) })), _jsx(View, Object.assign({ style: {
                                                    marginVertical: '2%',
                                                    borderWidth: 1,
                                                    borderRadius: 7,
                                                    zIndex: -1,
                                                } }, { children: _jsx(CustomInputText, { PlaceHolder: "Pin code", txt: (Address === null || Address === void 0 ? void 0 : Address.pincode) || "", onTextChange: handleTextChange('pincode'), keyboard: "numeric" }) })), _jsx(View, Object.assign({ style: {
                                                    marginVertical: '2%',
                                                    borderWidth: 1,
                                                    borderRadius: 7,
                                                } }, { children: _jsx(CustomInputText, { PlaceHolder: "City", txt: (Address === null || Address === void 0 ? void 0 : Address.city) || "", onTextChange: handleTextChange('city') }) })), isClicked ? (_jsx(View, { children: _jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.ScrollView }, { children: statesOfIndia.map((item, index) => (_jsx(TouchableOpacity, Object.assign({ style: {
                                                            width: '100%',
                                                            borderRadius: 8,
                                                            height: 50,
                                                            justifyContent: 'center',
                                                        }, onPress: () => {
                                                            setSelectedItem(item);
                                                            setIsClicked(false);
                                                        } }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20, color: 'black' } }, { children: mappingFunction(item) })) }), index))) })) })) : null, _jsx(TouchableOpacity, Object.assign({ style: {
                                                    width: '100%',
                                                    marginVertical: '2%',
                                                    height: 55,
                                                    justifyContent: 'center',
                                                    borderWidth: 1,
                                                    borderRadius: 7,
                                                }, onPress: () => {
                                                    setIsClicked(!isClicked);
                                                } }, { children: _jsxs(View, Object.assign({ style: {
                                                        height: '100%',
                                                        justifyContent: 'space-evenly',
                                                        paddingHorizontal: 12,
                                                        position: 'absolute',
                                                    } }, { children: [selectedItem == null ? null : (_jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "State" }))), _jsx(Text, Object.assign({ style: selectedItem == null
                                                                ? textStyles.bodyB3
                                                                : [textStyles.headingH8, { color: 'black' }] }, { children: selectedItem == null
                                                                ? 'State'
                                                                : mappingFunction(selectedItem) }))] })) })), _jsx(View, Object.assign({ style: {
                                                    marginVertical: '2%',
                                                    borderWidth: 1,
                                                    borderRadius: 7,
                                                } }, { children: _jsx(CustomInputText, { PlaceHolder: "Mobile number", onTextChange: handleTextChange('mobile_number'), keyboard: "phone-pad" }) })), _jsxs(View, Object.assign({ style: {
                                                    marginVertical: '2%',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                } }, { children: [_jsx(View, Object.assign({ style: { width: 200, borderWidth: 1, borderRadius: 7 } }, { children: _jsx(CustomInputText, { PlaceHolder: "Total capacity", onTextChange: handleTextChange('total_capacity', true), keyboard: "numeric" }) })), _jsxs(TouchableOpacity, Object.assign({ style: {
                                                            width: '35%',
                                                            borderWidth: 1,
                                                            borderRadius: 8,
                                                            paddingLeft: 12,
                                                            justifyContent: 'center',
                                                        }, onPress: () => setIsClickedUnit(!isClickedUnit) }, { children: [SelectedUnit == '' ? null : (_jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Unit" }))), _jsx(Text, Object.assign({ style: SelectedUnit == ''
                                                                    ? textStyles.bodyB3
                                                                    : [textStyles.headingH8, { color: 'black' }] }, { children: SelectedUnit == '' ? 'Unit' : SelectedUnit }))] }))] })), _jsxs(View, Object.assign({ style: {
                                                    marginVertical: '2%',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                } }, { children: [_jsx(View, Object.assign({ style: { width: 200, borderWidth: 1, borderRadius: 7 } }, { children: _jsx(CustomInputText, { PlaceHolder: "Filled capacity", onTextChange: handleTextChange('filled_capacity', true), keyboard: "numeric" }) })), _jsxs(TouchableOpacity, Object.assign({ style: {
                                                            width: '35%',
                                                            borderWidth: 1,
                                                            borderRadius: 8,
                                                            paddingLeft: 12,
                                                            justifyContent: 'center',
                                                        }, onPress: () => setIsClickedUnit(!isClickedUnit) }, { children: [SelectedUnit == '' ? null : (_jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Unit" }))), _jsx(Text, Object.assign({ style: SelectedUnit == ''
                                                                    ? textStyles.bodyB3
                                                                    : [textStyles.headingH8, { color: 'black' }] }, { children: SelectedUnit == '' ? 'Unit' : SelectedUnit }))] }))] })), isClickedUnit ? (_jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.UnitScrollView }, { children: Unit.map((item, index) => (_jsx(TouchableOpacity, Object.assign({ style: {
                                                        width: '100%',
                                                        borderRadius: 8,
                                                        height: 31,
                                                        marginVertical: 9,
                                                        justifyContent: 'center',
                                                    }, onPress: () => {
                                                        setSelectedUnit(item.unit);
                                                        setIsClickedUnit(!isClickedUnit);
                                                    } }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20, color: 'black' } }, { children: item.unit })) }), index))) }))) : (_jsx(_Fragment, {}))] }), _jsx(CustomButton, { text: "Save and continue", txtcolor: "#FFFFFF", bgcolor: "#0C447D", borderColor: "#0C447D", role: "iButton", onPress: () => handleAddWarehouse(), disabled: !allFieldsFilled })] }))] })) : (_jsx(_Fragment, {})), menu == 1 ? (_jsxs(_Fragment, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(View, { style: {
                                            width: 100,
                                            height: 6,
                                            borderRadius: 4,
                                            backgroundColor: '#CEDAE5',
                                        } }), _jsx(View, { style: {
                                            width: 100,
                                            height: 6,
                                            borderRadius: 4,
                                            backgroundColor: '#0038FF',
                                        } })] })), _jsx(Text, Object.assign({ style: [
                                    textStyles.headingH6_5,
                                    { color: '#1c1c1c', marginTop: 24, marginBottom: 16 },
                                ] }, { children: "WDRA and warehouse facilities" })), _jsx(View, Object.assign({ style: { flexDirection: 'row', marginBottom: 17 } }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: '#1c1c1c' }] }, { children: "Are you WDRA registered?" })) })), _jsxs(View, Object.assign({ style: {
                                    alignItems: 'center',
                                    height: 137,
                                    gap: 8,
                                    paddingHorizontal: 12,
                                    paddingVertical: 16,
                                    borderStyle: 'dashed',
                                    borderWidth: 1,
                                    borderColor: '#86A2BE',
                                    borderRadius: 8,
                                    backgroundColor: 'UI',
                                } }, { children: [_jsx(Text, Object.assign({ style: [
                                            textStyles.headingH7,
                                            {
                                                color: 'black',
                                            },
                                        ] }, { children: "WDRA certificate" })), _jsx(Text, Object.assign({ style: [
                                            textStyles.bodyB3,
                                            {
                                                color: '#707371',
                                            },
                                        ] }, { children: "File format : Pdf" })), _jsx(View, Object.assign({ style: { width: '42%' } }, { children: _jsx(ButtonWithAutoWidth, { text: "  Upload", role: "iButton", component: () => _jsx(ArrowUpload, {}), txtcolor: "#FFFFFF", bgcolor: "#0C447D", borderColor: "#0C447D" }) }))] })), _jsxs(View, Object.assign({ style: { gap: 8, marginVertical: 16 } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: '#1c1c1c' }] }, { children: "Facilities" })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1c1c1c' }] }, { children: "Add the facilities that your warehouse has" })), _jsxs(View, Object.assign({ style: { gap: 10 } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', gap: 8 } }, { children: [_jsx(CheckBox, {}), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1c1c1c' }] }, { children: "24 x 7 security" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', gap: 8 } }, { children: [_jsx(CheckBox, {}), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1c1c1c' }] }, { children: "Cold storage" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', gap: 8 } }, { children: [_jsx(CheckBox, {}), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1c1c1c' }] }, { children: "Dry storage" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', gap: 8 } }, { children: [_jsx(CheckBox, {}), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1c1c1c' }] }, { children: "Bank loan" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', gap: 8 } }, { children: [_jsx(CheckBox, {}), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1c1c1c' }] }, { children: "license" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', gap: 8 } }, { children: [_jsx(CheckBox, {}), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1c1c1c' }] }, { children: "Logistics" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', gap: 8 } }, { children: [_jsx(CheckBox, {}), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1c1c1c' }] }, { children: "Climate control" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', gap: 8 } }, { children: [_jsx(CheckBox, {}), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1c1c1c' }] }, { children: "Fire safety" }))] }))] }))] })), _jsx(CustomButton, { text: "Save and continue", txtcolor: "#FFFFFF", bgcolor: "#0C447D", borderColor: "#0C447D", role: "iButton", onPress: () => {
                                    setMenu(0);
                                    handleNavigation();
                                } })] })) : (_jsx(_Fragment, {}))] }))] })));
};
export default AddWarehouse;
const styles = StyleSheet.create({
    ScrollView: {
        backgroundColor: 'white',
        width: '100%',
        zIndex: 2,
        position: 'absolute',
        top: -300,
        // left: '5%',
        height: 300,
        borderWidth: 0.5,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    UnitScrollView: {
        backgroundColor: 'white',
        width: '35%',
        zIndex: 1,
        position: 'absolute',
        top: '65%',
        left: '65%',
        height: 'auto',
        borderWidth: 0.5,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
