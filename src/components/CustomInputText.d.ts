import React from 'react';
import { KeyboardTypeOptions } from 'react-native';
interface PhoneInputProps {
    onTextChange?: (text: string) => void;
    PlaceHolder?: string;
    color?: string;
    txt?: string;
    component?: React.FC;
    keyboard?: KeyboardTypeOptions;
    metric?: string;
    triggerClear?: boolean;
    readonly?: boolean;
}
declare const CustomInputText: React.FC<PhoneInputProps>;
export default CustomInputText;
