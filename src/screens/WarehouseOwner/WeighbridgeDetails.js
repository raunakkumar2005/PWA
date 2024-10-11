
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Dimensions, } from 'react-native';
import { useEffect, useState } from 'react';
import Table from '../../components/Table';
import HomeMenu from '../../components/HomeMenu';
import HomeNotification from '../../components/HomeNotification';
import Sort from '../../assets/Sort';
import Searching from '../../assets/Searching';
import { ScrollView } from 'react-native';
import Next from '../../assets/Next';
import Prev from '../../assets/Prev';
import Back from '../../assets/Back';
import { Weighbridge } from '../../service/api';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const height = Dimensions.get('window').height;
const WeighbridgeDetails = ({ route, navigation, }) => {
    const { variant = 'inbound' } = route.params;
    const [menu, setMenu] = useState(false);
    const [notification, setNotification] = useState(false);
    const [search, setSearch] = useState('');
    const [toggleSort, setToggleSort] = useState(false);
    const [back, setBack] = useState(false);
    const [front, setFront] = useState(true);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);
    const [reload, setReload] = useState(true);
    const rangeOptions = [
        'Start date',
        'End date',
        'commodity type',
        'Customer name : A to Z',
        'Customer name : Z to A',
        'Total weight : Low to high',
        'Total weight : High to low',
        'inbound',
        'Rejected',
    ];
    let heading = [
        'Booking ID',
        'Warehouse',
        'Commodity',
        'Date',
        'Time',
        'Gross\nweight',
        'Tare\nweight',
        'Net weight',
        'Truck\nnumber',
        'Truck driver\nname',
    ];
    const [Staticdata, setStaticData] = useState([]);
    const [data, setData] = useState([]);
    const handleMenu = () => {
        setMenu(!menu);
    };
    const handleNotification = () => {
        setNotification(!notification);
    };
    // handle search logic here
    const handleSearch = () => { };
    // handle sort logic here
    const handleSort = (option) => { };
    const handleToggleSort = () => {
        setToggleSort(!toggleSort);
    };
    const handleNext = () => {
        if (max + 10 > Staticdata.length) {
            if (max + 1 <= Staticdata.length) {
                setMin(max);
                setMax(max + (Staticdata.length % 10));
                setFront(false);
                setBack(true);
                setData(Staticdata.slice(max, max + (Staticdata.length % 10)));
                return;
            }
            return;
        }
        if (max + 10 === Staticdata.length) {
            setMin(max);
            setMax(max + 10);
            setFront(false);
            setBack(true);
            setData(Staticdata.slice(max, max + 10));
            return;
        }
        setMin(max);
        setMax(max + 10);
        setBack(true);
        setFront(true);
        setData(Staticdata.slice(max, max + 10));
    };
    const handlePrev = () => {
        if (max % 10 > 1) {
            setMax(max - (max % 10));
            setMin(min - 10);
            setData(Staticdata.slice(min - 10, max - (max % 10)));
            setBack(false);
            setFront(true);
            return;
        }
        if (min - 10 === 0) {
            setMax(max - 10);
            setMin(min - 10);
            setData(Staticdata.slice(min - 10, max - 10));
            setBack(false);
            setFront(true);
            return;
        }
        setMax(max - 10);
        setMin(min - 10);
        setData(Staticdata.slice(min - 10, max - 10));
    };
    const handleNavigation = () => {
        navigation.navigate('Weighbridge details', {
            variant: variant === 'inbound' ? 'outbound' : 'inbound',
        });
    };
    const renderDropdownOptions = (option) => {
        return (_jsx(TouchableOpacity, Object.assign({ style: styles.dropDownOptions, onPress: () => handleSort(option) }, { children: _jsx(Text, Object.assign({ style: styles.dropDownText }, { children: option })) })));
    };
    const getData = () => __awaiter(void 0, void 0, void 0, function* () {
        let temp = yield Weighbridge.get_all_details();
        console.log(temp, 101);
        if (variant === 'inbound') {
            temp = temp.filter(item => item.booking_id.isItemInWarehouse);
        }
        else {
            temp = temp.filter(item => !item.booking_id.isItemInWarehouse);
        }
        const tempy = temp.map(item => {
            return [
                item._id,
                item.booking_id.name,
                item.booking_id.productname,
                item.booking_id.fromDate,
                item.booking_id.fromTime,
                item.gross_weight,
                item.tore_weight,
                item.booking_id.totalWeight,
                item.truck_number,
                item.driver_name,
                '',
            ];
        });
        const max = tempy.length >= 10 ? 10 : tempy.length;
        const conditon = tempy.length >= 10;
        console.log(tempy, 100);
        setFront(conditon);
        setMax(max);
        setStaticData(tempy);
        setData(tempy.slice(min, max));
        setReload(false);
        console.log(reload, 1);
    });
    useEffect(() => {
        getData();
        setTimeout(getData, 500);
    }, [route.params]);
    return (_jsx(View, Object.assign({ style: styles.container }, { children: _jsxs(ScrollView, Object.assign({ style: styles.container, contentContainerStyle: { alignItems: 'center' } }, { children: [_jsxs(View, Object.assign({ style: styles.header }, { children: [_jsx(TouchableOpacity, Object.assign({ onPress: () => navigation.goBack() }, { children: _jsx(Back, {}) })), _jsxs(Text, Object.assign({ style: styles.heading }, { children: ["Weighbridge data", '\n', "details"] }))] })), _jsxs(View, Object.assign({ style: styles.navigationButtonContainer }, { children: [_jsx(TouchableOpacity, Object.assign({ style: variant === 'inbound' ? styles.focusButton : styles.idleButton, disabled: variant === 'inbound' ? true : false, onPress: handleNavigation }, { children: _jsx(Text, Object.assign({ style: variant === 'inbound'
                                    ? styles.buttonText
                                    : styles.buttonTextIdle }, { children: "Delivery inbound" })) })), _jsx(TouchableOpacity, Object.assign({ style: variant !== 'inbound' ? styles.focusButton : styles.idleButton, disabled: variant !== 'inbound' ? true : false, onPress: handleNavigation }, { children: _jsx(Text, Object.assign({ style: variant !== 'inbound'
                                    ? styles.buttonText
                                    : styles.buttonTextIdle }, { children: "Delivery outbound" })) }))] })), _jsxs(View, Object.assign({ style: styles.filterContainer }, { children: [_jsxs(View, Object.assign({ style: styles.searchContainer }, { children: [_jsx(Searching, {}), _jsx(TextInput, { style: styles.search, placeholder: "Search", placeholderTextColor: '#707371', onChangeText: text => setSearch(text), onSubmitEditing: handleSearch })] })), _jsxs(TouchableOpacity, Object.assign({ style: styles.sortby, onPress: handleToggleSort }, { children: [_jsx(Text, Object.assign({ style: styles.sortText }, { children: "Sort by" })), _jsx(Sort, {})] })), toggleSort && (_jsx(View, Object.assign({ style: styles.dropDownOptionsContainer }, { children: rangeOptions.map(option => renderDropdownOptions(option)) })))] })), _jsxs(Text, Object.assign({ style: styles.desc }, { children: ["Here's the weighbridge data for commodities", '\n', "entering the warehouse."] })), _jsx(Table, { height: height, heading: heading, data: data, commodity: 2, weight: 7, action: false }), _jsxs(View, Object.assign({ style: styles.navigationContainer }, { children: [_jsx(TouchableOpacity, Object.assign({ style: [
                                {
                                    backgroundColor: back ? '#0C447D' : '#E0E1E1',
                                },
                                styles.navButton,
                            ], disabled: !back, onPress: handlePrev }, { children: _jsx(Prev, { color: back && 'white' }) })), _jsxs(Text, Object.assign({ style: styles.navText }, { children: ["Showing ", min + 1, " to ", max, " of ", Staticdata.length] })), _jsx(TouchableOpacity, Object.assign({ style: [
                                {
                                    backgroundColor: front ? '#0C447D' : '#E0E1E1',
                                },
                                styles.navButton,
                            ], disabled: !front, onPress: handleNext }, { children: _jsx(Next, { color: !front && '#C1C4C2' }) }))] })), _jsx(Modal, Object.assign({ visible: menu, transparent: true }, { children: _jsx(HomeMenu, { variant: "owner", exitCallBack: handleMenu, navigation: navigation }) })), _jsx(Modal, Object.assign({ visible: notification, transparent: true }, { children: _jsx(HomeNotification, { exitCallBack: handleNotification, Notification: [] }) }))] })) })));
};
export default WeighbridgeDetails;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        height: height * 0.1,
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
    navigationButtonContainer: {
        flexDirection: 'row',
        width: '95%',
        height: height * 0.055,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
    },
    focusButton: {
        width: '47%',
        height: '100%',
        backgroundColor: '#0038FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    idleButton: {
        width: '47%',
        height: '100%',
        backgroundColor: '#F7F7F7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Poppins-Regular',
        color: 'black',
        fontSize: 16,
    },
    buttonTextIdle: {
        fontFamily: 'Poppins-Regular',
        color: 'black',
        fontSize: 16,
    },
    sortText: {
        color: 'black',
        fontFamily: 'NotoSerif-Regular',
        fontSize: 14,
        marginRight: 5,
    },
    dropDownOptions: { height: '10%', width: '80%', justifyContent: 'center' },
    dropDownText: {
        fontFamily: 'NotoSerif-Regular',
        color: 'black',
        fontSize: 14,
        marginRight: 8,
    },
    dropDownOptionsContainer: {
        backgroundColor: 'white',
        width: '72%',
        zIndex: 2,
        position: 'absolute',
        top: '110%',
        height: '850%',
        right: 0,
        marginRight: 10,
        paddingVertical: '1%',
        borderColor: '#989E9A',
        borderWidth: 1,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterContainer: {
        height: height * 0.06,
        width: '90%',
        marginVertical: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchContainer: {
        width: '60%',
        height: '100%',
        borderWidth: 1,
        borderColor: '#707371',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    desc: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'NotoSerif-Regular',
        marginBottom: 16,
    },
    search: {
        width: '70%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        color: '#707371',
    },
    sortby: {
        width: '30%',
        height: '100%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#707371',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    navigationContainer: {
        width: '90%',
        height: height * 0.15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navButton: {
        width: '10%',
        aspectRatio: 1,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navText: {
        flexGrow: 1,
        textAlign: 'center',
        color: 'black',
    },
});
