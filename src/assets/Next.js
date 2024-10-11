import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
function Next(props) {
    return (_jsx(Svg, Object.assign({ width: 8, height: 15, viewBox: "0 0 8 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { children: _jsx(Path, { d: "M1 1.723l6 6-6 6", stroke: props.color ? props.color : "#fff", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }) })));
}
export default Next;
