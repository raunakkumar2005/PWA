
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import HeaderComponent from '../../components/Header';
import textStyles from '../../components/textStyles';
import componentMapping from '../../utils/componentMapping';
import { useNavigation } from '@react-navigation/native';
import { authApi } from '../../service/api';
import { storeName, storeRole, storeToken } from '../../utils/auth';
import { updateLoggedIn, setRole, setToken, setName } from '../../redux/slices/user';
import { useDispatch } from 'react-redux';
import CustomModal from '../../components/LoadingModal';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ChooseRoleScreen = ({ route }) => {
    const { token, nav } = route === null || route === void 0 ? void 0 : route.params;
    const dispatch = useDispatch();
    const [isVisible, setisVisible] = useState(false);
    const navigation = useNavigation();
    const roles = [
        { name: 'Farmer', backgroundColor: '#E1F5FF', image: require('../../assets/images/Group.png'), comp: 'FarmerRole' },
        { name: 'Trader', backgroundColor: '#FFF4BF', image: require('../../assets/images/Group.png'), comp: 'TraderRole' },
        { name: 'FPO', backgroundColor: '#FFD3D2', image: require('../../assets/images/Group.png'), comp: 'FpoRole' },
    ];
    const handleRoleSelection = (roleName) => __awaiter(void 0, void 0, void 0, function* () {
        // Handle role selection here
        setisVisible(true);
        const role = "user";
        if (nav == 'email') {
            const response = yield authApi.CREATE_FARMER_WITHROLE_EMAIL(roleName, token);
            console.log(response.data.token);
            const auth_token = response.data.token;
            const name = response.data.data.firstName;
            yield storeRole(role);
            yield storeToken(auth_token);
            yield storeName(name);
            dispatch(updateLoggedIn(true));
            dispatch(setRole(role));
            dispatch(setToken(auth_token));
            dispatch(setName(name));
        }
        if (nav == 'phone') {
            const response = yield authApi.SIGNUP_FARMER_PHONE(roleName, token);
            const auth_token = response.data.token;
            const name = response.data.data.firstName;
            yield storeRole(role);
            yield storeToken(auth_token);
            yield storeName(name);
            dispatch(updateLoggedIn(true));
            dispatch(setRole(role));
            dispatch(setToken(auth_token));
            dispatch(setName(name));
        }
        // setisVisible(false)
        // navigation.navigate('Dashboard', {})
    });
    const renderRoleItem = ({ item }) => {
        const RoleComponent = componentMapping[item.comp];
        return (_jsxs(TouchableOpacity, Object.assign({ style: [styles.roleContainer, { backgroundColor: item.backgroundColor }], onPress: () => handleRoleSelection(item.name) }, { children: [RoleComponent && _jsx(RoleComponent, {}), _jsx(View, Object.assign({ style: styles.roleInfo }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH7, styles.roleName] }, { children: item.name })) }))] })));
    };
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsx(HeaderComponent, { title: 'Choose a role' }), _jsx(FlatList, { data: roles, renderItem: renderRoleItem, keyExtractor: (item) => item.name, showsVerticalScrollIndicator: false, contentContainerStyle: styles.listContainer }), _jsx(CustomModal, { isVisible: isVisible, setIsVisible: setisVisible })] })));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    listContainer: {
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    roleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingVertical: 10,
        marginVertical: 15,
        borderBottomWidth: 1,
        borderRadius: 8,
        borderBottomColor: '#ddd',
    },
    roleName: {
        color: '#000',
        marginLeft: 10,
    },
    roleImage: {
        width: 50,
        height: 70,
        borderRadius: 25,
        marginHorizontal: 10,
    },
    roleInfo: {
        flex: 1,
    },
});
export default ChooseRoleScreen;
