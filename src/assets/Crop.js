import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import Svg, { Circle, Defs, Pattern, Use, Image } from "react-native-svg";
function Crop(props) {
    return (_jsxs(Svg, Object.assign({ width: 40, height: 40, viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props, { children: [_jsx(Circle, { cx: 20, cy: 20, r: 20, fill: "url(#pattern0_2871_39130)" }), _jsxs(Defs, { children: [_jsx(Pattern, Object.assign({ id: "pattern0_2871_39130", patternContentUnits: "objectBoundingBox", width: 1, height: 1 }, { children: _jsx(Use, { xlinkHref: "#image0_2871_39130", transform: "scale(.00781)" }) })), _jsx(Image, { id: "image0_2871_39130", width: 128, height: 128, xlinkHref: "data:image/png;base64,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" })] })] })));
}
export default Crop;
