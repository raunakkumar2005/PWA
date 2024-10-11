
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { useState } from 'react';
import HeaderComponent from '../../components/Header';
import ButtonWithAutoWidth from '../../components/ButtonWithAutoWidth';
import ArrowUpload from '../../assets/ArrowUpload';
import Dissmiss from '../../assets/Dissmiss';
import CheckBox from '../../components/CheckBox';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import statesOfIndia from '../../components/State';
import CustomInputText from '../../components/CustomInputText';
import PhoneInput from '../../components/PhoneInput';
import EmailInput from '../../components/EmailInput';
import textStyles from '../../components/textStyles';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const KycOwner = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [kycStatus, setKycStatus] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const [doc1, setDoc1] = useState(null);
    const [doc2, setDoc2] = useState(null);
    const [doc3, setDoc3] = useState(null);
    const [isClickedContinue, setIsClickedContinue] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const navigation = useNavigation();
    const [selectedItem, setSelectedItem] = useState(null);
    const mappingFunction = (item) => `${item.name}`;
    const allFieldsFilled = (doc1 !== null) && (doc2 !== null) && (doc3 !== null);
    const saveKycStatus = (status) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield AsyncStorage.setItem('@kyc_status', JSON.stringify(status));
            setKycStatus(status);
        }
        catch (e) {
            // handle error
            console.error(e);
        }
    });
    const selectDoc = (setDoc) => __awaiter(void 0, void 0, void 0, function* () {
        // try {
        //     const doc = await DocumentPicker.pickSingle({
        //         type: [DocumentPicker.types.pdf] // You can add more types if needed
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
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsx(HeaderComponent, { title: 'Profile' }), !isClickedContinue ? (
            // Personal details and address container
            _jsxs(View, Object.assign({ style: styles.container }, { children: [_jsxs(View, Object.assign({ style: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: '5%',
                        } }, { children: [_jsx(View, { style: {
                                    width: 156,
                                    height: 6,
                                    backgroundColor: '#0038FF',
                                    borderRadius: 4,
                                } }), _jsx(View, { style: {
                                    width: 156,
                                    height: 6,
                                    backgroundColor: '#CEDAE5',
                                    borderRadius: 4,
                                } })] })), _jsx(View, Object.assign({ style: { margin: '5%' } }, { children: _jsx(Text, Object.assign({ style: {
                                fontSize: 18,
                                lineHeight: 21.6,
                                color: '#1C1C1C',
                                fontWeight: 'bold',
                            } }, { children: "Personal details and address" })) })), _jsxs(ScrollView, Object.assign({ scrollEnabled: !isClicked, style: { height: '70%', width: '100%', } }, { children: [_jsxs(View, { children: [_jsxs(View, Object.assign({ style: { marginHorizontal: "5%", marginVertical: '2%', borderWidth: 1, borderRadius: 7 } }, { children: [_jsx(CustomInputText, { PlaceHolder: 'First Name' }), _jsx(View, { style: { borderTopWidth: 1, width: "100%" } }), _jsx(CustomInputText, { PlaceHolder: 'Last Name' })] })), _jsx(View, Object.assign({ style: { marginHorizontal: "5%", marginVertical: '2%', } }, { children: _jsx(EmailInput, {}) })), _jsx(View, Object.assign({ style: { marginHorizontal: "5%", marginVertical: '2%', } }, { children: _jsx(PhoneInput, {}) })), _jsx(View, Object.assign({ style: { marginHorizontal: "5%", marginVertical: '2%', borderWidth: 1, borderRadius: 7 } }, { children: _jsx(CustomInputText, { PlaceHolder: 'Flat no / Building name' }) })), _jsx(View, Object.assign({ style: { marginHorizontal: "5%", marginVertical: '2%', borderWidth: 1, borderRadius: 7 } }, { children: _jsx(CustomInputText, { PlaceHolder: 'Locality / Area / Street ' }) })), _jsx(View, Object.assign({ style: { marginHorizontal: "5%", marginVertical: '2%', borderWidth: 1, borderRadius: 7 } }, { children: _jsx(CustomInputText, { PlaceHolder: 'Landmark (optional)' }) })), _jsx(View, Object.assign({ style: { marginHorizontal: "5%", marginVertical: '2%', borderWidth: 1, borderRadius: 7, zIndex: -1 } }, { children: _jsx(CustomInputText, { PlaceHolder: 'Pin code' }) })), _jsx(View, Object.assign({ style: { marginHorizontal: "5%", marginVertical: '2%', borderWidth: 1, borderRadius: 7 } }, { children: _jsx(CustomInputText, { PlaceHolder: 'City' }) })), isClicked ? _jsx(View, { children: _jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.ScrollView }, { children: statesOfIndia.map((item, index) => (_jsx(TouchableOpacity, Object.assign({ style: { width: '100%', borderRadius: 8, height: 50, justifyContent: 'center' }, onPress: () => {
                                                    setSelectedItem(item);
                                                    setIsClicked(false);
                                                } }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20 } }, { children: mappingFunction(item) })) }), index))) })) }) : null, _jsx(TouchableOpacity, Object.assign({ style: { marginHorizontal: "5%", marginVertical: '2%', height: 55, justifyContent: 'center', borderWidth: 1, borderRadius: 7 }, onPress: () => { setIsClicked(!isClicked); } }, { children: _jsxs(View, Object.assign({ style: { height: '100%', justifyContent: 'space-evenly', paddingHorizontal: 12, position: 'absolute' } }, { children: [selectedItem == null ? null : _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "State" })), _jsx(Text, Object.assign({ style: selectedItem == null ? textStyles.bodyB3 : [textStyles.headingH8, { color: 'black' }] }, { children: selectedItem == null ? 'State' : mappingFunction(selectedItem) }))] })) }))] }), _jsxs(View, Object.assign({ style: {
                                    marginHorizontal: '5%',
                                    marginVertical: '2%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginBottom: '7%',
                                } }, { children: [_jsx(View, Object.assign({ style: { width: '48%', zIndex: -1 } }, { children: _jsx(ButtonWithAutoWidth, { role: "iButton", text: "Cancel", borderColor: "#07294B", txtcolor: "#07294B", onPress: () => navigation.goBack() }) })), _jsx(View, Object.assign({ style: { width: '48%', zIndex: -1 } }, { children: _jsx(ButtonWithAutoWidth, { role: "iButton", text: "Continue", bgcolor: "#0C447D", borderColor: "#0C447D", txtcolor: "#FFFFFF", onPress: () => setIsClickedContinue(true) }) }))] }))] }))] }))) : (
            // Upload document container
            _jsxs(View, Object.assign({ style: styles.container }, { children: [_jsxs(View, Object.assign({ style: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: '5%',
                        } }, { children: [_jsx(View, { style: {
                                    width: 156,
                                    height: 6,
                                    backgroundColor: '#CEDAE5',
                                    borderRadius: 4,
                                } }), _jsx(View, { style: {
                                    width: 156,
                                    height: 6,
                                    backgroundColor: '#0038FF',
                                    borderRadius: 4,
                                } })] })), _jsx(View, Object.assign({ style: { margin: '5%', marginBottom: 0 } }, { children: _jsx(Text, Object.assign({ style: {
                                fontSize: 18,
                                lineHeight: 21.6,
                                color: '#1C1C1C',
                                fontWeight: 'bold',
                            } }, { children: "Upload documents" })) })), _jsxs(ScrollView, Object.assign({ style: { height: '70%', width: '100%', marginTop: 16 } }, { children: [doc1 == null ?
                                _jsxs(View, { children: [_jsxs(View, Object.assign({ style: {
                                                justifyContent: 'space-evenly',
                                                alignItems: 'center',
                                                height: 137,
                                                borderStyle: 'dashed',
                                                borderWidth: 1,
                                                marginHorizontal: '5%',
                                                borderColor: '#86A2BE',
                                                borderRadius: 8,
                                                backgroundColor: 'UI',
                                            } }, { children: [_jsx(Text, Object.assign({ style: {
                                                        fontWeight: '500',
                                                        color: 'black',
                                                        fontSize: 16,
                                                        lineHeight: 19.2,
                                                    } }, { children: "Aadhar card" })), _jsx(Text, Object.assign({ style: {
                                                        fontWeight: '400',
                                                        color: '#707371',
                                                        fontSize: 14,
                                                        lineHeight: 21,
                                                    } }, { children: "File format : Pdf" })), _jsx(View, Object.assign({ style: { width: '42%' } }, { children: _jsx(ButtonWithAutoWidth, { text: "  Upload", role: "iButton", component: () => _jsx(ArrowUpload, {}), txtcolor: "#FFFFFF", bgcolor: "#0C447D", borderColor: "#0C447D", onPress: () => selectDoc(setDoc1) }) }))] })), _jsx(View, Object.assign({ style: { marginHorizontal: '5%', marginBottom: 16 } }, { children: _jsx(Text, Object.assign({ style: {
                                                    fontSize: 14,
                                                    lineHeight: 21,
                                                    color: errorMessage ? 'red' : '#707371',
                                                    fontWeight: '400',
                                                } }, { children: errorMessage ? errorMessage : 'File size should not exceed 10MB' })) }))] }) :
                                _jsxs(View, Object.assign({ style: { marginHorizontal: '5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', gap: 12, alignItems: 'center' } }, { children: [_jsx(Image, { source: { uri: 'https://s3-alpha-sig.figma.com/img/0af4/ff66/e5f7f0b633066aff72813f330abb6255?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ew0ZYhWtGQJOejr1pIl6YM1PqIJ3Qx4~tMzqGVvwzoClJQMsk2iXTgV9U4jFeYDtnrZRfNXtAg39O52b2fm3gHgtmyXjrf0thB56CJFEqHoYNsnpovDgbAuPoYhPdXtSZ-mDOIn2IUbe1jYH4ZOF7TSDoxAmQNXDHYaRxp7~VdnYwIEKQGq~I5E0B-zNE703Ufaf97zcSnWJfmkKtCkQ4YSzn35ZqDT9PhBdOqpn4Unr5yqkSivbYbTLwJoP1YUqNp~zQNeZckadza992QfJXLEiXt~ohQ3aNrSvNNYV~g7duk7fgP3IhbIdIq8nmClGpgUiN8GY4TskSUSARA2T1g__' }, style: { width: 72, height: 72, borderRadius: 8 } }), _jsxs(View, Object.assign({ style: { gap: 8 } }, { children: [_jsx(Text, Object.assign({ style: {
                                                                fontWeight: '500',
                                                                color: 'black',
                                                                fontSize: 16,
                                                                lineHeight: 19.2,
                                                            } }, { children: "Aadhar card" })), _jsxs(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#545554', }] }, { children: [(doc1.size / 1000 / 1000).toFixed(2), "MB"] }))] }))] })), _jsx(TouchableOpacity, Object.assign({ onPress: () => setDoc1(null), style: { width: 26, height: 26, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C1C4C2', borderRadius: 12 } }, { children: _jsx(Dissmiss, {}) }))] })), doc2 == null ?
                                _jsxs(View, { children: [_jsxs(View, Object.assign({ style: {
                                                justifyContent: 'space-evenly',
                                                alignItems: 'center',
                                                height: 137,
                                                borderStyle: 'dashed',
                                                borderWidth: 1,
                                                marginHorizontal: '5%',
                                                borderColor: '#86A2BE',
                                                borderRadius: 8,
                                                backgroundColor: 'UI',
                                            } }, { children: [_jsxs(Text, Object.assign({ style: {
                                                        fontWeight: '500',
                                                        color: 'black',
                                                        fontSize: 16,
                                                        lineHeight: 19.2,
                                                    } }, { children: ["PAN card", ' '] })), _jsx(Text, Object.assign({ style: {
                                                        fontWeight: '400',
                                                        color: '#707371',
                                                        fontSize: 14,
                                                        lineHeight: 21,
                                                    } }, { children: "File format : Pdf" })), _jsx(View, Object.assign({ style: { width: '42%' } }, { children: _jsx(ButtonWithAutoWidth, { text: "  Upload", role: "iButton", component: () => _jsx(ArrowUpload, {}), txtcolor: "#FFFFFF", bgcolor: "#0C447D", borderColor: "#0C447D", onPress: () => selectDoc(setDoc2) }) }))] })), _jsx(View, Object.assign({ style: { marginHorizontal: '5%', marginBottom: 16 } }, { children: _jsx(Text, Object.assign({ style: {
                                                    fontSize: 14,
                                                    lineHeight: 21,
                                                    color: errorMessage ? 'red' : '#707371',
                                                    fontWeight: '400',
                                                } }, { children: errorMessage ? errorMessage : 'File size should not exceed 10MB' })) }))] }) :
                                _jsxs(View, Object.assign({ style: { marginHorizontal: '5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', gap: 12, alignItems: 'center' } }, { children: [_jsx(Image, { source: { uri: 'https://s3-alpha-sig.figma.com/img/6d3c/d455/ca330fd7ce1d884704bedbeea57e394b?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j3DWtweZu66eBswr3vwXPthv4EmOaoA9WfOEK2jTSHG8KBdptgdwOG6JPdwj8ovPwpONksazHUo1mx7R~rrLS982miU~e2BrvV8AGhA2lAS7fSVfsk6K5FKDEyu3gxt9jz40pRUZWa7RQ6RZgSbxjMd4~G3k36kwFBd5i54sfP9t~P2lF58Mjl9SOIpH-L-QZGFe5WInfZm56~k70~WrxQ5PeGqzcanQpC40~oxJzqZF5y210a7cKrANmL6~tSXeQF1dczRzAAK7NL7RlyJA~6evYz4tM2ov99wKFfKkb0z2V2Z0k2EW2Bl0V-tcEQ5uz5nq-c~R-30WWY5YOfb6ng__' }, style: { width: 72, height: 72, borderRadius: 8 }, resizeMode: 'stretch' }), _jsxs(View, Object.assign({ style: { gap: 8 } }, { children: [_jsx(Text, Object.assign({ style: {
                                                                fontWeight: '500',
                                                                color: 'black',
                                                                fontSize: 16,
                                                                lineHeight: 19.2,
                                                            } }, { children: "PAN card" })), _jsxs(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#545554', }] }, { children: [(doc2.size / 1000 / 1000).toFixed(2), "MB"] }))] }))] })), _jsx(TouchableOpacity, Object.assign({ onPress: () => setDoc2(null), style: { width: 26, height: 26, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C1C4C2', borderRadius: 12 } }, { children: _jsx(Dissmiss, {}) }))] })), doc3 == null ?
                                _jsxs(View, { children: [_jsxs(View, Object.assign({ style: {
                                                justifyContent: 'space-evenly',
                                                alignItems: 'center',
                                                height: 137,
                                                borderStyle: 'dashed',
                                                borderWidth: 1,
                                                marginHorizontal: '5%',
                                                borderColor: '#86A2BE',
                                                borderRadius: 8,
                                                backgroundColor: 'UI',
                                            } }, { children: [_jsx(Text, Object.assign({ style: {
                                                        fontWeight: '500',
                                                        color: 'black',
                                                        fontSize: 16,
                                                        lineHeight: 19.2,
                                                    } }, { children: '7/12 Agreement' })), _jsx(Text, Object.assign({ style: {
                                                        fontWeight: '400',
                                                        color: '#707371',
                                                        fontSize: 14,
                                                        lineHeight: 21,
                                                    } }, { children: "File format : Pdf" })), _jsx(View, Object.assign({ style: { width: '42%' } }, { children: _jsx(ButtonWithAutoWidth, { text: "  Upload", role: "iButton", component: () => _jsx(ArrowUpload, {}), txtcolor: "#FFFFFF", bgcolor: "#0C447D", borderColor: "#0C447D", onPress: () => selectDoc(setDoc3) }) }))] })), _jsx(View, Object.assign({ style: { marginHorizontal: '5%', marginBottom: 16 } }, { children: _jsx(Text, Object.assign({ style: {
                                                    fontSize: 14,
                                                    lineHeight: 21,
                                                    color: errorMessage ? 'red' : '#707371',
                                                    fontWeight: '400',
                                                } }, { children: errorMessage ? errorMessage : 'File size should not exceed 10MB' })) }))] }) :
                                _jsxs(View, Object.assign({ style: { marginHorizontal: '5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', gap: 12, alignItems: 'center' } }, { children: [_jsx(Image, { source: { uri: 'https://s3-alpha-sig.figma.com/img/eaea/4d95/6675cc6e3106b5cd5f2ab6ec8315d225?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ed-oB-Wod~qYVKV5O0jB3ZmsIA4MlpYn87WQy6UGCc3cCwr2fHJIxFCzMScphr13v~-kNjk9kVF5GrxPJyl5ED9IyM~Ob4RAkWxyKoQF1SdLk-3fEucK~X8eBv5wC0c6dC0klaIhatvwUFuQLMiYMtq6saH7VHvVwLf5gNmPR2rj3tLbSIp3HTNqt8WWDbRAMBGOJR69bHuQvYNV1TMEdwa2tywe4KPcxvgW2vns4QoHAnt061iRgseI~OUmUtraXYLvzYE3vMiSU2NIyeR93IBTGSGvDdpqlJV7CEPLVNSccdsucWLSVpNZ9dZ8H7VmGWmtCe7aofEH0f6N0NDCHw__' }, style: { width: 72, height: 72, borderRadius: 8 } }), _jsxs(View, Object.assign({ style: { gap: 8 } }, { children: [_jsx(Text, Object.assign({ style: {
                                                                fontWeight: '500',
                                                                color: 'black',
                                                                fontSize: 16,
                                                                lineHeight: 19.2,
                                                            } }, { children: "PAN card" })), _jsxs(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#545554', }] }, { children: [(doc3.size / 1000 / 1000).toFixed(2), "MB"] }))] }))] })), _jsx(TouchableOpacity, Object.assign({ onPress: () => setDoc3(null), style: { width: 26, height: 26, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C1C4C2', borderRadius: 12 } }, { children: _jsx(Dissmiss, {}) }))] })), _jsxs(View, Object.assign({ style: { marginHorizontal: '5%', marginBottom: 16, flexDirection: "row" } }, { children: [_jsx(CheckBox, {}), _jsxs(View, Object.assign({ style: { marginLeft: "2%" } }, { children: [_jsx(Text, Object.assign({ style: styles.terms }, { children: "1. I hereby declare that the details furnished above are true and correct to the best of my knowledge and belief and I undertake to inform you of any changes therein, immediately. In case any of the above information is found to be false or untrue or misleading or misrepresenting, I am aware that I may be held liable for it." })), _jsx(Text, Object.assign({ style: styles.terms }, { children: "2. I hereby declare that I will not be using this application for the purpose of contravention of any Act, Rules, Regulations or any statute of legislation or any notifications/directions issued by any governmental or statutory authority from time to time" })), _jsx(Text, Object.assign({ style: styles.terms }, { children: "3. I hereby consent to receiving information from Central KYC Registry through SMS/Email on the above-registered number/email address and to download the information from CKYCR" })), _jsx(Text, Object.assign({ style: styles.terms }, { children: "4. I am providing the consent to UIDAI/MORTH/NIC registered intermediary to share this KYC data / applicable Aadhaar XMLdata with BharatGodam Solutions LLP and share the data with other participating intermediaries as mandated by government rules\u00A0and\u00A0guidelines." }))] }))] }))] })), _jsxs(View, Object.assign({ style: {
                            marginHorizontal: '5%',
                            marginVertical: '2%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: '7%',
                        } }, { children: [_jsx(View, Object.assign({ style: { width: '48%' } }, { children: _jsx(ButtonWithAutoWidth, { role: "iButton", text: "Cancel", borderColor: "#07294B", txtcolor: "#07294B", onPress: () => setIsClickedContinue(false) }) })), _jsx(View, Object.assign({ style: { width: '48%' } }, { children: _jsx(ButtonWithAutoWidth, { role: "iButton", text: "Submit", bgcolor: "#0C447D", borderColor: "#0C447D", txtcolor: "#FFFFFF", onPress: () => {
                                        navigation.navigate('Warehouse', {});
                                        saveKycStatus(true);
                                    }, disabled: !allFieldsFilled }) }))] }))] }))), _jsxs(Modal, Object.assign({ animationType: "fade", transparent: true, visible: isVisible, onRequestClose: () => setIsVisible(false) }, { children: [_jsx(View, { style: {
                            backgroundColor: '#5E5E5EB2',
                            width: '100%',
                            height: '100%',
                        } }), _jsxs(View, Object.assign({ style: styles.modalContainer }, { children: [_jsx(View, Object.assign({ style: styles.modalTitle }, { children: _jsx(Text, Object.assign({ style: {
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                        lineHeight: 24,
                                        alignItems: 'center',
                                        color: '#1C1C1C',
                                    } }, { children: "Select documents" })) })), _jsx(TouchableOpacity, Object.assign({ onPress: () => setIsVisible(false), style: styles.DissmissBotton }, { children: _jsx(Dissmiss, {}) })), _jsxs(View, Object.assign({ style: styles.optionPosition }, { children: [_jsxs(TouchableOpacity, Object.assign({ style: styles.option, onPress: () => { } }, { children: [_jsx(Text, Object.assign({ style: { fontWeight: '600' } }, { children: "Gallery" })), _jsx(Text, Object.assign({ style: { fontWeight: '600' } }, { children: "Choose an existing file" }))] })), _jsxs(TouchableOpacity, Object.assign({ style: styles.option, onPress: () => { } }, { children: [_jsx(Text, Object.assign({ style: { fontWeight: '600' } }, { children: "Camera" })), _jsx(Text, Object.assign({ style: { fontWeight: '600' } }, { children: "Take a picture" }))] }))] }))] }))] }))] })));
};
export default KycOwner;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    DissmissBotton: {
        // backgroundColor: 'pink',
        position: 'absolute',
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        right: 24,
        top: 24,
    },
    modalContainer: {
        width: 312,
        height: 232,
        top: 257,
        left: 24,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        // alignItems: 'center',
        position: 'absolute',
    },
    modalTitle: {
        position: 'absolute',
        width: 181,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        left: 65,
        top: 24,
    },
    optionPosition: {
        top: 70,
        marginHorizontal: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    option: {
        width: '100%',
        borderRadius: 8,
        height: 55,
        justifyContent: 'center',
        // backgroundColor: 'pink',
    },
    terms: {
        fontFamily: "NotoSerif-Regular",
        color: "black"
    },
    ScrollView: {
        backgroundColor: 'white',
        // width: '100%',
        marginHorizontal: "5%",
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
});
