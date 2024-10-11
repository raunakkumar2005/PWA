import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Dropdown from '../assets/Dropdown';
import { useNavigation } from '@react-navigation/native';
const width = Dimensions.get('window').width;
export default function Table(props) {
    const navigation = useNavigation();
    const data = props.data;
    const heading = props.heading;
    const height = data.length === 0 ? props.height * .1 : props.height * ((data.length + 1) * 0.1);
    const proportion = data.length === 0 ? 100 : 100 / (data.length + 1);
    const handleAction = (data) => {
        navigation.navigate("Action", { "data": data });
    };
    return (_jsxs(ScrollView, Object.assign({ style: [styles.container, { height: height }], contentContainerStyle: { flexDirection: 'column' }, horizontal: true, showsVerticalScrollIndicator: true }, { children: [_jsx(View, Object.assign({ style: [styles.headingContainer, { height: `${proportion}%` }] }, { children: heading.map((item, index) => {
                    return (_jsx(View, Object.assign({ style: styles.heading }, { children: _jsx(Text, Object.assign({ style: index === 7 && props.action ? styles.heading2 : styles.heading1 }, { children: item })) })));
                }) })), data.map(item => {
                return (_jsx(View, Object.assign({ style: [styles.rowContainer, { height: `${proportion}%` }] }, { children: item.map((items, index) => {
                        if (index === item.length - 1) {
                            return;
                        }
                        return (_jsx(View, Object.assign({ style: styles.row }, { children: index === 7 && props.action ? (_jsxs(TouchableOpacity, Object.assign({ style: items === 'Accepted'
                                    ? styles.accept
                                    : items === 'Rejected'
                                        ? styles.reject
                                        : styles.action, onPress: () => handleAction(item), disabled: items !== 'Action' && true }, { children: [_jsx(Text, Object.assign({ style: items === 'Action' ? styles.text2 : styles.text3 }, { children: items })), items === 'Action' && _jsx(Dropdown, { color: 'white' })] }))) : (_jsx(Text, Object.assign({ style: index === props.commodity
                                    ? styles.commodity
                                    : index === props.weight
                                        ? styles.weight
                                        : index === props.expiry
                                            ? styles.expiry
                                            : index === props.grading
                                                ? styles.grading
                                                : styles.text1 }, { children: items }))) })));
                    }) })));
            })] })));
}
const styles = StyleSheet.create({
    container: {
        width: '95%',
        alignSelf: 'flex-end',
    },
    headingContainer: {
        backgroundColor: '#F7F7F7',
        flexDirection: 'row',
    },
    heading: {
        width: width * 0.33,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading1: {
        fontFamily: 'Poppins-Regular',
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
    },
    heading2: {
        fontFamily: 'Poppins-Regular',
        color: '#0C447D',
        fontSize: 14,
        textAlign: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        borderLeftWidth: 1,
        borderColor: '#E0E1E1',
    },
    row: {
        width: width * 0.33,
        height: '100%',
        borderBottomWidth: 1,
        borderColor: '#E0E1E1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        fontFamily: 'NotoSerif-Regular',
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
    },
    commodity: {
        fontFamily: 'NotoSerif-Regular',
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
        backgroundColor: '#FFE4F2',
        padding: 4,
        borderRadius: 10,
    },
    weight: {
        fontFamily: 'NotoSerif-Regular',
        color: '#0038FF',
        fontSize: 14,
        textAlign: 'center',
    },
    text2: {
        color: 'white',
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        marginRight: '5%',
    },
    text3: {
        color: 'white',
        fontFamily: 'Poppins-Regular',
        fontSize: 16.5,
    },
    action: {
        width: width * 0.25,
        height: '60%',
        backgroundColor: '#0C447D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        flexDirection: 'row',
    },
    accept: {
        width: width * 0.25,
        height: '60%',
        backgroundColor: '#00A241',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    reject: {
        width: width * 0.25,
        height: '60%',
        backgroundColor: '#FF5858',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    expiry: {
        fontFamily: 'NotoSerif-Regular',
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
        backgroundColor: '#FFE3AC',
        padding: 4,
        borderRadius: 10,
    },
    grading: {
        fontFamily: 'NotoSerif-Regular',
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
        backgroundColor: '#C8FFF5',
        padding: 4,
        borderRadius: 6,
    }
});
