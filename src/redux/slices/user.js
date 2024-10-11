import { createSlice } from '@reduxjs/toolkit';
var _a;
var initialState = {
    loggedIn: false,
    user: {},
    token: null,
    role: '',
    name: '',
};
var user = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        updateLoggedIn: function (state, _a) {
            var payload = _a.payload;
            state.loggedIn = payload;
        },
        setToken: function (state, _a) {
            var payload = _a.payload;
            state.token = payload;
        },
        setRole: function (state, _a) {
            var payload = _a.payload;
            state.role = payload;
        },
        setName: function (state, _a) {
            var payload = _a.payload;
            state.name = payload;
        },
    },
});
export var updateLoggedIn = (_a = user.actions, _a.updateLoggedIn), setToken = _a.setToken, setRole = _a.setRole, setName = _a.setName;
export default user.reducer;
