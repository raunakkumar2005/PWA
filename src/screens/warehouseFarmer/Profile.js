
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { Verified, NotVerified, CameraModal, } from '../../components/ProfileComponents';
import Camera from '../../assets/Camera';
import Edit from '../../assets/Edit';
import Aadhar from '../../assets/Aadhar';
import PAN from '../../assets/PAN';
import GST from '../../assets/GST';
import Profiles from '../../assets/Profile';
import { useSelector } from 'react-redux';
import { authApi } from '../../service/api';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Profile = ({ navigation }) => {
    var _a, _b, _c, _d, _e, _f;
    const [user, setUser] = useState({});
    const token = useSelector((state) => state.user.token);
    const variant = useSelector((state) => state.user.role);
    const status = true;
    const [camera, setCamera] = useState(false);
    const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield authApi.getUserProfile();
        console.log(response);
        setUser(response);
    });
    console.log("Token : ", token);
    useEffect(() => {
        fetchUser();
        console.log("User : ", user);
    }, [token]);
    const handleCamera = () => {
        setCamera(!camera);
    };
    const documents = [
        ['Aadhar Card', '2 MB', _jsx(Aadhar, {})],
        ['PAN Card', '2 MB', _jsx(PAN, {})],
        ['Goods and Service task (GST)', '4 MB', _jsx(GST, {})],
    ];
    const renderDocuments = (item, user) => {
        return (_jsxs(View, Object.assign({ style: styles.documentOptionContainer }, { children: [_jsx(View, Object.assign({ style: styles.documentOptionPhotoContainer }, { children: item[2] })), _jsxs(View, Object.assign({ style: styles.documentOptionDetailsContainer }, { children: [_jsx(Text, Object.assign({ style: styles.addressHeaderText }, { children: item[0] })), _jsx(Text, Object.assign({ style: styles.documentSize }, { children: item[1] }))] }))] })));
    };
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsx(View, Object.assign({ style: styles.header }, { children: _jsx(Text, Object.assign({ style: styles.headerText }, { children: "Profile" })) })), _jsxs(View, Object.assign({ style: styles.basicInfoContainer }, { children: [_jsxs(View, Object.assign({ style: styles.photoContainer }, { children: [_jsx(Profiles, { filled: true, fill: true, color: '#545554' }), _jsx(TouchableOpacity, Object.assign({ style: styles.cameraIconContainer, onPress: handleCamera }, { children: _jsx(Camera, {}) }))] })), _jsxs(View, { children: [_jsx(Text, Object.assign({ style: styles.headerText }, { children: user.firstName })), _jsx(Text, Object.assign({ style: styles.detailsMail }, { children: user.email })), _jsxs(Text, Object.assign({ style: styles.detailsNumber }, { children: ["+91 ", user.phone] }))] }), _jsxs(TouchableOpacity, Object.assign({ style: styles.editButton }, { children: [_jsx(Edit, {}), _jsx(Text, Object.assign({ style: styles.editText }, { children: "Edit profile" }))] }))] })), _jsxs(View, Object.assign({ style: styles.addressContainer }, { children: [_jsxs(View, Object.assign({ style: styles.addressHeaderContiner }, { children: [_jsx(Text, Object.assign({ style: styles.addressHeaderText }, { children: "Address" })), _jsx(View, Object.assign({ style: styles.statusContainer }, { children: status ? _jsx(Verified, {}) : _jsx(NotVerified, {}) }))] })), _jsx(Text, Object.assign({ style: styles.addressText }, { children: (_a = user.Address) === null || _a === void 0 ? void 0 : _a.buildingName })), _jsx(Text, Object.assign({ style: styles.addressText }, { children: (_b = user.Address) === null || _b === void 0 ? void 0 : _b.street })), _jsxs(Text, Object.assign({ style: styles.addressText }, { children: ["Near", (_c = user.Address) === null || _c === void 0 ? void 0 : _c.landmark] })), _jsxs(Text, Object.assign({ style: styles.addressText }, { children: [(_d = user.Address) === null || _d === void 0 ? void 0 : _d.city, " - ", (_e = user.Address) === null || _e === void 0 ? void 0 : _e.pincode] })), _jsx(Text, Object.assign({ style: styles.addressText }, { children: (_f = user.Address) === null || _f === void 0 ? void 0 : _f.state }))] })), _jsxs(View, Object.assign({ style: styles.documentsContainer }, { children: [_jsxs(View, Object.assign({ style: styles.addressHeaderContiner }, { children: [_jsx(Text, Object.assign({ style: styles.addressHeaderText }, { children: "Documents" })), _jsx(View, Object.assign({ style: styles.statusContainer }, { children: status ? _jsx(Verified, {}) : _jsx(NotVerified, {}) }))] })), documents.map(item => renderDocuments(item, user))] })), _jsx(NavBar, { current: "Profile" }), _jsx(Modal, Object.assign({ visible: camera, transparent: true }, { children: _jsx(CameraModal, { exitCallBack: handleCamera }) }))] })));
};
export default Profile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: '8%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    headerText: {
        color: 'black',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
    },
    basicInfoContainer: {
        width: '100%',
        height: '15%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '3%',
        flexDirection: 'row',
    },
    photoContainer: {
        width: '25%',
        aspectRatio: 1,
        backgroundColor: 'rgba(0,0,0,.2)',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cameraIconContainer: {
        width: '25%',
        aspectRatio: 1,
        backgroundColor: 'white',
        borderRadius: 100,
        zIndex: 1,
        position: 'absolute',
        bottom: -10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailsNumber: {
        color: 'black',
        fontFamily: 'NotoSeriff-Regular',
    },
    detailsMail: {
        color: '#545554',
        fontFamily: 'NotoSeriff-Regular',
    },
    editButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    editText: {
        color: '#545554',
        fontFamily: 'NotoSeriff-Regular',
        marginLeft: '2%',
    },
    addressContainer: {
        backgroundColor: 'white',
        width: '90%',
        height: '27%',
        alignSelf: 'center',
        marginTop: '3%',
        borderRadius: 8,
        padding: '5%',
    },
    addressHeaderContiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statusContainer: {
        flexDirection: 'row',
    },
    addressHeaderText: {
        fontFamily: 'Poppins-SemiBold',
        color: '#1C1C1C',
        marginBottom: '2.5%',
    },
    addressText: {
        fontFamily: 'NotoSerif-Regular',
        color: 'black',
        marginBottom: '2.2%',
    },
    documentsContainer: {
        backgroundColor: 'white',
        width: '90%',
        height: '35%',
        alignSelf: 'center',
        marginVertical: '4%',
        borderRadius: 8,
        padding: '5%',
    },
    documentOptionContainer: {
        width: '100%',
        height: '28%',
        marginBottom: '2%',
        flexDirection: 'row',
    },
    documentOptionPhotoContainer: {
        width: '25%',
        height: '100%',
        borderRadius: 10,
    },
    documentOptionDetailsContainer: {
        marginLeft: '5%',
        justifyContent: 'center',
    },
    documentSize: {
        fontFamily: 'Noto-Serif-Regular',
        color: '#707371',
    },
});
