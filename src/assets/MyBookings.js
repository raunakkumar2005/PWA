import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
function MyBookings(props) {
    return (_jsx(Svg, Object.assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { children: _jsx(Path, { d: "M15.088 6.412a2.844 2.844 0 00-1.347-.955l-1.378-.448a.544.544 0 010-1.025l1.378-.448A2.839 2.839 0 0015.5 1.774l.011-.034.448-1.377a.544.544 0 011.027 0l.447 1.377a2.835 2.835 0 001.799 1.796l1.377.448.028.007a.544.544 0 010 1.025l-1.378.448a2.839 2.839 0 00-1.798 1.796l-.448 1.377a.544.544 0 01-1.026 0l-.448-1.377a2.837 2.837 0 00-.45-.848zm7.695 3.801l-.766-.248a1.577 1.577 0 01-.998-.999l-.25-.764a.302.302 0 00-.57 0l-.248.764a1.576 1.576 0 01-.984.999l-.765.248a.302.302 0 000 .57l.765.249a1.578 1.578 0 011 1.002l.248.764a.302.302 0 00.57 0l.249-.764a1.576 1.576 0 01.999-.999l.765-.248a.302.302 0 000-.57l-.015-.004zM6.25 3h5.797A1.565 1.565 0 0011 4.5H6.25A1.75 1.75 0 004.5 6.25V7h9.754c.15.16.267.344.336.549l.269.951H4.5v9.25c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 001.75-1.75v-4.163c.214.276.512.463.96.463.211 0 .389-.042.54-.114v3.814A3.25 3.25 0 0117.75 21H6.25A3.25 3.25 0 013 17.75V6.25A3.25 3.25 0 016.25 3z", fill: props.selected == undefined
                ? '#557CA4'
                : props.selected
                    ? '#0C447D'
                    : '#545554' }) })));
}
export default MyBookings;
