
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
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
export default function Layout(_a) {
    var children = _a.children;
    return (_jsx(SafeAreaView, __assign({ style: styles.container }, { children: children })));
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
