import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ListComponent = () => {
    const [items, setItems] = useState([]);
    const [inputs, setInputs] = useState({
        Warehouse_name: '',
        Warehouse_ID: '',
        Locality_area_street: '',
        Pin_code: '',
        City: '',
        Mobile_number: '',
        Total_capacity: '',
        Filled_capacity: '',
    });
    useEffect(() => {
        const loadItems = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const storedItems = yield AsyncStorage.getItem('@items_list');
                if (storedItems !== null) {
                    setItems(JSON.parse(storedItems));
                }
            }
            catch (e) {
                console.error(e);
            }
        });
        loadItems();
    }, []);
    const saveItems = (newItems) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield AsyncStorage.setItem('@items_list', JSON.stringify(newItems));
            setItems(newItems);
        }
        catch (e) {
            console.error(e);
        }
    });
    const addItem = () => {
        const { Warehouse_name, Warehouse_ID, Locality_area_street, Pin_code, City, Mobile_number, Total_capacity, Filled_capacity, } = inputs;
        if (Warehouse_name.trim() !== '' &&
            Warehouse_ID.trim() !== '' &&
            Locality_area_street.trim() !== '' &&
            Pin_code.trim() !== '' &&
            City.trim() !== '' &&
            Mobile_number.trim() !== '' &&
            Total_capacity.trim() !== '' &&
            Filled_capacity.trim() !== '') {
            const newItem = {
                Warehouse_name,
                Warehouse_ID,
                Locality_area_street,
                Pin_code,
                City,
                Mobile_number,
                Total_capacity: parseInt(Total_capacity, 10),
                Filled_capacity: parseInt(Filled_capacity, 10),
            };
            const newItems = [...items, newItem];
            saveItems(newItems);
            setInputs({
                Warehouse_name: '',
                Warehouse_ID: '',
                Locality_area_street: '',
                Pin_code: '',
                City: '',
                Mobile_number: '',
                Total_capacity: '',
                Filled_capacity: '',
            });
        }
    };
    const handleInputChange = (key, value) => {
        setInputs((prevInputs) => (Object.assign(Object.assign({}, prevInputs), { [key]: value })));
    };
    const clearItems = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield AsyncStorage.removeItem('@items_list');
            setItems([]);
        }
        catch (e) {
            console.error(e);
        }
    });
    return (_jsxs(View, Object.assign({ style: styles.container }, { children: [Object.keys(inputs).map((key) => (_jsx(TextInput, { style: styles.input, value: inputs[key], onChangeText: (value) => handleInputChange(key, value), placeholder: key.replace(/_/g, ' '), keyboardType: key.includes('capacity') || key === 'Pin_code' || key === 'Mobile_number' ? 'numeric' : 'default' }, key))), _jsx(Button, { title: "Add Item", onPress: addItem }), _jsx(Button, { title: "Clear Items", onPress: clearItems }), items.length === 0 ? (_jsx(Text, Object.assign({ style: styles.emptyMessage }, { children: "No items available." }))) : (_jsx(FlatList, { data: items, keyExtractor: (item, index) => index.toString(), renderItem: ({ item }) => (_jsx(View, Object.assign({ style: styles.item }, { children: Object.keys(item).map((key) => (_jsxs(Text, { children: [key.replace(/_/g, ' '), ": ", item[key]] }, key))) }))) }))] })));
};
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    emptyMessage: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
    },
});
export default ListComponent;
