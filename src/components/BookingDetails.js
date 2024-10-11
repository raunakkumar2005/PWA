import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, Text, StyleSheet } from 'react-native';
const formatDate = (dateNumber) => {
    const dateString = dateNumber.toString();
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    const date = new Date(`${year}-${month}-${day}`);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
};
const BookingDetails = ({ booking }) => {
    var _a;
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsx(DetailRow, { label: "Commodity", value: ((_a = booking.Commodity[0]) === null || _a === void 0 ? void 0 : _a.name) || "" }), _jsx(DetailRow, { label: "Start Date", value: formatDate(booking.fromDate) }), _jsx(DetailRow, { label: "End Date", value: formatDate(booking.toDate) }), _jsx(DetailRow, { label: "Price", value: `₹${booking.total_price.toLocaleString()}` })] })));
};
const DetailRow = ({ label, value }) => (_jsxs(View, Object.assign({ style: styles.detailRow }, { children: [_jsx(View, Object.assign({ style: styles.labelContainer }, { children: _jsx(Text, Object.assign({ style: [styles.bodyTable, styles.labelText] }, { children: label })) })), _jsx(View, Object.assign({ style: styles.valueContainer }, { children: _jsx(Text, Object.assign({ style: [styles.headingH8, styles.valueText] }, { children: value })) }))] })));
const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        borderWidth: 1,
        padding: 8,
        backgroundColor: '#FFFFFF',
        borderColor: '#C1C4C2',
        marginTop: 16,
    },
    detailRow: {
        flexDirection: 'row',
        marginVertical: 4,
    },
    labelContainer: {
        width: 144,
        paddingVertical: 4,
    },
    valueContainer: {
        width: 144,
        paddingVertical: 4,
    },
    labelText: {
        color: '#1C1C1C',
        textAlign: 'left',
    },
    valueText: {
        color: '#1C1C1C',
    },
    bodyTable: {
        fontSize: 14,
    },
    headingH8: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
export default BookingDetails;
