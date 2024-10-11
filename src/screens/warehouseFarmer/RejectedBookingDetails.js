import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/Header';
import textStyles from '../../components/textStyles';
import Location from '../../assets/Location';
import CustomButton from '../../components/CustomButton';
import Call from '../../assets/Call';
const RejectedBookingDetails = ({ navigation, route }) => {
    var _a, _b, _c;
    //const navigation = useNavigation<NavigationProp<Record<string, object>>>();
    const booking = route.params.booking;
    console.log("booking : ", booking);
    return (_jsxs(View, Object.assign({ style: { flex: 1, backgroundColor: '#FFFFFF' } }, { children: [_jsx(HeaderComponent, { title: 'Booking rejected' }), _jsxs(View, Object.assign({ style: { alignItems: 'center' } }, { children: [_jsx(View, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { color: 'black' }] }, { children: (_a = booking === null || booking === void 0 ? void 0 : booking.warehouse) === null || _a === void 0 ? void 0 : _a.warehouse_name })) }), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center' } }, { children: [_jsx(View, Object.assign({ style: { padding: 5 } }, { children: _jsx(Location, {}) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: `${(_b = booking === null || booking === void 0 ? void 0 : booking.warehouse) === null || _b === void 0 ? void 0 : _b.city}, ${(_c = booking === null || booking === void 0 ? void 0 : booking.warehouse) === null || _c === void 0 ? void 0 : _c.State}` }))] })), _jsxs(View, Object.assign({ style: { width: 328, backgroundColor: '#F7F7F7', marginVertical: 24, borderRadius: 8, paddingVertical: 12, paddingHorizontal: 8, gap: 12 } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1C1C1C' }] }, { children: "We are sorry, your booking for the warehouse is rejected due to the following reasons" })), _jsxs(View, Object.assign({ style: { gap: 4 } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1C1C1C', }] }, { children: "  \u2022  Missing information" })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1C1C1C', }] }, { children: "  \u2022  Missing information" })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1C1C1C', }] }, { children: "  \u2022  Missing information" }))] }))] })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1C1C1C', width: 328 }] }, { children: "Please revise your application according to the feedback provided." })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1C1C1C', width: 328, marginTop: 24 }] }, { children: "You can search for available warehouses and try booking again." })), _jsx(View, Object.assign({ style: { marginTop: 16, marginBottom: 24 } }, { children: _jsx(CustomButton, { text: 'Search warehouse', txtcolor: '#FFFFFF', bgcolor: '#0C447D', borderColor: '#0C447D', role: 'iButton', onPress: () => navigation.navigate('SearchWarehouse') }) })), _jsxs(View, Object.assign({ style: { gap: 8, flexDirection: 'row' } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1C1C1C', }] }, { children: "For further inquiries," })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', gap: 8 } }, { children: [_jsx(Call, {}), _jsx(TouchableOpacity, { children: _jsx(Text, Object.assign({ style: [textStyles.buttonTextUnderline,] }, { children: "+915d4df66666" })) })] }))] }))] }))] })));
};
export default RejectedBookingDetails;
const styles = StyleSheet.create({});
