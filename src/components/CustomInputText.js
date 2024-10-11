import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, } from 'react-native';
import textStyles from './textStyles';
const CustomInputText = ({ onTextChange, component: Component, PlaceHolder, color, txt, keyboard, metric, readonly = false, triggerClear, }) => {
    const metrics = metric ? metric : '';
    const [text, setText] = useState(txt == undefined ? '' : txt);
    const [isFocus, setIsFocused] = useState(false);
    const inputRef = useRef(null);
    if (triggerClear) {
        console.log(1);
        setText('');
    }
    const handleTextChange = (input) => {
        setText(input);
        if (onTextChange) {
            onTextChange(input); // Notify parent component of the text change
        }
    };
    const handlePress = () => {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    return (_jsxs(TouchableOpacity, Object.assign({ style: styles.container, onPress: handlePress }, { children: [Component && _jsx(Component, {}), _jsxs(View, Object.assign({ style: styles.inputContainer }, { children: [text !== '' && (_jsx(Text, Object.assign({ style: [textStyles.bodyB4, styles.text] }, { children: PlaceHolder }))), _jsx(TextInput, { readOnly: readonly, ref: inputRef, style: [
                            text === '' ? textStyles.bodyB3 : textStyles.headingH8,
                            { color: "black", outline: 'none' },
                        ], placeholder: PlaceHolder, onFocus: () => setIsFocused(true), keyboardType: keyboard, placeholderTextColor: "gray", onChangeText: handleTextChange, value: text || txt })] })), metrics && text !== '' && _jsx(Text, Object.assign({ style: styles.metrics }, { children: metrics }))] })));
};
const styles = StyleSheet.create({
    container: {
        height: 55,
        flexDirection: 'row',
    },
    inputContainer: {
        width: '90%',
        height: '100%',
        flexDirection: 'column',
        paddingLeft: 11.5,
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        color: "#696969",
        lineHeight: 33,
        padding: 0,
        margin: 0,
        height: 25,
    },
    metrics: {
        alignSelf: 'center',
        color: '#696969',
        fontWeight: 'bold',
    },
});
export default CustomInputText;
