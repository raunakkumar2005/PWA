
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import HeaderComponent from '../../components/Header';
import textStyles from '../../components/textStyles';
import CustomInputText from '../../components/CustomInputText';
import Layout from '../../layouts/ScrollLayout';
import { TouchableOpacity } from 'react-native';
import Calender from '../../assets/Calender';
// import { Calendar } from 'react-native-calendars'
import Dissmiss from '../../assets/Dissmiss';
import ButtonWithAutoWidth from '../../components/ButtonWithAutoWidth';
import ArrowUpload from '../../assets/ArrowUpload';
// import DocumentPicker from 'react-native-document-picker';
import { Image } from 'react-native';
import CheckBox from '../../components/CheckBox';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import Dropdown from '../../assets/Dropdown';
import { GradeAndDeposit } from '../../service/api';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Grading = ({ route }) => {
    const { id } = route === null || route === void 0 ? void 0 : route.params;
    console.log(id, 99);
    const [isClickedCommodity, setIsClickedCommodity] = useState(false);
    const [SelectedCommodity, setSelectedCommodity] = useState('');
    const [SelectedGrade, setSelectedGrade] = useState('');
    const [Data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [ExpiryDate, setExpiryDate] = useState(null);
    const [doc1, setDoc1] = useState(null);
    const [showCalender, setshowCalender] = useState(false);
    const [isCheckBox, setCheckBox] = useState(false);
    const [inputs, setInputs] = useState({
        'Assayer name': '',
        'Foreign matter (%  by weight)': '',
        'Other food grains (% by  weight)': '',
        'Other wheat (% by  weight)': '',
        'Damaged grains (% by  weight)': '',
        'Immature and shrivelled grains (% by  weight)': '',
        'Weevilled grains (% by  weight)': '',
    });
    const Overall_grade = [
        { Grade: 'Grade I', backend: 'grade-I' },
        { Grade: 'Grade II', backend: 'grade-II' },
        { Grade: 'Grade III', backend: 'grade-III' },
    ];
    const navigation = useNavigation();
    const handleTextChange = (key) => (text) => {
        setInputs(prevInputs => (Object.assign(Object.assign({}, prevInputs), { [key]: text })));
    };
    const handleChangeDate = (date) => {
        setshowCalender(false);
        setExpiryDate(date);
    };
    const handlePressedExpiryDate = () => {
        // if (ModalType === 'Deposit date' || ModalType === 'Revalidation date') {
        //     setModalType('Expiry date');
        //     setshowCalender(true);
        // } else {
        setshowCalender(!showCalender);
        //     setModalType('Expiry date');
        // }
    };
    const hendleSubmit = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield GradeAndDeposit.add_grade(id, inputs['Assayer name'], ExpiryDate === null || ExpiryDate === void 0 ? void 0 : ExpiryDate.dateString, inputs['Foreign matter (%  by weight)'], inputs['Other food grains (% by  weight)'], inputs['Other wheat (% by  weight)'], inputs['Damaged grains (% by  weight)'], inputs['Immature and shrivelled grains (% by  weight)'], inputs['Weevilled grains (% by  weight)'], SelectedGrade);
            navigation.navigate('Dashboard', {});
        }
        catch (error) {
            console.error(error.response.data);
        }
    });
    useEffect(() => {
        const getbooking = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield GradeAndDeposit.get_deposit_by_deposit_Id(id);
                console.log(response, 99);
                if (response.data) {
                    console.log(response.data.data, 10189897987);
                    setData(response.data.data);
                }
            }
            catch (error) {
                console.error(error.response.data);
            }
        });
        getbooking();
    }, []);
    const selectDoc = (setDoc) => __awaiter(void 0, void 0, void 0, function* () {
        // try {
        //     const doc = await DocumentPicker.pickSingle({
        //         type: [DocumentPicker.types.images, DocumentPicker.types.pdf] // You can add more types if needed
        //     });
        //     const maxSizeInBytes = 10 * 1024 * 1024; // 10 MB in bytes
        //     if (doc.size > maxSizeInBytes) {
        //         setErrorMessage('Document size exceeds the limit (10 MB)');
        //         return;
        //     } else {
        //         setDoc(doc as Document);
        //         setErrorMessage(null);
        //         console.log(doc);
        //     }
        // } catch (err) {
        //     if (DocumentPicker.isCancel(err)) {
        //         console.log("User cancelled the upload", err);
        //     } else {
        //         console.log(err);
        //     }
        // }
    });
    const allFieldsFilled = Object.values(inputs).every(input => input !== '') && (ExpiryDate !== null) && (SelectedCommodity !== '') && (isCheckBox == true);
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsx(HeaderComponent, { title: 'Grading' }), _jsx(Layout, { children: _jsxs(View, Object.assign({ style: styles.content }, { children: [_jsxs(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1C1C1C' }] }, { children: ["Enter grading information for the ", _jsxs(Text, Object.assign({ style: [textStyles.headingH7] }, { children: ["deposit ID ", Data._id] }))] })), _jsxs(Text, Object.assign({ style: [textStyles.bodyB2, { color: '#1C1C1C' }] }, { children: ["Commodity : ", _jsx(Text, Object.assign({ style: [textStyles.headingH7] }, { children: Data.commodityName }))] })), _jsx(View, Object.assign({ style: { borderWidth: 1, borderRadius: 7, borderColor: '#707371' } }, { children: _jsx(CustomInputText, { PlaceHolder: "Assayer name", onTextChange: handleTextChange('Assayer name') }) })), _jsx(View, Object.assign({ style: {
                                width: '100%',
                                height: 56,
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                            } }, { children: _jsxs(TouchableOpacity, Object.assign({ onPress: handlePressedExpiryDate, style: {
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: '100%',
                                    borderRadius: 8,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                } }, { children: [_jsx(View, Object.assign({ style: { justifyContent: 'center', marginLeft: 14, marginRight: 9.5 } }, { children: _jsx(Calender, {}) })), _jsxs(View, { children: [ExpiryDate == null ? null : _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Assaying date" })), _jsx(Text, Object.assign({ style: ExpiryDate == null ? textStyles.bodyB3 : [textStyles.headingH8, { color: 'black' }] }, { children: ExpiryDate == null ? 'Assaying date' : ExpiryDate.dateString }))] })] })) })), showCalender ? (_jsx(View, { style: styles.calender })) : (_jsx(_Fragment, {})), doc1 == null ?
                            _jsxs(View, { children: [_jsxs(View, Object.assign({ style: {
                                            justifyContent: 'space-evenly',
                                            alignItems: 'center',
                                            height: 137,
                                            borderStyle: 'dashed',
                                            borderWidth: 1,
                                            borderColor: '#86A2BE',
                                            borderRadius: 8,
                                            backgroundColor: 'UI',
                                        } }, { children: [_jsxs(Text, Object.assign({ style: {
                                                    fontWeight: '500',
                                                    color: 'black',
                                                    fontSize: 16,
                                                    lineHeight: 19.2,
                                                } }, { children: ["Upload photo/file ", _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#989E9A' }] }, { children: '(Not mandatory)' }))] })), _jsx(Text, Object.assign({ style: {
                                                    fontWeight: '400',
                                                    color: '#707371',
                                                    fontSize: 14,
                                                    lineHeight: 21,
                                                } }, { children: "File format : PNG, JPG, pdf" })), _jsx(View, Object.assign({ style: { width: '42%' } }, { children: _jsx(ButtonWithAutoWidth, { text: "  Upload", role: "iButton", component: () => _jsx(ArrowUpload, {}), txtcolor: "#FFFFFF", bgcolor: "#0C447D", borderColor: "#0C447D", onPress: () => selectDoc(setDoc1) }) }))] })), _jsx(View, Object.assign({ style: {} }, { children: _jsx(Text, Object.assign({ style: [textStyles.bodyB3, {
                                                    color: errorMessage ? 'red' : '#707371',
                                                }] }, { children: errorMessage ? errorMessage : 'File size should not exceed 10MB' })) }))] }) :
                            _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', gap: 12, alignItems: 'center' } }, { children: [_jsx(Image, { source: { uri: 'https://s3-alpha-sig.figma.com/img/e258/39d6/1ea963e0ed243328dbed0f21ed53730f?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DFT3Y85efZqOUYfCKtOkrWspSUojFS~~ZeTw2xuh9WYVuWu5VzsaTnomOM2JTyXKoy2tEjtzxLirXY3yBYsgReymLhbfeko63-jR5pGrOpnznlvbjdJpvXjtRBTtXaeAvB5SunzpwPEGcciZ5edrhdag1kMX2jtkNnePZFGdGCcWfhjMFXad8s~xd1egOn9Mxb~21UYLEIB1P~BYtSJDOHiv-EJmJxWBngGY7h0B6EMWaG~soTmaHv9~ip4N0gzYWSMxPXxpBNSRU-Zl2S-3UPMUbT6UAIIjBuwjeokFjVmGYOcJmORN8zh0lNuyoOIVPDzVk6fk5gtLd7NJEzFA1g__' }, style: { width: 72, height: 72, borderRadius: 8 } }), _jsxs(View, Object.assign({ style: { gap: 8 } }, { children: [_jsx(Text, Object.assign({ style: {
                                                            fontWeight: '500',
                                                            color: 'black',
                                                            fontSize: 16,
                                                            lineHeight: 19.2,
                                                        } }, { children: "Photo" })), _jsxs(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#545554', }] }, { children: [(doc1.size / 1000 / 1000).toFixed(2), "MB"] }))] }))] })), _jsx(TouchableOpacity, Object.assign({ onPress: () => setDoc1(null), style: { width: 26, height: 26, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C1C4C2', borderRadius: 12 } }, { children: _jsx(Dissmiss, {}) }))] })), _jsx(View, Object.assign({ style: { borderWidth: 1, borderRadius: 7, borderColor: '#707371' } }, { children: _jsx(CustomInputText, { keyboard: 'numeric', PlaceHolder: "Foreign matter (%  by weight)", onTextChange: handleTextChange('Foreign matter (%  by weight)') }) })), _jsx(View, Object.assign({ style: { borderWidth: 1, borderRadius: 7, borderColor: '#707371' } }, { children: _jsx(CustomInputText, { keyboard: 'numeric', PlaceHolder: "Other food grains (% by  weight)", onTextChange: handleTextChange('Other food grains (% by  weight)') }) })), _jsx(View, Object.assign({ style: { borderWidth: 1, borderRadius: 7, borderColor: '#707371' } }, { children: _jsx(CustomInputText, { keyboard: 'numeric', PlaceHolder: "Other wheat (% by  weight)", onTextChange: handleTextChange('Other wheat (% by  weight)') }) })), _jsx(View, Object.assign({ style: { borderWidth: 1, borderRadius: 7, borderColor: '#707371' } }, { children: _jsx(CustomInputText, { keyboard: 'numeric', PlaceHolder: "Damaged grains (% by  weight)", onTextChange: handleTextChange('Damaged grains (% by  weight)') }) })), _jsx(View, Object.assign({ style: { borderWidth: 1, borderRadius: 7, borderColor: '#707371' } }, { children: _jsx(CustomInputText, { keyboard: 'numeric', PlaceHolder: "Immature and shrivelled grains (% by  weight)", onTextChange: handleTextChange('Immature and shrivelled grains (% by  weight)') }) })), _jsx(View, Object.assign({ style: { borderWidth: 1, borderRadius: 7, borderColor: '#707371' } }, { children: _jsx(CustomInputText, { keyboard: 'numeric', PlaceHolder: "Weevilled grains (% by  weight) ", onTextChange: handleTextChange('Weevilled grains (% by  weight)') }) })), _jsx(TouchableOpacity, Object.assign({ style: {
                                borderWidth: 0.5,
                                width: '100%',
                                borderRadius: 8,
                                height: 56,
                                paddingLeft: 12,
                                paddingRight: 25,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }, onPress: () => {
                                setIsClickedCommodity(!isClickedCommodity);
                            } }, { children: _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between' } }, { children: [_jsxs(View, { children: [SelectedCommodity == '' ? null : _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Overall grade" })), _jsx(Text, Object.assign({ style: SelectedCommodity == '' ? textStyles.bodyB3 : [textStyles.headingH8, { color: 'black' }] }, { children: SelectedCommodity == '' ? 'Overall grade' : SelectedCommodity }))] }), _jsx(Dropdown, {})] })) })), isClickedCommodity ? (_jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.commodityScrollView }, { children: Overall_grade.map((item, index) => (_jsx(TouchableOpacity, Object.assign({ style: {
                                    width: '100%',
                                    borderRadius: 8,
                                    height: 50,
                                    justifyContent: 'center',
                                }, onPress: () => {
                                    setSelectedCommodity(item.Grade);
                                    setSelectedGrade(item.backend);
                                    setIsClickedCommodity(!isClickedCommodity);
                                } }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20 } }, { children: item.Grade })) }), index))) }))) : (_jsx(_Fragment, {})), _jsxs(View, Object.assign({ style: { flexDirection: 'row', gap: 8, alignItems: 'center' } }, { children: [_jsx(CheckBox, { onPress: () => setCheckBox(!isCheckBox) }), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1C1C1C' }] }, { children: "The above details are as per assayer\u2019s report" }))] })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1C1C1C' }] }, { children: "The above mentioned information will be sent to the farmer/trader/FPOs for acknowledgement." })), _jsx(CustomButton, { text: "Save deposit", txtcolor: "#FFFFFF", bgcolor: "#0C447D", borderColor: "#0C447D", role: "iButton", onPress: () => hendleSubmit(), disabled: !allFieldsFilled })] })) })] })));
};
export default Grading;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    content: {
        paddingHorizontal: 14.5,
        gap: 24
    },
    calender: {
        backgroundColor: 'white',
        width: '100%',
        zIndex: 1,
        position: 'absolute',
        top: '34%',
        left: '4.4%',
        borderWidth: 0.5,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    commodityScrollView: {
        backgroundColor: 'white',
        width: '100%',
        zIndex: 1,
        position: 'absolute',
        top: '85%',
        left: '4.4%',
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
