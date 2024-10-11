import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Alert, Image } from "react-native";
//import { Ionicons } from "@expo/vector-icons";
export default function WeightVerification() {
    const [modalVisible, setModalVisible] = useState(false);
    const [Button, setButton] = useState(false);
    const handleBookingIdChange = (bookingId) => {
        if (bookingId.length >= 6) {
            setModalVisible(true);
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
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsx(Pressable, Object.assign({ style: styles.backArrow, onPress: () => Alert.alert("Back button pressed") }, { children: _jsx(Image, { style: { height: 30, width: 30 }, source: require('../../assets/left-arrow.png') }) })), _jsx(Text, Object.assign({ style: styles.header }, { children: "Weight Verification" })), _jsxs(ScrollView, Object.assign({ style: { width: "90%" } }, { children: [_jsx(TextInput, { style: styles.input, placeholder: "Booking ID", keyboardType: "default", onChangeText: handleBookingIdChange }), modalVisible && (_jsx(View, Object.assign({ style: styles.modalOverlay }, { children: _jsxs(View, Object.assign({ style: { flexDirection: "column", alignSelf: "flex-start" } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Customer Name " })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "Preshika Kumar" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Customer ID" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "ABCD123" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Commodity" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "Wheat" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Capacity" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "10 MT" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Bag Size" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "25 Kg Bag" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Warehouse name" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "BHAT" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Warehouse ID" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "WH-A2" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Warehouse location" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "Mumbai" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Entry date" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "28 Apr 2024" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Entry time" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "10:20 AM" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Gross weight" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "55 MT" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Tare weight" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "45 MT" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Net weight" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "10 MT" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Sack ID" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "WHEAT-SACK-0002" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Sack count" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "20 sacks" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Lot size" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "1000" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: "row" } }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Block number" })), _jsx(Text, Object.assign({ style: styles.modalText }, { children: "Block 3" }))] }))] })) }))), _jsx(TextInput, { style: styles.input, placeholder: "Lot number", keyboardType: "default", onChangeText: handleLotNumChange }), _jsx(Pressable, Object.assign({ disabled: !Button, style: [
                            styles.button,
                            { backgroundColor: Button ? "#1e62ba" : "#b5b3b3" },
                        ], onPress: () => Alert.alert("Verify and send message pressed") }, { children: _jsx(Text, Object.assign({ style: [
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
