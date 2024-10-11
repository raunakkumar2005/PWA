
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import { useState } from 'react';
import Back from '../../assets/Back';
import CheckButton from '../../components/CheckButton';
import { useNavigation } from '@react-navigation/native';
import { Booking } from '../../service/api';
import { useSelector } from 'react-redux';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default function Reasons({ route }) {
    const navigation = useNavigation();
    const { id } = route.params;
    const token = useSelector((state) => state.user.token);
    const [reason, setReason] = useState();
    const [other, setOther] = useState();
    const handleReason = (value) => {
        setReason(value);
    };
    const handleReject = () => __awaiter(this, void 0, void 0, function* () {
        const reasonToReject = reason === "other" ? other : reason;
        Booking.reject_booking(id, "6656040dac1a462e67827c39", reasonToReject);
        navigation.navigate('Bookings', { variant: 'requests' });
    });
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsxs(View, Object.assign({ style: styles.header }, { children: [_jsx(Back, {}), _jsx(Text, Object.assign({ style: styles.heading }, { children: "Reasons to Reject " }))] })), _jsx(Text, Object.assign({ style: styles.desc }, { children: "Please select a reason or mention the reasons to reject the booking." })), _jsx(View, { children: [
                    'Missing Information',
                    'Incomplete application',
                    'Duplicate application',
                    'other',
                ].map(item => {
                    return (_jsxs(View, Object.assign({ style: styles.option }, { children: [_jsx(CheckButton, { onPress: () => handleReason(item), single: true, value: reason === item }), _jsx(Text, Object.assign({ style: styles.optionText }, { children: item }))] })));
                }) }), reason === 'other' && (_jsx(TextInput, { style: styles.textBox, placeholder: "eg. missing information", placeholderTextColor: '#989E9A', textAlignVertical: "top", onChangeText: text => setOther(text) })), _jsxs(View, Object.assign({ style: styles.buttonContainer }, { children: [_jsx(TouchableOpacity, Object.assign({ style: styles.Back, onPress: () => navigation.goBack() }, { children: _jsx(Text, Object.assign({ style: styles.BackText }, { children: "Back" })) })), _jsx(TouchableOpacity, Object.assign({ style: styles.Send, onPress: handleReject }, { children: _jsx(Text, Object.assign({ style: styles.SendText }, { children: "Send" })) }))] }))] })));
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: '5%',
    },
    header: {
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    heading: {
        color: 'black',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        flexGrow: 1,
        textAlign: 'center',
    },
    desc: {
        color: 'black',
        fontFamily: 'NotoSerif-Regular',
        fontSize: 14,
        marginBottom: 10,
    },
    option: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    optionText: {
        color: 'black',
        fontFamily: 'NotoSerif-Regular',
        fontSize: 14,
    },
    textBox: {
        width: '100%',
        height: '25%',
        borderColor: '#989E9A',
        borderWidth: 1,
        borderRadius: 8,
        padding: '2%',
        color: 'black',
    },
    buttonContainer: {
        height: '7%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    Back: {
        width: '47%',
        borderColor: '#07294B',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    BackText: {
        color: '#07294B',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
    },
    Send: {
        width: '47%',
        backgroundColor: '#07294B',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    SendText: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
    },
});
