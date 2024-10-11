var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
// @ts-nocheck
import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
// import MapView, { Marker, Region } from 'react-native-maps';
import { fetchGeocodeData } from '../utils/Location';
import getAddressFromLocation from '../utils/Location';
const MapComponent = ({ onAddressSelected }) => {
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [markerPosition, setMarkerPosition] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
    });
    useEffect(() => {
        console.log("Component mounted");
        getAddressFromLocation((address, location) => {
            if (address && location) {
                const { latitude, longitude } = location;
                console.log(latitude, longitude);
                setMarkerPosition({ latitude, longitude });
                onAddressSelected(address);
                setRegion((prevRegion) => (Object.assign(Object.assign({}, prevRegion), { latitude: latitude, longitude: longitude })));
            }
        });
    }, []);
    const handleDragEnd = (e) => __awaiter(void 0, void 0, void 0, function* () {
        const { latitude, longitude } = e.nativeEvent.coordinate;
        console.log("Dragged to ", latitude);
        setMarkerPosition({ latitude, longitude });
        const address = yield fetchGeocodeData(latitude, longitude);
        onAddressSelected(address);
    });
    return (_jsx(View, { style: styles.container }));
};
const styles = StyleSheet.create({
    container: Object.assign(Object.assign({}, StyleSheet.absoluteFillObject), { justifyContent: 'flex-end', alignItems: 'center' }),
    map: Object.assign(Object.assign({}, StyleSheet.absoluteFillObject), { height: '100%', width: '100%' }),
});
export default MapComponent;
