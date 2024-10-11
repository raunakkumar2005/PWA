
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Dimensions, } from 'react-native';
import { useEffect, useState } from 'react';
import Table from '../../components/Table';
import HomeHeader from '../../components/HomeHeader';
import HomeMenu from '../../components/HomeMenu';
import HomeNotification from '../../components/HomeNotification';
import Sort from '../../assets/Sort';
import Searching from '../../assets/Searching';
import { ScrollView } from 'react-native';
import NavBar from '../../components/NavBar';
import Next from '../../assets/Next';
import Prev from '../../assets/Prev';
import { convertDate } from '../../utils/date';
import { Booking, authApi } from '../../service/api';
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
const Bookings = ({ route, navigation }) => {
    const { variant = 'accepted' } = route.params;
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
        'Accepted',
        'Rejected',
    ];
    let heading = [
        'Warehouse',
        'Customer name',
        'Commodity',
        'Start date',
        'End date',
        'Total weight',
        'Total amount',
        'Action',
    ];
    if (variant === 'accepted') {
        heading.pop();
        heading = ['Booking ID', ...heading];
    }
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
        navigation.navigate('Bookings', {
            variant: variant === 'accepted' ? 'requests' : 'accepted',
        });
    };
    const renderDropdownOptions = (option) => {
        return (_jsx(TouchableOpacity, Object.assign({ style: styles.dropDownOptions, onPress: () => handleSort(option) }, { children: _jsx(Text, Object.assign({ style: styles.dropDownText }, { children: option })) })));
    };
    const getData = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        let temp = yield Booking.get_all_bookings_farmer();
        if (variant === 'accepted') {
            temp = temp.filter(item => item.isAccepted);
        }
        console.log('temp-', JSON.stringify(temp));
        const tempy = [];
        for (const item of temp) {
            const fromDate = convertDate(String(item.fromDate));
            const toDate = convertDate(String(item.toDate));
            const action = item.isRejected
                ? 'Rejected'
                : item.isAccepted
                    ? 'Accepted'
                    : 'Action';
            try {
                const user = yield authApi.getUser(item.user);
            } catch (error) {
                console.log("Error fetching user");
                
            }
            
            let commodities = '';
            if (item.Commodity) {
                item.Commodity.forEach(com => commodities += com.name);
            }
            let price = item.total_price ? item.total_price : 0;
            const data = [
                item._id,
                (_a = item.warehouse) === null || _a === void 0 ? void 0 : _a.warehouse_name,
                user.firstName||"",
                commodities,
                fromDate,
                toDate,
                item.totalWeight + ' MT',
                '₹ ' + price,
                action,
                item._id,
            ];
            tempy.push(variant === 'accepted' ? data.slice(0, 9) : data.slice(1));
        }
        const max = tempy.length >= 10 ? 10 : tempy.length;
        const conditon = tempy.length >= 10;
        // console.log(tempy, 100);
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
    return (_jsxs(View, Object.assign({ style: styles.container }, {
        children: [_jsxs(ScrollView, Object.assign({ style: styles.container, contentContainerStyle: { alignItems: 'center' } }, {
            children: [_jsx(HomeHeader, { menuCallBack: handleMenu, notificationCallBack: handleNotification }), _jsx(Text, Object.assign({ style: styles.heading }, { children: "My bookings" })), _jsxs(View, Object.assign({ style: styles.navigationButtonContainer }, {
                children: [_jsx(TouchableOpacity, Object.assign({ style: variant === 'accepted' ? styles.idleButton : styles.focusButton, disabled: variant === 'accepted' ? false : true, onPress: handleNavigation }, {
                    children: _jsx(Text, Object.assign({
                        style: variant === 'accepted'
                            ? styles.buttonTextIdle
                            : styles.buttonText
                    }, { children: "Booking requests" }))
                })), _jsx(TouchableOpacity, Object.assign({ style: variant !== 'accepted' ? styles.idleButton : styles.focusButton, disabled: variant !== 'accepted' ? false : true, onPress: handleNavigation }, {
                    children: _jsx(Text, Object.assign({
                        style: variant !== 'accepted'
                            ? styles.buttonTextIdle
                            : styles.buttonText
                    }, { children: "Accepted bookings" }))
                }))]
            })), _jsxs(View, Object.assign({ style: styles.filterContainer }, { children: [_jsxs(View, Object.assign({ style: styles.searchContainer }, { children: [_jsx(Searching, {}), _jsx(TextInput, { style: styles.search, placeholder: "Search", placeholderTextColor: '#707371', onChangeText: text => setSearch(text), onSubmitEditing: handleSearch })] })), _jsxs(TouchableOpacity, Object.assign({ style: styles.sortby, onPress: handleToggleSort }, { children: [_jsx(Text, Object.assign({ style: styles.sortText }, { children: "Sort by" })), _jsx(Sort, {})] })), toggleSort && (_jsx(View, Object.assign({ style: styles.dropDownOptionsContainer }, { children: rangeOptions.map(option => renderDropdownOptions(option)) })))] })), _jsx(Table, { height: height, heading: heading, data: data, commodity: variant === 'accepted' ? 3 : 2, weight: variant === 'accepted' ? 6 : 5, action: variant === 'accepted' ? false : true }), _jsxs(View, Object.assign({ style: styles.navigationContainer }, {
                children: [_jsx(TouchableOpacity, Object.assign({
                    style: [
                        {
                            backgroundColor: back ? '#0C447D' : '#E0E1E1',
                        },
                        styles.navButton,
                    ], disabled: !back, onPress: handlePrev
                }, { children: _jsx(Prev, { color: back && 'white' }) })), _jsxs(Text, Object.assign({ style: styles.navText }, { children: ["Showing ", min + 1, " to ", max, " of ", Staticdata.length] })), _jsx(TouchableOpacity, Object.assign({
                    style: [
                        {
                            backgroundColor: front ? '#0C447D' : '#E0E1E1',
                        },
                        styles.navButton,
                    ], disabled: !front, onPress: handleNext
                }, { children: _jsx(Next, { color: !front && '#C1C4C2' }) }))]
            })), _jsx(Modal, Object.assign({ visible: menu, transparent: true }, { children: _jsx(HomeMenu, { exitCallBack: handleMenu }) })), _jsx(Modal, Object.assign({ visible: notification, transparent: true }, { children: _jsx(HomeNotification, { exitCallBack: handleNotification, Notification: [] }) }))]
        })), _jsx(NavBar, { current: "Bookings" })]
    })));
};
export default Bookings;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    heading: {
        fontFamily: 'Poppins-SemiBold',
        color: 'black',
        fontSize: 20,
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
        color: 'white',
        fontSize: 16,
    },
    buttonTextIdle: {
        fontFamily: 'Poppins-Regular',
        color: '#989E9A',
        fontSize: 16,
    },
    sortText: {
        color: '#707371',
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
         zIndex: 9000
},
    searchContainer: {
        width: '40%',
        height: '100%',
        borderWidth: 1,
        borderColor: '#707371',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
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
