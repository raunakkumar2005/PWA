import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { Image, StyleSheet, Text, View } from 'react-native';
import HeaderComponent from '../../components/Header';
import textStyles from '../../components/textStyles';
import Location from '../../assets/Location';
import { convertDate } from '../../utils/date';
const AcceptedBookingDetails = ({ route }) => {
    const { booking, warehouse } = route.params;
    console.log(booking === null || booking === void 0 ? void 0 : booking.fromDate, booking === null || booking === void 0 ? void 0 : booking.toDate, 100);
    return (_jsxs(View, { children: [_jsx(HeaderComponent, { title: 'Booking accepted' }), _jsxs(View, Object.assign({ style: { alignItems: 'center' } }, { children: [_jsx(View, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { color: 'black' }] }, { children: warehouse === null || warehouse === void 0 ? void 0 : warehouse.warehouse_name })) }), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center' } }, { children: [_jsx(View, Object.assign({ style: { padding: 5 } }, { children: _jsx(Location, {}) })), _jsxs(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: [warehouse === null || warehouse === void 0 ? void 0 : warehouse.locality_area, ",", warehouse === null || warehouse === void 0 ? void 0 : warehouse.city] }))] })), _jsx(View, Object.assign({ style: { alignItems: 'center', marginTop: 16, marginBottom: 24 } }, { children: _jsx(Image, { source: {
                                uri: 'https://s3-alpha-sig.figma.com/img/eda3/a744/06b063ca426f3e1483290b1c01ebba1d?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SeCb2zn23HyRPqCyiXG10b3PuCPoMWE0zCCr2Vz1Wo-GQ5gkNtBX1wlFJ9wEIdDsRifbcuu9ofJW9ujmOYilnrMAVN2iWdPsKVZM7q1TCGY~2iYuFHqszpzXFik7WkokC1m83JEjH5oHjKcBTZDsP6Cv0StFRZkzI1LjyH1U1AUXiz27C~6rUMhA8BK5LiZcwjIk2YNuiFG-IqTfiKlORrStMwdOTHkyowQZx7VsLDOmFNMjGf6ZUAjWgCFV1Nk3xUPcz5iP1ZfrxoHH-UAL4PMfaOa7vbK3ZvsNclx4zQlALZLg0HfrYBU5lu6XSFCSWpMo4zF4Vky36mTRhctGOg__',
                            }, style: { width: 327, height: 130, borderRadius: 8 } }) })), _jsxs(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1C1C1C', width: 326 }] }, { children: ["Your warehouse booking is accepted and the booking details are", ' '] })), _jsxs(View, Object.assign({ style: {
                            borderRadius: 8,
                            borderWidth: 1,
                            padding: 8,
                            gap: 8,
                            backgroundColor: '#FFFFFF',
                            borderColor: '#C1C4C2',
                            marginTop: 16,
                        } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', gap: 24 } }, { children: [_jsx(View, Object.assign({ style: { width: 144, height: 24, paddingVertical: 4 } }, { children: _jsx(Text, Object.assign({ style: [
                                                textStyles.bodyTable,
                                                { color: '#1C1C1C', textAlign: 'left' },
                                            ] }, { children: "Booking ID" })) })), _jsx(View, Object.assign({ style: { width: 144, height: 24, paddingVertical: 4 } }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH8, { color: '#1C1C1C' }] }, { children: booking._id })) }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', gap: 24 } }, { children: [_jsx(View, Object.assign({ style: { width: 144, height: 24, paddingVertical: 4 } }, { children: _jsx(Text, Object.assign({ style: [
                                                textStyles.bodyTable,
                                                { color: '#1C1C1C', textAlign: 'left' },
                                            ] }, { children: "Commodity" })) })), _jsx(View, Object.assign({ style: { width: 144, height: 24, paddingVertical: 4 } }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH8, { color: '#1C1C1C' }] }, { children: (booking === null || booking === void 0 ? void 0 : booking.Commodity[0].name) || '' })) }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', gap: 24 } }, { children: [_jsx(View, Object.assign({ style: { width: 144, height: 24, paddingVertical: 4 } }, { children: _jsx(Text, Object.assign({ style: [
                                                textStyles.bodyTable,
                                                { color: '#1C1C1C', textAlign: 'left' },
                                            ] }, { children: "Requested capacity" })) })), _jsx(View, Object.assign({ style: { width: 144, height: 24, paddingVertical: 4 } }, { children: _jsxs(Text, Object.assign({ style: [textStyles.headingH8, { color: '#1C1C1C' }] }, { children: [booking === null || booking === void 0 ? void 0 : booking.totalWeight, " MT"] })) }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', gap: 24 } }, { children: [_jsx(View, Object.assign({ style: { width: 144, height: 24, paddingVertical: 4 } }, { children: _jsx(Text, Object.assign({ style: [
                                                textStyles.bodyTable,
                                                { color: '#1C1C1C', textAlign: 'left' },
                                            ] }, { children: "Start date" })) })), _jsx(View, Object.assign({ style: { width: 144, height: 24, paddingVertical: 4 } }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH8, { color: '#1C1C1C' }] }, { children: convertDate(booking === null || booking === void 0 ? void 0 : booking.fromDate) })) }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', gap: 24 } }, { children: [_jsx(View, Object.assign({ style: { width: 144, height: 24, paddingVertical: 4 } }, { children: _jsx(Text, Object.assign({ style: [
                                                textStyles.bodyTable,
                                                { color: '#1C1C1C', textAlign: 'left' },
                                            ] }, { children: "End date" })) })), _jsx(View, Object.assign({ style: { width: 144, height: 24, paddingVertical: 4 } }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH8, { color: '#1C1C1C' }] }, { children: convertDate(booking === null || booking === void 0 ? void 0 : booking.toDate) })) }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', gap: 24 } }, { children: [_jsx(View, Object.assign({ style: { width: 144, height: 24, paddingVertical: 4 } }, { children: _jsx(Text, Object.assign({ style: [
                                                textStyles.bodyTable,
                                                { color: '#1C1C1C', textAlign: 'left' },
                                            ] }, { children: "Truck type" })) })), _jsx(View, Object.assign({ style: { width: 144, height: 24, paddingVertical: 4 } }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH8, { color: '#1C1C1C' }] }, { children: "100 MT capacity" })) }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', gap: 24 } }, { children: [_jsx(View, Object.assign({ style: { width: 144, height: 24, paddingVertical: 4 } }, { children: _jsx(Text, Object.assign({ style: [
                                                textStyles.bodyTable,
                                                { color: '#1C1C1C', textAlign: 'left' },
                                            ] }, { children: "Estimated truck arrival" })) })), _jsx(View, Object.assign({ style: { width: 144, height: 24, paddingVertical: 4 } }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH8, { color: '#1C1C1C' }] }, { children: "5:00 PM" })) }))] }))] })), _jsx(Text, Object.assign({ style: [
                            textStyles.bodyB3,
                            { color: '#1C1C1C', marginVertical: 16, width: 328 },
                        ] }, { children: "You will receive updates on your tracking ID by mail or message." })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1C1C1C', width: 328 }] }, { children: "If you want to cancel the booking, you can cancel within 7 days" }))] }))] }));
};
export default AcceptedBookingDetails;
const styles = StyleSheet.create({});
