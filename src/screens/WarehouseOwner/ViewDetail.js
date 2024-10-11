
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import textStyles from '../../components/textStyles';
import Location from '../../assets/Location';
import Dissmiss from '../../assets/Dissmiss';
import HeaderComponent from '../../components/Header';
import { warehouseApi } from '../../service/api';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ViewDetails = ({ navigation, route }) => {
    var _a;
    const { warehouse } = route === null || route === void 0 ? void 0 : route.params;
    //console.log(warehouse?.Commodity[0].price_perday);
    const [menu, setMenu] = useState(false);
    const [notification, setNotification] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isClickedCommodity, setIsClickedCommodity] = useState(false);
    const [Manager, setManager] = useState();
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
    }, [warehouse]);
    // const Main = [
    //     { img: 'https://s3-alpha-sig.figma.com/img/430b/3cae/485c51a9a1826dbaf8b9127757e2fcfd?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghpx3YE1Otjrgmi4xiD3h84rl-CkUDqVsWmUvrlaArXTvD4jvu0u12MWC3l4LEtG1ugoooS8Cv5Td9m09KJVlW0MpnvGxykGN7MO57IBBjEJE~MginG6U1eFLiGd5BgbXxNuwqoFeccEYfK5uy0xPLvQ7TEZjXxmtL2rdd8cbV3SmwtLqSpikHmtwsVrwjiTc6MSDCIJOMGKm3zx5jOzdiUBpb7kSUY18xDSEVjzqvg~F21KejzE0hJfVwUpRuWHuwVNK5Ea1JRK1a-f~Xpu02fK3ST78iMMeSo1~uGMA9p-HckfFsZ6A-1dWVW~FeNtBp33-bqYZ8Co~UlEguNtlw__' },
    //     { img: 'https://s3-alpha-sig.figma.com/img/430b/3cae/485c51a9a1826dbaf8b9127757e2fcfd?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghpx3YE1Otjrgmi4xiD3h84rl-CkUDqVsWmUvrlaArXTvD4jvu0u12MWC3l4LEtG1ugoooS8Cv5Td9m09KJVlW0MpnvGxykGN7MO57IBBjEJE~MginG6U1eFLiGd5BgbXxNuwqoFeccEYfK5uy0xPLvQ7TEZjXxmtL2rdd8cbV3SmwtLqSpikHmtwsVrwjiTc6MSDCIJOMGKm3zx5jOzdiUBpb7kSUY18xDSEVjzqvg~F21KejzE0hJfVwUpRuWHuwVNK5Ea1JRK1a-f~Xpu02fK3ST78iMMeSo1~uGMA9p-HckfFsZ6A-1dWVW~FeNtBp33-bqYZ8Co~UlEguNtlw__' },
    //     { img: 'https://s3-alpha-sig.figma.com/img/430b/3cae/485c51a9a1826dbaf8b9127757e2fcfd?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghpx3YE1Otjrgmi4xiD3h84rl-CkUDqVsWmUvrlaArXTvD4jvu0u12MWC3l4LEtG1ugoooS8Cv5Td9m09KJVlW0MpnvGxykGN7MO57IBBjEJE~MginG6U1eFLiGd5BgbXxNuwqoFeccEYfK5uy0xPLvQ7TEZjXxmtL2rdd8cbV3SmwtLqSpikHmtwsVrwjiTc6MSDCIJOMGKm3zx5jOzdiUBpb7kSUY18xDSEVjzqvg~F21KejzE0hJfVwUpRuWHuwVNK5Ea1JRK1a-f~Xpu02fK3ST78iMMeSo1~uGMA9p-HckfFsZ6A-1dWVW~FeNtBp33-bqYZ8Co~UlEguNtlw__' },
    //     { img: 'https://s3-alpha-sig.figma.com/img/430b/3cae/485c51a9a1826dbaf8b9127757e2fcfd?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghpx3YE1Otjrgmi4xiD3h84rl-CkUDqVsWmUvrlaArXTvD4jvu0u12MWC3l4LEtG1ugoooS8Cv5Td9m09KJVlW0MpnvGxykGN7MO57IBBjEJE~MginG6U1eFLiGd5BgbXxNuwqoFeccEYfK5uy0xPLvQ7TEZjXxmtL2rdd8cbV3SmwtLqSpikHmtwsVrwjiTc6MSDCIJOMGKm3zx5jOzdiUBpb7kSUY18xDSEVjzqvg~F21KejzE0hJfVwUpRuWHuwVNK5Ea1JRK1a-f~Xpu02fK3ST78iMMeSo1~uGMA9p-HckfFsZ6A-1dWVW~FeNtBp33-bqYZ8Co~UlEguNtlw__' },
    //     { img: 'https://s3-alpha-sig.figma.com/img/430b/3cae/485c51a9a1826dbaf8b9127757e2fcfd?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghpx3YE1Otjrgmi4xiD3h84rl-CkUDqVsWmUvrlaArXTvD4jvu0u12MWC3l4LEtG1ugoooS8Cv5Td9m09KJVlW0MpnvGxykGN7MO57IBBjEJE~MginG6U1eFLiGd5BgbXxNuwqoFeccEYfK5uy0xPLvQ7TEZjXxmtL2rdd8cbV3SmwtLqSpikHmtwsVrwjiTc6MSDCIJOMGKm3zx5jOzdiUBpb7kSUY18xDSEVjzqvg~F21KejzE0hJfVwUpRuWHuwVNK5Ea1JRK1a-f~Xpu02fK3ST78iMMeSo1~uGMA9p-HckfFsZ6A-1dWVW~FeNtBp33-bqYZ8Co~UlEguNtlw__' },
    // ]
    // const other = [
    //     { img: 'https://s3-alpha-sig.figma.com/img/430b/3cae/485c51a9a1826dbaf8b9127757e2fcfd?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghpx3YE1Otjrgmi4xiD3h84rl-CkUDqVsWmUvrlaArXTvD4jvu0u12MWC3l4LEtG1ugoooS8Cv5Td9m09KJVlW0MpnvGxykGN7MO57IBBjEJE~MginG6U1eFLiGd5BgbXxNuwqoFeccEYfK5uy0xPLvQ7TEZjXxmtL2rdd8cbV3SmwtLqSpikHmtwsVrwjiTc6MSDCIJOMGKm3zx5jOzdiUBpb7kSUY18xDSEVjzqvg~F21KejzE0hJfVwUpRuWHuwVNK5Ea1JRK1a-f~Xpu02fK3ST78iMMeSo1~uGMA9p-HckfFsZ6A-1dWVW~FeNtBp33-bqYZ8Co~UlEguNtlw__' },
    //     { img: 'https://s3-alpha-sig.figma.com/img/430b/3cae/485c51a9a1826dbaf8b9127757e2fcfd?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghpx3YE1Otjrgmi4xiD3h84rl-CkUDqVsWmUvrlaArXTvD4jvu0u12MWC3l4LEtG1ugoooS8Cv5Td9m09KJVlW0MpnvGxykGN7MO57IBBjEJE~MginG6U1eFLiGd5BgbXxNuwqoFeccEYfK5uy0xPLvQ7TEZjXxmtL2rdd8cbV3SmwtLqSpikHmtwsVrwjiTc6MSDCIJOMGKm3zx5jOzdiUBpb7kSUY18xDSEVjzqvg~F21KejzE0hJfVwUpRuWHuwVNK5Ea1JRK1a-f~Xpu02fK3ST78iMMeSo1~uGMA9p-HckfFsZ6A-1dWVW~FeNtBp33-bqYZ8Co~UlEguNtlw__' },
    //     { img: 'https://s3-alpha-sig.figma.com/img/430b/3cae/485c51a9a1826dbaf8b9127757e2fcfd?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghpx3YE1Otjrgmi4xiD3h84rl-CkUDqVsWmUvrlaArXTvD4jvu0u12MWC3l4LEtG1ugoooS8Cv5Td9m09KJVlW0MpnvGxykGN7MO57IBBjEJE~MginG6U1eFLiGd5BgbXxNuwqoFeccEYfK5uy0xPLvQ7TEZjXxmtL2rdd8cbV3SmwtLqSpikHmtwsVrwjiTc6MSDCIJOMGKm3zx5jOzdiUBpb7kSUY18xDSEVjzqvg~F21KejzE0hJfVwUpRuWHuwVNK5Ea1JRK1a-f~Xpu02fK3ST78iMMeSo1~uGMA9p-HckfFsZ6A-1dWVW~FeNtBp33-bqYZ8Co~UlEguNtlw__' },
    //     { img: 'https://s3-alpha-sig.figma.com/img/430b/3cae/485c51a9a1826dbaf8b9127757e2fcfd?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghpx3YE1Otjrgmi4xiD3h84rl-CkUDqVsWmUvrlaArXTvD4jvu0u12MWC3l4LEtG1ugoooS8Cv5Td9m09KJVlW0MpnvGxykGN7MO57IBBjEJE~MginG6U1eFLiGd5BgbXxNuwqoFeccEYfK5uy0xPLvQ7TEZjXxmtL2rdd8cbV3SmwtLqSpikHmtwsVrwjiTc6MSDCIJOMGKm3zx5jOzdiUBpb7kSUY18xDSEVjzqvg~F21KejzE0hJfVwUpRuWHuwVNK5Ea1JRK1a-f~Xpu02fK3ST78iMMeSo1~uGMA9p-HckfFsZ6A-1dWVW~FeNtBp33-bqYZ8Co~UlEguNtlw__' },
    //     { img: 'https://s3-alpha-sig.figma.com/img/430b/3cae/485c51a9a1826dbaf8b9127757e2fcfd?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghpx3YE1Otjrgmi4xiD3h84rl-CkUDqVsWmUvrlaArXTvD4jvu0u12MWC3l4LEtG1ugoooS8Cv5Td9m09KJVlW0MpnvGxykGN7MO57IBBjEJE~MginG6U1eFLiGd5BgbXxNuwqoFeccEYfK5uy0xPLvQ7TEZjXxmtL2rdd8cbV3SmwtLqSpikHmtwsVrwjiTc6MSDCIJOMGKm3zx5jOzdiUBpb7kSUY18xDSEVjzqvg~F21KejzE0hJfVwUpRuWHuwVNK5Ea1JRK1a-f~Xpu02fK3ST78iMMeSo1~uGMA9p-HckfFsZ6A-1dWVW~FeNtBp33-bqYZ8Co~UlEguNtlw__' },
    // ]
    // const Commodities = [
    //     { commodity: 'Bajra', code: 'BJ1', iso: 'BJF1' },
    //     { commodity: 'Wheat', code: 'WH1', iso: 'WHF1' },
    //     { commodity: 'Ajwain', code: 'AJ1', iso: 'AJF1' },
    //     { commodity: 'Rice', code: 'RC1', iso: 'RCF1' },
    //     { commodity: 'Jowar', code: 'JW1', iso: 'JWF1' },
    //     { commodity: 'Bajra', code: 'BJ1', iso: 'BJF1' },
    //     { commodity: 'Wheat', code: 'WH1', iso: 'WHF1' },
    //     { commodity: 'Ajwain', code: 'AJ1', iso: 'AJF1' },
    //     { commodity: 'Rice', code: 'RC1', iso: 'RCF1' },
    //     { commodity: 'Jowar', code: 'JW1', iso: 'JWF1' },
    // ];
    const handleMenu = () => {
        setMenu(!menu);
    };
    const handleNotification = () => {
        setNotification(!notification);
    };
    //const navigation = useNavigation<NavigationProp<Record<string, object>>>();
    return (_jsxs(View, Object.assign({ style: { flex: 1 } }, { children: [_jsx(HeaderComponent, { title: 'Warehouse details' }), _jsx(ScrollView, Object.assign({ scrollEnabled: !isClickedCommodity }, { children: _jsxs(View, Object.assign({ style: { marginHorizontal: 16, marginBottom: 97, flex: 1 } }, { children: [_jsx(View, Object.assign({ style: { alignItems: 'center' } }, { children: _jsxs(View, Object.assign({ style: { alignItems: 'center' } }, { children: [_jsx(View, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { color: 'black' }] }, { children: warehouse === null || warehouse === void 0 ? void 0 : warehouse.warehouse_name })) }), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center' } }, { children: [_jsx(View, Object.assign({ style: { padding: 5 } }, { children: _jsx(Location, {}) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: `${warehouse === null || warehouse === void 0 ? void 0 : warehouse.locality_area} ${warehouse === null || warehouse === void 0 ? void 0 : warehouse.State}` }))] }))] })) })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: 'black' }] }, { children: 'Warehouse manager' })), _jsx(Text, Object.assign({ style: [textStyles.bodyB2, { color: 'black' }] }, { children: Manager === null || Manager === void 0 ? void 0 : Manager.name }))] })), _jsxs(View, Object.assign({ style: { gap: 24, flexDirection: 'row', marginTop: 24 } }, { children: [_jsxs(View, Object.assign({ style: { borderRadius: 8, gap: 8, paddingHorizontal: 12, paddingVertical: 8, backgroundColor: '#FFE4F2', alignItems: 'center' } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyTable, { color: '#1C1C1C', width: 70 }] }, { children: "Total capacity" })), _jsxs(Text, Object.assign({ style: [textStyles.headingH7, { color: '#1C1C1C' }] }, { children: [warehouse === null || warehouse === void 0 ? void 0 : warehouse.total_capacity, " MT"] }))] })), _jsxs(View, Object.assign({ style: { borderRadius: 8, gap: 8, paddingHorizontal: 12, paddingVertical: 8, backgroundColor: '#C8FFF5', alignItems: 'center' } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyTable, { color: '#1C1C1C', width: 65 }] }, { children: "Filled capacity" })), _jsxs(Text, Object.assign({ style: [textStyles.headingH7, { color: '#1C1C1C' }] }, { children: [warehouse === null || warehouse === void 0 ? void 0 : warehouse.filled_capacity, " MT"] }))] })), _jsxs(View, Object.assign({ style: { borderRadius: 8, gap: 8, paddingHorizontal: 12, paddingVertical: 8, backgroundColor: '#FFE3AC', alignItems: 'center' } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyTable, { color: '#1C1C1C', width: 78 }] }, { children: "Remaining capacity" })), _jsxs(Text, Object.assign({ style: [textStyles.headingH7, { color: '#1C1C1C' }] }, { children: [warehouse === null || warehouse === void 0 ? void 0 : warehouse.remainingCapacity, " MT"] }))] }))] })), _jsxs(View, Object.assign({ style: { gap: 16, marginTop: 24 } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { color: '#1C1C1C' }] }, { children: "warehouse photos" })), _jsxs(View, Object.assign({ style: { gap: 8 } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: '#1C1C1C' }] }, { children: "Main photos" })), _jsx(FlatList, { data: warehouse === null || warehouse === void 0 ? void 0 : warehouse.main_photo, keyExtractor: (item, index) => index.toString(), numColumns: 5, renderItem: ({ item }) => (_jsx(View, Object.assign({ style: { marginRight: 12 } }, { children: _jsx(Image, { source: { uri: item }, style: { width: 56, height: 56, borderRadius: 4 } }) }))), contentContainerStyle: { flexGrow: 1 } })] })), _jsxs(View, Object.assign({ style: { gap: 8 } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: '#1C1C1C' }] }, { children: "Other photos" })), _jsx(FlatList, { data: warehouse === null || warehouse === void 0 ? void 0 : warehouse.other_photo, keyExtractor: (item, index) => index.toString(), numColumns: 5, renderItem: ({ item }) => (_jsx(View, Object.assign({ style: { marginRight: 12 } }, { children: _jsx(Image, { source: { uri: item }, style: { width: 56, height: 56, borderRadius: 4 } }) }))), contentContainerStyle: { justifyContent: 'space-between' } })] }))] })), _jsxs(View, Object.assign({ style: { gap: 16, marginTop: 24 } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { color: '#1C1C1C' }] }, { children: "Commodity details" })), (_a = warehouse === null || warehouse === void 0 ? void 0 : warehouse.Commodity) === null || _a === void 0 ? void 0 : _a.map((commodity) => (_jsxs(_Fragment, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', gap: 8 } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB2, { color: '#1C1C1C' }] }, { children: "Commodity :" })), _jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: '#1C1C1C' }] }, { children: commodity === null || commodity === void 0 ? void 0 : commodity.name }))] })), _jsxs(View, Object.assign({ style: { gap: 4 } }, { children: [_jsxs(View, Object.assign({ style: { borderBottomWidth: 1, borderColor: '#E0E1E1', flexDirection: 'row', height: 62 } }, { children: [_jsx(View, Object.assign({ style: { paddingHorizontal: 8, paddingVertical: 25, gap: 16, width: 164, alignItems: 'center', justifyContent: 'center' } }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: '#000000', width: 92, height: 38, textAlign: 'center' }] }, { children: "Available options" })) })), _jsx(View, Object.assign({ style: { paddingHorizontal: 8, paddingVertical: 25, gap: 16, width: 164, alignItems: 'center', justifyContent: 'center' } }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: '#000000', width: 90, height: 41, textAlign: 'center' }] }, { children: "Set price per day" })) }))] })), commodity.price_perday.map((item) => (_jsxs(View, Object.assign({ style: { borderBottomWidth: 1, borderColor: '#E0E1E1', flexDirection: 'row', height: 62 } }, { children: [_jsx(View, Object.assign({ style: { paddingHorizontal: 8, paddingVertical: 25, gap: 16, width: 164, alignItems: 'center', justifyContent: 'center' } }, { children: _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#000000', width: 56, height: 21, textAlign: 'center' }] }, { children: `${item.weight}KG` })) })), _jsx(View, Object.assign({ style: { paddingHorizontal: 8, paddingVertical: 25, gap: 16, width: 164, alignItems: 'center', justifyContent: 'center' } }, { children: _jsxs(Text, Object.assign({ style: [textStyles.bodyB3, { backgroundColor: '#B6C7D8', width: 56, height: 32, borderRadius: 4, borderColor: '#86A2BE', textAlign: 'center', color: '#000000', textAlignVertical: 'center' }] }, { children: ["\u20B9", item.price] })) }))] }), item._id)))] }))] })))] }))] })) })), _jsxs(Modal, Object.assign({ animationType: "fade", transparent: true, visible: isVisible, onRequestClose: () => setIsVisible(false) }, { children: [_jsx(View, { style: {
                            backgroundColor: '#5E5E5EB2',
                            width: '100%',
                            height: '100%',
                        } }), _jsxs(View, Object.assign({ style: styles.modalContainer }, { children: [_jsx(View, Object.assign({ style: styles.modalTitle }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH6, {
                                            color: '#1C1C1C',
                                        }] }, { children: "Select photos" })) })), _jsx(TouchableOpacity, Object.assign({ onPress: () => setIsVisible(false), style: styles.DissmissBotton }, { children: _jsx(Dissmiss, {}) })), _jsxs(View, Object.assign({ style: styles.optionPosition }, { children: [_jsxs(TouchableOpacity, Object.assign({ style: styles.option, onPress: () => { } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: '#1C1C1C' }] }, { children: "Gallery" })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#707371' }] }, { children: "Choose an existing file" }))] })), _jsxs(TouchableOpacity, Object.assign({ style: styles.option, onPress: () => { } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: '#1C1C1C' }] }, { children: "Camera" })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#707371' }] }, { children: "Take a picture" }))] }))] }))] }))] }))] })));
};
export default ViewDetails;
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
