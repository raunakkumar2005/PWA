
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import Back from '../../assets/Back';
import Cross from '../../assets/Cross';
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
const Action = ({ route, navigation }) => {
    const [toggleReject, setToggleReject] = useState(false);
    const token = useSelector((state) => state.user.token);
    const heading = [
        'Warehouse',
        'Customer name',
        'Commodity',
        'Start date',
        'End date',
        'Total weight',
        'Total amount',
    ];
    const { data } = route.params;
    const renderText = (item, index) => {
        return (_jsxs(View, Object.assign({ style: styles.requestTextContainer }, { children: [_jsx(Text, Object.assign({ style: styles.desc }, { children: item })), _jsx(Text, Object.assign({ style: styles.value }, { children: data[index] }))] })));
    };
    const handleAccept = () => __awaiter(void 0, void 0, void 0, function* () {
        console.log(data.at(-1), 100);
        yield Booking.accept_booking(data.at(-1));
        navigation.navigate('Bookings', { variant: 'requests' });
    });
    const handleReject = () => {
        setToggleReject(!toggleReject);
    };
    const handleConfirmReject = () => {
        handleReject();
        navigation.navigate('Reasons', { id: data.at(-1) });
    };
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsxs(View, Object.assign({ style: styles.header }, { children: [_jsx(Back, {}), _jsx(Text, Object.assign({ style: styles.heading }, { children: "Request to book warehouse " }))] })), _jsxs(View, Object.assign({ style: styles.requestContainer }, { children: [heading.map((item, index) => renderText(item, index)), _jsxs(View, Object.assign({ style: styles.buttonContainer }, { children: [_jsx(TouchableOpacity, Object.assign({ style: styles.reject, onPress: handleReject }, { children: _jsx(Text, Object.assign({ style: styles.rejectText }, { children: "Reject" })) })), _jsx(TouchableOpacity, Object.assign({ style: styles.accept, onPress: handleAccept }, { children: _jsx(Text, Object.assign({ style: styles.acceptText }, { children: "Accept" })) }))] }))] })), _jsx(Modal, Object.assign({ visible: toggleReject, transparent: true }, { children: _jsx(TouchableOpacity, Object.assign({ style: styles.modalContainer, onPress: handleReject }, { children: _jsxs(View, Object.assign({ style: styles.popup }, { children: [_jsx(View, Object.assign({ style: styles.popupHeader }, { children: _jsx(TouchableOpacity, Object.assign({ onPress: handleReject }, { children: _jsx(Cross, {}) })) })), _jsx(Text, Object.assign({ style: styles.prompt }, { children: "Are you sure you want to reject the booking?" })), _jsxs(View, Object.assign({ style: styles.buttonModalContainer }, { children: [_jsx(TouchableOpacity, Object.assign({ style: styles.reject, onPress: handleReject }, { children: _jsx(Text, Object.assign({ style: styles.rejectText }, { children: "No" })) })), _jsx(TouchableOpacity, Object.assign({ style: styles.accept, onPress: handleConfirmReject }, { children: _jsx(Text, Object.assign({ style: styles.acceptText }, { children: "Yes, reject" })) }))] }))] })) })) }))] })));
};
export default Action;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3%',
        marginBottom: 24,
    },
    heading: {
        color: 'black',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        flexGrow: 1,
        textAlign: 'center',
    },
    requestContainer: {
        width: '90%',
        height: '50%',
        alignSelf: 'center',
        borderColor: '#C1C4C2',
        borderWidth: 1,
        borderRadius: 8,
        padding: '5%',
    },
    requestTextContainer: {
        height: '12%',
        flexDirection: 'row',
    },
    desc: {
        fontFamily: 'NotoSerif-Regular',
        color: 'black',
        fontSize: 14,
        flex: 1,
    },
    value: {
        fontFamily: 'Poppins-SemiBold',
        color: 'black',
        fontSize: 14,
        flex: 1,
    },
    buttonContainer: {
        height: '16%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    reject: {
        width: '47%',
        borderColor: '#07294B',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rejectText: {
        color: '#07294B',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
    },
    accept: {
        width: '47%',
        backgroundColor: '#07294B',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    acceptText: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    popup: {
        width: '90%',
        height: '25%',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: '5%',
    },
    popupHeader: {
        // height: '5%',
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    prompt: {
        color: 'black',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 18,
    },
    buttonModalContainer: {
        height: '35%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
