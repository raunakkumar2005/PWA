import AsyncStorage from '@react-native-async-storage/async-storage';

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

export const removeToken = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield AsyncStorage.removeItem('userToken');
        yield AsyncStorage.removeItem('userRole');
        yield AsyncStorage.removeItem('userName');
    }
    catch (error) {
        console.error(error);
    }
});
export const storeToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield AsyncStorage.setItem('userToken', token);
    }
    catch (error) {
        console.error(error);
    }
});
export const storeRole = (role) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield AsyncStorage.setItem('userRole', role);
    }
    catch (error) {
        console.error(error);
    }
});
export const storeName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield AsyncStorage.setItem('userName', name);
    }
    catch (error) {
        console.error(error);
    }
});
export const getToken = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield AsyncStorage.getItem('userToken');
        return token;
    }
    catch (error) {
        console.error(error);
    }
});
export const getRole = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield AsyncStorage.getItem('userRole');
        return role;
    }
    catch (error) {
        console.error(error);
    }
});
export const getName = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield AsyncStorage.getItem('userName');
        return role;
    }
    catch (error) {
        console.error(error);
    }
});
export const set = (key, value) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield AsyncStorage.setItem(key, value);
        return role;
    }
    catch (error) {
        console.error(error);
    }
});
export const get = (key) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield AsyncStorage.getItem(key);
        return role;
    }
    catch (error) {
        console.error(error);
    }
});
