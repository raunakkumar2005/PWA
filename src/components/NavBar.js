import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Profile from '../assets/Profile';
import Warehouse from '../assets/Warehouse';
import Home from '../assets/Home';
import MyBookings from '../assets/MyBookings';
import DashBoard from '../assets/DashBoard';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
export default function NavBar(props) {
    const variant = useSelector((state) => state.user.role);
    const navigation = useNavigation();
    const handleNavigation = (route) => {
        console.log(route);
        if (route === 'Home' && variant === 'user') {
            navigation.navigate('Dashboard', {});
            return;
        }
        if (route === 'Warehouse' && variant === 'user') {
            navigation.navigate('SearchWarehouse', {});
            return;
        }
        navigation.navigate(route, {});
    };
    const returnNavigationFunction = (route) => {
        console.log(route);
        if (props.current !== route) {
            return handleNavigation(route);
        }
    };
    const navElements = [
        variant === 'user' ? [Home, 'Home'] : [DashBoard, 'Dashboard'],
        [Warehouse, 'Warehouse'],
        variant === 'user' ? [MyBookings, 'MyBooking'] : [MyBookings, 'Bookings'],
        [Profile, 'Profile'],
    ];
    const renderNavBar = (navElement) => {
        const Icon = navElement[0];
        const condition = props.current == navElement[1];
        return (_jsxs(TouchableOpacity, Object.assign({ style: styles.navbarElement, disabled: condition, onPress: () => returnNavigationFunction(navElement[1]) }, { children: [_jsx(Icon, { selected: condition, filled: condition }), _jsx(Text, Object.assign({ style: condition ? styles.navTextCurrent : styles.navText }, { children: navElement[1] }))] })));
    };
    return (_jsx(View, Object.assign({ style: styles.navbarContainer }, { children: navElements.map(item => renderNavBar(item)) })));
}
const styles = StyleSheet.create({
    navbarContainer: {
        width: '100%',
        height: 75,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#ECECEC',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navbarElement: {
        flex: 1,
        height: '65%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navTextCurrent: {
        color: '#0C447D',
        fontFamily: 'NotoSerif-Regular',
    },
    navText: {
        color: '#545554',
        fontFamily: 'NotoSerif-Regular',
    },
});
