var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { useEffect, useState } from "react";
import { encode } from 'base-64';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Alert, Image } from "react-native";
import axios from "axios";
export default function WeightVerification() {
    const [modalVisible, setModalVisible] = useState(false);
    const [Button, setButton] = useState(false);
    const [Data, setData] = useState('');
    const [sackcount, setSackCount] = useState(Number);
    const [bagCount, setBagCount] = useState(Number);
    const data1 = () => {
        const username = 'admin1';
        const password = 'pass1';
        const credentials = encode(`${username}:${password}`);
        const apiUrl = 'https://0i40xn1b3i.execute-api.ap-south-1.amazonaws.com/dev/SacksCountingAPI';
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${credentials}`
            }
        })
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
            .then(data => {
            const sacksCounting = data['Sacks Counting'];
            console.log('Sacks Counting:', sacksCounting);
            setSackCount(sacksCounting);
        })
            .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
    };
    useEffect(() => {
        data1();
    }, []);
    const fetchData = () => __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios.get("https://backend.bharatgodam.com/api/booking/booking/6668212822b41f3764f37031");
            console.log(response.data.data.warehouse);
            setData(response.data);
            setModalVisible(true);
        }
        catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    });
    const handleBookingIdChange = (bookingId) => {
        if (bookingId.length >= 6) {
            fetchData();
        }
        else {
            setModalVisible(false);
        }
    };
    const handleLotNumChange = (LotNum) => {
        if (LotNum.length >= 1) {
            setButton(true);
        }
        else {
            setButton(false);
        }
    };
    function check() {
        if (sackcount != bagCount) {
            return (Alert.alert('not equal'));
        }
        else {
            setModalVisible(true);
        }
    }
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsx(Pressable, Object.assign({ style: styles.backArrow, onPress: () => Alert.alert("Back button pressed") }, { children: _jsx(Image, { style: { height: 30, width: 30 }, source: require('../../assets/left-arrow.png') }) })), _jsx(Text, Object.assign({ style: styles.header }, { children: "Weight Verification" })), _jsxs(ScrollView, Object.assign({ style: { width: "90%" } }, { children: [_jsx(TextInput, { style: styles.input, placeholder: "Booking ID", keyboardType: "default", onChangeText: handleBookingIdChange }), modalVisible && (_jsx(View, Object.assign({ style: styles.modalOverlay }, { children: _jsxs(View, Object.assign({ style: { flexDirection: "column", alignSelf: "flex-start" } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Customer Name " })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: Data.data.user.firstName }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Customer ID" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: Data.data.user._id }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Commodity" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: Data.data.Commodity[0].name }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Capacity" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: Data.data.warehouse.total_capacity }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Bag Size" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: Data.data.noOfBags }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Warehouse name" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: Data.data.warehouse.warehouse_name }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Warehouse ID" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: Data.data.warehouse.warehouse_id }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Warehouse location" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: Data.data.warehouse.State }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Entry date" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: Data.data.fromDate }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Entry time" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: Data.data.fromTime }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Gross weight" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: Data.data.totalWeight }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Tare weight" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: Data.data.totalWeight }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Net weight" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: Data.data.totalWeight }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Sack ID" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "WHEAT-SACK-0002" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Sack count" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: Data.data.noOfBags }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Lot size" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "1000" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Block number" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "Block 3" }))] }))] })) }))), _jsx(TextInput, { style: styles.input, placeholder: "Lot number", keyboardType: "default", onChangeText: handleLotNumChange }), _jsx(Pressable, Object.assign({ disabled: !Button, style: [
                            styles.button,
                            { backgroundColor: Button ? "#1e62ba" : "#b5b3b3" },
                        ], onPress: () => {
                            check();
                        } }, { children: _jsx(Text, Object.assign({ style: [
                                styles.buttonText,
                                { color: Button ? "#ffffff" : "#000000" },
                            ] }, { children: "Verify and send message" })) }))] }))] })));
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        paddingTop: 100,
    },
    backArrow: {
        position: "absolute",
        top: 70,
        left: 15,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 1,
        marginTop: -66,
        paddingTop: 30,
        color: "black",
    },
    input: {
        height: 50,
        marginVertical: 10,
        width: "100%",
        borderWidth: 1,
        borderColor: "#929292",
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    button: {
        paddingVertical: 15,
        width: "100%",
        alignItems: "center",
        borderRadius: 10,
        height: 58,
        marginBottom: 30
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    modalOverlay: {
        borderWidth: 0.3,
        borderColor: "black",
        width: "100%",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#eaeaea",
    },
    modalText: {
        color: "#000000",
        fontSize: 16,
        width: "50%",
        marginTop: 10,
        marginBottom: 20,
    },
    modalTextHeading: {
        color: "#000000",
        marginTop: 10,
        fontSize: 18,
    },
});
