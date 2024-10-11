export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    user: {
        loggedIn: boolean;
        user: {};
        token: string;
        role: string;
        name: string;
    };
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        user: {
            loggedIn: boolean;
            user: {};
            token: string;
            role: string;
            name: string;
        };
    }, undefined, import("redux").UnknownAction>;
}, {}>, import("redux").StoreEnhancer<{}, {}>]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
