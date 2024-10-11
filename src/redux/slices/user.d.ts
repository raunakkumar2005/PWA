type AuthState = {
    loggedIn: boolean;
    user: {};
    token: string | null;
    role: string;
    name: string;
};
export declare const updateLoggedIn: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/updateLoggedIn">, setToken: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/setToken">, setRole: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/setRole">, setName: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/setName">;
declare const _default: import("redux").Reducer<AuthState, import("redux").UnknownAction, AuthState>;
export default _default;
