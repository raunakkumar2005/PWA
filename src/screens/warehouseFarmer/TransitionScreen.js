
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import HeaderComponent from "../../components/Header";
import { ScrollView } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Booking } from "../../service/api";
import BookingDetails from "../../components/BookingDetails";
import OrderTracking from "../../components/Transition";
import Commodity from "../../assets/Commodity";
import textStyles from "../../components/textStyles";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const TransitionScreen = () => {
    const [SelectedBooking, setSelectedBooking] = useState();
    const [isClickedBooking, setIsClickedBooking] = useState(false);
    const [bookings, setBookings] = useState([]);
    const fetchBookings = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield Booking.get_all_bookings_farmer();
        // console.log("bookings : ",response);
        setBookings(response);
    });
    useEffect(() => {
        fetchBookings();
        console.log(bookings);
    }, []);
    return (_jsxs(View, { children: [_jsx(HeaderComponent, { title: "Transition" }), _jsxs(TouchableOpacity, Object.assign({ style: {
                    borderWidth: 0.5,
                    alignSelf: 'center',
                    width: '90%',
                    borderRadius: 8,
                    height: 60,
                    flexDirection: 'row',
                    alignItems: 'center',
                }, onPress: () => {
                    setIsClickedBooking(!isClickedBooking);
                } }, { children: [_jsx(View, Object.assign({ style: {
                            justifyContent: 'center',
                            alignSelf: 'center',
                            marginLeft: 14,
                            marginRight: 9.5,
                        } }, { children: _jsx(Commodity, {}) })), _jsxs(View, { children: [SelectedBooking === undefined ? null : (_jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Bookings" }))), _jsx(Text, Object.assign({ style: SelectedBooking === undefined
                                    ? textStyles.bodyB3
                                    : [textStyles.headingH8, { color: 'black' }] }, { children: SelectedBooking === undefined ? 'Bookings' : SelectedBooking._id }))] })] })), isClickedBooking ? (_jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.commodityScrollView }, { children: bookings.map((item, index) => (_jsx(TouchableOpacity, Object.assign({ style: {
                        width: '90%',
                        alignSelf: 'center',
                        borderRadius: 8,
                        padding: 15,
                        justifyContent: 'center',
                    }, onPress: () => {
                        setSelectedBooking(item);
                        setIsClickedBooking(!isClickedBooking);
                    } }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20, color: "#696969" } }, { children: item._id })) }), index))) }))) : (_jsx(_Fragment, {})), SelectedBooking &&
                _jsxs(View, Object.assign({ style: {
                        width: '90%',
                        alignSelf: 'center'
                    } }, { children: [_jsx(BookingDetails, { booking: SelectedBooking }), _jsx(OrderTracking, { isBookingAccepted: SelectedBooking.isAccepted, isWeighbridgeData: SelectedBooking.isBookingWeighbridgeAdded, isDeposit: SelectedBooking.isBookingDeposited, isGrading: SelectedBooking.isBookingGraded, isWithdrawal: SelectedBooking.isBookingWithdrawn, isCompleted: SelectedBooking.status === 'COMPLETED' })] }))] }));
};
export default TransitionScreen;
const styles = StyleSheet.create({
    commodityScrollView: {
        backgroundColor: 'white',
        width: '90%',
        alignSelf: 'center',
        zIndex: 1,
        borderWidth: 0.5,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
