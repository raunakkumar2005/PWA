import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, ScrollView, } from 'react-native';
import { useEffect, useState } from 'react';
import Back from '../../assets/Back';
import Searching from '../../assets/Searching';
import Sort from '../../assets/Sort';
import Table from '../../components/Table';
import Next from '../../assets/Next';
import Prev from '../../assets/Prev';
import { GradeAndDeposit } from '../../service/api';
import { convertDate } from '../../utils/date';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const height = Dimensions.get('window').height;
// convert date should be placed in utils
const GradingDetails = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [toggleSort, setToggleSort] = useState(false);
    const [back, setBack] = useState(false);
    const [front, setFront] = useState(true);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);
    const rangeOptions = [
        'Start date',
        'End date',
        'commodity type',
        'Customer name : A to Z',
        'Customer name : Z to A',
        'Total weight : Low to high',
        'Total weight : High to low',
        'Accepted',
        'Rejected',
    ];
    const heading = [
        'Deposit ID',
        'Commodity',
        'Deposit date',
        'Slot no.',
        'Revalidation date',
        'Expiry date',
        'Foreign\nmatters in %',
        'Other food\ngrains in %',
        'Other\nWheat in %',
        'Damaged\ngrains in %',
        'Immature and\nshrivelled grains in %',
        'Weevilled\ngrains in %',
        'Grade',
    ];
    const [Staticdata, setStaticData] = useState([]);
    const [data, setData] = useState([]);
    // handle search logic here
    const handleSearch = () => { };
    // handle sort logic here
    const handleSort = (option) => { };
    const handleToggleSort = () => {
        setToggleSort(!toggleSort);
    };
    const renderDropdownOptions = (option) => {
        return (_jsx(TouchableOpacity, Object.assign({ style: styles.dropDownOptions, onPress: () => handleSort(option) }, { children: _jsx(Text, Object.assign({ style: styles.dropDownText }, { children: option })) })));
    };
    const handleNext = () => {
        if (max + 10 > Staticdata.length) {
            if (max + 1 <= Staticdata.length) {
                setMin(max);
                setMax(max + (Staticdata.length % 10));
                setFront(false);
                setBack(true);
                setData(Staticdata.slice(max, max + (Staticdata.length % 10)));
                return;
            }
            return;
        }
        if (max + 10 === Staticdata.length) {
            setMin(max);
            setMax(max + 10);
            setFront(false);
            setBack(true);
            setData(Staticdata.slice(max, max + 10));
            return;
        }
        setMin(max);
        setMax(max + 10);
        setBack(true);
        setFront(true);
        setData(Staticdata.slice(max, max + 10));
    };
    const handlePrev = () => {
        if (max % 10 > 1) {
            setMax(max - (max % 10));
            setMin(min - 10);
            setData(Staticdata.slice(min - 10, max - (max % 10)));
            setBack(false);
            setFront(true);
            return;
        }
        if (min - 10 === 0) {
            setMax(max - 10);
            setMin(min - 10);
            setData(Staticdata.slice(min - 10, max - 10));
            setBack(false);
            setFront(true);
            return;
        }
        setMax(max - 10);
        setMin(min - 10);
        setData(Staticdata.slice(min - 10, max - 10));
    };
    useEffect(() => {
        const getData = () => __awaiter(void 0, void 0, void 0, function* () {
            const temp = yield GradeAndDeposit.get_grading();
            const tempy = temp.map(item => [
                item._id,
                item.commodityName,
                convertDate(item.depositDate.replaceAll("-", "").slice(0, 8)),
                item.slotNumber,
                convertDate(item.revalidationDate.replaceAll("-", "").slice(0, 8)),
                convertDate(item.expiraryDate.replaceAll("-", "").slice(0, 8)),
                item.foreignMatter,
                item.otherFoodGrain,
                item.other,
                item.damagedGrain,
                item.immatureGrain,
                item.weevilledGrain,
                item.grade,
                ""
            ]);
            const max = temp.length >= 10 ? 10 : tempy.length;
            const conditon = temp.length >= 10;
            // console.log(tempy, 100);
            setFront(conditon);
            setMax(max);
            setData(tempy.slice(min, max));
            setStaticData(tempy);
        });
        getData();
    }, []);
    return (_jsx(View, Object.assign({ style: styles.container }, { children: _jsxs(ScrollView, Object.assign({ style: styles.container, contentContainerStyle: { alignItems: 'center' } }, { children: [_jsxs(View, Object.assign({ style: styles.header }, { children: [_jsx(TouchableOpacity, Object.assign({ onPress: () => navigation.goBack() }, { children: _jsx(Back, {}) })), _jsxs(Text, Object.assign({ style: styles.heading }, { children: ["Grading & expiry date", '\n', "details"] }))] })), _jsxs(View, Object.assign({ style: styles.filterContainer }, { children: [_jsxs(View, Object.assign({ style: styles.searchContainer }, { children: [_jsx(Searching, {}), _jsx(TextInput, { style: styles.search, placeholder: "Search", placeholderTextColor: '#707371', onChangeText: text => setSearch(text), onSubmitEditing: handleSearch })] })), _jsxs(TouchableOpacity, Object.assign({ style: styles.sortby, onPress: handleToggleSort }, { children: [_jsx(Text, Object.assign({ style: styles.sortText }, { children: "Sort by" })), _jsx(Sort, {})] })), toggleSort && (_jsx(View, Object.assign({ style: styles.dropDownOptionsContainer }, { children: rangeOptions.map(option => renderDropdownOptions(option)) })))] })), _jsx(Table, { height: height, heading: heading, data: data, expiry: 5, grading: 12 }), _jsxs(View, Object.assign({ style: styles.navigationContainer }, { children: [_jsx(TouchableOpacity, Object.assign({ style: [
                                {
                                    backgroundColor: back ? '#0C447D' : '#E0E1E1',
                                },
                                styles.navButton,
                            ], disabled: !back, onPress: handlePrev }, { children: _jsx(Prev, { color: back && 'white' }) })), _jsxs(Text, Object.assign({ style: styles.navText }, { children: ["Showing ", min + 1, " to ", max, " of ", Staticdata.length] })), _jsx(TouchableOpacity, Object.assign({ style: [
                                {
                                    backgroundColor: front ? '#0C447D' : '#E0E1E1',
                                },
                                styles.navButton,
                            ], disabled: !front, onPress: handleNext }, { children: _jsx(Next, { color: !front && '#C1C4C2' }) }))] }))] })) })));
};
export default GradingDetails;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        height: height * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3%',
        marginBottom: 24,
    },
    heading: {
        color: 'black',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        flexGrow: 1,
        textAlign: 'center',
    },
    sortText: {
        color: '#707371',
        fontFamily: 'NotoSerif-Regular',
        fontSize: 14,
        marginRight: 5,
    },
    dropDownOptions: { height: '10%', width: '80%', justifyContent: 'center' },
    dropDownText: {
        fontFamily: 'NotoSerif-Regular',
        color: 'black',
        fontSize: 14,
        marginRight: 8,
    },
    dropDownOptionsContainer: {
        backgroundColor: 'white',
        width: '72%',
        zIndex: 2,
        position: 'absolute',
        top: '110%',
        height: '850%',
        right: 0,
        marginRight: 10,
        paddingVertical: '1%',
        borderColor: '#989E9A',
        borderWidth: 1,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterContainer: {
        height: height * 0.06,
        width: '90%',
        marginVertical: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchContainer: {
        width: '60%',
        height: '100%',
        borderWidth: 1,
        borderColor: '#707371',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    search: {
        width: '70%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        color: '#707371',
    },
    sortby: {
        width: '30%',
        height: '100%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#707371',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    navigationContainer: {
        width: '90%',
        height: height * 0.15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navButton: {
        width: '10%',
        aspectRatio: 1,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navText: {
        flexGrow: 1,
        textAlign: 'center',
        color: 'black',
    },
});
