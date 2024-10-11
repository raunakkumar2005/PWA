
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import HeaderComponent from '../../components/Header';
import textStyles from '../../components/textStyles';
import Location from '../../assets/Location';
import Bag from '../../assets/Bag';
import Commodity from '../../assets/Commodity';
import Weight from '../../assets/Weight';
import CustomInputText from '../../components/CustomInputText';
import CustomButton from '../../components/CustomButton';
import { Booking } from '../../service/api';
import { formatDate } from '../../utils/date';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BookWarehouse = ({ navigation, route }) => {
    var _a, _b, _c, _d, _e;
    const { warehouse, Bookingdata, TotalCost, Totaldays } = route.params;
    console.log(route.params);
    const [isClickedCommodity, setIsClickedCommodity] = useState(false);
    const [isClickedUnit, setIsClickedUnit] = useState(false);
    const [isClickedBagsize, setIsClickedBagsize] = useState(false);
    const [showCalender, setshowCalender] = useState(false);
    const [ModalType, setModalType] = useState('');
    const [SelectedCommodity, setSelectedCommodity] = useState('');
    const [Selectedweight, setSelectedweight] = useState('');
    const [numberOfBags, setnumberOfBags] = useState('');
    const [SelectedUnit, setSelectedUnit] = useState('');
    const [SelectedBagsize, setSelectedBagsize] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [menu, setMenu] = useState(false);
    const [notification, setNotification] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    };
    const handleNotification = () => {
        setNotification(!notification);
    };
    function convertDateStringToFormattedString(dateString) {
        const [year, month, day] = dateString.split('-');
        const formattedDateString = `${year}${month}${day}`;
        return formattedDateString;
    }
    function convertBagSize(bagSize) {
        const result = bagSize.match(/^(\d+)\s*kg\s*bag$/i);
        return result ? `${result[1]} kg` : bagSize;
    }
    const handleBooking = () => __awaiter(void 0, void 0, void 0, function* () {
        var _f, _g, _h;
        try {
            const booking = yield Booking.create_booking(warehouse._id, {
                fromDate: convertDateStringToFormattedString(((_f = Bookingdata.startDate) === null || _f === void 0 ? void 0 : _f.dateString) || '20240720'),
                toDate: convertDateStringToFormattedString(((_g = Bookingdata.endDate) === null || _g === void 0 ? void 0 : _g.dateString) || "20240820"),
                commodity: Bookingdata.SelectedCommodity || '',
                weight: Bookingdata.weight || '',
                unit: Bookingdata.SelectedUnit || '',
                noOfBags: ((_h = Bookingdata.numberOfBags) === null || _h === void 0 ? void 0 : _h.toLocaleString()) || '',
                bagSize: convertBagSize(Bookingdata.SelectedBagsize || ''),
                total_price: TotalCost,
                requestcapacity: Bookingdata.weight || ''
            });
            console.log(booking, 100);
            // Toast.show({
            //     type: 'success',
            //     text1: 'Success',
            //     text2: 'Warehouse Booked Successfully',
            // })
            navigation.goBack();
        }
        catch (error) {
            console.log("Error in booking : ", error);
            // Toast.show({
            //     type: 'error',
            //     text1: 'Error',
            //     text2: 'An Error occured',
            // })
        }
    });
    const Unit = [{ unit: 'kg' }];
    const BagSize = [
        { BagSize: '25 kg bag' },
        { BagSize: '50 kg bag' },
        { BagSize: '75 kg bag' },
        { BagSize: '100 kg bag' },
    ];
    const handleChangeDate = (date) => {
        setshowCalender(false);
        ModalType === 'START_DATE' ? setStartDate(date) : setEndDate(date);
        setModalType('');
    };
    return (_jsxs(View, Object.assign({ style: { backgroundColor: '#FFFFFF', flex: 1 } }, { children: [_jsx(HeaderComponent, { title: 'Book warehouse' }), _jsxs(View, Object.assign({ style: { alignItems: 'center', justifyContent: 'space-between' } }, { children: [_jsx(View, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { color: 'black' }] }, { children: warehouse.warehouse_name })) }), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center' } }, { children: [_jsx(View, Object.assign({ style: { padding: 5 } }, { children: _jsx(Location, {}) })), _jsx(View, Object.assign({ style: { flexDirection: 'column' } }, { children: _jsxs(Text, Object.assign({ style: [textStyles.bodyB3, { width: 'auto', color: 'black' }] }, { children: [warehouse.locality_area, ",", warehouse.State] })) }))] })), _jsxs(View, Object.assign({ style: styles.SearchContainer }, { children: [_jsxs(View, Object.assign({ style: {
                                    width: '100%',
                                    height: '20%',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                } }, { children: [_jsxs(TouchableOpacity, Object.assign({ onPress: () => { }, style: {
                                            width: '48%',
                                            borderWidth: 0.5,
                                            height: '100%',
                                            borderRadius: 8,
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        } }, { children: [_jsx(View, { style: { justifyContent: 'center', marginLeft: 14, marginRight: 7.5 } }), _jsx(View, { children: _jsx(Text, Object.assign({ style: startDate == null ? textStyles.bodyB3 : [textStyles.headingH8, { color: 'black' }] }, { children: ((_a = Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.startDate) === null || _a === void 0 ? void 0 : _a.dateString) || "" })) })] })), _jsxs(TouchableOpacity, Object.assign({ onPress: () => { }, style: {
                                            width: '48%',
                                            borderWidth: 0.5,
                                            height: '100%',
                                            borderRadius: 8,
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        } }, { children: [_jsx(View, { style: { justifyContent: 'center', marginLeft: 14, marginRight: 7.5 } }), _jsxs(View, { children: [endDate == null ? null : _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "End date" })), _jsx(Text, Object.assign({ style: endDate == null ? textStyles.bodyB3 : [textStyles.headingH8, { color: 'black' }] }, { children: (_b = Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.endDate) === null || _b === void 0 ? void 0 : _b.dateString }))] })] }))] })), showCalender ? (_jsx(View, { style: styles.calender })) : (_jsx(_Fragment, {})), _jsxs(TouchableOpacity, Object.assign({ style: {
                                    borderWidth: 0.5,
                                    width: '100%',
                                    borderRadius: 8,
                                    height: '20%',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }, onPress: () => { } }, { children: [_jsx(View, Object.assign({ style: { justifyContent: 'center', marginLeft: 14, marginRight: 7.5 } }, { children: _jsx(Commodity, {}) })), _jsxs(View, { children: [SelectedCommodity == '' ? null : _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Commodity" })), _jsx(Text, Object.assign({ style: SelectedCommodity == '' ? textStyles.bodyB3 : [textStyles.headingH8, { color: 'black' }] }, { children: Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.SelectedCommodity }))] })] })), isClickedCommodity ? (_jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.commodityScrollView }, { children: warehouse.Commodity.map((item, index) => (_jsx(TouchableOpacity, Object.assign({ style: {
                                        width: '100%',
                                        borderRadius: 8,
                                        height: 50,
                                        justifyContent: 'center',
                                    }, onPress: () => {
                                        setSelectedCommodity(item.name);
                                        setIsClickedCommodity(!isClickedCommodity);
                                    } }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20 } }, { children: item.name })) }), index))) }))) : (_jsx(_Fragment, {})), _jsxs(View, Object.assign({ style: {
                                    width: '100%',
                                    height: '20%',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                } }, { children: [_jsxs(View, Object.assign({ style: {
                                            width: '60%',
                                            height: '100%',
                                            borderWidth: 0.5,
                                            borderRadius: 8,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        } }, { children: [_jsx(View, Object.assign({ style: { justifyContent: 'center', marginLeft: 14, } }, { children: _jsx(Weight, {}) })), _jsx(CustomInputText, { PlaceHolder: "Weight", txt: Bookingdata.weight || "", readonly: true })] })), _jsxs(TouchableOpacity, Object.assign({ style: {
                                            width: '35%',
                                            borderWidth: 0.5,
                                            height: '100%',
                                            borderRadius: 8,
                                            paddingLeft: 12,
                                            justifyContent: 'center',
                                        }, onPress: () => { } }, { children: [SelectedUnit == '' ? null : _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Unit" })), _jsx(Text, Object.assign({ style: SelectedUnit == '' ? textStyles.bodyB3 : [textStyles.headingH8, { color: 'black' }] }, { children: Bookingdata.SelectedUnit }))] }))] })), isClickedUnit ? (_jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.UnitScrollView }, { children: Unit.map((item, index) => (_jsx(TouchableOpacity, Object.assign({ style: {
                                        width: '100%',
                                        borderRadius: 8,
                                        height: 31,
                                        marginVertical: 9,
                                        justifyContent: 'center',
                                    }, onPress: () => {
                                        setSelectedUnit(item.unit);
                                        setIsClickedUnit(!isClickedUnit);
                                    } }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20 } }, { children: item.unit })) }), index))) }))) : (_jsx(_Fragment, {})), _jsxs(View, Object.assign({ style: {
                                    width: '100%',
                                    height: '20%',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                } }, { children: [_jsxs(View, Object.assign({ style: {
                                            width: '60%',
                                            height: '100%',
                                            borderWidth: 0.5,
                                            borderRadius: 8,
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        } }, { children: [_jsx(View, Object.assign({ style: { justifyContent: 'center', marginLeft: 14, } }, { children: _jsx(Bag, {}) })), _jsx(CustomInputText, { PlaceHolder: "No. of bags", txt: (_c = Bookingdata.numberOfBags) === null || _c === void 0 ? void 0 : _c.toLocaleString(), readonly: true })] })), _jsxs(TouchableOpacity, Object.assign({ style: {
                                            width: '35%',
                                            borderWidth: 0.5,
                                            height: '100%',
                                            borderRadius: 8,
                                            paddingLeft: 12,
                                            justifyContent: 'center',
                                        }, onPress: () => { } }, { children: [SelectedBagsize == '' ? null : _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Bag size" })), _jsx(Text, Object.assign({ style: SelectedBagsize == '' ? textStyles.bodyB3 : [textStyles.headingH8, { color: 'black' }] }, { children: Bookingdata.SelectedBagsize }))] }))] })), isClickedBagsize ? (_jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.BagSizeScrollView }, { children: BagSize.map((item, index) => (_jsx(TouchableOpacity, Object.assign({ style: {
                                        width: '100%',
                                        borderRadius: 8,
                                        height: 31,
                                        marginVertical: 9,
                                        justifyContent: 'center',
                                    }, onPress: () => {
                                        setSelectedBagsize(item.BagSize.split(' ')[0]);
                                        setIsClickedBagsize(!isClickedBagsize);
                                    } }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20 } }, { children: item.BagSize })) }), index))) }))) : (_jsx(_Fragment, {}))] })), _jsxs(View, Object.assign({ style: { width: 328 } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { marginTop: 24, color: 'black' }] }, { children: "Booking payment details" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB3, { width: 206, color: 'black' }] }, { children: `${Totaldays} days ${formatDate(((_d = Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.startDate) === null || _d === void 0 ? void 0 : _d.dateString) || "")} - ${formatDate(((_e = Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.endDate) === null || _e === void 0 ? void 0 : _e.dateString) || "")} for ${Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.weight} ${Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.SelectedUnit}  / ${Bookingdata.numberOfBags} (${Bookingdata.SelectedBagsize})` })), _jsxs(Text, Object.assign({ style: [textStyles.bodyB2, { color: 'black' }] }, { children: ["\u20B9 ", TotalCost] }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 14 } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB3, { width: 206, color: 'black' }] }, { children: 'Transport charge for 20 km' })), _jsx(Text, Object.assign({ style: [textStyles.bodyB2, { color: 'black' }] }, { children: "+ \u20B9 100" }))] })), _jsx(View, { style: { borderTopWidth: 1, borderColor: '#E0E1E1', marginVertical: 8 } }), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { width: 206, color: 'black' }] }, { children: 'Total' })), _jsxs(Text, Object.assign({ style: [textStyles.headingH6_5, { color: 'black' }] }, { children: ["\u20B9 ", TotalCost + 100] }))] })), _jsx(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 24, marginBottom: 16 } }, { children: _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#545554' }] }, { children: 'Request will be accepted or rejected within 24 hours by the warehouse owner' })) })), _jsx(CustomButton, { role: "iButton", text: "Submit request", txtcolor: "#FFFFFF", bgcolor: "#0C447D", borderColor: "#0C447D", onPress: handleBooking })] }))] }))] })));
};
export default BookWarehouse;
const styles = StyleSheet.create({
    SearchContainer: {
        marginTop: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 328,
        height: 260,
        // backgroundColor: 'purple'
    },
    calender: {
        backgroundColor: 'white',
        width: '100%',
        zIndex: 1,
        position: 'absolute',
        top: '23%',
        // left: '5%',
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
        top: '50%',
        // left: '5%',
        height: 443,
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
        top: '75%',
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
    BagSizeScrollView: {
        backgroundColor: 'white',
        width: '35%',
        zIndex: 1,
        position: 'absolute',
        top: '102%',
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
