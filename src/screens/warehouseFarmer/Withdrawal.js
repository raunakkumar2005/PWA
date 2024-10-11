
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, } from 'react-native';
import { useEffect, useState } from 'react';
import Back from '../../assets/Back';
import Crop from '../../assets/Crop';
import LeftArrow from '../../assets/LeftArrow';
import { GradeAndDeposit } from '../../service/api';
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
const height = Dimensions.get('window').height;
const Withdrawal = ({ navigation }) => {
    const [data, setData] = useState([]);
    const renderItem = (data) => {
        return (_jsxs(TouchableOpacity, Object.assign({ style: styles.withdrawal, onPress: () => handleNavigation(data) }, { children: [_jsx(View, Object.assign({ style: styles.withdrawalLeft }, { children: _jsx(Crop, {}) })), _jsxs(View, Object.assign({ style: styles.withdrawalCenter }, { children: [_jsx(Text, Object.assign({ style: styles.id }, { children: data.bookingId._id })), _jsx(Text, Object.assign({ style: styles.warehouseValues }, { children: data.warehouseName })), _jsxs(View, Object.assign({ style: styles.commodityContainer }, { children: [_jsxs(Text, Object.assign({ style: styles.warehouseValues }, { children: [data.bookingId.Commodity[0].name, ' '] })), _jsx(View, { style: styles.dot }), _jsxs(Text, Object.assign({ style: styles.warehouseValues }, { children: [' ', data.totalWeight, " MT"] }))] }))] })), _jsx(View, Object.assign({ style: styles.withdrawalRight }, { children: _jsx(LeftArrow, {}) }))] })));
    };
    const handleNavigation = (data) => {
        navigation.navigate('WithdrawalData', {
            data: [
                data.warehouseName,
                data.bookingId.Commodity[0].name,
                convertDate(data.bookingId.fromDate),
                convertDate(data.bookingId.toDate),
                data.bookingId.totalWeight + 'MT',
                data.bookingId.totalWeight + 'MT',
                data.bookingId.noOfBags,
                data.bookingId.bagSize,
            ],
            payload: {
                driverName: "TN-12-9955",
                truckNumber: "Riyaz Khan",
                commodity: data.bookingId.Commodity.map((item) => ({ itemName: item.name, quantity: item.totalWeight })),
                totalBags: data.noOfBags
            },
            params: {
                warehouse_id: data.bookingId.warehouse,
                booking_id: data.bookingId._id,
            },
        });
    };
    useEffect(() => {
        const getData = () => __awaiter(void 0, void 0, void 0, function* () {
            const temp = yield GradeAndDeposit.get_deposit_farmer();
            console.log(temp[0], 19);
            setData(temp);
        });
        getData();
    }, []);
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsxs(View, Object.assign({ style: styles.header }, { children: [_jsx(TouchableOpacity, Object.assign({ onPress: () => navigation.goBack() }, { children: _jsx(Back, {}) })), _jsx(Text, Object.assign({ style: styles.heading }, { children: "Withdrawal" }))] })), _jsx(Text, Object.assign({ style: styles.desc }, { children: "These IDs are scheduled for withdrawal" })), _jsx(FlatList, { data: data, renderItem: ({ item }) => renderItem(item) })] })));
};
export default Withdrawal;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        height: '10%',
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
    desc: {
        fontFamily: 'NotoSerif-Regular',
        fontSize: 14,
        color: 'black',
        paddingHorizontal: '5%',
    },
    withdrawal: {
        backgroundColor: '#F6F5EB',
        width: '90%',
        height: height * 0.15,
        padding: '5%',
        alignSelf: 'center',
        flexDirection: 'row',
        borderColor: '#E0E1E1',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 14,
    },
    withdrawalLeft: { flex: 2.5 },
    withdrawalCenter: { flex: 6.5 },
    withdrawalRight: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    commodityContainer: { flexDirection: 'row' },
    dot: {
        width: 4,
        height: 4,
        backgroundColor: '#C1C4C2',
        borderRadius: 100,
        alignSelf: 'center',
    },
    id: {
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',
        color: 'black',
    },
    warehouseValues: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: 'black',
    },
});
