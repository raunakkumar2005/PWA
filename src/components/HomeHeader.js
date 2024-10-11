import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Menu from '../assets/Menu';
import SvgComponent from '../assets/Notification';
import MobileLogo from '../assets/MobileLogo';
const HomeHeader = (props) => {
    return (_jsxs(View, Object.assign({ style: [styles.container, { height: 50, }] }, { children: [_jsx(TouchableOpacity, Object.assign({ onPress: props.menuCallBack }, { children: _jsx(Menu, {}) })), _jsx(MobileLogo, {}), _jsx(TouchableOpacity, Object.assign({ onPress: props.notificationCallBack }, { children: _jsx(SvgComponent, {}) }))] })));
};
export default HomeHeader;
const styles = StyleSheet.create({
    container: {
        width: '90%',
        margin: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '3%',
        alignItems: 'center',
    }
});
