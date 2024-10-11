
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import HomeMenu from '../../components/HomeMenu';
import HomeNotification from '../../components/HomeNotification';
import { useNavigation, } from '@react-navigation/native';
import HomeHeader from '../../components/HomeHeader';
import textStyles from '../../components/textStyles';
import ButtonWithAutoWidth from '../../components/ButtonWithAutoWidth';
import Plus from '../../assets/Plus';
import Dissmiss from '../../assets/Dissmiss';
import { FlatList } from 'react-native';
import Location from '../../assets/Location';
import Edit from '../../assets/Edit';
import NavBar from '../../components/NavBar';
import Layout from '../../layouts/layout';
import { useSelector } from 'react-redux';
import { warehouseApi } from '../../service/api';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Warehouse = ({ route }) => {
    const data = route.params && route.params.data ? route.params.data : [];
    const [items, setItems] = useState(data);
    const [menu, setMenu] = useState(false);
    const [notification, setNotification] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [kycStatus, setKycStatus] = useState(null);
    const [booking, setBooking] = useState(null);
    const role = useSelector((state) => state.user.role);
    //console.log(role);
    useEffect(() => {
        const getData = () => __awaiter(void 0, void 0, void 0, function* () {
            let temp = null;
            if (role === 'manager') {
                temp = yield warehouseApi.getAllWarehousesForManager();
            }
            else {
                temp = yield warehouseApi.getAllWarehousesForOwner();
            }
            setBooking(temp);
        });
        getData();
    }, [booking]);
    const handleMenu = () => {
        setMenu(!menu);
    };
    const handleNotification = () => {
        setNotification(!notification);
    };
    const navigation = useNavigation();
    return (_jsxs(View, Object.assign({ style: { flex: 1, backgroundColor: '#FFFFFF' } }, { children: [_jsxs(Layout, { children: [_jsx(HomeHeader, { menuCallBack: handleMenu, notificationCallBack: handleNotification }), booking == null || (booking === null || booking === void 0 ? void 0 : booking.length) === 0 ? (_jsx(View, Object.assign({ style: { marginHorizontal: 16 } }, { children: _jsxs(View, Object.assign({ style: {
                                backgroundColor: '#F7F7F7',
                                width: 328,
                                padding: 16,
                                borderRadius: 8,
                                alignItems: 'center',
                                gap: 16,
                            } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB4, { width: 243, textAlign: 'center' }] }, { children: "Completing your profile with warehouse information helps users find and book with you." })), _jsx(View, Object.assign({ style: { width: 194, height: 48 } }, { children: _jsx(ButtonWithAutoWidth, { role: "iButton", text: "  Add warehouse", txtcolor: "#FFFFFF", bgcolor: "#0C447D", borderColor: "#0C447D", component: () => _jsx(Plus, { color: '#fff', props: undefined }), onPress: () => {
                                            // if kyc is false we will add kyc
                                            if (kycStatus === true) {
                                                navigation.navigate('AddWarehouse', { data: data });
                                            }
                                            else {
                                                setIsVisible(true);
                                            }
                                        } }) }))] })) }))) : (_jsxs(View, Object.assign({ style: { flex: 1 } }, { children: [_jsxs(View, Object.assign({ style: { gap: 4, marginBottom: 24 } }, { children: [_jsx(Text, Object.assign({ style: [
                                            textStyles.headingH6,
                                            { textAlign: 'center', color: '#1C1C1C' },
                                        ] }, { children: "Warehouses" })), role === 'manager' ? null : _jsxs(TouchableOpacity, Object.assign({ style: {
                                            gap: 4,
                                            padding: 4,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }, onPress: () => {
                                            navigation.navigate('AddWarehouse', { data: data });
                                        } }, { children: [_jsx(Plus, { color: '#0C447D', props: undefined }), _jsx(Text, Object.assign({ style: [textStyles.buttonTextUnderline, {}] }, { children: "Add warehouse" }))] }))] })), _jsx(FlatList, { scrollEnabled: true, data: booking, keyExtractor: (item, index) => index.toString(), renderItem: ({ item }) => (_jsxs(View, Object.assign({ style: { alignItems: 'center' } }, { children: [_jsxs(View, Object.assign({ style: { alignItems: 'center' } }, { children: [_jsx(View, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { color: 'black' }] }, { children: item.warehouse_name })) }), _jsxs(View, Object.assign({ style: { flexDirection: 'row', gap: 8 } }, { children: [_jsx(View, Object.assign({ style: { padding: 5 } }, { children: _jsx(Location, {}) })), _jsxs(Text, Object.assign({ style: [
                                                                textStyles.bodyB3,
                                                                { color: 'black', width: 82, textAlign: 'center' },
                                                            ] }, { children: [item.locality_area, " ", item.landmark, " ", item.city, ' ', item.State] }))] }))] })), _jsxs(View, Object.assign({ style: { gap: 24, flexDirection: 'row', marginTop: 24 } }, { children: [_jsxs(View, Object.assign({ style: {
                                                        borderRadius: 8,
                                                        gap: 8,
                                                        paddingHorizontal: 12,
                                                        paddingVertical: 8,
                                                        backgroundColor: '#FFE4F2',
                                                        alignItems: 'center',
                                                    } }, { children: [_jsx(Text, Object.assign({ style: [
                                                                textStyles.bodyTable,
                                                                { color: '#1C1C1C', width: 70 },
                                                            ] }, { children: 'Total capacity' })), _jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: '#1C1C1C' }] }, { children: item.total_capacity }))] })), _jsxs(View, Object.assign({ style: {
                                                        borderRadius: 8,
                                                        gap: 8,
                                                        paddingHorizontal: 12,
                                                        paddingVertical: 8,
                                                        backgroundColor: '#C8FFF5',
                                                        alignItems: 'center',
                                                    } }, { children: [_jsx(Text, Object.assign({ style: [
                                                                textStyles.bodyTable,
                                                                { color: '#1C1C1C', width: 65 },
                                                            ] }, { children: "Filled capacity" })), _jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: '#1C1C1C' }] }, { children: item.filled_capacity }))] })), _jsxs(View, Object.assign({ style: {
                                                        borderRadius: 8,
                                                        gap: 8,
                                                        paddingHorizontal: 12,
                                                        paddingVertical: 8,
                                                        backgroundColor: '#FFE3AC',
                                                        alignItems: 'center',
                                                    } }, { children: [_jsx(Text, Object.assign({ style: [
                                                                textStyles.bodyTable,
                                                                { color: '#1C1C1C', width: 78 },
                                                            ] }, { children: "Remaining capacity" })), _jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: '#1C1C1C' }] }, { children: item.remainingCapacity }))] }))] })), _jsxs(View, Object.assign({ style: {
                                                flexDirection: 'row',
                                                gap: 24,
                                                marginHorizontal: 16,
                                                marginTop: 16,
                                            } }, { children: [_jsx(View, Object.assign({ style: { width: 190 } }, { children: _jsx(ButtonWithAutoWidth, { role: "iButton", text: "View details", borderColor: "#07294B", txtcolor: "#07294B", onPress: () => navigation.navigate('ViewDetails', {
                                                            warehouse: item
                                                        }) }) })), _jsx(View, Object.assign({ style: { width: '46%' } }, { children: _jsx(ButtonWithAutoWidth, { role: "iButton", text: "  Edit details", borderColor: "#07294B", txtcolor: "#07294B", onPress: () => {
                                                            navigation.navigate('WarehouseDetailOwner', {
                                                                warehouse: item
                                                            });
                                                        }, component: () => _jsx(Edit, {}) }) }))] })), _jsx(View, Object.assign({ style: { width: '46%', marginTop: 24 } }, { children: _jsx(ButtonWithAutoWidth, { role: "iButton", text: "Book warehouse", borderColor: "#0C447D", bgcolor: "#0C447D", txtcolor: "#FFFFFF", onPress: () => {
                                                    navigation.navigate('WOBookWarehouse', {
                                                        warehouse: item
                                                    });
                                                } }) })), _jsx(View, { style: {
                                                borderBottomWidth: 1,
                                                width: 328,
                                                borderColor: '#C1C4C2',
                                                marginVertical: 32,
                                                marginHorizontal: 16,
                                            } })] }))) })] }))), _jsxs(Modal, Object.assign({ animationType: "fade", transparent: true, visible: isVisible, onRequestClose: () => setIsVisible(false) }, { children: [_jsx(View, { style: styles.modalOverlay }), _jsxs(View, Object.assign({ style: styles.modalContainer }, { children: [_jsx(TouchableOpacity, Object.assign({ onPress: () => setIsVisible(false), style: styles.DissmissBotton }, { children: _jsx(Dissmiss, {}) })), _jsx(View, Object.assign({ style: styles.optionPosition }, { children: _jsxs(View, Object.assign({ style: styles.modalTitle }, { children: [_jsxs(Text, Object.assign({ style: [textStyles.headingH7, styles.modalText] }, { children: ["Complete your", '\n', "KYC verification to add warehouses"] })), _jsxs(View, Object.assign({ style: styles.buttonRow }, { children: [_jsx(View, Object.assign({ style: styles.buttonHalf }, { children: _jsx(ButtonWithAutoWidth, { txtcolor: "#07294B", borderColor: "#07294B", text: "Back", role: "iButton", onPress: () => setIsVisible(false) }) })), _jsx(View, Object.assign({ style: styles.buttonHalf }, { children: _jsx(ButtonWithAutoWidth, { role: "iButton", text: "Verify KYC", bgcolor: "#0C447D", borderColor: "#0C447D", txtcolor: "#FFFFFF", onPress: () => {
                                                                    navigation.navigate('KycOwner', {});
                                                                    setIsVisible(false);
                                                                } }) }))] }))] })) }))] }))] })), _jsx(Modal, Object.assign({ visible: menu, transparent: true }, { children: _jsx(HomeMenu, { exitCallBack: handleMenu }) })), _jsx(Modal, Object.assign({ visible: notification, transparent: true }, { children: _jsx(HomeNotification, { exitCallBack: handleNotification, Notification: [] }) }))] }), _jsx(NavBar, { current: "Warehouse" })] })));
};
export default Warehouse;
const styles = StyleSheet.create({
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
        borderRadius: 8,
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
    },
    modalText: {
        color: '#1C1C1C',
        textAlign: 'center',
    },
    buttonRow: {
        width: '100%',
        marginHorizontal: '5%',
        marginVertical: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32,
    },
    buttonHalf: {
        flexDirection: 'row',
        width: '48%',
    },
});
