
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * @format
 */
import { AppRegistry } from 'react-native';
import Navigator from './Navigator';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './Navigator';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
AppRegistry.registerComponent('component_test', function () { return App; });
var AppWrap = function () {
    return (_jsx(Provider, __assign({ store: store }, { children: _jsx(Navigator, {}) })));
};
export default AppWrap;
