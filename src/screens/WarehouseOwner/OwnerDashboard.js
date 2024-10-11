import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { View, Text, Image, StyleSheet, TextInput, ScrollView, Pressable } from 'react-native';
const commoditiesData = [
    { name: 'Barley', weight: '1850 MT' },
    { name: 'Corn', weight: '2000 MT' },
    { name: 'Chickpea', weight: '1500 MT' },
    { name: 'Black pepper', weight: '1200 MT' },
    { name: 'Turmeric', weight: '1750 MT' },
    { name: 'Wheat', weight: '1900 MT' },
    { name: 'Rice', weight: '2100 MT' },
];
const statesData = [
    { name: 'Madurai', farmers: '2', fp: '5', Trader: '5' },
    { name: 'Chennai', farmers: '2', fp: '5', Trader: '5' },
    { name: 'Trichy', farmers: '2', fp: '5', Trader: '5' },
    { name: 'Coimbatore', farmers: '2', fp: '5', Trader: '5' },
    { name: 'Tirunelveli', farmers: '2', fp: '5', Trader: '5' },
    { name: 'Visakhapatn', farmers: '2', fp: '5', Trader: '5' },
    { name: 'Sattenapalle', farmers: '2', fp: '5', Trader: '5' },
    { name: 'Mirpur', farmers: '2', fp: '5', Trader: '5' },
    { name: 'Siliguri', farmers: '2', fp: '5', Trader: '5' },
    { name: 'Pararpar', farmers: '2', fp: '5', Trader: '5' },
];
export default function WarehouseOwner() {
    return (_jsx(ScrollView, Object.assign({ style: { flex: 1, backgroundColor: '#F0F0F0' }, persistentScrollbar: true }, { children: _jsxs(View, Object.assign({ style: { margin: 20 } }, { children: [_jsxs(View, Object.assign({ style: styles.header }, { children: [_jsx(Image, { style: styles.headerImage, source: require('../../assets/menu.png') }), _jsx(Image, { style: styles.headerImage1, source: require('../../assets/bharatGodam.png') }), _jsx(Image, { style: styles.headerImage, source: require('../../assets/bell.png') })] })), _jsxs(View, Object.assign({ style: styles.dashboard }, { children: [_jsx(Text, Object.assign({ style: styles.dashboardTitle }, { children: "Dashboard" })), _jsx(Text, Object.assign({ style: styles.dashboardSubtitle }, { children: "Last 3 months" })), _jsx(Image, { style: styles.inputImage, source: require('../../assets/drop-down.png') })] })), _jsxs(View, Object.assign({ style: { marginTop: 20 } }, { children: [_jsx(Text, Object.assign({ style: styles.overallPerformanceText }, { children: "Overall performance of all warehouses" })), _jsxs(View, Object.assign({ style: styles.inputContainer }, { children: [_jsx(TextInput, { placeholder: "Enter warehouse number", style: styles.textInput }), _jsx(Pressable, { children: _jsx(View, Object.assign({ style: { backgroundColor: '#145DA0', borderRadius: 40, marginTop: 23 } }, { children: _jsx(Image, { source: require('../../assets/right-chevron.png'), style: styles.rightArrow }) })) })] })), _jsxs(ScrollView, Object.assign({ style: { marginTop: 25, backgroundColor: 'white', paddingRight: 10, }, contentContainerStyle: styles.scrollViewContent, persistentScrollbar: true }, { children: [_jsx(Text, Object.assign({ style: styles.warehousesTitle }, { children: "Warehouses" })), _jsxs(View, Object.assign({ style: styles.warehouseContainer }, { children: [_jsx(Text, Object.assign({ style: styles.warehouseText1 }, { children: "BHAT warehouse - 12345678" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: styles.warehouseText }, { children: "Total capacity - 1400 MT" })), _jsx(Image, { style: styles.inputImage, source: require('../../assets/right-arrow-angle.png') })] })), _jsx(Text, Object.assign({ style: styles.availableCapacityText }, { children: "Available capacity - 400 MT" })), _jsx(View, { style: styles.separator })] })), _jsxs(View, Object.assign({ style: styles.warehouseContainer }, { children: [_jsx(Text, Object.assign({ style: styles.warehouseText2 }, { children: "Phoenix mall kurla - 12345678" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: styles.warehouseText }, { children: "Total capacity - 1400 MT" })), _jsx(Image, { style: styles.inputImage, source: require('../../assets/right-arrow-angle.png') })] })), _jsx(Text, Object.assign({ style: styles.availableCapacityText }, { children: "Available capacity - 400 MT" })), _jsx(View, { style: styles.separator })] })), _jsxs(View, Object.assign({ style: styles.warehouseContainer }, { children: [_jsx(Text, Object.assign({ style: styles.warehouseText2 }, { children: "Janco warehouse - 89345555" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: styles.warehouseText }, { children: "Total capacity - 1400 MT" })), _jsx(Image, { style: styles.inputImage, source: require('../../assets/right-arrow-angle.png') })] })), _jsx(Text, Object.assign({ style: styles.availableCapacityText }, { children: "Available capacity - 400 MT" })), _jsx(View, { style: styles.separator })] })), _jsxs(View, Object.assign({ style: styles.warehouseContainer }, { children: [_jsx(Text, Object.assign({ style: styles.warehouseText2 }, { children: "Janco warehouse - 89345555" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: styles.warehouseText }, { children: "Total capacity - 1400 MT" })), _jsx(Image, { style: styles.inputImage, source: require('../../assets/right-arrow-angle.png') })] })), _jsx(Text, Object.assign({ style: styles.availableCapacityText }, { children: "Available capacity - 400 MT" })), _jsx(View, { style: styles.separator })] })), _jsxs(View, Object.assign({ style: styles.warehouseContainer }, { children: [_jsx(Text, Object.assign({ style: styles.warehouseText2 }, { children: "Janco warehouse - 89345555" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: styles.warehouseText }, { children: "Total capacity - 1400 MT" })), _jsx(Image, { style: styles.inputImage, source: require('../../assets/right-arrow-angle.png') })] })), _jsx(Text, Object.assign({ style: styles.availableCapacityText }, { children: "Available capacity - 400 MT" })), _jsx(View, { style: styles.separator })] })), _jsxs(View, Object.assign({ style: styles.warehouseContainer }, { children: [_jsx(Text, Object.assign({ style: styles.warehouseText2 }, { children: "Janco warehouse - 89345555" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: styles.warehouseText }, { children: "Total capacity - 1400 MT" })), _jsx(Image, { style: styles.inputImage, source: require('../../assets/right-arrow-angle.png') })] })), _jsx(Text, Object.assign({ style: styles.availableCapacityText }, { children: "Available capacity - 400 MT" })), _jsx(View, { style: styles.separator })] })), _jsxs(View, Object.assign({ style: styles.warehouseContainer }, { children: [_jsx(Text, Object.assign({ style: styles.warehouseText2 }, { children: "Janco warehouse - 89345555" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: styles.warehouseText }, { children: "Total capacity - 1400 MT" })), _jsx(Image, { style: styles.inputImage, source: require('../../assets/right-arrow-angle.png') })] })), _jsx(Text, Object.assign({ style: styles.availableCapacityText }, { children: "Available capacity - 400 MT" })), _jsx(View, { style: styles.separator })] }))] })), _jsxs(View, Object.assign({ style: { backgroundColor: 'white', marginTop: 30, borderRadius: 10 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 19, fontWeight: 'bold', color: 'black', paddingTop: 40, paddingBottom: 35, marginLeft: 20 } }, { children: "Errors Detected" })), _jsxs(View, Object.assign({ style: {
                                        flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FADCD9', marginBottom: 20, padding: 25,
                                        borderRadius: 20, marginLeft: 20, marginRight: 20
                                    } }, { children: [_jsxs(View, { children: [_jsx(Text, Object.assign({ style: { color: 'black', fontSize: 19, fontWeight: '500', } }, { children: "4 errors" })), _jsx(Text, Object.assign({ style: { color: 'black', fontSize: 16, fontWeight: '500', } }, { children: "during counting" }))] }), _jsx(Pressable, { children: _jsx(View, Object.assign({ style: { backgroundColor: '#145DA0', borderRadius: 40 } }, { children: _jsx(Image, { source: require('../../assets/right-chevron.png'), style: styles.rightArrow }) })) })] })), _jsxs(View, Object.assign({ style: {
                                        flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FADCD9', marginBottom: 20, padding: 25,
                                        borderRadius: 20, marginLeft: 20, marginRight: 20
                                    } }, { children: [_jsxs(View, { children: [_jsx(Text, Object.assign({ style: { color: 'black', fontSize: 19, fontWeight: '500', } }, { children: "7 errors" })), _jsx(Text, Object.assign({ style: { color: 'black', fontSize: 16, fontWeight: '500', } }, { children: "during weighing" }))] }), _jsx(Pressable, { children: _jsx(View, Object.assign({ style: { backgroundColor: '#145DA0', borderRadius: 40 } }, { children: _jsx(Image, { source: require('../../assets/right-chevron.png'), style: styles.rightArrow }) })) })] }))] })), _jsxs(View, Object.assign({ style: styles.container }, { children: [_jsx(Text, Object.assign({ style: styles.title }, { children: "Commodities" })), _jsxs(View, Object.assign({ style: styles.header }, { children: [_jsx(Text, Object.assign({ style: styles.headerText }, { children: "Commodity" })), _jsx(Text, Object.assign({ style: styles.headerText }, { children: "Weight" }))] })), commoditiesData.map((commodity, index) => (_jsxs(View, { children: [_jsxs(View, Object.assign({ style: styles.row }, { children: [_jsx(Text, Object.assign({ style: styles.rowText }, { children: commodity.name })), _jsx(Text, Object.assign({ style: styles.rowText }, { children: commodity.weight }))] })), index < commoditiesData.length - 1 && _jsx(View, { style: styles.separator })] }, index)))] })), _jsxs(View, Object.assign({ style: { backgroundColor: 'white', marginTop: 30, borderRadius: 10, padding: 20, paddingBottom: 40 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 25, fontWeight: 'bold', color: 'black', paddingTop: 20, paddingBottom: 20 } }, { children: "Post harvest loan" })), _jsx(View, Object.assign({ style: { marginHorizontal: -16, } }, { children: _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between', paddingRight: 30 } }, { children: [_jsxs(View, Object.assign({ style: { padding: 30, backgroundColor: '#EFDCF9', borderRadius: 10, paddingHorizontal: 30, alignItems: 'center', marginLeft: 20 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 20, fontWeight: '500', color: 'black' } }, { children: "25" })), _jsx(Text, Object.assign({ style: { fontSize: 20, fontWeight: '500', color: 'black', paddingTop: 10 } }, { children: "Pledges" }))] })), _jsxs(View, Object.assign({ style: { padding: 30, backgroundColor: '#EFDCF9', borderRadius: 10, paddingHorizontal: 20, alignItems: 'center' } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 20, fontWeight: '500', color: 'black' } }, { children: "25" })), _jsx(Text, Object.assign({ style: { fontSize: 20, fontWeight: '500', color: 'black', paddingTop: 10, } }, { children: "Warehouse" }))] }))] })) }))] })), _jsxs(ScrollView, Object.assign({ style: { backgroundColor: 'white', padding: 15, marginTop: 30, borderRadius: 10 }, persistentScrollbar: true }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 23, fontWeight: 'bold', color: 'black' } }, { children: "Total Farmers/FPOs/Traders" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 } }, { children: [_jsx(Text, Object.assign({ style: { paddingRight: 5, color: 'black' } }, { children: "State" })), _jsxs(View, Object.assign({ style: { paddingLeft: 6, flexDirection: 'row', justifyContent: 'space-between', } }, { children: [_jsx(View, Object.assign({ style: { paddingRight: 35 } }, { children: _jsx(Text, Object.assign({ style: { paddingRight: 5, color: 'black' } }, { children: "District" })) })), _jsxs(View, Object.assign({ style: { flexDirection: 'column', paddingLeft: 10 } }, { children: [_jsx(Text, Object.assign({ style: { paddingRight: 5, color: 'black', paddingLeft: 6 } }, { children: "Total " })), _jsx(Text, Object.assign({ style: { paddingRight: 5, color: 'black' } }, { children: "Farmers " }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'column' } }, { children: [_jsx(Text, Object.assign({ style: { paddingRight: 5, color: 'black' } }, { children: "Total " })), _jsx(Text, Object.assign({ style: { paddingRight: 5, color: 'black' } }, { children: " FPOs" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'column' } }, { children: [_jsx(Text, Object.assign({ style: { paddingRight: 5, color: 'black', paddingLeft: 6 } }, { children: "Total " })), _jsx(Text, Object.assign({ style: { paddingRight: 5, color: 'black' } }, { children: " Traders" }))] }))] }))] })), _jsxs(View, Object.assign({ style: { padding: 1 } }, { children: [_jsxs(View, Object.assign({ style: { justifyContent: 'space-between' } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, padding: 10 } }, { children: [_jsx(Text, Object.assign({ style: { paddingLeft: 50, fontSize: 16, fontWeight: '500' } }, { children: "Madurai" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "2" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "5" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "5" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, padding: 10 } }, { children: [_jsx(Text, Object.assign({ style: { paddingLeft: 50, fontSize: 16, fontWeight: '500' } }, { children: "Chennai" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "2" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "5" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "5" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, padding: 10 } }, { children: [_jsx(Text, Object.assign({ style: { paddingLeft: 50, fontSize: 16, fontWeight: '500' } }, { children: "Manipur" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "2" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "5" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "5" }))] }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, padding: 10 } }, { children: [_jsx(Text, Object.assign({ style: { paddingLeft: 50, fontSize: 16, fontWeight: '500' } }, { children: "Jammu" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "2" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "5" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "5" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, padding: 10 } }, { children: [_jsx(Text, Object.assign({ style: { paddingLeft: 50, fontSize: 16, fontWeight: '500' } }, { children: "Chennai" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "2" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "5" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "5" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, padding: 10 } }, { children: [_jsx(Text, Object.assign({ style: { paddingLeft: 50, fontSize: 16, fontWeight: '500' } }, { children: "Manipur" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "2" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "5" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "5" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, padding: 10 } }, { children: [_jsx(Text, Object.assign({ style: { paddingLeft: 50, fontSize: 16, fontWeight: '500' } }, { children: "Chennai" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "2" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "5" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "5" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, padding: 10 } }, { children: [_jsx(Text, Object.assign({ style: { paddingLeft: 50, fontSize: 16, fontWeight: '500' } }, { children: "Madurai" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "2" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "5" })), _jsx(Text, Object.assign({ style: { fontSize: 16, fontWeight: '500' } }, { children: "5" }))] }))] }))] })), _jsxs(View, Object.assign({ style: { marginTop: 30, backgroundColor: 'white', borderRadius: 10, padding: 20 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 23, fontWeight: 'bold', color: 'black' } }, { children: "Expired quantity" })), _jsx(Text, Object.assign({ style: { fontSize: 14, color: 'black', paddingTop: 15, fontWeight: 'bold' } }, { children: "Total expired quantity still inside warehouse" })), _jsxs(View, Object.assign({ style: { backgroundColor: '#FADCD9', borderRadius: 10, marginTop: 20, padding: 30 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', paddingBottom: 10 } }, { children: "Booking ID" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600' } }, { children: "#7887" })), _jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600', paddingRight: 30 } }, { children: "10 MT" }))] }))] })), _jsxs(View, Object.assign({ style: { backgroundColor: '#FADCD9', borderRadius: 10, marginTop: 20, padding: 30 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', paddingBottom: 10 } }, { children: "Booking ID" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600' } }, { children: "#7887" })), _jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600', paddingRight: 30 } }, { children: "10 MT" }))] }))] })), _jsxs(View, Object.assign({ style: { backgroundColor: '#FADCD9', borderRadius: 10, marginTop: 20, padding: 30 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', paddingBottom: 10 } }, { children: "Booking ID" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600' } }, { children: "#7887" })), _jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600', paddingRight: 30 } }, { children: "10 MT" }))] }))] })), _jsxs(View, Object.assign({ style: { backgroundColor: '#FADCD9', borderRadius: 10, marginTop: 20, padding: 30 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', paddingBottom: 10 } }, { children: "Booking ID" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600' } }, { children: "#7887" })), _jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600', paddingRight: 30 } }, { children: "10 MT" }))] }))] })), _jsxs(View, Object.assign({ style: { backgroundColor: '#FADCD9', borderRadius: 10, marginTop: 20, padding: 30 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', paddingBottom: 10 } }, { children: "Booking ID" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600' } }, { children: "#7887" })), _jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600', paddingRight: 30 } }, { children: "10 MT" }))] }))] }))] })), _jsxs(View, Object.assign({ style: { marginTop: 30, backgroundColor: 'white', borderRadius: 10, padding: 20 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 23, fontWeight: 'bold', color: 'black' } }, { children: "Future bookings" })), _jsx(Text, Object.assign({ style: { fontSize: 16, color: 'black', paddingTop: 15, fontWeight: 'bold' } }, { children: "Total future bookings to be deposited " })), _jsx(Text, Object.assign({ style: { fontSize: 20, color: 'black', paddingTop: 7, fontWeight: 'bold' } }, { children: "1500 MT" })), _jsxs(View, Object.assign({ style: { backgroundColor: '#FFFFE0', borderRadius: 10, marginTop: 20, padding: 30 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', paddingBottom: 10 } }, { children: "Booking ID" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600' } }, { children: "#7887" })), _jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600', paddingRight: 30 } }, { children: "10 MT" }))] }))] })), _jsxs(View, Object.assign({ style: { backgroundColor: '#FFFFE0', borderRadius: 10, marginTop: 20, padding: 30 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', paddingBottom: 10 } }, { children: "Booking ID" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600' } }, { children: "#7887" })), _jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600', paddingRight: 30 } }, { children: "10 MT" }))] }))] })), _jsxs(View, Object.assign({ style: { backgroundColor: '#FFFFE0', borderRadius: 10, marginTop: 20, padding: 30 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', paddingBottom: 10 } }, { children: "Booking ID" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600' } }, { children: "#7887" })), _jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600', paddingRight: 30 } }, { children: "10 MT" }))] }))] })), _jsxs(View, Object.assign({ style: { backgroundColor: '#FFFFE0', borderRadius: 10, marginTop: 20, padding: 30 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', paddingBottom: 10 } }, { children: "Booking ID" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600' } }, { children: "#7887" })), _jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600', paddingRight: 30 } }, { children: "10 MT" }))] }))] })), _jsxs(View, Object.assign({ style: { backgroundColor: '#FFFFE0', borderRadius: 10, marginTop: 20, padding: 30 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', paddingBottom: 10 } }, { children: "Booking ID" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600' } }, { children: "#7887" })), _jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600', paddingRight: 30 } }, { children: "10 MT" }))] }))] }))] })), _jsxs(View, Object.assign({ style: { marginTop: 30, backgroundColor: 'white', borderRadius: 10, padding: 20 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 23, fontWeight: 'bold', color: 'black' } }, { children: "Deposit & withdrawal" })), _jsx(Text, Object.assign({ style: { fontSize: 16, color: 'black', paddingTop: 15, fontWeight: 'bold' } }, { children: "Total future bookings to be deposited " })), _jsx(Text, Object.assign({ style: { fontSize: 20, color: 'black', paddingTop: 7, fontWeight: 'bold' } }, { children: "1500 MT" })), _jsxs(View, Object.assign({ style: { backgroundColor: '#D3F4FB', borderRadius: 10, marginTop: 20, padding: 30 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', paddingBottom: 10 } }, { children: "Booking ID" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600' } }, { children: "#7887" })), _jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600', paddingRight: 30 } }, { children: "10 MT" }))] }))] })), _jsxs(View, Object.assign({ style: { backgroundColor: '#D3F4FB', borderRadius: 10, marginTop: 20, padding: 30 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', paddingBottom: 10 } }, { children: "Booking ID" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600' } }, { children: "#7887" })), _jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600', paddingRight: 30 } }, { children: "10 MT" }))] }))] })), _jsxs(View, Object.assign({ style: { backgroundColor: '#D3F4FB', borderRadius: 10, marginTop: 20, padding: 30 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', paddingBottom: 10 } }, { children: "Booking ID" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600' } }, { children: "#7887" })), _jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600', paddingRight: 30 } }, { children: "10 MT" }))] }))] })), _jsxs(View, Object.assign({ style: { backgroundColor: '#D3F4FB', borderRadius: 10, marginTop: 20, padding: 30 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', paddingBottom: 10 } }, { children: "Booking ID" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600' } }, { children: "#7887" })), _jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600', paddingRight: 30 } }, { children: "10 MT" }))] }))] })), _jsxs(View, Object.assign({ style: { backgroundColor: '#D3F4FB', borderRadius: 10, marginTop: 20, padding: 30 } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', paddingBottom: 10 } }, { children: "Booking ID" })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between' } }, { children: [_jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600' } }, { children: "#7887" })), _jsx(Text, Object.assign({ style: { fontSize: 18, color: 'black', fontWeight: '600', paddingRight: 30 } }, { children: "10 MT" }))] }))] }))] }))] }))] })) })));
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#F0F0F0',
    },
    headerImage: {
        height: 30,
        width: 30,
        marginLeft: -8
    },
    headerImage1: {
        height: 80,
        width: 80,
        marginLeft: -8
    },
    dashboard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dashboardTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
    },
    dashboardSubtitle: {
        fontSize: 18,
        paddingTop: 10,
    },
    dashboardImage: {
        height: 20,
        width: 20,
    },
    overallPerformanceText: {
        fontSize: 15,
        color: 'black',
        fontWeight: '500',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        width: 300,
        backgroundColor: 'white'
    },
    inputImage: {
        height: 20,
        width: 40,
        marginTop: 15
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    warehousesTitle: {
        fontSize: 26,
        fontWeight: '500',
        color: 'black',
        margin: 12,
    },
    warehouseContainer: {
        paddingLeft: 15,
        borderRadius: 10,
        paddingRight: 20
    },
    warehouseText: {
        color: 'black',
        paddingTop: 10,
        paddingBottom: 10,
    },
    warehouseText1: {
        color: 'black',
        paddingTop: 14,
    },
    warehouseText2: {
        color: 'black',
        paddingTop: 10,
    },
    availableCapacityText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
    },
    separator: {
        height: 1,
        backgroundColor: 'grey',
        marginTop: 10,
    },
    rightArrow: {
        height: 40,
        width: 40,
    },
    headerText: {
        fontSize: 22,
        fontWeight: '500',
        color: 'black',
        paddingLeft: 1,
        paddingRight: 15,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
        padding: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    rowText: {
        fontSize: 19,
        color: 'black',
        paddingTop: 15,
        paddingBottom: 15,
        fontWeight: '500',
        paddingLeft: 10,
        paddingRight: 20
    },
    container: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        backgroundColor: 'white',
        marginTop: 30,
    },
});
