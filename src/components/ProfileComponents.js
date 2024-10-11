import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CheckMark from '../assets/CheckMark';
import Cross from '../assets/Cross';
import TakePhoto from '../assets/TakePhoto';
import Gallery from '../assets/Gallery';
import Delete from '../assets/Delete';
export const Verified = () => {
    return (_jsxs(_Fragment, { children: [_jsx(View, Object.assign({ style: styles.statusIconVerfiedContainer }, { children: _jsx(CheckMark, { color: "white" }) })), _jsx(Text, Object.assign({ style: styles.statusIconVerfiedText }, { children: "verified" }))] }));
};
export const NotVerified = () => {
    return (_jsxs(_Fragment, { children: [_jsx(View, Object.assign({ style: styles.statusIconNotVerfiedContainer }, { children: _jsx(Cross, { color: "white" }) })), _jsx(Text, Object.assign({ style: styles.statusIconNotVerfiedText }, { children: "Not verified" }))] }));
};
const cameraOptions = [
    ["Gallery", "Choose a existing photo", _jsx(Gallery, {})],
    ["Camera", "Take a picture", _jsx(TakePhoto, {})],
    ["Delete", "Delete the existing photo", _jsx(Delete, {})]
];
export const CameraModal = (props) => {
    return (_jsx(View, Object.assign({ style: styles.cameraContainer }, { children: _jsxs(View, Object.assign({ style: styles.cameraOptionContainer }, { children: [_jsx(TouchableOpacity, Object.assign({ style: styles.cameraHeader, onPress: props.exitCallBack }, { children: _jsx(Cross, {}) })), _jsx(Text, Object.assign({ style: styles.cameraHeaderText }, { children: "Select profile photo" })), cameraOptions.map(item => (_jsxs(TouchableOpacity, Object.assign({ style: styles.cameraOption }, { children: [item[2], _jsxs(View, { children: [_jsx(Text, Object.assign({ style: styles.cameraOptionText }, { children: item[0] })), _jsx(Text, Object.assign({ style: styles.cameraOptionDesc }, { children: item[1] }))] })] }))))] })) })));
};
const styles = StyleSheet.create({
    statusIconVerfiedContainer: {
        width: 24,
        aspectRatio: 1,
        borderRadius: 100,
        backgroundColor: "#00A241",
        marginRight: "5%",
        justifyContent: "center",
        alignItems: "center"
    },
    statusIconVerfiedText: {
        color: "#00A241",
        fontFamily: "Poppins-SemiBold"
    },
    statusIconNotVerfiedContainer: {
        width: 24,
        aspectRatio: 1,
        borderRadius: 100,
        backgroundColor: "#CC0000",
        marginRight: "5%",
        justifyContent: "center",
        alignItems: "center"
    },
    statusIconNotVerfiedText: {
        color: "#CC0000",
        fontFamily: "Poppins-SemiBold"
    },
    cameraContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center"
    },
    cameraOptionContainer: {
        width: "90%",
        height: "43%",
        borderRadius: 10,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    cameraHeader: {
        width: "100%",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        paddingRight: "8%"
    },
    cameraHeaderText: {
        color: "black",
        fontFamily: "Poppins-SemiBold",
        fontSize: 20,
    },
    cameraOption: {
        flexDirection: "row",
        height: "23%",
        width: "65%",
        alignItems: "center",
    },
    cameraOptionText: {
        fontFamily: "Poppins-SemiBold",
        color: "black",
        marginLeft: "4%"
    },
    cameraOptionDesc: {
        color: "#545554",
        fontFamily: "NotoSerif-Regular",
        marginLeft: "4%"
    }
});
