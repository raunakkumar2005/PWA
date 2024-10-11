import React from "react";
import { ColorValue } from "react-native";
import { NumberProp } from "react-native-svg";
type ChevronLeftProps = {
    stroke?: ColorValue;
    strokeWidth?: NumberProp;
    width?: NumberProp;
    height?: NumberProp;
};
declare const ChevronLeft: React.FC<ChevronLeftProps>;
export default ChevronLeft;
