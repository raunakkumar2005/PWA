import { jsx as _jsx } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
export default function CheckButton(props) {
    const [selected, setSelected] = useState(false);
    return (_jsx(TouchableOpacity, Object.assign({ style: props.single
            ? props.value
                ? styles.checkButtonSelected
                : styles.checkButtonUnSelected
            : selected
                ? styles.checkButtonSelected
                : styles.checkButtonUnSelected, onPress: () => {
            !props.single && setSelected(!selected);
            props.onPress && props.onPress();
        } }, { children: selected ||
            (props.value && _jsx(View, { style: styles.checkButtonFill })) })));
}
const styles = StyleSheet.create({
    checkButtonSelected: {
        width: 18,
        aspectRatio: 1,
        borderRadius: 100,
        borderColor: '#0C447D',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '2%',
    },
    checkButtonFill: {
        width: '75%',
        aspectRatio: 1,
        borderRadius: 100,
        backgroundColor: '#0C447D',
    },
    checkButtonUnSelected: {
        width: 18,
        aspectRatio: 1,
        borderRadius: 100,
        borderColor: '#939CA3',
        borderWidth: 1,
        marginRight: '2%',
    },
});
