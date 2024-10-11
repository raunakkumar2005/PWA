import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useState } from 'react';
import textStyles from './textStyles';
const Dropdown = ({ items, mappingFunction, }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    return (_jsxs(View, Object.assign({ style: { height: 'auto' } }, { children: [isClicked ? _jsx(ScrollView, Object.assign({ showsVerticalScrollIndicator: false, style: styles.ScrollView }, { children: items.map((item, index) => (_jsx(TouchableOpacity, Object.assign({ style: { width: '100%', borderRadius: 8, height: 50, justifyContent: 'center' }, onPress: () => {
                        setSelectedItem(item);
                        setIsClicked(false);
                    } }, { children: _jsx(Text, Object.assign({ style: { fontWeight: 'bold', paddingLeft: 20 } }, { children: mappingFunction(item) })) }), index))) })) : null, _jsx(TouchableOpacity, Object.assign({ style: { width: '100%', borderRadius: 8, height: 55, justifyContent: 'center' }, onPress: () => { setIsClicked(!isClicked); } }, { children: _jsxs(View, Object.assign({ style: { height: '100%', justifyContent: 'space-evenly', paddingHorizontal: 12 } }, { children: [selectedItem == null ? null : _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "State" })), _jsx(Text, Object.assign({ style: selectedItem == null ? textStyles.bodyB3 : [textStyles.headingH8, { color: 'black' }] }, { children: selectedItem == null ? 'State' : mappingFunction(selectedItem) }))] })) }))] })));
};
export default Dropdown;
const styles = StyleSheet.create({
    ScrollView: {
        backgroundColor: 'white',
        width: '100%',
        zIndex: 2,
        position: 'absolute',
        top: -305,
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
