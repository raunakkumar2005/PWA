
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import HeaderComponent from '../../components/Header';
import { TouchableOpacity } from 'react-native';
import Calender from '../../assets/Calender';
import CalendarModal from '../../components/Calendar';
import textStyles from '../../components/textStyles';
// import {Calendar} from 'react-native-calendars';
import CustomInputText from '../../components/CustomInputText';
import { ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import Layout from '../../layouts/layout';
import { GradeAndDeposit, Booking, authApi } from '../../service/api';
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
const { width, height } = Dimensions.get('window');
const NewDeposit = () => {
    const [isClickedCommodity, setIsClickedCommodity] = useState(false);
    const [SelectedCommodity, setSelectedCommodity] = useState('');
    const [showCalender, setshowCalender] = useState(false);
    const [ModalType, setModalType] = useState('');
    const [DepositDate, setDepositDate] = useState('');
    const [RevalidationDate, setRevalidationDate] = useState('');
    const [ExpiryDate, setExpiryDate] = useState('');
    const [SlotNo, setSlotNo] = useState('');
    const navigation = useNavigation();
    const [checked, setChecked] = useState('');
    const [booking, setBooking] = useState([]);
    const [StaticData, setStaticData] = useState([]);
    const [bookingDetails, setBookingDetails] = useState([]);
    // Temp fix
    const formatDate = (date) => {
        if (date === "") {
            return "";
        }
        const parts = date.split(" ");
        const day = parts[0];
        const month = parts[1];
        const year = parts[2];
        const months = {
            "Jan": "01",
            "Feb": "02",
            "Mar": "03",
            "Apr": "04",
            "May": "05",
            "Jun": "06",
            "Jul": "07",
            "Aug": "08",
            "Sep": "09",
            "Oct": "10",
            "Nov": "11",
            "Dec": "12"
        };
        const monthNumber = months[month];
        return `${year}-${monthNumber}-${day}`;
    };
    const Booking_ID = [
        { booking_ID: '#78877' },
        { booking_ID: '#78878' },
        { booking_ID: '#78879' },
        { booking_ID: '#78880' },
        { booking_ID: '#88877' },
        { booking_ID: '#18877' },
        { booking_ID: '#68877' },
    ];
    useEffect(() => {
        const getData = () => __awaiter(void 0, void 0, void 0, function* () {
            let temp = yield Booking.get_all_bookings_farmer();
            temp = temp.filter(item => item.isAccepted);
            console.log(temp[0], 103);
            setBooking(temp.map(item => item._id));
            setStaticData(temp);
        });
        getData();
    }, []);
    const handleChangeDate = (date) => {
        setshowCalender(false);
        const selectedDate = new Date(date.dateString);
        const month = selectedDate.toLocaleString('default', {
            month: 'short',
        });
        const day = selectedDate.getDate();
        const year = selectedDate.getFullYear();
        ModalType === 'Deposit date'
            ? setDepositDate(`${day} ${month} ${year}`)
            : ModalType === 'Revalidation date'
                ? setRevalidationDate(`${day} ${month} ${year}`)
                : setExpiryDate(`${day} ${month} ${year}`);
        setModalType('');
    };
    const handlePressedDepositDate = () => {
        if (ModalType === 'Revalidation date' || ModalType === 'Expiry date') {
            setModalType('Deposit date');
            setshowCalender(true);
        }
        else {
            setshowCalender(!showCalender);
            setModalType('Deposit date');
        }
    };
    const handlePressedRevalidationDate = () => {
        if (ModalType === 'Deposit date' || ModalType === 'Expiry date') {
            setModalType('Revalidation date');
            setshowCalender(true);
        }
        else {
            setshowCalender(!showCalender);
            setModalType('Revalidation date');
        }
    };
    const handlePressedExpiryDate = () => {
        if (ModalType === 'Deposit date' || ModalType === 'Revalidation date') {
            setModalType('Expiry date');
            setshowCalender(true);
        }
        else {
            setshowCalender(!showCalender);
            setModalType('Expiry date');
        }
    };
    useEffect(() => {
        if(checked == 'exchangeCommodity') setRevalidationDate("") 
    }, [checked]);
    const allFieldsFilled = SlotNo !== '' &&
        SelectedCommodity !== '' &&
        DepositDate !== '' &&
        ExpiryDate !== '' &&
        (checked === 'non-exchangeCommodity' ? RevalidationDate !== '' : true);
    console.log(bookingDetails, 868);
    const heading = [
        'Name',
        'Email id',
        'Warehouse name',
        'Commodity',
        'Start date',
        'End date',
        'Total weight',
        'Total actual weight',
        'Total no of bags',
        'Bag size',
    ];
    const renderText = (item, index) => {
        return (_jsxs(View, Object.assign({ style: styles.requestTextContainer }, { children: [_jsx(Text, Object.assign({ style: styles.desc }, { children: item })), _jsx(Text, Object.assign({ style: styles.value }, { children: bookingDetails[index] }))] })));
    };
    const handleSelected = (item) => __awaiter(void 0, void 0, void 0, function* () {
        setSelectedCommodity(item);
        const temp = StaticData[booking.indexOf(item)];
        console.log(temp, 990);
        const user_id = temp.user;
        const userDetails = yield authApi.getUser(user_id);
        setBookingDetails([
            userDetails.firstName,
            userDetails.email,
            temp.warehouse.warehouse_name,
            temp.Commodity[0].name,
            convertDate(temp.fromDate),
            convertDate(temp.toDate),
            temp.totalWeight + 'MT',
            temp.totalWeight + 'MT',
            temp.noOfBags,
            temp.bagSize,
        ]);
        console.log(1);
        setIsClickedCommodity(!isClickedCommodity);
    });
    const handleSubmit = () => __awaiter(void 0, void 0, void 0, function* () {
        const payload = {
            bookingId: SelectedCommodity,
            depositDate: formatDate(DepositDate),
            slotNumber: Number(SlotNo),
            revalidationDate: formatDate(RevalidationDate),
            expiraryDate: formatDate(ExpiryDate),
            commodityType: checked,
        };
        yield GradeAndDeposit.addDeposit(payload);
        navigation.navigate("Pending transactions", {});
    });
    return (_jsxs(Layout, { children: [_jsxs(View, Object.assign({ style: { flex: 1, backgroundColor: '#FFFFFF' } }, { children: [_jsx(HeaderComponent, { title: 'New deposit' }), _jsx(ScrollView, Object.assign({ scrollEnabled: !isClickedCommodity }, { children: _jsxs(View, Object.assign({ style: { gap: 16, paddingHorizontal: 16 } }, { children: [_jsxs(View, { children: [_jsx(TouchableOpacity, Object.assign({ style: {
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
                                                    handleSelected(item);
                                                } }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20, color: "black" } }, { children: item })) }), index))) }))) : (_jsx(_Fragment, {}))] }), bookingDetails.length > 0 && (_jsx(View, Object.assign({ style: styles.requestContainer }, { children: heading.map((item, index) => renderText(item, index)) }))), _jsxs(View, Object.assign({ style: {
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
                                                    } }, { children: _jsx(Calender, {}) })), _jsxs(View, { children: [DepositDate == '' ? null : (_jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Deposit date" }))), _jsx(Text, Object.assign({ style: DepositDate == ''
                                                                ? textStyles.bodyB3
                                                                : [textStyles.headingH8, { color: 'black' }] }, { children: DepositDate == '' ? 'Deposit date' : DepositDate }))] })] })), _jsx(View, Object.assign({ style: {
                                                width: '48%',
                                                borderWidth: 0.5,
                                                height: '100%',
                                                borderRadius: 8,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                            } }, { children: _jsx(CustomInputText, { PlaceHolder: "Slot number", onTextChange: text => setSlotNo(text), keyboard: "numeric" }) }))] })), _jsxs(View, Object.assign({ style: {
                                        width: '100%',
                                        height: 56,
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                    } }, { children: [checked !== 'exchangeCommodity' ? (_jsxs(TouchableOpacity, Object.assign({ onPress: handlePressedRevalidationDate, style: {
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
                                                    } }, { children: _jsx(Calender, {}) })), _jsxs(View, { children: [RevalidationDate == '' ? null : (_jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Revalidation date" }))), _jsx(Text, Object.assign({ style: [
                                                                RevalidationDate == ''
                                                                    ? textStyles.bodyB3
                                                                    : [textStyles.headingH8, { color: 'black' }],
                                                                { width: 103 },
                                                            ] }, { children: RevalidationDate == ''
                                                                ? 'Revalidation date'
                                                                : RevalidationDate }))] })] }))) : (_jsxs(View, Object.assign({ style: {
                                                borderColor: '#FFFFFF',
                                                width: '48%',
                                                borderWidth: 0.5,
                                                height: '100%',
                                                borderRadius: 8,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                backgroundColor: '#E0E1E1',
                                            } }, { children: [_jsx(View, Object.assign({ style: {
                                                        justifyContent: 'center',
                                                        marginLeft: 14,
                                                        marginRight: 9.5,
                                                    } }, { children: _jsx(Calender, {}) })), _jsxs(View, { children: [RevalidationDate == '' ? null : (_jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Revalidation date" }))), _jsx(Text, Object.assign({ style: [
                                                                RevalidationDate == ''
                                                                    ? textStyles.bodyB3
                                                                    : [textStyles.headingH8, { color: 'black' }],
                                                                { width: 103 },
                                                            ] }, { children: RevalidationDate == ''
                                                                ? 'Revalidation date'
                                                                : RevalidationDate }))] })] }))), _jsxs(TouchableOpacity, Object.assign({ onPress: handlePressedExpiryDate, style: {
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
                                                    } }, { children: _jsx(Calender, {}) })), _jsxs(View, { children: [ExpiryDate == '' ? null : (_jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Expiry date" }))), _jsx(Text, Object.assign({ style: ExpiryDate == ''
                                                                ? textStyles.bodyB3
                                                                : [textStyles.headingH8, { color: 'black' }] }, { children: ExpiryDate == '' ? 'Expiry date' : ExpiryDate }))] })] }))] })), _jsxs(View, Object.assign({ style: { gap: -5 } }, { children: [_jsxs(View, Object.assign({ style: styles.radioButton }, { children: [_jsx(RadioButton, { value: "Pledge", status: checked === 'exchangeCommodity' ? 'checked' : 'unchecked', onPress: () => setChecked('exchangeCommodity') }), _jsx(Text, Object.assign({ style: styles.radioButtonText }, { children: "Exchange commodity" }))] })), _jsxs(View, Object.assign({ style: styles.radioButton }, { children: [_jsx(RadioButton, { value: "Pledge", status: checked === 'non-exchangeCommodity'
                                                        ? 'checked'
                                                        : 'unchecked', onPress: () => setChecked('non-exchangeCommodity') }), _jsx(Text, Object.assign({ style: styles.radioButtonText }, { children: "Non-exchange commodity" }))] }))] })), _jsx(CustomButton, { text: "Save deposit", txtcolor: "#FFFFFF", bgcolor: "#0C447D", borderColor: "#0C447D", role: "iButton", onPress: () => handleSubmit(), disabled: !allFieldsFilled })] })) }))] })), _jsx(CalendarModal, { toggleCalendar: showCalender, setDate: ModalType === 'Deposit date' ? setDepositDate : ModalType === 'Revalidation date' ? setRevalidationDate : setExpiryDate, handleToggleCalendar: handlePressedDepositDate })] }));
};
export default NewDeposit;
const styles = StyleSheet.create({
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
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioButtonText: Object.assign(Object.assign({}, textStyles.bodyB3), { color: '#1C1C1C' }),
    requestContainer: {
        width: '100%',
        height: 'auto',
        alignSelf: 'center',
        borderColor: '#C1C4C2',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: '5%',
        paddingVertical: '5%',
        // marginTop: 24,
    },
    requestTextContainer: {
        height: height * 0.045,
        flexDirection: 'row',
    },
    desc: {
        fontFamily: 'NotoSerif-Regular',
        color: 'black',
        fontSize: 12,
        flex: 1,
    },
    value: {
        fontFamily: 'Poppins-SemiBold',
        color: 'black',
        fontSize: 11,
        flex: 1,
    },
});
