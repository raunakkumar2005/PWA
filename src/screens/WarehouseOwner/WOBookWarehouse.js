
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import HeaderComponent from '../../components/Header';
import textStyles from '../../components/textStyles';
import Location from '../../assets/Location';
// import { Calendar } from 'react-native-calendars'
import Bag from '../../assets/Bag';
import Calender from '../../assets/Calender';
import Commodity from '../../assets/Commodity';
import Weight from '../../assets/Weight';
import CustomInputText from '../../components/CustomInputText';
import CustomButton from '../../components/CustomButton';
import Dissmiss from '../../assets/Dissmiss';
// import Toast from 'react-native-toast-message'
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
const WOBookWarehouse = ({ navigation, route }) => {
    var _a;
    const [isClickedCommodity, setIsClickedCommodity] = useState(false);
    const [isClickedUnit, setIsClickedUnit] = useState(false);
    const [isClickedBagsize, setIsClickedBagsize] = useState(false);
    const [showCalender, setshowCalender] = useState(false);
    const [ModalType, setModalType] = useState('');
    const [SelectedCommodity, setSelectedCommodity] = useState('');
    const [SelectedUnit, setSelectedUnit] = useState('');
    const [SelectedBagsize, setSelectedBagsize] = useState('');
    const [weight, setweight] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [menu, setMenu] = useState(false);
    const [notification, setNotification] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    };
    const handleNotification = () => {
        setNotification(!notification);
    };
    const GetNoOfBags = (bagsize, weight) => {
        const Bag = parseInt(bagsize);
        const Weight = parseInt(weight);
        const Bags = Weight / Bag;
        if (SelectedUnit == 'MT') {
            return (Bags * 1000).toString();
        }
        else {
            return (Bags * 100).toString();
        }
    };
    const Bookingdata = {
        SelectedBagsize,
        SelectedCommodity,
        SelectedUnit,
        endDate,
        startDate,
        weight: weight || "",
        numberOfBags: parseInt(GetNoOfBags(SelectedBagsize, weight))
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
    function calculateCostPerBagPerDay(warehouse, bookingdata) {
        const selectedCommodity = warehouse.Commodity.find(commodity => commodity.name === bookingdata.SelectedCommodity);
        if (!selectedCommodity) {
            console.error('Commodity not found in the warehouse');
            return null;
        }
        const bagWeight = parseFloat(bookingdata.SelectedBagsize);
        const pricePerDay = selectedCommodity.price_perday.find(price => parseFloat(price.weight) === bagWeight);
        if (!pricePerDay) {
            console.error('Price per day not found for the selected bag size');
            return null;
        }
        return pricePerDay.price;
    }
    function calculateDaysBetweenDates(startDate, endDate) {
        // Parse the start and end dates into Date objects
        const start = new Date(startDate || "");
        const end = new Date(endDate || "");
        // Calculate the difference in time (milliseconds)
        const differenceInTime = end.getTime() - start.getTime();
        // Convert the time difference from milliseconds to days
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        // Return the absolute value of the difference in days to avoid negative results
        return Math.abs(differenceInDays);
    }
    const { warehouse } = route.params;
    //console.log(warehouse?.Commodity[0].price_perday);
    const handleBooking = () => __awaiter(void 0, void 0, void 0, function* () {
        var _b, _c, _d, _e, _f;
        const totalDays = calculateDaysBetweenDates((_b = Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.startDate) === null || _b === void 0 ? void 0 : _b.dateString, (_c = Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.endDate) === null || _c === void 0 ? void 0 : _c.dateString);
        const totalCost = calculateCostPerBagPerDay(warehouse, Bookingdata) * totalDays * (Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.numberOfBags);
        try {
            const booking = yield Booking.create_booking(warehouse._id || '', {
                fromDate: convertDateStringToFormattedString(((_d = Bookingdata.startDate) === null || _d === void 0 ? void 0 : _d.dateString) || '20240720'),
                toDate: convertDateStringToFormattedString(((_e = Bookingdata.endDate) === null || _e === void 0 ? void 0 : _e.dateString) || "20240820"),
                commodity: Bookingdata.SelectedCommodity || '',
                weight: Bookingdata.weight || '',
                unit: Bookingdata.SelectedUnit || '',
                noOfBags: ((_f = Bookingdata.numberOfBags) === null || _f === void 0 ? void 0 : _f.toLocaleString()) || '',
                bagSize: `${SelectedBagsize} kg`,
                total_price: totalCost,
                requestcapacity: Bookingdata.weight || ''
            });
            console.log(booking, 100);
            // Toast.show({
            //     type: 'success',
            //     text1: 'Success',
            //     text2: 'Warehouse Booked Successfully',
            // })
            setIsVisible(true);
            //navigation.goBack();
        }
        catch (error) {
            console.log("Error in booking : ", error);
            navigation.goBack();
            // Toast.show({
            //     type: 'error',
            //     text1: 'Error',
            //     text2: 'An Error occured',
            // })
        }
    });
    //const navigation = useNavigation<NavigationProp<Record<string, object>>>();
    const explore = [
        { id: 1, color: '#C8FFF5' },
        { id: 2, color: '#FFE4F2' },
        { id: 3, color: '#C8FFF5' },
    ];
    console.log("sele :", selected_commodity);
    const Unit = [{ unit: 'MT' }, { unit: 'QT' }];
    // const BagSize = [
    //     { BagSize: '25 kg bag' },
    //     { BagSize: '50 kg bag' },
    //     { BagSize: '75 kg bag' },
    //     { BagSize: '100 kg bag' },
    // ];
    const handleChangeDate = (date) => {
        setshowCalender(false);
        ModalType === 'START_DATE' ? setStartDate(date) : setEndDate(date);
        setModalType('');
    };
    const handlePressedStartDate = () => {
        setIsClickedUnit(false);
        setIsClickedBagsize(false);
        setIsClickedCommodity(false);
        return ModalType == 'END_DATE'
            ? (setModalType('START_DATE'),
                showCalender == false ? setshowCalender(true) : setshowCalender(true))
            : (setshowCalender(!showCalender), setModalType('START_DATE'));
    };
    const handlePressedEndDate = () => {
        setIsClickedUnit(false);
        setIsClickedBagsize(false);
        setIsClickedCommodity(false);
        return ModalType == 'START_DATE'
            ? (setModalType('END_DATE'),
                showCalender == false ? setshowCalender(true) : setshowCalender(true))
            : (setshowCalender(!showCalender), setModalType('END_DATE'));
    };
    const today = new Date().toISOString().split('T')[0];
    const selected_commodity = (_a = warehouse === null || warehouse === void 0 ? void 0 : warehouse.Commodity) === null || _a === void 0 ? void 0 : _a.find((item) => {
        return item.name === SelectedCommodity;
    });
    return (_jsxs(View, Object.assign({ style: { backgroundColor: '#FFFFFF', flex: 1 } }, {
        children: [_jsx(HeaderComponent, { title: 'Book warehouse' }), _jsxs(View, Object.assign({ style: { alignItems: 'center', justifyContent: 'space-between' } }, {
            children: [_jsx(View, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { color: 'black' }] }, { children: warehouse === null || warehouse === void 0 ? void 0 : warehouse.warehouse_name })) }), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center' } }, { children: [_jsx(View, Object.assign({ style: { padding: 5 } }, { children: _jsx(Location, {}) })), _jsx(View, Object.assign({ style: { flexDirection: 'column' } }, { children: _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { width: 'auto', color: 'black' }] }, { children: `${warehouse === null || warehouse === void 0 ? void 0 : warehouse.city} ${warehouse === null || warehouse === void 0 ? void 0 : warehouse.State}` })) }))] })), _jsxs(View, Object.assign({ style: styles.SearchContainer }, {
                children: [_jsxs(View, Object.assign({
                    style: {
                        width: '100%',
                        height: '20%',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }
                }, {
                    children: [_jsxs(TouchableOpacity, Object.assign({
                        onPress: handlePressedStartDate, style: {
                            width: '48%',
                            borderWidth: 0.5,
                            height: '100%',
                            borderRadius: 8,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }
                    }, { children: [_jsx(View, Object.assign({ style: { justifyContent: 'center', marginLeft: 14, marginRight: 7.5 } }, { children: _jsx(Calender, {}) })), _jsxs(View, { children: [startDate == null ? null : _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Start Date" })), _jsx(Text, Object.assign({ style: startDate == null ? textStyles.bodyB3 : [textStyles.headingH8, { color: 'black' }] }, { children: startDate == null ? 'Start Date' : startDate.dateString }))] })] })), _jsxs(TouchableOpacity, Object.assign({
                        onPress: handlePressedEndDate, style: {
                            width: '48%',
                            borderWidth: 0.5,
                            height: '100%',
                            borderRadius: 8,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }
                    }, { children: [_jsx(View, Object.assign({ style: { justifyContent: 'center', marginLeft: 14, marginRight: 7.5 } }, { children: _jsx(Calender, {}) })), _jsxs(View, { children: [endDate == null ? null : _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "End date" })), _jsx(Text, Object.assign({ style: endDate == null ? textStyles.bodyB3 : [textStyles.headingH8, { color: 'black' }] }, { children: endDate == null ? 'End date' : endDate.dateString }))] })] }))]
                })), showCalender ? (_jsx(View, { style: styles.calender })) : (_jsx(_Fragment, {})), _jsxs(TouchableOpacity, Object.assign({
                    style: {
                        borderWidth: 0.5,
                        width: '100%',
                        borderRadius: 8,
                        height: '20%',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }, onPress: () => {
                        setIsClickedCommodity(!isClickedCommodity)
                        setIsClickedUnit(false)
                        setIsClickedBagsize(false);
                    }
                }, { children: [_jsx(View, Object.assign({ style: { justifyContent: 'center', marginLeft: 14, marginRight: 7.5 } }, { children: _jsx(Commodity, {}) })), _jsxs(View, { children: [SelectedCommodity == '' ? null : _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Commodity" })), _jsx(Text, Object.assign({ style: SelectedCommodity == '' ? textStyles.bodyB3 : [textStyles.headingH8, { color: 'black' }] }, { children: SelectedCommodity == '' ? 'Commodity' : SelectedCommodity }))] })] })), isClickedCommodity ? (_jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.commodityScrollView }, {
                    children: warehouse && (warehouse === null || warehouse === void 0 ? void 0 : warehouse.Commodity.map((item, index) => (_jsx(TouchableOpacity, Object.assign({
                        style: {
                            width: '100%',
                            borderRadius: 8,
                            height: 50,
                            justifyContent: 'center',
                        }, onPress: () => {
                            setSelectedCommodity(item.name);
                            setIsClickedCommodity(!isClickedCommodity);
                        }
                    }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20, color: "black" } }, { children: item.name })) }), index))))
                }))) : (_jsx(_Fragment, {})), _jsxs(View, Object.assign({
                    style: {
                        width: '100%',
                        height: '20%',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }
                }, {
                    children: [_jsxs(View, Object.assign({
                        style: {
                            width: '60%',
                            height: '100%',
                            borderWidth: 0.5,
                            borderRadius: 8,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }
                    }, { children: [_jsx(View, Object.assign({ style: { justifyContent: 'center', marginLeft: 14, } }, { children: _jsx(Weight, {}) })), _jsx(CustomInputText, { PlaceHolder: "Weight", onTextChange: setweight })] })), _jsxs(TouchableOpacity, Object.assign({
                        style: {
                            width: '35%',
                            borderWidth: 0.5,
                            height: '100%',
                            borderRadius: 8,
                            paddingLeft: 12,
                            justifyContent: 'center',
                        }, onPress: () => setIsClickedUnit(!isClickedUnit)
                    }, { children: [SelectedUnit == '' ? null : _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Unit" })), _jsx(Text, Object.assign({ style: SelectedUnit == '' ? textStyles.bodyB3 : [textStyles.headingH8, { color: 'black' }] }, { children: SelectedUnit == '' ? 'Unit' : SelectedUnit }))] }))]
                })), isClickedUnit ? (_jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.UnitScrollView }, {
                    children: Unit.map((item, index) => (_jsx(TouchableOpacity, Object.assign({
                        style: {
                            width: '100%',
                            borderRadius: 8,
                            height: 31,
                            marginVertical: 9,
                            justifyContent: 'center',
                        }, onPress: () => {
                            setSelectedUnit(item.unit);
                            setIsClickedUnit(!isClickedUnit);
                        }
                    }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20, color: "black" } }, { children: item.unit })) }), index)))
                }))) : (_jsx(_Fragment, {})), _jsxs(View, Object.assign({
                    style: {
                        width: '100%',
                        height: '20%',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }
                }, {
                    children: [_jsxs(View, Object.assign({
                        style: {
                            width: '60%',
                            height: '100%',
                            borderWidth: 0.5,
                            borderRadius: 8,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }
                    }, { children: [_jsx(View, Object.assign({ style: { justifyContent: 'center', marginLeft: 14, } }, { children: _jsx(Bag, {}) })), _jsx(CustomInputText, { PlaceHolder: "No. of bags", txt: weight && SelectedUnit && SelectedBagsize ? GetNoOfBags(SelectedBagsize, weight) : '' })] })), _jsxs(TouchableOpacity, Object.assign({
                        style: {
                            width: '35%',
                            borderWidth: 0.5,
                            height: '100%',
                            borderRadius: 8,
                            paddingLeft: 12,
                            justifyContent: 'center',
                        }, onPress: () => setIsClickedBagsize(!isClickedBagsize)
                    }, { children: [SelectedBagsize == '' ? null : _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Bag size" })), _jsx(Text, Object.assign({ style: SelectedBagsize == '' ? textStyles.bodyB3 : [textStyles.headingH8, { color: 'black' }] }, { children: SelectedBagsize == '' ? 'Bag size' : SelectedBagsize }))] }))]
                })), isClickedBagsize ? (_jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.BagSizeScrollView }, {
                    children: selected_commodity && selected_commodity.price_perday.map((item, index) => (_jsx(TouchableOpacity, Object.assign({
                        style: {
                            width: '100%',
                            borderRadius: 8,
                            height: 31,
                            marginVertical: 9,
                            justifyContent: 'center',
                        }, onPress: () => {
                            setSelectedBagsize(item.weight);
                            setIsClickedBagsize(!isClickedBagsize);
                        }
                    }, { children: _jsxs(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20, color: "black" } }, { children: [item.weight, " kg bag"] })) }), index)))
                }))) : (_jsx(_Fragment, {}))]
            })), _jsx(View, Object.assign({ style: { marginTop: 16, paddingHorizontal: 20 } }, { children: _jsx(CustomButton, { role: "iButton", text: "Book warehouse", txtcolor: "#FFFFFF", bgcolor: "#0C447D", borderColor: "#0C447D", onPress: handleBooking }) }))]
        })), _jsxs(Modal, Object.assign({ animationType: "fade", transparent: true, visible: isVisible, onRequestClose: () => setIsVisible(false) }, { children: [_jsx(View, { style: styles.modalOverlay }), _jsxs(View, Object.assign({ style: styles.modalContainer }, { children: [_jsx(TouchableOpacity, Object.assign({ onPress: () => { setIsVisible(false); navigation.goBack(); }, style: styles.DissmissBotton }, { children: _jsx(Dissmiss, {}) })), _jsx(View, Object.assign({ style: styles.optionPosition }, { children: _jsxs(View, Object.assign({ style: styles.modalTitle }, { children: [_jsx(Image, { source: { uri: 'https://s3-alpha-sig.figma.com/img/2b5a/6ebc/ec5d468f10fc2763d7215a75198580d5?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eUyxn-bfMbP~HO7uPX9h9oSINlRayqIQXf2728q0E3NaV3DqYJPNjlTTur4-6Qn8ZzjZY875w~lygihh0Wq~p6LYsNlP5GJVJSmPi3xDgU6DEjSt9otHmOFO57ICNs5mA7z0mFOKDjit6x0aTkk3QzJhHtTSw7xwEwVWDUnh~V-jdiQ2EVmPEUHa6n-WAv5S~94atUCPZicfvJg6h~QZOh8Pm6LAE5ruPMYD-9SInW9vJwwBk5plqYFcbel8jjjTvmLlILpOwvicW0cRalceulFxzwXkQSqYrue0mzkDm~DoJes9g8pGr000bPXC3FzTkFgTbT-Yu6uJb4~CAJo3cw__' }, style: { width: 56, height: 56 } }), _jsx(Text, Object.assign({ style: [textStyles.headingH7, styles.modalText] }, { children: "The warehouse booking has been confirmed" }))] })) }))] }))] }))]
    })));
};
export default WOBookWarehouse;
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
        // height: 443,
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
    modalOverlay: {
        backgroundColor: '#5E5E5EB2',
        width: '100%',
        height: '100%',
    },
    modalContainer: {
        width: 330,
        height: 222,
        top: 257,
        left: 16,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
    },
    DissmissBotton: {
        position: 'absolute',
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        right: 22,
        top: 24,
    },
    optionPosition: {
        top: 70,
        marginHorizontal: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalTitle: {
        top: 36,
        position: 'absolute',
        width: 285,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32,
    },
    modalText: {
        color: '#1C1C1C',
        textAlign: 'center',
    },
});
