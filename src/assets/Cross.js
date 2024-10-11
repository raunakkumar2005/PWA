import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
function Cross(props) {
    return (_jsx(Svg, Object.assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { children: _jsx(Path, { d: "M6.691 16.291A.72.72 0 107.71 17.31L6.69 16.29zm5.819-3.781a.72.72 0 00-1.019-1.019l1.019 1.019zM11.49 11.49a.72.72 0 101.019 1.019L11.49 11.49zM17.31 7.71A.72.72 0 0016.29 6.69L17.31 7.71zm-4.8 3.781a.72.72 0 10-1.019 1.019l1.019-1.019zm3.781 5.819a.72.72 0 001.019-1.019L16.29 17.31zm-4.8-4.8a.72.72 0 001.019-1.019L11.49 12.51zM7.71 6.69A.72.72 0 006.69 7.71L7.71 6.69zm0 10.619l4.8-4.8-1.019-1.019-4.8 4.8L7.71 17.31zm4.8-4.8l4.8-4.8L16.29 6.69l-4.8 4.8 1.019 1.019zm-1.019 0l4.8 4.8 1.019-1.019-4.8-4.8-1.019 1.019zm1.019-1.019l-4.8-4.8L6.69 7.71l4.8 4.8 1.019-1.019z", fill: props.color ? props.color : "#1C1C1C" }) })));
}
export default Cross;
