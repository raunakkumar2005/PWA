import { jsx as _jsx } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, Modal, TouchableOpacity, Dimensions, } from 'react-native';
import { useState } from 'react';
const { height, width } = Dimensions.get('window');
export default function CalendarModal({ toggleCalendar, handleToggleCalendar, setDate, }) {
    const [error, setError] = useState(false);
    const theme = {
        todayBackgroundColor: '#0d69d7',
        todayTextColor: 'white',
        'stylesheet.calendar.header': {
            headerContainer: styles.headerContainer,
            header: styles.header,
            monthText: styles.monthText,
        },
    };
    return (_jsx(Modal, Object.assign({ visible: toggleCalendar, transparent: true }, { children: _jsx(TouchableOpacity, Object.assign({ style: styles.calendarContainer, onPress: handleToggleCalendar }, { children: error && _jsx(Text, Object.assign({ style: styles.error }, { children: "Please select a valid date" })) })) })));
}
const styles = StyleSheet.create({
    calendarContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    calendar: {
        width: width * 0.9,
        height: height * 0.55,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#707371',
    },
    headerContainer: {
        position: 'absolute',
        flexDirection: 'row',
        left: 0,
        paddingLeft: 20,
        paddingRight: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
        alignItems: 'center',
    },
    monthText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        alignSelf: 'flex-start',
    },
    error: { fontSize: 16, color: 'black', marginTop: 16 },
});
