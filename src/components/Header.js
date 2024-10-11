import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Back from '../assets/Back';
import { useNavigation } from '@react-navigation/native';
const HeaderComponent = ({ title, onPressBack, component: Component }) => {
    const navigation = useNavigation();
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsx(TouchableOpacity, Object.assign({ style: styles.backButton, onPress: () => {
                    navigation.goBack();
                } }, { children: _jsx(Back, {}) })), _jsx(Text, Object.assign({ style: styles.title }, { children: title })), Component && _jsx(Component, {})] })));
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomColor: 'lightgray',
    },
    backButton: {
        position: 'absolute',
        left: 16,
        top: 25,
        transform: [{ translateY: -12 }], // Center vertically
    },
    title: {
        fontSize: 20,
        color: '#1C1C1C',
        fontWeight: 'bold',
        lineHeight: 24,
        letterSpacing: -1
    },
});
export default HeaderComponent;
