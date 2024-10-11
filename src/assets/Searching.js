import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
function SvgComponent(props) {
    return (_jsx(Svg, Object.assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { children: _jsx(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M13.874 14.582a6 6 0 11.707-.707l5.273 5.271a.5.5 0 01-.707.708l-5.273-5.272zM15 10a5 5 0 11-10 0 5 5 0 0110 0z", fill: "#545554" }) })));
}
export default SvgComponent;
