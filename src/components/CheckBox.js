import { jsx as _jsx } from "react/jsx-runtime";
// @ts-nocheck
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, } from 'react-native';
import CheckMark from '../assets/CheckMark';
const CheckBox = ({ disabled, style, value = false, onPress }) => {
    let width = undefined;
    let height = undefined;
    let [selected, setSelected] = useState(value);
    if (style) {
        const { width: w, height: h } = StyleSheet.flatten(style);
        width = w;
        height = h;
    }
    return (_jsx(TouchableOpacity, Object.assign({ disabled: disabled, style: [
            {
                width: 18,
                height: 18,
            },
            style,
        ], onPress: () => {
            setSelected(!selected);
            if (onPress) {
                onPress();
            }
        } }, { children: value ? (_jsx(View, Object.assign({ style: {
                width: '100%',
                height: '100%',
                borderColor: '#0C447D',
                borderWidth: 1,
                borderRadius: 3,
            } }, { children: _jsx(CheckMark, { width: 10, height: 10, fill: disabled ? '#EBEDF0' : undefined }) }))) : (_jsx(View, { style: {
                width: '100%',
                height: '100%',
                borderColor: '#939CA3',
                borderWidth: 1,
                borderRadius: 3,
            } })) })));
};
export default CheckBox;
