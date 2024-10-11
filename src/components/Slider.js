import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { useState } from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
export default function Slider(props) {
    const width = Dimensions.get('window').width;
    const [min, setMin] = useState(props.min.toString());
    const [max, setMax] = useState(props.max.toString());
    const sliderOneValuesChange = (values) => {
        setMin(values[0].toString());
        setMax(values[1].toString());
        props.onChange(props.option, parseInt(min), 'min');
        props.onChange(props.option, parseInt(max), 'max');
    };
    return (_jsxs(View, { children: [_jsx(View, Object.assign({ style: styles.sliderContainer }, { children: _jsx(MultiSlider, { values: [
                        min === '' ? props.min : parseInt(min),
                        max === '' ? props.max : parseInt(max),
                    ], sliderLength: width * 0.76, min: props.min, max: props.max, step: 1, trackStyle: {
                        backgroundColor: '#CEDAE5',
                    }, selectedStyle: {
                        backgroundColor: '#86A2BE',
                    }, customMarker: () => (_jsx(View, { style: {
                            backgroundColor: '#0C447D',
                            width: '40%',
                            aspectRatio: 1,
                            borderRadius: 100,
                        } })), onValuesChange: sliderOneValuesChange, allowOverlap: true, snapped: true }) })), _jsxs(View, Object.assign({ style: [
                    styles.filterOptionContainer,
                    {
                        justifyContent: 'space-between',
                    },
                ] }, { children: [_jsxs(View, Object.assign({ style: {
                            width: '35%',
                        } }, { children: [_jsx(Text, Object.assign({ style: styles.filterOptionSilderText }, { children: "Minimum" })), _jsx(TextInput, { style: styles.filterInput, cursorColor: 'black', keyboardType: "numeric", value: min, placeholder: `${min}`, placeholderTextColor: 'black', onChangeText: value => {
                                    if (value === '') {
                                        setMin('');
                                        props.onChange(props.option, props.min, 'min');
                                    }
                                    if (parseInt(value) > parseInt(max)) {
                                        return;
                                    }
                                    if (parseInt(value) > props.min && parseInt(value) <= props.max) {
                                        const temp = parseInt(value);
                                        setMin(temp.toString());
                                        props.onChange(props.option, temp, 'min');
                                    }
                                } })] })), _jsxs(View, Object.assign({ style: {
                            width: '35%',
                        } }, { children: [_jsx(Text, Object.assign({ style: styles.filterOptionSilderText }, { children: "Maximum" })), _jsx(TextInput, { style: styles.filterInput, cursorColor: 'black', value: max, keyboardType: "numeric", placeholder: `${max}`, placeholderTextColor: 'black', onChangeText: value => {
                                    if (value === '') {
                                        setMax('');
                                        props.onChange(props.option, props.max, 'max');
                                    }
                                    if (parseInt(value) > props.min && parseInt(value) <= props.max) {
                                        const temp = parseInt(value);
                                        setMax(temp.toString());
                                        props.onChange(props.option, temp, 'max');
                                    }
                                } })] }))] }))] }));
}
const styles = StyleSheet.create({
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
    filterOptionContainer: {
        flexDirection: 'row',
    },
    filterOptionSilderText: {
        color: 'black',
        fontFamily: 'Poppins-SemiBold',
        marginLeft: '2%',
    },
    sliderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
