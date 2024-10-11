import * as React from "react";
import { ColorValue } from "react-native";
import { NumberProp } from "react-native-svg";
type ChevronRightProps = {
    stroke?: ColorValue;
    strokeWidth?: NumberProp;
    width?: NumberProp;
    height?: NumberProp;
};
declare const ChevronRight: React.FC<ChevronRightProps>;
export default ChevronRight;
