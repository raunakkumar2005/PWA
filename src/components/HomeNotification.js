import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { Text, View, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { useState } from 'react';
import Cross from '../assets/Cross';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build({ $rem: Dimensions.get('window').width / 380 });
export default function HomeNotification(props) {
    const notificationAll = props.Notification.length > 1
        ? props.Notification
        : [
            {
                content: 'Your booking request to store wheat has been accepted by the Janko warehouse, Bihar. Your booking ID is #55678',
                read: false,
                time: '2 hrs ago',
            },
            {
                content: 'Your booking request has been sent to the Janko warehouse, Bihar',
                read: false,
                time: '1 day ago',
            },
            {
                content: 'Your account has been created',
                read: true,
                time: '2 days ago',
            },
            {
                content: 'Your booking request to store wheat has been accepted by the Janko warehouse, Bihar. Your booking ID is #55678',
                read: false,
                time: '2 hrs ago',
            },
            {
                content: 'Your booking request has been sent to the Janko warehouse, Bihar',
                read: false,
                time: '1 day ago',
            },
            {
                content: 'Your account has been created',
                read: true,
                time: '2 days ago',
            },
            {
                content: 'Your booking request to store wheat has been accepted by the Janko warehouse, Bihar. Your booking ID is #55678',
                read: false,
                time: '2 hrs ago',
            },
            {
                content: 'Your booking request has been sent to the Janko warehouse, Bihar',
                read: false,
                time: '1 day ago',
            },
            {
                content: 'Your account has been created',
                read: true,
                time: '2 days ago',
            },
        ];
    // Based on api logic needs to be implemented to deal with read unread notification and unread count for now data is static
    const [currentPage, setCurrentPage] = useState('All');
    const notificationRead = notificationAll.filter(item => item.read);
    const notificationUnRead = notificationAll.filter(item => !item.read);
    const [notificationUnReadCount, setNotificationUnReadCount] = useState(notificationUnRead.length);
    const handleAll = () => {
        setCurrentPage('All');
    };
    const handleUnRead = () => {
        setCurrentPage('UnRead');
    };
    const handleRead = () => {
        setCurrentPage('Read');
    };
    return (_jsx(View, Object.assign({ style: styles.notificationContainer }, { children: _jsxs(View, Object.assign({ style: styles.notification }, { children: [_jsxs(View, Object.assign({ style: styles.notificationHeader }, { children: [_jsx(View, Object.assign({ style: styles.notificationHeaderTextContainer }, { children: _jsx(Text, Object.assign({ style: styles.notificationHeaderText }, { children: "Notifications" })) })), _jsx(TouchableOpacity, Object.assign({ style: styles.headerButton, onPress: props.exitCallBack }, { children: _jsx(Cross, {}) }))] })), _jsxs(View, Object.assign({ style: styles.notificationOptionsContainer }, { children: [_jsxs(TouchableOpacity, Object.assign({ style: styles.notificationOptions, onPress: handleAll }, { children: [_jsx(Text, Object.assign({ style: currentPage == 'All'
                                        ? styles.notificationOptionsTextActive
                                        : styles.notificationOptionsTextIdle }, { children: "All" })), _jsx(View, Object.assign({ style: styles.notificationOptionCountContainer }, { children: _jsx(Text, Object.assign({ style: styles.notificationOptionCount }, { children: notificationUnReadCount })) }))] })), _jsx(TouchableOpacity, Object.assign({ style: styles.notificationOptions, onPress: handleUnRead }, { children: _jsx(Text, Object.assign({ style: currentPage == 'UnRead'
                                    ? styles.notificationOptionsTextActive
                                    : styles.notificationOptionsTextIdle }, { children: "Unread" })) })), _jsx(TouchableOpacity, Object.assign({ style: styles.notificationOptions, onPress: handleRead }, { children: _jsx(Text, Object.assign({ style: currentPage == 'Read'
                                    ? styles.notificationOptionsTextActive
                                    : styles.notificationOptionsTextIdle }, { children: "Read" })) }))] })), currentPage == 'All' && (_jsx(FlatList, { data: notificationAll, renderItem: ({ item }) => {
                        return (_jsxs(View, Object.assign({ style: item.read
                                ? styles.notificationRead
                                : styles.notificationUnRead }, { children: [_jsx(Text, Object.assign({ style: styles.notifications }, { children: item.content })), _jsx(Text, Object.assign({ style: styles.notificationsTime }, { children: item.time }))] })));
                    } })), currentPage == 'UnRead' && (_jsx(FlatList, { data: notificationUnRead, renderItem: ({ item }) => {
                        return (_jsxs(View, Object.assign({ style: styles.notificationUnRead }, { children: [_jsx(Text, Object.assign({ style: styles.notifications }, { children: item.content })), _jsx(Text, Object.assign({ style: styles.notificationsTime }, { children: item.time }))] })));
                    } })), currentPage == 'Read' && (_jsx(FlatList, { data: notificationRead, renderItem: ({ item }) => {
                        return (_jsxs(View, Object.assign({ style: styles.notificationRead }, { children: [_jsx(Text, Object.assign({ style: styles.notifications }, { children: item.content })), _jsx(Text, Object.assign({ style: styles.notificationsTime }, { children: item.time }))] })));
                    } }))] })) })));
}
const styles = EStyleSheet.create({
    notificationContainer: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notification: {
        backgroundColor: 'white',
        width: '90%',
        height: '82%',
    },
    notificationHeader: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationHeaderTextContainer: {
        flex: 5.5,
        alignItems: 'flex-end',
    },
    notificationHeaderText: {
        fontFamily: 'Poppins-SemiBold',
        color: 'black',
        fontSize: 20,
    },
    headerButton: {
        flex: 3,
        alignItems: 'center',
    },
    notificationOptionsContainer: {
        height: '10%',
        width: '100%',
        flexDirection: 'row',
    },
    notificationOptions: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#707371',
    },
    notificationOptionsTextActive: {
        color: 'black',
        fontWeight: '500',
        marginRight: '2rem',
    },
    notificationOptionsTextIdle: {
        color: 'grey',
        fontWeight: '400',
        marginRight: '2rem',
    },
    notificationOptionCountContainer: {
        backgroundColor: '#0C447D',
        width: '15%',
        aspectRatio: 1,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationOptionCount: {
        color: 'white',
        fontSize: '9rem',
    },
    notificationUnRead: {
        backgroundColor: '#CEDAE5',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '5%',
        paddingHorizontal: '7.5%',
        borderBottomWidth: 1,
        borderColor: '#707371',
    },
    notificationRead: {
        width: '100%',
        justifyContent: 'center',
        paddingVertical: '5%',
        paddingHorizontal: '7.5%',
        borderBottomWidth: 1,
        borderColor: '#707371',
    },
    notifications: {
        color: 'black',
        fontFamily: 'NotoSerif-Regular',
        fontSize: '15rem',
        marginBottom: '2%',
    },
    notificationsTime: {
        color: '#707371',
        alignSelf: 'flex-start',
    },
});
