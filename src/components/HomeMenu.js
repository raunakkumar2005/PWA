
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, } from "react-native";
import { useState } from "react";
import User from "../assets/User";
import Cross from "../assets/Cross";
import MyBookings from "../assets/MyBookings";
import Invoices from "../assets/Invoices";
import Language from "../assets/Language";
import Logout from "../assets/Logout";
import Documents from "../assets/Documents";
import WeightBridge from "../assets/WeightBrigde";
import BookWarehouse from "../assets/BookWarehouse";
import Add from "../assets/Add";
import Deposite from "../assets/Deposite";
import Comodities from "../assets/Commodities";
import Dropdown from "../assets/Dropdown";
import Withdrawal from "../assets/Withdrawal";
import TransactionHistory from "../assets/TransactionHistory";
import WeightVerification from "../assets/WeigthVerification";
import AddManager from "../assets/AddManager";
import DashBoard from "../assets/DashBoard";
import { removeToken } from "../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setRole } from "../redux/slices/user";
import { updateLoggedIn } from "../redux/slices/user";
import { useNavigation } from "@react-navigation/native";
import BankLoan from "../assets/BankLoan";
import Loan from "../assets/Loan";
import WishList from "../assets/WishList";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { height } = Dimensions.get("window");
export default function HomeMenu(props) {
    const dispatch = useDispatch();
    const variant = useSelector((state) => state.user.role);
    const name = useSelector((state) => state.user.name);
    const [visible, setVisible] = useState(false);
    const navigation = useNavigation();
    const handleNavigation = (route) => __awaiter(this, void 0, void 0, function* () {
        props.exitCallBack();
        if (route === "Log out") {
            yield removeToken();
            dispatch(setToken(""));
            dispatch(setRole(""));
            dispatch(updateLoggedIn(false));
            navigation.navigate("LoginAs", {});
            window.location.reload();
            return;
        }
        if (route === "Withdrawal" && variant === "owner") {
            console.log(1001);
            navigation.navigate("WithdrawalData", {});
            return;
        }
        navigation.navigate(route, {});
    });
    const MenuOptions = [
        ["My Bookings", _jsx(MyBookings, {}), styles.shift1],
        ['Loan', _jsx(Loan,{}), styles.shift1],
        ['Wishlist', _jsx(WishList, {}), styles.shift1],
        ['Withdrawal', _jsx(Withdrawal, {}), styles.shift1],
        ['Invoices', _jsx(Invoices, {}), styles.shift2],
        ["Language", _jsx(Language, {}), styles.shift2],
        ["Log out", _jsx(Logout, {}), {}, styles.menuLogout],
    ];
    const MenuOwnerOptions = [
        ["Add warehouse", _jsx(Add, {})],
        ["Add Manager", _jsx(AddManager, {}), styles.shift2],
        ["Book warehouse", _jsx(BookWarehouse, {}), {}],
        ["Commodities", _jsx(Comodities, {}), {}],
        [
            "Weighbridge data",
            _jsx(WeightBridge, {}),
            {},
            { fontFamily: "", color: "" },
            true,
            ["New weighbridge data", "Weighbridge details"],
        ],
        [
            "Deposit",
            _jsx(Deposite, {}),
            styles.shift2,
            { fontFamily: "", color: "" },
            true,
            ["New deposit", "Pending transactions", "Grading and expiry details"],
        ],
        ["Owner Dashboard", _jsx(DashBoard, {}), styles.shift1],
        ["Weight Verification", _jsx(WeightVerification, {}), styles.shift1],
        ["Transition history", _jsx(TransactionHistory, {}), styles.shift2],
        ["Withdrawal", _jsx(Withdrawal, {}), styles.shift1],
        ["Invoices", _jsx(Invoices, {}), styles.shift2],
        ["Documents", _jsx(Documents, {}), styles.shift2],
        ["Log out", _jsx(Logout, {}), {}, styles.menuLogout],
    ];
    const MenuManagerOptions = [
        // ['Add warehouse', <Add />, {}],
        ["Book warehouse", _jsx(BookWarehouse, {}), {}],
        ["Commodities", _jsx(Comodities, {}), {}],
        // [
        //   'Weighbridge data',
        //   <WeightBridge />,
        //   {},
        //   { fontFamily: '', color: '' },
        //   true,
        //   ['New weighbridge data', 'Weighbridge details'],
        // ],
        // [
        //   'Deposit',
        //   <Deposite />,
        //   styles.shift2,
        //   { fontFamily: '', color: '' },
        //   true,
        //   ['New deposit', 'Pending transactions', 'Grading and expiry details'],
        // ],
        ["Owner Dashboard", _jsx(DashBoard, {}), styles.shift1],
        // ['Weight Verification',<WeightVerification/>,styles.shift1],
        // ['Withdrawal', <Withdrawal />, styles.shift1],
        // ['Invoices', <Invoices />, styles.shift2],
        // ['Documents', <Documents />, styles.shift2],
        ["Log out", _jsx(Logout, {}), {}, styles.menuLogout],
    ];
    return (_jsx(View, Object.assign({ style: styles.menuContainer }, { children: _jsxs(View, Object.assign({ style: styles.menu }, { children: [variant === "user" && (_jsxs(_Fragment, { children: [_jsx(View, Object.assign({ style: styles.menuHeaderContainer }, { children: _jsxs(View, Object.assign({ style: styles.menuHeader }, { children: [_jsxs(View, Object.assign({ style: styles.menuHeaderButton }, { children: [_jsx(User, {}), _jsx(Text, Object.assign({ style: styles.menuHeaderText }, { children: name }))] })), _jsx(TouchableOpacity, Object.assign({ onPress: props.exitCallBack }, { children: _jsx(Cross, {}) }))] })) })), _jsx(View, Object.assign({ style: styles.menus }, { children: MenuOptions.map((item) => {
                                const logout = item[3] === styles.menuLogout ? styles.menuLogout : {};
                                return (_jsx(_Fragment, { children: _jsxs(TouchableOpacity, Object.assign({ style: [styles.menuOptions, item[2]], onPress: () => handleNavigation(item[0]) }, { children: [item[1], _jsx(Text, Object.assign({ style: [styles.menuOptionText, logout] }, { children: item[0] }))] })) }));
                            }) }))] })), variant === "owner" && (_jsxs(_Fragment, { children: [_jsx(View, Object.assign({ style: styles.menuHeaderOwner }, { children: _jsx(TouchableOpacity, Object.assign({ onPress: props.exitCallBack }, { children: _jsx(Cross, { width: 32, height: 32 }) })) })), _jsxs(View, Object.assign({ style: styles.ownerNamePhotoContainer }, { children: [_jsx(View, { style: styles.ownerPhotoContainer }), _jsx(Text, Object.assign({ style: styles.ownerName }, { children: name }))] })), _jsx(ScrollView, Object.assign({ contentContainerStyle: styles.menus }, { children: MenuOwnerOptions.map((item) => {
                                var _a;
                                const logout = item[3] == styles.menuLogout ? styles.menuLogout : {};
                                return (_jsxs(_Fragment, { children: [_jsxs(TouchableOpacity, Object.assign({ style: [styles.menuOptions, item[2]], onPress: () => {
                                                setVisible(!visible);
                                                !item[4] && handleNavigation(item[0]);
                                            } }, { children: [item[1], _jsx(Text, Object.assign({ style: [styles.menuOptionText, logout] }, { children: item[0] })), item[4] && _jsx(Dropdown, {})] })), visible &&
                                            item[4] &&
                                            ((_a = item[5]) === null || _a === void 0 ? void 0 : _a.map((item) => (_jsx(TouchableOpacity, Object.assign({ style: styles.dropDownOption, onPress: () => handleNavigation(item) }, { children: _jsx(Text, Object.assign({ style: [styles.menuOptionText, { flexGrow: 0 }] }, { children: item })) })))))] }));
                            }) }))] })), variant === "manager" && (_jsxs(_Fragment, { children: [_jsx(View, Object.assign({ style: styles.menuHeaderOwner }, { children: _jsx(TouchableOpacity, Object.assign({ onPress: props.exitCallBack }, { children: _jsx(Cross, { width: 32, height: 32 }) })) })), _jsxs(View, Object.assign({ style: styles.ownerNamePhotoContainer }, { children: [_jsx(View, { style: styles.ownerPhotoContainer }), _jsx(Text, Object.assign({ style: styles.ownerName }, { children: name }))] })), _jsx(ScrollView, Object.assign({ contentContainerStyle: styles.menus }, { children: MenuManagerOptions.map((item) => {
                                var _a;
                                const logout = item[3] == styles.menuLogout ? styles.menuLogout : {};
                                return (_jsxs(_Fragment, { children: [_jsxs(TouchableOpacity, Object.assign({ style: [styles.menuOptions, item[2]], onPress: () => {
                                                setVisible(!visible);
                                                !item[4] && handleNavigation(item[0]);
                                            } }, { children: [item[1], _jsx(Text, Object.assign({ style: [styles.menuOptionText, logout] }, { children: item[0] })), item[4] && _jsx(Dropdown, {})] })), visible &&
                                            item[4] &&
                                            ((_a = item[5]) === null || _a === void 0 ? void 0 : _a.map((item) => (_jsx(TouchableOpacity, Object.assign({ style: styles.dropDownOption, onPress: () => handleNavigation(item) }, { children: _jsx(Text, Object.assign({ style: [styles.menuOptionText, { flexGrow: 0 }] }, { children: item })) })))))] }));
                            }) }))] }))] })) })));
}
const styles = StyleSheet.create({
    menuContainer: {
        backgroundColor: "rgba(0,0,0,0.4)",
        flex: 1,
    },
    menu: {
        backgroundColor: "white",
        height: "100%",
        width: "75%",
    },
    menuHeaderContainer: {
        width: "100%",
        height: 75,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0
    },
    menuHeader: {
        width: "90%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    menuHeaderButton: {
        flexDirection: "row",
        alignItems: "center",
        width: "80%",
    },
    menuHeaderText: {
        flex: 1,
        fontFamily: "NotoSerif-Regular",
        color: "black",
        textAlign: "center",
        alignSelf: "center",
    },
    menus: {
        alignItems: "center",
        paddingTop: "8%",
    },
    menuOptions: {
        width: "80%",
        height: height * 0.05,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "3%",
    },
    menuLogout: {
        fontFamily: "NotoSerif-Regular",
        color: "#CC0000",
    },
    menuOptionText: {
        fontFamily: "NotoSerif-Regular",
        color: "black",
        paddingLeft: "5%",
        paddingRight: "10%",
        flexGrow: 1,
    },
    shift1: {
        paddingLeft: "1%",
    },
    shift2: {
        paddingLeft: "1.5%",
    },
    menuHeaderOwner: {
        width: "100%",
        height: "5%",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingTop: "5%",
    },
    ownerNamePhotoContainer: {
        width: "80%",
        height: "13%",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
    },
    ownerPhotoContainer: {
        width: "30%",
        aspectRatio: 1,
        borderRadius: 100,
        backgroundColor: "black",
        marginRight: "5%",
    },
    ownerName: {
        color: "black",
        fontFamily: "Poppins-SemiBold",
    },
    dropDownOption: {
        width: "78%",
        height: height * 0.05,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "3%",
        borderLeftWidth: 1,
        borderColor: "grey",
        marginLeft: "10%",
    },
});
