import { jsx as _jsx } from "react/jsx-runtime";
import Svg, { Path } from "react-native-svg";
const ChevronRight = (props) => {
    const { stroke, strokeWidth, width, height, } = props;
    return (_jsx(Svg, Object.assign({ width: width ? width : 24, height: height ? height : 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { children: _jsx(Path, { d: "M9 18L15 12L9 6", stroke: stroke ? stroke : "black", strokeWidth: strokeWidth ? strokeWidth : 2, strokeLinecap: "round", strokeLinejoin: "round" }) })));
};
export default ChevronRight;