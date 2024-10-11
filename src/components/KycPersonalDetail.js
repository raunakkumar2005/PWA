import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import EmailInput from './EmailInput';
import PhoneInput from './PhoneInput';
import CustomInput from './CustomInputText';
import statesOfIndia from './State';
import textStyles from './textStyles';
const KycPersonalDetail = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const mappingFunction = (item) => `${item.name}`;
    // const commodities = [
    //     { name: 'Commodity 1', id: 1 },
    //     { name: 'Commodity 2', id: 2 },
    //     // Add more commodity objects as needed
    // ];
    // const customMappingFunction = (item: { name: any; id: any }) => `${item.name} - ${item.id}`;
    return (_jsxs(View, { children: [_jsxs(View, Object.assign({ style: { marginHorizontal: "5%", marginVertical: '2%', borderWidth: 1, borderRadius: 7 } }, { children: [_jsx(CustomInput, { PlaceHolder: 'First Name' }), _jsx(View, { style: { borderTopWidth: 1, width: "100%" } }), _jsx(CustomInput, { PlaceHolder: 'Last Name' })] })), _jsx(View, Object.assign({ style: { marginHorizontal: "5%", marginVertical: '2%', } }, { children: _jsx(EmailInput, {}) })), _jsx(View, Object.assign({ style: { marginHorizontal: "5%", marginVertical: '2%', } }, { children: _jsx(PhoneInput, {}) })), _jsx(View, Object.assign({ style: { marginHorizontal: "5%", marginVertical: '2%', borderWidth: 1, borderRadius: 7 } }, { children: _jsx(CustomInput, { PlaceHolder: 'Flat no / Building name' }) })), _jsx(View, Object.assign({ style: { marginHorizontal: "5%", marginVertical: '2%', borderWidth: 1, borderRadius: 7 } }, { children: _jsx(CustomInput, { PlaceHolder: 'Locality / Area / Street ' }) })), _jsx(View, Object.assign({ style: { marginHorizontal: "5%", marginVertical: '2%', borderWidth: 1, borderRadius: 7 } }, { children: _jsx(CustomInput, { PlaceHolder: 'Landmark (optional)' }) })), _jsx(View, Object.assign({ style: { marginHorizontal: "5%", marginVertical: '2%', borderWidth: 1, borderRadius: 7, zIndex: -1 } }, { children: _jsx(CustomInput, { PlaceHolder: 'Pin code' }) })), _jsx(View, Object.assign({ style: { marginHorizontal: "5%", marginVertical: '2%', borderWidth: 1, borderRadius: 7 } }, { children: _jsx(CustomInput, { PlaceHolder: 'City' }) })), isClicked ? _jsx(View, { children: _jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.ScrollView }, { children: statesOfIndia.map((item, index) => (_jsx(TouchableOpacity, Object.assign({ style: { width: '100%', borderRadius: 8, height: 50, justifyContent: 'center' }, onPress: () => {
                            setSelectedItem(item);
                            setIsClicked(false);
                        } }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20 } }, { children: mappingFunction(item) })) }), index))) })) }) : null, _jsx(TouchableOpacity, Object.assign({ style: { width: '100%', marginVertical: '2%', height: 55, justifyContent: 'center', borderWidth: 1, borderRadius: 7 }, onPress: () => { setIsClicked(!isClicked); } }, { children: _jsxs(View, Object.assign({ style: { height: '100%', justifyContent: 'space-evenly', paddingHorizontal: 12, position: 'absolute' } }, { children: [selectedItem == null ? null : _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "State" })), _jsx(Text, Object.assign({ style: selectedItem == null ? textStyles.bodyB3 : [textStyles.headingH8, { color: 'black' }] }, { children: selectedItem == null ? 'State' : mappingFunction(selectedItem) }))] })) }))] }));
};
export default KycPersonalDetail;
const styles = StyleSheet.create({
    ScrollView: {
        backgroundColor: 'white',
        width: '100%',
        zIndex: 2,
        position: 'absolute',
        top: -300,
        // left: '5%',
        height: 300,
        borderWidth: 0.5,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
