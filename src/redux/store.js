// @ts-nocheck
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import userReducer from './slices/user';
export var store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: function (getDefaultMiddleware) { return getDefaultMiddleware().concat(); },
});
setupListeners(store.dispatch);
