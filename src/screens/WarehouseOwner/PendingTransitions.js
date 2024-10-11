
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import HeaderComponent from '../../components/Header';
import textStyles from '../../components/textStyles';
import ButtonWithAutoWidth from '../../components/ButtonWithAutoWidth';
import { useNavigation } from '@react-navigation/native';
import { GradeAndDeposit } from '../../service/api';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const PendingTransitions = () => {
    // wrong type used should change
    const [pendingTransition, setpendingTransition] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        const getData = () => __awaiter(void 0, void 0, void 0, function* () {
            const temp = yield GradeAndDeposit.get_deposit();
            console.log(temp[1], 11);
            setpendingTransition(temp);
        });
        getData();
    }, []);
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const formatDate = (datetimeString) => {
        const date = new Date(datetimeString);
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = monthNames[date.getUTCMonth()];
        const year = date.getUTCFullYear();
        return `${day} ${month} ${year}`;
    };
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsx(HeaderComponent, { title: 'Pending transitions' }), _jsxs(ScrollView, Object.assign({ contentContainerStyle: styles.content }, { children: [_jsx(Text, Object.assign({ style: styles.instructionText }, { children: "The deposit is complete, proceed with the grading process." })), pendingTransition.map((item, index) => (_jsxs(View, Object.assign({ style: styles.transitionCard }, { children: [_jsxs(View, Object.assign({ style: styles.cardContent }, { children: [_jsxs(View, Object.assign({ style: styles.row }, { children: [_jsx(View, Object.assign({ style: styles.labelContainer }, { children: _jsx(Text, Object.assign({ style: styles.labelText }, { children: 'Deposit id' })) })), _jsx(View, Object.assign({ style: styles.valueContainer }, { children: _jsx(Text, Object.assign({ style: [styles.valueText, { fontSize: 9.25 }] }, { children: item._id })) }))] })), _jsxs(View, Object.assign({ style: styles.row }, { children: [_jsx(View, Object.assign({ style: styles.labelContainer }, { children: _jsx(Text, Object.assign({ style: styles.labelText }, { children: 'Deposit date' })) })), _jsx(View, Object.assign({ style: styles.valueContainer }, { children: _jsx(Text, Object.assign({ style: styles.valueText }, { children: formatDate(item.depositDate) })) }))] })), _jsxs(View, Object.assign({ style: styles.row }, { children: [_jsx(View, Object.assign({ style: styles.labelContainer }, { children: _jsx(Text, Object.assign({ style: styles.labelText }, { children: 'Warehouse name' })) })), _jsx(View, Object.assign({ style: styles.valueContainer }, { children: _jsx(Text, Object.assign({ style: styles.valueText }, { children: item.warehouseName })) }))] })), _jsxs(View, Object.assign({ style: styles.row }, { children: [_jsx(View, Object.assign({ style: styles.labelContainer }, { children: _jsx(Text, Object.assign({ style: styles.labelText }, { children: 'Commodity' })) })), _jsx(View, Object.assign({ style: styles.valueContainer }, { children: _jsx(Text, Object.assign({ style: styles.valueText }, { children: item.bookingId.Commodity[0].name })) }))] })), _jsxs(View, Object.assign({ style: styles.row }, { children: [_jsx(View, Object.assign({ style: styles.labelContainer }, { children: _jsx(Text, Object.assign({ style: styles.labelText }, { children: 'Total weight' })) })), _jsx(View, Object.assign({ style: styles.valueContainer }, { children: _jsx(Text, Object.assign({ style: styles.valueText }, { children: item.totalWeight })) }))] })), _jsxs(View, Object.assign({ style: styles.row }, { children: [_jsx(View, Object.assign({ style: styles.labelContainer }, { children: _jsx(Text, Object.assign({ style: styles.labelText }, { children: 'Total amount' })) })), _jsx(View, Object.assign({ style: styles.valueContainer }, { children: _jsx(Text, Object.assign({ style: styles.valueText }, { children: item.bookingId.total_price })) }))] }))] })), _jsx(View, Object.assign({ style: styles.buttonContainer }, { children: _jsx(ButtonWithAutoWidth, { role: "iButton", text: "Grading", borderColor: "#0C447D", bgcolor: "#0C447D", txtcolor: "#FFFFFF", onPress: () => {
                                        navigation.navigate('Grading', { id: item._id });
                                    } }) }))] }), index)))] }))] })));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    content: {
        paddingHorizontal: 14.5,
        paddingBottom: 16, // Extra padding at the bottom for better scrolling experience
    },
    instructionText: Object.assign(Object.assign({}, textStyles.bodyB3), { color: '#1C1C1C', textAlign: 'left', marginBottom: 16 }),
    transitionCard: {
        padding: 24,
        gap: 24,
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        alignItems: 'center',
    },
    cardContent: {
        gap: 12,
    },
    row: {
        flexDirection: 'row',
        gap: 24,
    },
    labelContainer: {
        width: 128,
        height: 24,
        paddingVertical: 4,
    },
    labelText: Object.assign(Object.assign({}, textStyles.bodyTable), { color: '#1C1C1C', textAlign: 'left' }),
    valueContainer: {
        width: 128,
        height: 24,
        paddingVertical: 4,
    },
    valueText: Object.assign(Object.assign({}, textStyles.headingH8), { color: '#1C1C1C' }),
    buttonContainer: {
        width: 152,
    },
});
export default PendingTransitions;
