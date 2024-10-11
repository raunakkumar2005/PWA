
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { useEffect, useState } from 'react';
import HomeHeader from '../../components/HomeHeader';
import HomeMenu from '../../components/HomeMenu';
import HomeNotification from '../../components/HomeNotification';
import { useNavigation } from '@react-navigation/native';
import textStyles from '../../components/textStyles';
import Location from '../../assets/Location';
import NavBar from '../../components/NavBar';
import Calender from '../../assets/Calender';
import Logistic from '../../assets/Logistic';
import Weight from '../../assets/Weight';
import TimeTruck from '../../assets/TimeTruck';
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
const { width, height } = Dimensions.get('window');
function convertFormattedNumberToDateString(formattedDateNumber) {
    // Convert the number to a string
    const formattedDateString = formattedDateNumber.toString();
    // Extract the year, month, and day from the formatted date string
    const year = formattedDateString.substring(0, 4);
    const month = formattedDateString.substring(4, 6);
    const day = formattedDateString.substring(6, 8);
    // Create a date object
    const date = new Date(`${year}-${month}-${day}`);
    // Define month names
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    // Get the day of the month with the correct ordinal suffix
    const dayWithSuffix = getDayWithSuffix(date.getDate());
    // Get the full month name
    const monthName = monthNames[date.getMonth()];
    // Construct the formatted date string
    const humanReadableDateString = `${dayWithSuffix} ${monthName}`;
    return humanReadableDateString;
}
function getDayWithSuffix(day) {
    if (day > 3 && day < 21)
        return day + 'th'; // catch 11th, 12th, 13th
    switch (day % 10) {
        case 1: return day + 'st';
        case 2: return day + 'nd';
        case 3: return day + 'rd';
        default: return day + 'th';
    }
}
const MyBooking = () => {
    const [menu, setMenu] = useState(false);
    // const [user, setUser] = useState<User|[]>([]);
    const [bookings, setbookings] = useState([]);
    const [notification, setNotification] = useState(false);
    const [selectedButton, setSelectedButton] = useState(true);
    const [selectedStatusButton, setSelectedStatusButton] = useState('Accepted');
    const fetchBookings = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield Booking.get_all_bookings_farmer();
        // console.log("bookings : ",response);
        setbookings(response);
    });
    useEffect(() => {
        fetchBookings();
        console.log(bookings);
    }, []);
    const handlePress = (button) => {
        setSelectedButton(button);
    };
    const handlePressStatus = (button) => {
        setSelectedStatusButton(button);
    };
    const handleMenu = () => {
        setMenu(!menu);
    };
    const handleNotification = () => {
        setNotification(!notification);
    };
    const navigation = useNavigation();
    const renderContent = () => {
        let filteredData;
        switch (selectedStatusButton) {
            case 'Accepted':
                filteredData = bookings.filter(item => item.status === 'Accepted');
                break;
            case 'Pending':
                filteredData = bookings.filter(item => item.status === 'Pending');
                break;
            case 'Rejected':
                filteredData = bookings.filter(item => item.status === 'Cancelled' || item.status === 'Rejected');
                break;
            default:
                filteredData = bookings;
        }
        return (_jsx(View, { children: filteredData.map((item, index) => (_jsxs(View, Object.assign({ style: {
                    width: 328,
                    height: 'auto',
                    borderRadius: 8,
                    backgroundColor: '#FFFFFF',
                } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row' } }, { children: [_jsx(View, Object.assign({ style: {
                                    width: 72,
                                    height: 61.51,
                                    backgroundColor: 'brown',
                                    borderRadius: 8,
                                } }, { children: _jsx(Image, { source: { uri: item.warehouse.main_photo[0] }, style: { width: '100%', height: '100%', borderRadius: 8 } }) })), _jsxs(View, Object.assign({ style: { marginLeft: 8 } }, { children: [_jsx(View, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { color: 'black' }] }, { children: item.warehouse.warehouse_name })) }), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center' } }, { children: [_jsx(View, Object.assign({ style: { padding: 5 } }, { children: _jsx(Location, {}) })), _jsxs(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: [item.warehouse.city, ", ", item.warehouse.State] }))] }))] }))] })), _jsxs(View, Object.assign({ style: {
                            marginTop: 16,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                        } }, { children: [_jsxs(View, Object.assign({ style: {} }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center' } }, { children: [_jsx(View, Object.assign({ style: { padding: 5 } }, { children: _jsx(Calender, {}) })), _jsxs(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: [convertFormattedNumberToDateString(item.fromDate), " - ", convertFormattedNumberToDateString(item.toDate)] }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center' } }, { children: [_jsx(View, Object.assign({ style: { padding: 5 } }, { children: _jsx(Weight, {}) })), _jsxs(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: [item.totalWeight, " kg"] }))] }))] })), _jsxs(View, Object.assign({ style: {} }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center' } }, { children: [_jsx(View, Object.assign({ style: { padding: 5 } }, { children: _jsx(Logistic, {}) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: `${item.warehouse.remainingCapacity}MT capacity truck` }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center' } }, { children: [_jsx(View, Object.assign({ style: { padding: 5 } }, { children: _jsx(TimeTruck, {}) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: item.createdAt.toString() }))] }))] }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', marginVertical: 16 } }, { children: [_jsx(Text, { children: "To pay" }), _jsxs(Text, { children: ["\u20B9 ", item.total_price] })] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(View, Object.assign({ style: { width: '48%' } }, { children: _jsx(ButtonWithAutoWidth, { disabled: item.status === "Cancelled", role: "iButton", text: "Cancel booking", borderColor: "#07294B", txtcolor: "#07294B", onPress: () => navigation.navigate('CancelBooking', {
                                        bookingId: item._id,
                                        warehouse: item.warehouse
                                    }) }) })), _jsx(View, Object.assign({ style: { width: '48%' } }, { children: _jsx(ButtonWithAutoWidth, { role: "iButton", disabled: item.status === "Pending", text: "View details", bgcolor: "#0C447D", borderColor: "#0C447D", txtcolor: "#FFFFFF", onPress: () => {
                                        switch (item.status) {
                                            case 'Accepted':
                                                navigation.navigate('AcceptedBookingDetails', {
                                                    booking: item,
                                                    warehouse: item.warehouse
                                                });
                                                break;
                                            // case 'Pending':
                                            //     navigation.navigate('PendingBookingDetails', { data: item });
                                            //     break;
                                            case 'Cancelled':
                                                navigation.navigate('RejectedBookingDetails', {
                                                    booking: item,
                                                });
                                                break;
                                            default:
                                                break;
                                        }
                                    } }) }))] })), _jsx(View, { style: {
                            borderTopWidth: 1,
                            borderColor: '#C1C4C2',
                            marginVertical: 40,
                        } })] }), index))) }));
    };
    return (_jsxs(ScrollView, Object.assign({ style: { flex: 1, backgroundColor: '#FFFFFF' } }, { children: [_jsx(HomeHeader, { menuCallBack: handleMenu, notificationCallBack: handleNotification }), _jsxs(View, Object.assign({ style: styles.content }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH6, { color: 'black' }] }, { children: "My bookings" })), selectedButton == false ? (_jsx(_Fragment, {})) : (_jsxs(_Fragment, { children: [_jsxs(View, Object.assign({ style: {
                                    flexDirection: 'row',
                                    marginTop: 24,
                                    height: 35,
                                    justifyContent: 'space-between',
                                } }, { children: [_jsx(TouchableOpacity, Object.assign({ style: {
                                            borderRadius: 8,
                                            backgroundColor: selectedStatusButton === 'Accepted' ? '#00A241' : '#F7F7F7',
                                            padding: 8,
                                            justifyContent: 'center',
                                            height: 40,
                                            width: 104,
                                            alignItems: 'center',
                                            borderWidth: selectedStatusButton === 'Accepted' ? 0 : 1,
                                            borderColor: selectedStatusButton === 'Accepted' ? '' : '#C1C4C2',
                                        } }, { children: _jsx(Text, Object.assign({ style: [
                                                textStyles.headingH7,
                                                {
                                                    color: selectedStatusButton === 'Accepted'
                                                        ? '#ffffff'
                                                        : '#1C1C1C',
                                                },
                                            ], onPress: () => handlePressStatus('Accepted') }, { children: "Accepted" })) })), _jsx(TouchableOpacity, Object.assign({ style: {
                                            borderRadius: 8,
                                            backgroundColor: selectedStatusButton === 'Pending' ? '#0038FF' : '#F7F7F7',
                                            padding: 8,
                                            justifyContent: 'center',
                                            height: 40,
                                            width: 104,
                                            alignItems: 'center',
                                            borderWidth: selectedStatusButton === 'Pending' ? 0 : 1,
                                            borderColor: selectedStatusButton === 'Pending' ? '' : '#C1C4C2',
                                        } }, { children: _jsx(Text, Object.assign({ style: [
                                                textStyles.headingH7,
                                                {
                                                    color: selectedStatusButton === 'Pending'
                                                        ? '#ffffff'
                                                        : '#1C1C1C',
                                                },
                                            ], onPress: () => handlePressStatus('Pending') }, { children: "Pending" })) })), _jsx(TouchableOpacity, Object.assign({ style: {
                                            borderRadius: 8,
                                            backgroundColor: selectedStatusButton === 'Rejected' ? '#FF5858' : '#F7F7F7',
                                            padding: 8,
                                            justifyContent: 'center',
                                            height: 40,
                                            width: 104,
                                            alignItems: 'center',
                                            borderWidth: selectedStatusButton === 'Rejected' ? 0 : 1,
                                            borderColor: selectedStatusButton === 'Rejected' ? '' : '#C1C4C2',
                                        } }, { children: _jsx(Text, Object.assign({ style: [
                                                textStyles.headingH7,
                                                {
                                                    color: selectedStatusButton === 'Rejected'
                                                        ? '#ffffff'
                                                        : '#1C1C1C',
                                                },
                                            ], onPress: () => handlePressStatus('Rejected') }, { children: "Rejected" })) }))] })), _jsx(View, { style: {
                                    borderTopWidth: 1,
                                    borderColor: '#C1C4C2',
                                    marginVertical: 24,
                                } }), _jsx(View, Object.assign({ style: { marginBottom: '15%' } }, { children: renderContent() }))] }))] })), _jsx(NavBar, { current: "MyBooking" }), _jsx(Modal, Object.assign({ visible: menu, transparent: true }, { children: _jsx(HomeMenu, { exitCallBack: handleMenu }) })), _jsx(Modal, Object.assign({ visible: notification, transparent: true }, { children: _jsx(HomeNotification, { exitCallBack: handleNotification, Notification: [] }) }))] })));
};
export default MyBooking;
const styles = StyleSheet.create({
    content: {
        marginHorizontal: '4.5%',
        flex: 1,
        width: '91.5%',
        height: height,
        marginBottom: '30%',
        // backgroundColor: 'blue',
        // justifyContent: 'space-between',
    },
});
