
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Dimensions, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { useEffect, useState } from 'react';
import HomeHeader from '../../components/HomeHeader';
import HomeMenu from '../../components/HomeMenu';
import HomeNotification from '../../components/HomeNotification';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInputText';
import CustomImageCarousal from '../../components/CustomImageCarousalLandscape';
import { useNavigation } from '@react-navigation/native';
import textStyles from '../../components/textStyles';
import Search from '../../assets/Search';
import Calender from '../../assets/Calender';
import Weight from '../../assets/Weight';
import Commodity from '../../assets/Commodity';
import Bag from '../../assets/Bag';
import NavBar from '../../components/NavBar';
import { warehouseApi } from '../../service/api';
import getAddressFromLocation from '../../utils/Location';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const today = new Date().toISOString().split('T')[0];
const { width, height } = Dimensions.get('window');
const SearchWarehouse = () => {
    const [addr, setAddr] = useState("");
    const [warehouse, setWarehouse] = useState(null);
    const [isClickedCommodity, setIsClickedCommodity] = useState(false);
    const [isClickedUnit, setIsClickedUnit] = useState(false);
    const [isClickedBagsize, setIsClickedBagsize] = useState(false);
    const [showCalender, setshowCalender] = useState(false);
    const [ModalType, setModalType] = useState('');
    const [SelectedCommodity, setSelectedCommodity] = useState('');
    const [SelectedUnit, setSelectedUnit] = useState('');
    const [SelectedBagsize, setSelectedBagsize] = useState('');
    const [startDate, setStartDate] = useState({ dateString: '2022-01-01' });
    const [endDate, setEndDate] = useState({ dateString: '2024-12-01' });
    const [weight, setweight] = useState("");
    const [menu, setMenu] = useState(false);
    const [notification, setNotification] = useState(false);
    const [allFieldsFilled, setAllFieldsFilled] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    };
    const handleNotification = () => {
        setNotification(!notification);
    };
    const GetNoOfBags = (bagsize, weight) => {
        const Bag = parseInt(bagsize.split(" ")[0]);
        const Weight = parseInt(weight);
        const Bags = Weight / Bag;
        if (SelectedUnit == 'MT') {
            return (Bags * 1000).toString();
        }
        else {
            return (Bags * 100).toString();
        }
    };
    const handleSearchWarehouses = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = {
            SelectedBagsize,
            SelectedCommodity,
            SelectedUnit,
            endDate,
            startDate,
            weight: weight || "",
            numberOfBags: parseInt(GetNoOfBags(SelectedBagsize, weight))
        };
        navigation.navigate('SearchResult', { warehouses: warehouse, addr: `${addr.city}, ${addr.State}`, Bookingdata: data });
    });
    const navigation = useNavigation();
    const explore = [
        { id: 1, color: '#C8FFF5' },
        { id: 2, color: '#FFE4F2' },
        { id: 3, color: '#FFE3AC' },
    ];
    const Commodities = [
        { commodity: 'Bajra', code: 'BJ1', iso: 'BJF1' },
        { commodity: 'Wheat', code: 'WH1', iso: 'WHF1' },
        { commodity: 'Ajwain', code: 'AJ1', iso: 'AJF1' },
        { commodity: 'Rice', code: 'RC1', iso: 'RCF1' },
        { commodity: 'Jowar', code: 'JW1', iso: 'JWF1' },
        { commodity: 'Bajra', code: 'BJ1', iso: 'BJF1' },
        { commodity: 'Wheat', code: 'WH1', iso: 'WHF1' },
        { commodity: 'Ajwain', code: 'AJ1', iso: 'AJF1' },
        { commodity: 'Rice', code: 'RC1', iso: 'RCF1' },
        { commodity: 'Jowar', code: 'JW1', iso: 'JWF1' },
    ];
    const Unit = [{ unit: 'MT' }, { unit: 'QT' }];
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
    useEffect(() => {
        const callback = (data) => __awaiter(void 0, void 0, void 0, function* () {
            setAddr(data);
            console.log(data, 113);
            // const temp = await warehouseApi.searchWarehouses(addr);
            // setWarehouse(temp);
        });
        getAddressFromLocation(callback);
    }, []);
    useEffect(() => {
        setAllFieldsFilled(SelectedCommodity !== '' &&
            SelectedUnit !== '' &&
            SelectedBagsize !== '' &&
            startDate !== null &&
            endDate !== null &&
            weight !== '');
    }, [SelectedCommodity, SelectedUnit, SelectedBagsize, startDate, endDate, weight]);
    useEffect(() => {
        if (addr) {
            const searchWarehouses = () => __awaiter(void 0, void 0, void 0, function* () {
                const temp = yield warehouseApi.searchWarehouses({
                    city: addr.city||"",
                    commodity_name: SelectedCommodity
                });
                setWarehouse(temp);
            });
            searchWarehouses();
        }
    }, [addr, SelectedCommodity]);
    return (_jsxs(View, Object.assign({ style: styles.container }, {
        children: [_jsx(HomeHeader, { menuCallBack: handleMenu, notificationCallBack: handleNotification }), _jsx(ScrollView, Object.assign({ scrollEnabled: !isClickedCommodity }, {
            children: _jsx(View, Object.assign({ style: styles.content }, {
                children: _jsxs(View, Object.assign({ style: styles.SearchContainer }, {
                    children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black', left: -9 }] }, { children: "Look for the available warehouses in 30 km radius" })), _jsx(View, Object.assign({
                        style: {
                            width: '100%',
                            borderWidth: 0.5,
                            borderRadius: 8,
                            height: '9%',
                            justifyContent: 'center',
                            padding: -9,
                        }
                    }, { children: _jsx(CustomInput, { PlaceHolder: addr ? `${addr.city}, ${addr.State} ` : "Fetching data", readonly: true, component: () => (_jsx(View, Object.assign({ style: { justifyContent: 'center', marginLeft: 15 } }, { children: _jsx(Search, { color: '#545554', props: undefined }) }))) }) })), _jsxs(View, Object.assign({
                        style: {
                            width: '100%',
                            height: '9%',
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
                                alignItems: 'center',
                            }
                        }, {
                            children: [_jsx(View, Object.assign({
                                style: {
                                    justifyContent: 'center',
                                    marginLeft: 14,
                                    marginRight: 9.5,
                                }
                            }, { children: _jsx(Calender, {}) })), _jsxs(View, {
                                children: [startDate == null ? null : (_jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Start Date" }))), _jsx(Text, Object.assign({
                                    style: startDate == null
                                        ? textStyles.bodyB3
                                        : [textStyles.headingH8, { color: 'black' }]
                                }, { children: startDate == null ? 'Start Date' : startDate.dateString }))]
                            })]
                        })), _jsxs(TouchableOpacity, Object.assign({
                            onPress: handlePressedEndDate, style: {
                                width: '48%',
                                borderWidth: 0.5,
                                height: '100%',
                                borderRadius: 8,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }
                        }, {
                            children: [_jsx(View, Object.assign({
                                style: {
                                    justifyContent: 'center',
                                    marginLeft: 14,
                                    marginRight: 9.5,
                                }
                            }, { children: _jsx(Calender, {}) })), _jsxs(View, {
                                children: [endDate == null ? null : (_jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "End date" }))), _jsx(Text, Object.assign({
                                    style: endDate == null
                                        ? textStyles.bodyB3
                                        : [textStyles.headingH8, { color: 'black' }]
                                }, { children: endDate == null ? 'End date' : endDate.dateString }))]
                            })]
                        }))]
                    })), showCalender ? (_jsx(View, { style: styles.calender })) : (_jsx(_Fragment, {})), _jsxs(TouchableOpacity, Object.assign({
                        style: {
                            borderWidth: 0.5,
                            width: '100%',
                            borderRadius: 8,
                            height: '9%',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }, onPress: () => {
                            setIsClickedCommodity(!isClickedCommodity)
                            setIsClickedUnit(false)
                            setIsClickedBagsize(false);
                        }
                    }, {
                        children: [_jsx(View, Object.assign({
                            style: {
                                justifyContent: 'center',
                                marginLeft: 14,
                                marginRight: 9.5,
                            }
                        }, { children: _jsx(Commodity, {}) })), _jsxs(View, {
                            children: [SelectedCommodity == '' ? null : (_jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Commodity" }))), _jsx(Text, Object.assign({
                                style: SelectedCommodity == ''
                                    ? textStyles.bodyB3
                                    : [textStyles.headingH8, { color: 'black' }]
                            }, { children: SelectedCommodity == '' ? 'Commodity' : SelectedCommodity }))]
                        })]
                    })), isClickedCommodity ? (_jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.commodityScrollView }, {
                        children: Commodities.map((item, index) => (_jsx(TouchableOpacity, Object.assign({
                            style: {
                                width: '100%',
                                borderRadius: 8,
                                height: 50,
                                justifyContent: 'center',
                            }, onPress: () => {
                                setSelectedCommodity(item.commodity);
                                setIsClickedCommodity(!isClickedCommodity);
                            }
                        }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20, color: "#696969" } }, { children: item.commodity })) }), index)))
                    }))) : (_jsx(_Fragment, {})), _jsxs(View, Object.assign({
                        style: {
                            width: '100%',
                            height: '9%',
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
                        }, { children: [_jsx(View, Object.assign({ style: { justifyContent: 'center', marginLeft: 14 } }, { children: _jsx(Weight, {}) })), _jsx(CustomInput, { PlaceHolder: "Weight", onTextChange: (value) => setweight(value) })] })), _jsxs(TouchableOpacity, Object.assign({
                            style: {
                                width: '35%',
                                borderWidth: 0.5,
                                height: '100%',
                                borderRadius: 8,
                                paddingLeft: 12,
                                justifyContent: 'center',
                            }, onPress: () => setIsClickedUnit(!isClickedUnit)
                        }, {
                            children: [SelectedUnit == '' ? null : (_jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Unit" }))), _jsx(Text, Object.assign({
                                style: SelectedUnit == ''
                                    ? textStyles.bodyB3
                                    : [textStyles.headingH8, { color: 'black' }]
                            }, { children: SelectedUnit == '' ? 'Unit' : SelectedUnit }))]
                        }))]
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
                        }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20, color: "#696969" } }, { children: item.unit })) }), index)))
                    }))) : (_jsx(_Fragment, {})), _jsxs(View, Object.assign({
                        style: {
                            width: '100%',
                            height: '9%',
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
                        }, { children: [_jsx(View, Object.assign({ style: { justifyContent: 'center', marginLeft: 14 } }, { children: _jsx(Bag, {}) })), _jsx(CustomInput, { PlaceHolder: "No. of bags", txt: weight && SelectedUnit && SelectedBagsize ? GetNoOfBags(SelectedBagsize, weight) : '' })] })), _jsxs(TouchableOpacity, Object.assign({
                            style: {
                                width: '35%',
                                borderWidth: 0.5,
                                height: '100%',
                                borderRadius: 8,
                                paddingLeft: 12,
                                justifyContent: 'center',
                            }, onPress: () => setIsClickedBagsize(!isClickedBagsize)
                        }, {
                            children: [SelectedBagsize == '' ? null : (_jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Bag size" }))), _jsx(Text, Object.assign({
                                style: SelectedBagsize == ''
                                    ? textStyles.bodyB3
                                    : [textStyles.headingH8, { color: 'black' }]
                            }, { children: SelectedBagsize == '' ? 'Bag size' : SelectedBagsize }))]
                        }))]
                    })), isClickedBagsize ? (_jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.BagSizeScrollView }, {
                        children: BagSize.map((item, index) => (_jsx(TouchableOpacity, Object.assign({
                            style: {
                                width: '100%',
                                borderRadius: 8,
                                height: 31,
                                marginVertical: 9,
                                justifyContent: 'center',
                            }, onPress: () => {
                                setSelectedBagsize(item.BagSize);
                                setIsClickedBagsize(!isClickedBagsize);
                            }
                        }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20, color: "#696969" } }, { children: item.BagSize })) }), index)))
                    }))) : (_jsx(_Fragment, {})), _jsx(CustomButton, { role: "iButton", disabled: !allFieldsFilled, text: "Search", txtcolor: "#FFFFFF", bgcolor: "#0C447D", borderColor: "#0C447D", onPress: handleSearchWarehouses }), _jsxs(View, Object.assign({ style: styles.ExploreContainer }, {
                        children: [_jsx(View, Object.assign({
                            style: {
                                width: '100%',
                                height: '12%',
                                marginLeft: 17,
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                            }
                        }, {
                            children: _jsx(Text, Object.assign({
                                style: {
                                    fontWeight: '600',
                                    fontSize: 20,
                                    lineHeight: 24,
                                    color: '#1C1C1C',
                                }
                            }, { children: "Explore our other services" }))
                        })), _jsx(CustomImageCarousal, { data: explore, autoPlay: false, pagination: true })]
                    }))]
                }))
            }))
        })), _jsx(NavBar, { current: "Warehouse" }), _jsx(Modal, Object.assign({ visible: menu, transparent: true }, { children: _jsx(HomeMenu, { exitCallBack: handleMenu }) })), _jsx(Modal, Object.assign({ visible: notification, transparent: true }, { children: _jsx(HomeNotification, { exitCallBack: handleNotification, Notification: [] }) }))]
    })));
};
export default SearchWarehouse;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    content: {
        margin: '4.5%',
        flex: 1,
        width: '91.5%',
        marginBottom: '30%',
        // backgroundColor: 'blue',
        justifyContent: 'space-between',
    },
    SearchContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '110%',
        gap: 16,
        // backgroundColor: 'purple'
    },
    ExploreContainer: {
        width: '110%',
        height: '42%',
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
        top: '32%',
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
        top: '40%',
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
        top: '49%',
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
