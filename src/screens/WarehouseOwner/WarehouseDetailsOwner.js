
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import textStyles from '../../components/textStyles';
import Location from '../../assets/Location';
import ButtonWithAutoWidth from '../../components/ButtonWithAutoWidth';
import ArrowUpload from '../../assets/ArrowUpload';
import Dissmiss from '../../assets/Dissmiss';
import Commodity from '../../assets/Commodity';
import CheckBox from '../../components/CheckBox';
import HeaderComponent from '../../components/Header';
import Plus from '../../assets/Plus';
import { warehouseApi } from '../../service/api';
// import Toast from 'react-native-toast-message'
import Edit from '../../assets/Edit';
import { UploadMultipleFiles } from '../../service/fileupload';
import { useSelector } from 'react-redux';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const WarehouseDetailsOwner = ({ navigation, route }) => {
    const { warehouse } = route.params;
    console.log(warehouse === null || warehouse === void 0 ? void 0 : warehouse._id);
    const [menu, setMenu] = useState(false);
    const [notification, setNotification] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isClickedCommodity, setIsClickedCommodity] = useState(false);
    const [SelectedCommodity, setSelectedCommodity] = useState('');
    const [SelectedWeight, setSelectedWeight] = useState(0);
    const [SelectedPriceperDay, setSelectedPriceperDay] = useState(0);
    const [Manager, setManager] = useState();
    const [weightsAndPrices, setWeightsAndPrices] = useState([]);
    const [commodities, setCommodities] = useState([]);
    const [mainPhotos, setMainPhotos] = useState([]);
    const [otherPhotos, setOtherPhotos] = useState([]);
    const [wdraCertificate, setWdraCertificate] = useState([]);
    const pickImage = (setImages) => __awaiter(void 0, void 0, void 0, function* () {
        const inputElement = document.createElement("input");
        inputElement.type = "file";
        inputElement.multiple = true;
    
        inputElement.onchange = (event) => {
            const files = Array.from(event.target.files).map((file) => ({
                file
            }));
            setImages(files);
        };
    
        inputElement.click();
    });
    const handleUpload = () => __awaiter(void 0, void 0, void 0, function* () {
        const files = {
            main_photos: mainPhotos,
            other_photos: otherPhotos,
            wdra_certificate: wdraCertificate,
        };
        yield UploadMultipleFiles((warehouse === null || warehouse === void 0 ? void 0 : warehouse._id) || "", files);
    });
    const getManager = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const res = yield warehouseApi.getWarehouseManager(warehouse === null || warehouse === void 0 ? void 0 : warehouse._id);
            console.log(res, 100);
            setManager(res);
        }
        catch (error) {
            console.error(error);
        }
    });
    useEffect(() => {
        getManager();
    }, []);
    const Commodities = [
        { commodity: 'Bajra', code: 'BJ1', iso: 'BJF1' },
        { commodity: 'Wheat', code: 'WH1', iso: 'WHF1' },
        { commodity: 'Ajwain', code: 'AJ1', iso: 'AJF1' },
        { commodity: 'Rice', code: 'RC1', iso: 'RCF1' },
        { commodity: 'Jowar', code: 'JW1', iso: 'JWF1' },
        { commodity: 'Bajra', code: 'BJ1', iso: 'BJF1' },
        { commodity: 'Wheat', code: 'WH1', iso: 'WHF1' },
        { commodity: 'Ajwain', code: 'AJ1', iso: 'AJF1' },
        { commodity: 'Rice', code: 'RC1', iso: 'RCF1' },
        { commodity: 'Jowar', code: 'JW1', iso: 'JWF1' },
    ];
    const handleMenu = () => {
        setMenu(!menu);
    };
    const handleWeightChange = (weight, checked) => {
        if (checked) {
            setWeightsAndPrices(prev => [...prev, { weight, price_perday: '' }]);
            console.log(weightsAndPrices);
        }
        else {
            setWeightsAndPrices(prev => prev.filter(wp => wp.weight !== weight));
        }
    };
    const handlePriceChange = (weight, price) => {
        setWeightsAndPrices(prev => prev.map(wp => wp.weight === weight ? Object.assign(Object.assign({}, wp), { price_perday: price }) : wp));
        console.log(weightsAndPrices);
    };
    const addCommodity = () => {
        setCommodities((prev) => [
            ...prev,
            {
                name: SelectedCommodity,
                weightsAndPrices
            }
        ]);
        console.log(commodities);
        setSelectedCommodity('');
        setWeightsAndPrices([]);
    };
    const handleBulkAddCommodities = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            for (const wp of weightsAndPrices) {
                const payload = {
                    name: SelectedCommodity,
                    weight: wp.weight.toString(),
                    price_perday: parseFloat(wp.price_perday),
                    isActive: true,
                    isArchived: false
                };
                const response = yield warehouseApi.updateItemsInWarehouse(payload, (warehouse === null || warehouse === void 0 ? void 0 : warehouse._id) || '');
                if (response) {
                    console.log(`Added ${SelectedCommodity} with weight ${wp.weight} and price ${wp.price_perday}`);
                }
            }
            if (commodities.length < 1) {
                // Toast.show({
                //     type: 'success',
                //     text1: 'Success',
                //     text2: 'Commodities added successfully',
                // })
                navigation.goBack();
            }
        }
        catch (error) {
            console.error(error);
        }
        if (commodities.length >= 1) {
            try {
                for (const commodity of commodities) {
                    for (const wp of commodity.weightsAndPrices) {
                        const payload = {
                            name: commodity.name,
                            weight: wp.weight.toString(),
                            price_perday: parseFloat(wp.price_perday),
                            isActive: true,
                            isArchived: false
                        };
                        const response = yield warehouseApi.updateItemsInWarehouse(payload, (warehouse === null || warehouse === void 0 ? void 0 : warehouse._id) || '');
                        if (response) {
                            console.log(`Added ${commodity.name} with weight ${wp.weight} and price ${wp.price_perday}`);
                        }
                    }
                }
                // Toast.show({
                //     type: 'success',
                //     text1: 'Success',
                //     text2: 'Commodities added successfully',
                // });
                navigation.goBack();
            }
            catch (error) {
                console.error(error);
            }
        }
    });
    useEffect(() => {
        console.log("otherPhotos updated:", otherPhotos);
    }, [otherPhotos]);
    useEffect(() => {
        console.log("MainPhotos updated:", mainPhotos);
    }, [otherPhotos]);
    const handleNotification = () => {
        setNotification(!notification);
    };
    const role = useSelector((state) => state.user.role);
    return (_jsxs(View, Object.assign({ style: { flex: 1 } }, { children: [_jsx(HeaderComponent, { title: 'Add warehouse details' }), _jsx(ScrollView, Object.assign({ scrollEnabled: !isClickedCommodity }, { children: _jsxs(View, Object.assign({ style: { marginHorizontal: 16, height: 1133 } }, { children: [_jsx(View, Object.assign({ style: { alignItems: 'center' } }, { children: _jsxs(View, Object.assign({ style: { alignItems: 'center' } }, { children: [_jsx(View, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { color: 'black' }] }, { children: warehouse === null || warehouse === void 0 ? void 0 : warehouse.warehouse_name })) }), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center' } }, { children: [_jsx(View, Object.assign({ style: { padding: 5 } }, { children: _jsx(Location, {}) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: `${warehouse === null || warehouse === void 0 ? void 0 : warehouse.locality_area} ${warehouse === null || warehouse === void 0 ? void 0 : warehouse.State}` }))] }))] })) })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: 'black' }] }, { children: 'Warehouse manager' })), _jsx(Text, Object.assign({ style: [textStyles.bodyB2, { color: 'black' }] }, { children: (Manager === null || Manager === void 0 ? void 0 : Manager.name) || '+' })), role === 'manager' ? null :
                                    _jsx(TouchableOpacity, Object.assign({ style: {
                                        //marginRight:20
                                        }, onPress: () => {
                                            navigation.navigate('ListManager', {
                                                warehouse: warehouse
                                            });
                                        } }, { children: _jsx(Edit, {}) }))] })), _jsxs(View, Object.assign({ style: { gap: 24, flexDirection: 'row', marginTop: 24 } }, { children: [_jsxs(View, Object.assign({ style: { borderRadius: 8, gap: 8, paddingHorizontal: 12, paddingVertical: 8, backgroundColor: '#FFE4F2', alignItems: 'center' } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyTable, { color: '#1C1C1C', width: 70 }] }, { children: "Total capacity" })), _jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: '#1C1C1C' }] }, { children: warehouse === null || warehouse === void 0 ? void 0 : warehouse.total_capacity }))] })), _jsxs(View, Object.assign({ style: { borderRadius: 8, gap: 8, paddingHorizontal: 12, paddingVertical: 8, backgroundColor: '#C8FFF5', alignItems: 'center' } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyTable, { color: '#1C1C1C', width: 65 }] }, { children: "Filled capacity" })), _jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: '#1C1C1C' }] }, { children: warehouse === null || warehouse === void 0 ? void 0 : warehouse.filled_capacity }))] })), _jsxs(View, Object.assign({ style: { borderRadius: 8, gap: 8, paddingHorizontal: 12, paddingVertical: 8, backgroundColor: '#FFE3AC', alignItems: 'center' } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyTable, { color: '#1C1C1C', width: 78 }] }, { children: "Remaining capacity" })), _jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: '#1C1C1C' }] }, { children: warehouse === null || warehouse === void 0 ? void 0 : warehouse.remainingCapacity }))] }))] })), _jsxs(ScrollView, Object.assign({ style: { gap: 16, marginTop: 24 } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { color: '#1C1C1C' }] }, { children: "warehouse photos" })), _jsxs(View, Object.assign({ style: {
                                        alignItems: 'center',
                                        height: 137,
                                        gap: 8,
                                        paddingHorizontal: 12,
                                        paddingVertical: 16,
                                        borderStyle: 'dashed',
                                        borderWidth: 1,
                                        borderColor: '#86A2BE',
                                        borderRadius: 8,
                                        backgroundColor: 'UI',
                                    } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH7, {
                                                    color: 'black',
                                                }] }, { children: "Main photos" })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, {
                                                    color: '#707371',
                                                }] }, { children: "File format : JPG, PNG" })), _jsx(View, Object.assign({ style: { width: '42%' } }, { children: _jsx(ButtonWithAutoWidth, { text: "  Upload", role: "iButton", component: () => _jsx(ArrowUpload, {}), txtcolor: "#FFFFFF", bgcolor: "#0C447D", borderColor: "#0C447D", onPress: () => pickImage(setMainPhotos) }) })), _jsx(View, { style: {
                                                display: 'flex',
                                                padding: 10,
                                                flexDirection: 'row'
                                            } })] })), _jsxs(View, Object.assign({ style: {
                                        alignItems: 'center',
                                        height: 137,
                                        gap: 8,
                                        paddingHorizontal: 12,
                                        paddingVertical: 16,
                                        borderStyle: 'dashed',
                                        borderWidth: 1,
                                        borderColor: '#86A2BE',
                                        borderRadius: 8,
                                        backgroundColor: 'UI',
                                    } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH7, {
                                                    color: 'black',
                                                }] }, { children: "Other photos" })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, {
                                                    color: '#707371',
                                                }] }, { children: "File format : JPG, PNG" })), _jsx(View, Object.assign({ style: { width: '42%' } }, { children: _jsx(ButtonWithAutoWidth, { text: "  Upload", role: "iButton", component: () => _jsx(ArrowUpload, {}), txtcolor: "#FFFFFF", bgcolor: "#0C447D", borderColor: "#0C447D", onPress: () => {
                                                    pickImage(setOtherPhotos);
                                                    //console.log("otherPhotos:",otherPhotos);
                                                } }) }))] }))] })), _jsx(View, Object.assign({ style: { width: '95%', marginBottom: 16 } }, { children: _jsx(ButtonWithAutoWidth, { text: "  Upload", role: "iButton", component: () => _jsx(ArrowUpload, {}), txtcolor: "#FFFFFF", bgcolor: "#0C447D", borderColor: "#0C447D", onPress: () => {
                                    handleUpload();
                                    //console.log("otherPhotos:",otherPhotos);
                                } }) })), _jsxs(View, Object.assign({ style: { gap: 16 } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH6, { color: '#1C1C1C' }] }, { children: "Add new commodity" })), _jsxs(View, { children: [_jsxs(TouchableOpacity, Object.assign({ style: {
                                                borderWidth: 0.5,
                                                borderRadius: 8,
                                                height: 56,
                                                paddingHorizontal: 12,
                                                paddingVertical: 16,
                                                flexDirection: 'row',
                                                alignItems: 'center'
                                            }, onPress: () => {
                                                setIsClickedCommodity(!isClickedCommodity);
                                            } }, { children: [_jsx(View, Object.assign({ style: { justifyContent: 'center', marginLeft: 14, marginRight: 7.5 } }, { children: _jsx(Commodity, {}) })), _jsxs(View, { children: [SelectedCommodity == '' ? null : _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "Commodity" })), _jsx(Text, Object.assign({ style: SelectedCommodity == '' ? textStyles.bodyB3 : [textStyles.headingH8, { color: 'black' }] }, { children: SelectedCommodity == '' ? 'Commodity' : SelectedCommodity }))] })] })), isClickedCommodity ? (_jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.commodityScrollView }, { children: Commodities.map((item, index) => (_jsx(TouchableOpacity, Object.assign({ style: {
                                                    width: '100%',
                                                    borderRadius: 8,
                                                    height: 50,
                                                    justifyContent: 'center',
                                                }, onPress: () => {
                                                    setSelectedCommodity(item.commodity);
                                                    setIsClickedCommodity(!isClickedCommodity);
                                                } }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20, color: "black" } }, { children: item.commodity })) }), index))) }))) : (_jsx(_Fragment, {}))] }), _jsx(View, Object.assign({ style: { gap: 4 } }, { children: [25, 50, 75, 100].map((weight) => {
                                        var _a;
                                        const isChecked = weightsAndPrices.some(wp => wp.weight === weight);
                                        return (_jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: '#E0E1E1', height: 62 } }, { children: [_jsx(View, Object.assign({ style: { paddingHorizontal: 8, paddingVertical: 25, gap: 16, width: 80, alignItems: 'center', justifyContent: 'center' } }, { children: _jsx(CheckBox, { value: (isChecked), disabled: !SelectedCommodity, onPress: () => {
                                                            setSelectedWeight(weight);
                                                            handleWeightChange(weight, !isChecked);
                                                        } }) })), _jsx(View, Object.assign({ style: { paddingHorizontal: 8, paddingVertical: 25, gap: 16, width: 124, alignItems: 'center', justifyContent: 'center' } }, { children: _jsxs(Text, Object.assign({ style: { color: '#000000', width: 35, height: 21, textAlign: 'center' } }, { children: [weight, " kg"] })) })), _jsx(View, Object.assign({ style: { paddingHorizontal: 8, paddingVertical: 25, gap: 16, width: 124, alignItems: 'center', justifyContent: 'center' } }, { children: _jsx(TextInput, { keyboardType: 'decimal-pad', value: ((_a = weightsAndPrices.find(wp => wp.weight === weight)) === null || _a === void 0 ? void 0 : _a.price_perday.toString()) || '', onChangeText: (text) => {
                                                            handlePriceChange(weight, text);
                                                            //setSelectedPriceperDay(parseFloat(text))
                                                        }, readOnly: !isChecked, style: { borderWidth: 2, width: 56, height: 40, borderRadius: 4, borderColor: '#86A2BE', textAlign: 'center', color: "black" } }) }))] }), weight));
                                    }) })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 } }, { children: [_jsx(TouchableOpacity, Object.assign({ onPress: () => {
                                                console.log(commodities);
                                                addCommodity();
                                                // Toast.show({
                                                //     type: 'info',
                                                //     text1: 'Add another commodity'
                                                // })
                                                setIsClickedCommodity(true);
                                            }, style: { width: 40, height: 40, backgroundColor: '#0C447D', alignItems: 'center', justifyContent: 'center', borderRadius: 24 } }, { children: _jsx(Plus, { props: undefined, color: '#fff' }) })), _jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { color: 'black' }] }, { children: 'Add another commodity' }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between', } }, { children: [_jsx(View, Object.assign({ style: { width: '48%' } }, { children: _jsx(ButtonWithAutoWidth, { role: 'iButton', text: 'Cancel', borderColor: '#07294B', txtcolor: '#07294B', onPress: () => navigation.goBack() }) })), _jsx(View, Object.assign({ style: { width: '48%' } }, { children: _jsx(ButtonWithAutoWidth, { role: 'iButton', text: 'Save', bgcolor: '#0C447D', borderColor: '#0C447D', txtcolor: '#FFFFFF', onPress: handleBulkAddCommodities }) }))] }))] }))] })) })), _jsxs(Modal, Object.assign({ animationType: "fade", transparent: true, visible: isVisible, onRequestClose: () => setIsVisible(false) }, { children: [_jsx(View, { style: {
                            backgroundColor: '#5E5E5EB2',
                            width: '100%',
                            height: '100%',
                        } }), _jsxs(View, Object.assign({ style: styles.modalContainer }, { children: [_jsx(View, Object.assign({ style: styles.modalTitle }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH6, {
                                            color: '#1C1C1C',
                                        }] }, { children: "Select photos" })) })), _jsx(TouchableOpacity, Object.assign({ onPress: () => setIsVisible(false), style: styles.DissmissBotton }, { children: _jsx(Dissmiss, {}) })), _jsxs(View, Object.assign({ style: styles.optionPosition }, { children: [_jsxs(TouchableOpacity, Object.assign({ style: styles.option, onPress: () => { } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: '#1C1C1C' }] }, { children: "Gallery" })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#707371' }] }, { children: "Choose an existing file" }))] })), _jsxs(TouchableOpacity, Object.assign({ style: styles.option, onPress: () => { } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: '#1C1C1C' }] }, { children: "Camera" })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#707371' }] }, { children: "Take a picture" }))] }))] }))] }))] }))] })));
};
export default WarehouseDetailsOwner;
const styles = StyleSheet.create({
    DissmissBotton: {
        // backgroundColor: 'pink',
        position: 'absolute',
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        right: 24,
        top: 24,
    },
    modalContainer: {
        width: 312,
        height: 232,
        top: 257,
        left: 24,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        // alignItems: 'center',
        position: 'absolute',
    },
    modalTitle: {
        position: 'absolute',
        width: 181,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        left: 65,
        top: 24,
    },
    optionPosition: {
        top: 70,
        marginHorizontal: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    option: {
        width: '100%',
        borderRadius: 8,
        height: 55,
        justifyContent: 'center',
        // backgroundColor: 'pink',
    },
    commodityScrollView: {
        backgroundColor: 'white',
        width: '100%',
        zIndex: 1,
        position: 'absolute',
        top: '105%',
        // left: '5%',
        height: 253,
        borderWidth: 0.5,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
