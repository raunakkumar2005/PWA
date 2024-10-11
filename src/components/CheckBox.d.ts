import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
type CheckBoxProps = {
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
    value?: boolean;
};
declare const CheckBox: React.FC<CheckBoxProps>;
export default CheckBox;
