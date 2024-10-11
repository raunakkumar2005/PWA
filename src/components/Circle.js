import { jsx as _jsx } from "react/jsx-runtime";
// @ts-nocheck
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
// accepts any react element as child
import { View } from 'react-native';
export default function Circles() {
    const props = {
        activeStrokeWidth: 25,
        inActiveStrokeWidth: 25,
        inActiveStrokeOpacity: 0.2
    };
    return (_jsx(View, { children: _jsx(CircularProgressBase, Object.assign({}, props, { value: 80, radius: 125, activeStrokeColor: '#e84118', inActiveStrokeColor: '#e84118' }, { children: _jsx(CircularProgressBase, Object.assign({}, props, { value: 87, radius: 100, activeStrokeColor: '#badc58', inActiveStrokeColor: '#badc58' }, { children: _jsx(CircularProgressBase, Object.assign({}, props, { value: 62, radius: 75, activeStrokeColor: '#18dcff', inActiveStrokeColor: '#18dcff' })) })) })) }));
}
