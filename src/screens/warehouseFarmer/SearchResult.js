import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import textStyles from '../../components/textStyles';
import Location from '../../assets/Location';
import Back from '../../assets/Back';
import Dropdown from '../../assets/Dropdown';
import ArrowSwap from '../../assets/ArrowSwap';
import Filter from '../../assets/Filter';
import Edit from '../../assets/Edit';
function calculateCostPerBagPerDay(warehouse, bookingdata) {
    const selectedCommodity = warehouse.Commodity.find(commodity => commodity.name === bookingdata.SelectedCommodity);
    if (!selectedCommodity) {
        console.error('Commodity not found in the warehouse');
        return null;
    }
    const bagWeight = parseFloat(bookingdata.SelectedBagsize.split(' ')[0]);
    const pricePerDay = selectedCommodity.price_perday.find(price => parseFloat(price.weight) === bagWeight);
    if (!pricePerDay) {
        console.error('Price per day not found for the selected bag size');
        return null;
    }
    return pricePerDay.price;
}
const filterWarehousesByBagSize = (warehouses, commodityName, desiredBagSize) => {
    return warehouses.filter(warehouse => warehouse.Commodity.some(commodity => commodity.name === commodityName &&
        commodity.price_perday.some(price => price.weight === desiredBagSize.split(' ')[0])));
};
const SearchResult = ({ route, navigation }) => {
    const { warehouses, addr, Bookingdata } = route === null || route === void 0 ? void 0 : route.params;
    function formatDate(date) {
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' });
        const weekDay = date.toLocaleString('en-US', { weekday: 'short' });
        return `${day} ${month}, ${weekDay}`;
    }
    const today = new Date;
    const filteredWarehouses = filterWarehousesByBagSize(warehouses, Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.SelectedCommodity, Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.SelectedBagsize);
    return (_jsxs(ScrollView, Object.assign({ style: styles.container,showsVerticalScrollIndicator: false, 
        showsHorizontalScrollIndicator: false }, { children: [_jsxs(View, Object.assign({ style: { borderWidth: 1, borderRadius: 8, borderColor: '#707371', justifyContent: 'space-between', width: '90%', marginHorizontal: '5%', margin: 16, height: 56, flexDirection: 'row', alignItems: 'center' } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center' } }, { children: [_jsx(TouchableOpacity, Object.assign({ style: { marginLeft: 20, marginRight: 8 }, onPress: () => navigation.goBack() }, { children: _jsx(Back, {}) })), _jsxs(View, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH8, { color: 'black' }] }, { children: addr })), _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: formatDate(today) }))] })] })), _jsxs(TouchableOpacity, Object.assign({ style: { marginRight: 8, }, onPress: () => navigation.goBack() }, { children: [_jsx(Edit, {}), _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Edit" }))] }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', width: '90%', marginHorizontal: '5%', marginBottom: 24 } }, { children: [_jsxs(TouchableOpacity, Object.assign({ style: { borderWidth: 1, height: 32, alignItems: 'center', justifyContent: 'space-evenly', borderRadius: 8, borderColor: '#707371', flexDirection: 'row', width: 96, } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.uiText, { lineHeight: 20 }] }, { children: "Sort by" })), _jsx(View, { children: _jsx(ArrowSwap, {}) })] })), _jsxs(TouchableOpacity, Object.assign({ onPress: () => navigation.navigate('Filter'), style: { borderWidth: 1, height: 32, justifyContent: 'space-evenly', alignItems: 'center', borderRadius: 8, borderColor: '#707371', flexDirection: 'row', width: 88, marginLeft: 20 } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.uiText, { lineHeight: 20 }] }, { children: "Filters" })), _jsx(View, { children: _jsx(Filter, {}) })] })), _jsxs(TouchableOpacity, Object.assign({ style: { borderWidth: 1, height: 32, alignItems: 'center', borderRadius: 8, borderColor: '#707371', flexDirection: 'row', width: 100, marginLeft: 20, justifyContent: 'space-evenly' } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.uiText, { lineHeight: 20 }] }, { children: "Ratings" })), _jsx(View, { children: _jsx(Dropdown, {}) })] }))] })), _jsx(View, Object.assign({ style: { justifyContent: 'center', alignItems: 'center' } }, { children: _jsxs(Text, Object.assign({ style: [textStyles.headingH6, { color: 'black' }] }, { children: ["Showing warehouses in ", addr === null || addr === void 0 ? void 0 : addr.split(',')[0]] })) })), _jsx(ScrollView, Object.assign({ style: { padding: 16, } }, { children: warehouses && filteredWarehouses.length > 0 && filteredWarehouses.map((item, index) => {
                    console.log("Warehouses :", warehouses);
                    const firstCommodity = item.Commodity[0];
                    return (_jsxs(View, Object.assign({ style: { width: 328, height: 'auto', borderRadius: 8, backgroundColor: '#FFFFFF', marginBottom: 16 } }, { children: [_jsx(View, Object.assign({ style: { width: 328, height: 172, backgroundColor: 'brown', borderTopLeftRadius: 8, borderTopRightRadius: 8 } }, { children: _jsx(Image, { source: { uri: item.main_photo[0] }, style: { width: '100%', height: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8 } }) })), _jsxs(TouchableOpacity, Object.assign({ onPress: () => navigation.navigate('WarehouseDetails', {
                                    warehouse: item,
                                    Bookingdata: Bookingdata
                                }), style: { width: 328, height: 160, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, paddingHorizontal: 8, paddingVertical: 12, flexDirection: 'column', justifyContent: 'space-evenly' } }, { children: [_jsx(View, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { color: 'black' }] }, { children: item.warehouse_name })) }), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center' } }, { children: [_jsx(View, Object.assign({ style: { padding: 5 } }, { children: _jsx(Location, {}) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { width: 58, color: 'black' }] }, { children: `${item.locality_area},${item.city},` }))] })), _jsx(View, { children: _jsxs(Text, Object.assign({ style: textStyles.bodyB4 }, { children: [item.remainingCapacity, "MT Available capacity"] })) }), _jsxs(View, Object.assign({ style: { alignItems: 'flex-end' } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', marginBottom: 4 } }, { children: [_jsxs(Text, Object.assign({ style: [textStyles.headingH7, { color: 'black' }] }, { children: ["\u20B9", calculateCostPerBagPerDay(item, Bookingdata)] })), _jsxs(Text, Object.assign({ style: [textStyles.bodyB4, { color: 'black' }] }, { children: ["/", firstCommodity ? firstCommodity.weight : '15', " bag/day"] }))] })), _jsx(View, { children: _jsxs(Text, Object.assign({ style: textStyles.bodyB4 }, { children: ["\u20B9", calculateCostPerBagPerDay(item, Bookingdata)] })) })] }))] }), index + 1)] }), index));
                }) }))] })));
};
export default SearchResult;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
});
