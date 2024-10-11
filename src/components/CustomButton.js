import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');
const CustomButton = ({ text, width, onPress, bgcolor, txtcolor, marginT, marginB, borderColor, role, component: Component, disabled }) => {
    return (_jsxs(TouchableOpacity, Object.assign({ style: [
            styles.container,
            { backgroundColor: bgcolor, marginTop: marginT, marginBottom: marginB, borderColor: borderColor },
            disabled && styles.disabledContainer,
            width && { width: width }
        ], onPress: disabled ? undefined : onPress, disabled: disabled }, { children: [Component && _jsx(Component, {}), _jsxs(Text, Object.assign({ style: [styles.text, { color: txtcolor }, disabled && styles.disabledText] }, { children: [text, (() => {
                        if (role === 'phone') {
                            return " with mobile number";
                        }
                        if (role === 'iButton') {
                            return "";
                        }
                        else {
                            return " with email";
                        }
                    })()] }))] })));
};
const styles = StyleSheet.create({
    container: {
        width: width * 0.91,
        height: height * 0.06,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
    },
    disabledContainer: {
        backgroundColor: '#989E9A',
        borderColor: '#989E9A',
    },
    text: {
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 19.2,
        textAlign: 'center',
        color: '#626262',
    },
    disabledText: {
        color: 'black',
    },
});
export default CustomButton;
