
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal, } from 'react-native';
import { useEffect, useState } from 'react';
import HeaderComponent from '../../components/Header';
import textStyles from '../../components/textStyles';
import { Booking, Weighbridge } from '../../service/api';
// import {Calendar} from 'react-native-calendars';
import CalendarModal from '../../components/Calendar';
import CustomInputText from '../../components/CustomInputText';
import Calender from '../../assets/Calender';
import TimeIMG from '../../assets/Time';
import Weight from '../../assets/Weight';
import Info from '../../assets/Info';
import Dropdown from '../../assets/Dropdown';
import Cross from '../../assets/Cross';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { convertDate } from '../../utils/date';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const WeightBridgeData = ({ navigation }) => {
    const [isClickedCommodity, setIsClickedCommodity] = useState(false);
    const [SelectedCommodity, setSelectedCommodity] = useState('');
    const [Time, setTime] = useState('');
    const [Txt, setTxt] = useState('');
    const [Txt1, setTxt1] = useState('');
    const [DepositDate, setDepositDate] = useState("");
    const [showCalender, setshowCalender] = useState(false);
    const [booking, setBooking] = useState([]);
    const [bookingDetails, setBookingDetails] = useState([]);
    const [staticBookingDetails, setStaticBookingDetails] = useState([]);
    const [trigger, setTrigger] = useState(false);
    const [isClickedUnit, setIsClickedUnit] = useState(false);
    const [SelectedUnit, setSelectedUnit] = useState('');
    const [isClickedUnit1, setIsClickedUnit1] = useState(false);
    const [SelectedUnit1, setSelectedUnit1] = useState('');
    const [timeToggle, setTimeToggle] = useState(false);
    const [clearToggle, setClearToggle] = useState(false);
    const heading = ['Commodity', 'StartDate', 'EndDate'];
    const handleChangeDate = (date) => {
        const month = String(date.month).padStart(2, '0');
        const day = String(date.day).padStart(2, '0');
        setshowCalender(false);
        setDepositDate(`${date.year}${month}${day}`);
    };
    const clearFormCondition = bookingDetails.length === 0 &&
        SelectedCommodity === '' &&
        DepositDate === null &&
        Time === '' &&
        Txt === '' &&
        Txt1 === '';
    const saveCondition = bookingDetails.length !== 0 &&
        SelectedCommodity !== '' &&
        DepositDate !== null &&
        Time !== '' &&
        Txt !== '' &&
        Txt1 !== '';
    const handlePressedDepositDate = () => {
        setshowCalender(!showCalender);
    };
    const handleTime = (timestamp) => {
        const hours = timestamp.getHours();
        const minutes = String(timestamp.getMinutes()).padStart(2, '0');
        setTime(`${hours}:${minutes}`);
    };
    const Unit = [{ unit: 'MT' }, { unit: 'QT' }];
    const handleClearToggle = () => {
        setClearToggle(!clearToggle);
    };
    const handleTimeToggle = () => {
        setTimeToggle(!timeToggle);
    };
    const handleClear = () => {
        handleClearToggle();
        setSelectedCommodity('');
        setBookingDetails([]);
        setTime('');
        setDepositDate("");
        setTxt('');
        setTxt1('');
        setSelectedUnit('');
        setSelectedUnit1('');
        setTrigger(!trigger);
    };
    const saveData = () => {
        Weighbridge.add_details(SelectedCommodity, Txt, SelectedUnit, Txt1, SelectedUnit1, Time);
        console.log('success');
        navigation.goBack();
    };
    const getData = () => __awaiter(void 0, void 0, void 0, function* () {
        let temp = yield Booking.get_all_bookings_farmer();
        temp = temp.filter(item => item.isAccepted);
        console.log(temp[0], 100);
        const tempy = temp.map(item => {
            return [item._id, [item.Commodity[0].name, item.fromDate, item.toDate]];
        });
        const temp1 = tempy.map(item => item[0]);
        const temp2 = tempy.map(item => item[1]);
        setBooking(temp1);
        setStaticBookingDetails(temp2);
    });
    const renderText = (item, index) => {
        const value = index > 0 ? convertDate(bookingDetails[index]) : bookingDetails[index];
        return (_jsxs(View, Object.assign({ style: styles.requestTextContainer }, { children: [_jsx(Text, Object.assign({ style: styles.desc }, { children: item })), _jsx(Text, Object.assign({ style: styles.value }, { children: value }))] })));
    };
    useEffect(() => {
        console.log(99);
        getData();
        setTimeout(getData, 500);
    }, []);
    return (_jsxs(View, Object.assign({ style: { backgroundColor: '#FFFFFF', flex: 1 } }, { children: [_jsx(HeaderComponent, { title: 'Enter weighbridge data' }), _jsxs(View, Object.assign({ style: { paddingHorizontal: 16, gap: 16 } }, { children: [_jsxs(View, { children: [_jsx(TouchableOpacity, Object.assign({ style: {
                                    borderWidth: 0.5,
                                    width: '100%',
                                    borderRadius: 8,
                                    height: 56,
                                    paddingLeft: 9.5,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }, onPress: () => {
                                    setIsClickedCommodity(!isClickedCommodity);
                                } }, { children: _jsxs(View, { children: [SelectedCommodity == '' ? null : (_jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Booking ID" }))), _jsx(Text, Object.assign({ style: SelectedCommodity == ''
                                                ? textStyles.bodyB3
                                                : [textStyles.headingH8, { color: 'black' }] }, { children: SelectedCommodity == '' ? 'Booking ID' : SelectedCommodity }))] }) })), isClickedCommodity ? (_jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.commodityScrollView }, { children: booking.map((item, index) => (_jsx(TouchableOpacity, Object.assign({ style: {
                                        width: '100%',
                                        borderRadius: 8,
                                        height: 50,
                                        justifyContent: 'center',
                                    }, onPress: () => {
                                        setSelectedCommodity(item);
                                        const temp = staticBookingDetails[booking.indexOf(item)];
                                        console.log(temp);
                                        setBookingDetails(temp);
                                        setIsClickedCommodity(!isClickedCommodity);
                                    } }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20, color: "black" } }, { children: item })) }), index))) }))) : (_jsx(_Fragment, {}))] }), bookingDetails.length == 0 ? null : (_jsx(View, Object.assign({ style: styles.requestContainer }, { children: heading.map((item, index) => renderText(item, index)) }))), _jsxs(View, Object.assign({ style: {
                            width: '100%',
                            height: 56,
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        } }, { children: [_jsxs(TouchableOpacity, Object.assign({ onPress: handlePressedDepositDate, style: {
                                    width: '48%',
                                    borderWidth: 0.5,
                                    height: '100%',
                                    borderRadius: 8,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                } }, { children: [_jsx(View, Object.assign({ style: {
                                            justifyContent: 'center',
                                            marginLeft: 14,
                                            marginRight: 9.5,
                                        } }, { children: _jsx(Calender, {}) })), _jsxs(View, { children: [DepositDate === "" ? null : (_jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Deposit date" }))), _jsx(Text, Object.assign({ style: DepositDate === ""
                                                    ? textStyles.bodyB3
                                                    : [textStyles.headingH8, { color: 'black' }] }, { children: DepositDate === ""
                                                    ? 'Deposit date'
                                                    : DepositDate }))] })] })), _jsxs(TouchableOpacity, Object.assign({ onPress: handleTimeToggle, style: {
                                    width: '48%',
                                    borderWidth: 0.5,
                                    height: '100%',
                                    borderRadius: 8,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                } }, { children: [_jsx(View, Object.assign({ style: {
                                            justifyContent: 'center',
                                            marginLeft: 14,
                                            marginRight: 9.5,
                                        } }, { children: _jsx(TimeIMG, {}) })), _jsxs(View, { children: [Time == '' ? '' : _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Time" })), _jsx(Text, Object.assign({ style: Time == ''
                                                    ? textStyles.bodyB3
                                                    : [textStyles.headingH8, { color: 'black' }] }, { children: Time == '' ? 'Time' : Time }))] })] }))] })), _jsxs(View, Object.assign({ style: {
                            width: '100%',
                            height: 56,
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        } }, { children: [_jsxs(View, Object.assign({ style: {
                                    width: '60%',
                                    height: '100%',
                                    borderWidth: 0.5,
                                    borderRadius: 8,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 12,
                                    justifyContent: 'space-between',
                                } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', gap: 8, width: '70%' } }, { children: [_jsx(View, Object.assign({ style: { justifyContent: 'center' } }, { children: _jsx(Weight, {}) })), trigger && (_jsx(CustomInputText, { PlaceHolder: "Gross weight", txt: Txt, onTextChange: txt => setTxt(txt), keyboard: "numeric" })), !trigger && (_jsx(CustomInputText, { PlaceHolder: "Gross weight", txt: Txt, onTextChange: txt => setTxt(txt), keyboard: "numeric" }))] })), _jsx(TouchableOpacity, Object.assign({ onPressIn: () => { }, onPressOut: () => { }, style: { justifyContent: 'center' } }, { children: _jsx(Info, {}) }))] })), _jsxs(TouchableOpacity, Object.assign({ style: {
                                    width: '35%',
                                    borderWidth: 0.5,
                                    height: '100%',
                                    borderRadius: 8,
                                    paddingHorizontal: 12,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }, onPress: () => setIsClickedUnit(!isClickedUnit) }, { children: [_jsxs(View, { children: [SelectedUnit == '' ? null : (_jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Unit" }))), _jsx(Text, Object.assign({ style: SelectedUnit == ''
                                                    ? textStyles.bodyB3
                                                    : [textStyles.headingH8, { color: 'black' }] }, { children: SelectedUnit == '' ? 'Unit' : SelectedUnit }))] }), _jsx(View, Object.assign({ style: { justifyContent: 'center' } }, { children: _jsx(Dropdown, {}) }))] })), isClickedUnit ? (_jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.UnitScrollView }, { children: Unit.map((item, index) => (_jsx(TouchableOpacity, Object.assign({ style: {
                                        width: '100%',
                                        borderRadius: 8,
                                        height: 31,
                                        marginVertical: 9,
                                        justifyContent: 'center',
                                    }, onPress: () => {
                                        setSelectedUnit(item.unit);
                                        setIsClickedUnit(!isClickedUnit);
                                    } }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20, color: "black" } }, { children: item.unit })) }), index))) }))) : (_jsx(_Fragment, {}))] })), _jsxs(View, Object.assign({ style: {
                            width: '100%',
                            height: 56,
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        } }, { children: [_jsxs(View, Object.assign({ style: {
                                    width: '60%',
                                    height: '100%',
                                    borderWidth: 0.5,
                                    borderRadius: 8,
                                    paddingHorizontal: 12,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', gap: 8, width: '70%' } }, { children: [_jsx(View, Object.assign({ style: { justifyContent: 'center', marginLeft: 14 } }, { children: _jsx(Weight, {}) })), trigger && (_jsx(CustomInputText, { PlaceHolder: "Tare weight", txt: Txt1, onTextChange: txt => setTxt1(txt), keyboard: "numeric" })), !trigger && (_jsx(CustomInputText, { PlaceHolder: "Tare weight", txt: Txt1, onTextChange: txt => setTxt1(txt), keyboard: "numeric" }))] })), _jsx(TouchableOpacity, Object.assign({ onPressIn: () => { }, onPressOut: () => { }, style: { justifyContent: 'center' } }, { children: _jsx(Info, {}) }))] })), _jsxs(TouchableOpacity, Object.assign({ style: {
                                    width: '35%',
                                    borderWidth: 0.5,
                                    height: '100%',
                                    borderRadius: 8,
                                    paddingHorizontal: 12,
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }, onPress: () => setIsClickedUnit1(!isClickedUnit1) }, { children: [_jsxs(View, { children: [SelectedUnit == '' ? null : (_jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Unit" }))), _jsx(Text, Object.assign({ style: SelectedUnit == ''
                                                    ? textStyles.bodyB3
                                                    : [textStyles.headingH8, { color: 'black' }] }, { children: SelectedUnit1 == '' ? 'Unit' : SelectedUnit1 }))] }), _jsx(View, Object.assign({ style: { justifyContent: 'center' } }, { children: _jsx(Dropdown, {}) }))] })), isClickedUnit1 ? (_jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.UnitScrollView }, { children: Unit.map((item, index) => (_jsx(TouchableOpacity, Object.assign({ style: {
                                        width: '100%',
                                        borderRadius: 8,
                                        height: 31,
                                        marginVertical: 9,
                                        justifyContent: 'center',
                                    }, onPress: () => {
                                        setSelectedUnit1(item.unit);
                                        setIsClickedUnit1(!isClickedUnit1);
                                    } }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20, color: "black" } }, { children: item.unit })) }), index))) }))) : (_jsx(_Fragment, {}))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', gap: 22 } }, { children: [_jsxs(Text, Object.assign({ style: textStyles.headingH8 }, { children: ["Net weight", ' ', _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "(automatically calculated)" }))] })), _jsx(View, Object.assign({ style: {
                                    width: 82,
                                    height: 40,
                                    backgroundColor: '#CEDAE5',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                } }, { children: _jsx(Text, Object.assign({ style: textStyles.headingH8 }, { children: Txt != '' && Txt1 != '' ? parseInt(Txt) - parseInt(Txt1) : null })) }))] }))] })), _jsxs(View, Object.assign({ style: styles.buttonModalContainer }, { children: [_jsx(TouchableOpacity, Object.assign({ style: [
                            styles.reject,
                            { borderColor: clearFormCondition ? '#989E9A' : '#07294B' },
                        ], onPress: handleClearToggle, disabled: clearFormCondition }, { children: _jsx(Text, Object.assign({ style: [
                                styles.rejectText,
                                { color: clearFormCondition ? '#989E9A' : '#07294B' },
                            ] }, { children: "Clear Form" })) })), _jsx(TouchableOpacity, Object.assign({ style: [
                            styles.accept,
                            { backgroundColor: saveCondition ? '#07294B' : '#989E9A' },
                        ], onPress: saveData, disabled: !saveCondition }, { children: _jsx(Text, Object.assign({ style: [
                                styles.acceptText,
                                { color: saveCondition ? 'white' : 'black' },
                            ] }, { children: "Save" })) }))] })), _jsx(Modal, Object.assign({ visible: clearToggle, transparent: true }, { children: _jsx(TouchableOpacity, Object.assign({ style: styles.modalContainer, onPress: handleClearToggle }, { children: _jsxs(View, Object.assign({ style: styles.popup }, { children: [_jsx(View, Object.assign({ style: styles.popupHeader }, { children: _jsx(TouchableOpacity, Object.assign({ onPress: handleClearToggle }, { children: _jsx(Cross, {}) })) })), _jsx(Text, Object.assign({ style: styles.prompt }, { children: "This will clear all information from the form. Are you sure?" })), _jsxs(View, Object.assign({ style: styles.buttonPopupContainer }, { children: [_jsx(TouchableOpacity, Object.assign({ style: styles.reject, onPress: handleClearToggle }, { children: _jsx(Text, Object.assign({ style: styles.rejectText }, { children: "No" })) })), _jsx(TouchableOpacity, Object.assign({ style: styles.accept, onPress: handleClear }, { children: _jsx(Text, Object.assign({ style: styles.acceptText }, { children: "Yes, clear form" })) }))] }))] })) })) })), _jsx(DateTimePickerModal, { isVisible: timeToggle, mode: "time", onConfirm: handleTime, onCancel: handleTimeToggle }), _jsx(CalendarModal, { toggleCalendar: showCalender, setDate: setDepositDate, handleToggleCalendar: handlePressedDepositDate })] })));
};
export default WeightBridgeData;
const styles = StyleSheet.create({
    commodityScrollView: {
        backgroundColor: 'white',
        width: '100%',
        zIndex: 1,
        position: 'absolute',
        top: '105%',
        // left: '4.8%',
        height: 228,
        borderWidth: 0.5,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    calender: {
        backgroundColor: 'white',
        width: '100%',
        zIndex: 1,
        position: 'absolute',
        top: '7%',
        left: '4.8%',
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
        top: '105%',
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
    buttonModalContainer: {
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        marginTop: 16,
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
        fontFamily: 'Poppins-SemiBold',
        color: '#07294B',
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
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        fontSize: 16,
    },
    requestContainer: {
        width: '100%',
        height: '25%',
        backgroundColor: '#C1C4C2',
        alignSelf: 'center',
        borderColor: '#C1C4C2',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    requestTextContainer: {
        height: '33.5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    desc: {
        fontFamily: 'NotoSerif-Regular',
        color: 'black',
        fontSize: 14,
        width: '45%',
    },
    value: {
        fontFamily: 'Poppins-SemiBold',
        color: 'black',
        fontSize: 14,
        width: '45%',
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
        height: '5%',
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
    buttonPopupContainer: {
        height: '35%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
    },
});
