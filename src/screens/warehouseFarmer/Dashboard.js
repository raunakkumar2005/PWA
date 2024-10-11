
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, View, Modal, TouchableOpacity, Dimensions, ScrollView, } from "react-native";
import { useEffect, useState } from "react";
import HomeHeader from "../../components/HomeHeader";
import NavBar from "../../components/NavBar";
import HomeMenu from "../../components/HomeMenu";
import HomeNotification from "../../components/HomeNotification";
import Dropdown from "../../assets/Dropdown";
// import { BarChart } from "react-native-gifted-charts";
// import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";
import { DashboardData } from "../../service/api";
// import Toast from "react-native-toast-message";
const height = Dimensions.get("window").height;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Bar should be config based on api response
const Dashboard = ({ navigation }) => {
    const variant = useSelector((state) => state.user.role);
    const width = Dimensions.get("window").width;
    const [data, setData] = useState([]);
    const [graphData, setGraphData] = useState([
        { value: 10 },
        { value: 30 },
        { value: 57 },
    ]);
    const [menu, setMenu] = useState(false);
    const [notification, setNotification] = useState(false);
    const [range, setRange] = useState("Last 3 months");
    const [toggleRange, setToggleRange] = useState(false);
    const rangeOptions = [
        "Today",
        "This week",
        "This month",
        "Last 3 months",
        "Last 6 months",
        "Last 1 year",
    ];
    const dashboardOptions = [
        ["Current\nbookings", "#FFE4F2"],
        ["Total\nbookings", "#C8FFF5"],
        ["Total\ngoods", "#FFE3AC"],
        ["Pending\nrequests", "#FFE4F2"],
        ["Approved\nrequests", "#C8FFF5"],
        ["Rejected\nrequests", "#FFE3AC"],
    ];
    const handleMenu = () => {
        setMenu(!menu);
    };
    const handleNotification = () => {
        setNotification(!notification);
    };
    const handleToggleRange = () => {
        setToggleRange(!toggleRange);
    };
    // changing the content based on range functionality here
    const handleRange = (newRange) => {
        setRange(newRange);
        setToggleRange(!toggleRange);
    };
    const handleBookings = () => {
        navigation.navigate("MyBooking");
    };
    const renderDropdownOptions = (option) => {
        return (_jsx(TouchableOpacity, Object.assign({ style: styles.dropDownOptions, onPress: () => handleRange(option) }, { children: _jsx(Text, Object.assign({ style: styles.dropDownText }, { children: option })) })));
    };
    const renderDashboardOptions = (options, index) => {
        return (_jsxs(View, Object.assign({ style: [styles.dashboardOption, { backgroundColor: options[1] }] }, { children: [_jsx(Text, Object.assign({ style: styles.dashboardOptionText }, { children: options[0] })), _jsx(Text, Object.assign({ style: styles.dashboardOptionNumber }, { children: data[index] }))] })));
    };
    useEffect(() => {
        const getData = () => __awaiter(void 0, void 0, void 0, function* () {
            const temp = yield DashboardData(range);
            setData(temp);
        });
        getData();
    }, [range]);
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsxs(ScrollView, Object.assign({ style: styles.container }, { children: [variant === "manager" && (_jsx(View, Object.assign({ style: styles.managerHeadContainer }, { children: _jsx(HomeHeader, { menuCallBack: handleMenu, notificationCallBack: handleNotification, occupy: true }) }))), variant === "owner" && (_jsxs(_Fragment, { children: [_jsx(HomeHeader, { menuCallBack: handleMenu, notificationCallBack: handleNotification, occupy: true }), _jsxs(View, Object.assign({ style: styles.addWarehouseContainer }, { children: [_jsx(Text, Object.assign({ style: [
                                            {
                                                textAlign: "center",
                                            },
                                            styles.dropDownText,
                                        ] }, { children: "Adding 10 warehouses at once unlocks greater efficiency and saves you 20% on your monthly plan." })), _jsx(TouchableOpacity, Object.assign({ style: styles.addWarehouseButton, onPress: () => {
                                            navigation.navigate("AddWarehouse");
                                        } }, { children: _jsx(Text, Object.assign({ style: styles.buttonText }, { children: "Add warehouse" })) }))] }))] })), _jsxs(View, Object.assign({ style: styles.dashboardContainer }, { children: [variant === "user" && (_jsxs(_Fragment, { children: [_jsx(HomeHeader, { menuCallBack: handleMenu, notificationCallBack: handleNotification }), _jsx(Text, Object.assign({ style: styles.heading }, { children: "My bookings" }))] })), _jsxs(View, Object.assign({ style: styles.dropDownContainer }, { children: [_jsx(Text, Object.assign({ style: styles.bookings }, { children: "Bookings" })), _jsxs(TouchableOpacity, Object.assign({ onPress: handleToggleRange, style: styles.dropDownButton }, { children: [_jsx(Text, Object.assign({ style: styles.dropDownText }, { children: range })), _jsx(Dropdown, {})] })), toggleRange && (_jsx(View, Object.assign({ style: styles.dropDownOptionsContainer }, { children: rangeOptions.map((option) => renderDropdownOptions(option)) })))] })), _jsxs(View, Object.assign({ style: styles.dashboardOptionsContainer }, { children: [_jsx(View, Object.assign({ style: styles.dashboardOptionRowContainer }, { children: dashboardOptions
                                            .splice(0, 3)
                                            .map((option, index) => renderDashboardOptions(option, index)) })), _jsx(View, Object.assign({ style: styles.dashboardOptionRowContainer }, { children: dashboardOptions
                                            .splice(0, 3)
                                            .map((option, index) => renderDashboardOptions(option, index + 3)) }))] })), _jsx(View, Object.assign({ style: styles.graphContainer }, { children: _jsxs(View, Object.assign({ style: styles.colorIndicator }, { children: [_jsx(View, { style: styles.colorIndicatorText }), _jsx(Text, Object.assign({ style: styles.dashboardOptionText }, { children: "Bookings in MT" }))] })) }))] }))] })), _jsx(NavBar, { current: variant === "user" ? "Home" : "Dashboard" }), _jsx(Modal, Object.assign({ visible: menu, transparent: true }, { children: _jsx(HomeMenu, { exitCallBack: handleMenu }) })), _jsx(Modal, Object.assign({ visible: notification, transparent: true }, { children: _jsx(HomeNotification, { exitCallBack: handleNotification, Notification: [] }) }))] })));
};
export default Dashboard;
const styles = StyleSheet.create({
    container: { backgroundColor: "white", height: "100%" },
    ownerHeadContainer: {
        width: "100%",
        height: height * 0.2,
        alignItems: "center",
        marginBottom: height * 0.16,
    },
    managerHeadContainer: {
        width: "100%",
        height: height * 0.2,
        alignItems: "center",
        marginBottom: height * 0.01,
    },
    addWarehouseContainer: {
        borderWidth: 1,
        borderColor: "rgba(206, 218, 229, 1)",
        width: "90%",
        height: 200,
        zIndex: 2,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        padding: "10%",
        borderRadius: 10,
        marginLeft:25
    },
    addWarehouseButton: {
        width: 260,
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0C447D",
        borderRadius: 10,
        marginTop: 24,
    },
    heading: {
        fontFamily: "Poppins-SemiBold",
        color: "black",
        fontSize: 20,
    },
    navigationButtonContainer: {
        flexDirection: "row",
        width: "100%",
        height: height * 0.055,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 4,
    },
    focusButton: {
        width: "47%",
        height: "100%",
        backgroundColor: "#0038FF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
    },
    idleButton: {
        width: "47%",
        height: "100%",
        backgroundColor: "#F7F7F7",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontFamily: "Poppins-Regular",
        color: "white",
        fontSize: 16,
    },
    buttonTextIdle: {
        fontFamily: "Poppins-Regular",
        color: "#989E9A",
        fontSize: 16,
    },
    bookings: { color: "black", fontSize: 18, fontFamily: "Poppins-SemiBold" },
    dashboardContainer: {
        flexGrow: 1,
        backgroundColor: "white",
        alignItems: "center",
    },
    dropDownContainer: {
        height: height * 0.04,
        width: "100%",
        marginTop: 14,
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: "row",
        paddingHorizontal: "4%",
    },
    dropDownButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    dropDownText: {
        fontFamily: "NotoSerif-Regular",
        color: "black",
        fontSize: 14,
        marginRight: 8,
    },
    dropDownOptionsContainer: {
        backgroundColor: "white",
        width: "50%",
        zIndex: 2,
        position: "absolute",
        top: "110%",
        height: "760%",
        right: 0,
        marginRight: 10,
        paddingVertical: "5%",
        borderColor: "#989E9A",
        borderWidth: 1,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    dropDownOptions: { height: "16.66%", width: "80%", justifyContent: "center" },
    dashboardOptionsContainer: {
        width: "100%",
        height: height * 0.3,
        paddingHorizontal: "4%",
        justifyContent: "space-between",
        marginTop: 24,
    },
    dashboardOptionRowContainer: {
        width: "100%",
        height: "46%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    dashboardOption: {
        width: "28.66%",
        height: "100%",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    dashboardOptionText: {
        fontFamily: "NotoSerif-Regular",
        color: "black",
        fontSize: 14,
        textAlign: "center",
    },
    dashboardOptionNumber: {
        fontFamily: "Poppins-SemiBold",
        color: "black",
        fontSize: 16,
    },
    graphContainer: {
        marginTop: 24,
        borderWidth: 1,
        borderColor: "#E0E1E1",
        width: "90%",
        padding: "5%",
        borderRadius: 10,
        marginBottom: 10,
    },
    colorIndicator: {
        flexDirection: "row",
        width: "60%",
        alignItems: "center",
        paddingHorizontal: "4%",
        marginTop: 3,
    },
    colorIndicatorText: {
        width: 16,
        aspectRatio: 1,
        backgroundColor: "#6AC1FF",
        marginRight: 5,
        borderRadius: 4,
    },
});
