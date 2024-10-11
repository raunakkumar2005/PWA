
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import HeaderComponent from '../../components/Header';
import textStyles from '../../components/textStyles';
import Location from '../../assets/Location';
import { RadioButton } from 'react-native-paper';
import { TextInput } from 'react-native';
import ButtonWithAutoWidth from '../../components/ButtonWithAutoWidth';
import { Booking } from '../../service/api';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const CancelBooking = ({ navigation, route }) => {
    const { bookingId, warehouse } = route.params;
    const [checked, setChecked] = useState('');
    const [text, setText] = useState('');
    const handlecancelBooking = () => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Reason for rejection : ", text || checked);
        try {
            const booking = yield Booking.cancel_booking(bookingId, text || checked);
            console.log(booking, 100);
            navigation.goBack();
        }
        catch (error) {
            console.log("Error in booking : ", error);
        }
    });
    return (_jsxs(View, Object.assign({ style: { flex: 1, backgroundColor: '#F7F7F7' } }, { children: [_jsx(HeaderComponent, { title: 'Booking accepted' }), _jsxs(ScrollView, { children: [_jsxs(View, Object.assign({ style: { alignItems: 'center' } }, { children: [_jsx(View, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { color: 'black' }] }, { children: warehouse === null || warehouse === void 0 ? void 0 : warehouse.warehouse_name })) }), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center' } }, { children: [_jsx(View, Object.assign({ style: { padding: 5 } }, { children: _jsx(Location, {}) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: `${warehouse === null || warehouse === void 0 ? void 0 : warehouse.city} ${warehouse === null || warehouse === void 0 ? void 0 : warehouse.State}` }))] })), _jsx(Text, Object.assign({ style: [textStyles.headingH8, { color: '#1C1C1C', width: 328, marginVertical: 16 }] }, { children: "Are you sure you want to cancel your warehouse booking?" })), _jsxs(View, Object.assign({ style: { gap: 8, marginHorizontal: 16 } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', } }, { children: [_jsx(View, Object.assign({ style: { width: 164, height: 24, } }, { children: _jsx(Text, Object.assign({ style: [textStyles.bodyTable, { color: '#1C1C1C', textAlign: 'left' }] }, { children: "Booking ID" })) })), _jsx(View, Object.assign({ style: { width: 164, height: 24, } }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH8, { color: '#1C1C1C' }] }, { children: bookingId })) }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', } }, { children: [_jsx(View, Object.assign({ style: { width: 164, height: 24, } }, { children: _jsx(Text, Object.assign({ style: [textStyles.bodyTable, { color: '#1C1C1C', textAlign: 'left' }] }, { children: "Commodity" })) })), _jsx(View, Object.assign({ style: { width: 164, height: 24, } }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH8, { color: '#1C1C1C' }] }, { children: "Wheat" })) }))] }))] })), _jsxs(View, Object.assign({ style: { width: 328, backgroundColor: '#FFFFFF', marginTop: 16, borderRadius: 8, paddingVertical: 12, paddingHorizontal: 14, gap: 12 } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1C1C1C' }] }, { children: "Please select a reason or mention the reasons to cancel the booking." })), _jsxs(View, Object.assign({ style: { gap: -4 } }, { children: [_jsxs(View, Object.assign({ style: styles.radioButton }, { children: [_jsx(RadioButton, { value: 'Change in plans', status: checked === 'Change in plans' ? 'checked' : 'unchecked', onPress: () => setChecked('Change in plans') }), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#151515' }] }, { children: "Change in plans" }))] })), _jsxs(View, Object.assign({ style: styles.radioButton }, { children: [_jsx(RadioButton, { value: 'No longer required', status: checked === 'No longer required' ? 'checked' : 'unchecked', onPress: () => setChecked('No longer required') }), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#151515' }] }, { children: "No longer required" }))] })), _jsxs(View, Object.assign({ style: styles.radioButton }, { children: [_jsx(RadioButton, { value: 'Found a better alternative', status: checked === 'Found a better alternative' ? 'checked' : 'unchecked', onPress: () => setChecked('Found a better alternative') }), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#151515' }] }, { children: "Found a better alternative" }))] })), _jsxs(View, Object.assign({ style: styles.radioButton }, { children: [_jsx(RadioButton, { value: 'other', status: checked === 'other' ? 'checked' : 'unchecked', onPress: () => setChecked('other') }), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#151515' }] }, { children: "other" }))] }))] })), _jsx(TextInput, { multiline: true, placeholder: 'eg. Change in plans', placeholderTextColor: '#CCCCCC', style: [text === '' ? textStyles.bodyB3 : textStyles.headingH8, {
                                                width: 297,
                                                height: 120,
                                                borderRadius: 8,
                                                borderWidth: 1,
                                                borderColor: '#9F9F9F',
                                                color: 'black',
                                                padding: 16,
                                                flex: 1,
                                                textAlignVertical: 'top',
                                                justifyContent: "flex-start",
                                                backgroundColor: 'white'
                                            }], onChangeText: text => setText(text), value: text })] }))] })), _jsxs(View, Object.assign({ style: {
                            marginHorizontal: '5%',
                            marginVertical: '4%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: '7%',
                        } }, { children: [_jsx(View, Object.assign({ style: { width: '48%' } }, { children: _jsx(ButtonWithAutoWidth, { role: "iButton", text: "Back", borderColor: "#07294B", txtcolor: "#07294B" }) })), _jsx(View, Object.assign({ style: { width: '48%' } }, { children: _jsx(ButtonWithAutoWidth, { role: "iButton", text: "Cancel booking", bgcolor: "#0C447D", borderColor: "#0C447D", txtcolor: "#FFFFFF", onPress: handlecancelBooking }) }))] }))] })] })));
};
export default CancelBooking;
const styles = StyleSheet.create({
    radioButton: {
        flexDirection: "row",
        alignItems: "center",
    },
});
