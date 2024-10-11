import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, } from 'react-native';
import { useState } from 'react';
import HeaderComponent from '../../components/Header';
import CheckBox from '../../components/CheckBox';
import CheckButton from '../../components/CheckButton';
const Filter = ({ navigation }) => {
    const [filterTextData, setFilterTextData] = useState({
        'Warehouse license': {
            'WDRA license': false,
            'FSSAI license': false,
            'Procurement license': false,
            'Storage license': false,
        },
        'Ancillary Services': {
            'Warehouse Management': false,
            Finance: false,
            'Quality Testing': false,
            Fumigation: false,
            Monitoring: false,
            Insurance: false,
        },
        Amenties: {
            'Pakka room': false,
            'Kacha room': false,
        },
        'Booking Option': {
            Full: false,
            Partial: false,
        },
        'Warehouse structure': {
            RCC: false,
            PEB: false,
            Hybrid: false,
        },
        'Seperate guard room': {
            Yes: false,
            No: false,
        },
        'Brokerage room': {
            Yes: false,
            No: false,
        },
    });
    // min max data should be changed based on the data from client
    const [filterNumericData, setFilterNumericData] = useState({
        'Distance from rake point (km)': [0, 10],
        'Distance from APMC point (km)': [0, 10],
    });
    const handleTextFilter = (option, value) => {
        const temp = filterTextData;
        temp[option][value] = !temp[option][value];
        setFilterTextData(temp);
    };
    const handleNumericFilter = (option, data, variant) => {
        const temp = filterNumericData;
        if (variant === 'min') {
            temp[option][0] = data;
        }
        else {
            temp[option][1] = data;
        }
        setFilterNumericData(temp);
    };
    const filtersWithCheckBox = [
        [
            'Warehouse license',
            [
                'WDRA license',
                'FSSAI license',
                'Procurement license',
                'Storage license',
            ],
        ],
        [
            'Ancillary Services',
            [
                'Warehouse Management',
                'Finance',
                'Quality Testing',
                'Fumigation',
                'Monitoring',
                'Insurance',
            ],
        ],
        ['Amenties', ['Pakka room', 'Kacha room']],
        ['Booking Option', ['Full', 'Partial']],
        ['Warehouse structure', ['RCC', 'PEB', 'Hybrid']],
    ];
    const filtersWithCheckButton = [
        'Seperate guard room',
        'Brokerage room',
    ];
    const filtersWithSilder = [
        'Distance from rake point (km)',
        'Distance from APMC point (km)',
    ];
    const renderFilterWithCheckBox = (filterHeader, filterContent) => {
        return (_jsxs(View, Object.assign({ style: styles.filter }, { children: [_jsx(Text, Object.assign({ style: styles.filterHeader }, { children: filterHeader })), filterContent.map((content) => {
                    return (_jsxs(View, Object.assign({ style: styles.filterOption }, { children: [_jsx(CheckBox, { onPress: () => handleTextFilter(filterHeader, content) }), _jsx(Text, Object.assign({ style: styles.filterOptionText }, { children: content }))] })));
                })] })));
    };
    const renderFilterWithCheckButton = (filterHeader) => {
        return (_jsxs(View, Object.assign({ style: styles.filter }, { children: [_jsx(Text, Object.assign({ style: styles.filterHeader }, { children: filterHeader })), _jsx(View, Object.assign({ style: styles.filterOptionContainer }, { children: ['Yes', 'No'].map((content) => {
                        return (_jsxs(View, Object.assign({ style: styles.filterOption }, { children: [_jsx(CheckButton, { onPress: () => handleTextFilter(filterHeader, content) }), _jsx(Text, Object.assign({ style: styles.filterOptionText }, { children: content }))] })));
                    }) }))] })));
    };
    // min max data should be changed based on the data from client
    const renderFilterWithSilder = (filterHeader) => {
        return (_jsx(View, Object.assign({ style: styles.filter }, { children: _jsx(Text, Object.assign({ style: styles.filterHeader }, { children: filterHeader })) })));
    };
    // write search logic here for now it goes back to the search page
    // filterTextData and filterNumericData contains all filter data for query
    const handleSearch = () => {
        navigation.goBack();
    };
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [_jsx(HeaderComponent, { title: 'Filters' }), _jsxs(ScrollView, Object.assign({ contentContainerStyle: styles.filterContainer }, { children: [filtersWithCheckBox
                        .slice(0, 4)
                        .map(item => renderFilterWithCheckBox(item[0], item[1])), filtersWithCheckButton.map(item => renderFilterWithCheckButton(item)), renderFilterWithCheckBox(filtersWithCheckBox[4][0], filtersWithCheckBox[4][1]), filtersWithSilder.map(item => renderFilterWithSilder(item)), _jsx(TouchableOpacity, Object.assign({ style: styles.filterButton, onPress: handleSearch }, { children: _jsx(Text, Object.assign({ style: styles.filterButtonText }, { children: "View 25 warehouses" })) }))] }))] })));
};
export default Filter;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f7f6',
    },
    filterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    filter: {
        backgroundColor: 'white',
        width: '90%',
        justifyContent: 'center',
        borderRadius: 10,
        padding: '3.5%',
        marginBottom: '3%',
    },
    filterHeader: {
        color: 'black',
        fontFamily: 'Poppins-Regular',
        marginBottom: '1.2%',
    },
    filterOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '1.7%',
        flex: 1,
    },
    filterOptionText: {
        color: 'black',
        fontFamily: 'NotoSerif-Regular',
        marginLeft: '2%',
    },
    filterOptionSilderText: {
        color: 'black',
        fontFamily: 'Poppins-SemiBold',
        marginLeft: '2%',
    },
    filterOptionContainer: {
        flexDirection: 'row',
    },
    filterInput: {
        width: '90%',
        aspectRatio: 2.5,
        borderWidth: 1,
        borderColor: '#939CA3',
        borderRadius: 8,
        color: 'black',
        fontFamily: 'NotoSerif-Regular',
        paddingLeft: '8%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterButton: {
        width: '80%',
        aspectRatio: 5,
        borderRadius: 10,
        backgroundColor: '#0C447D',
        marginTop: '1.5%',
        marginBottom: '4%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterButtonText: {
        color: 'white',
        fontFamily: 'Poppins-Regular',
    },
});
