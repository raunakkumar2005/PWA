// @ts-nocheck
// import {BASE_URL} from '@env';
import axios from 'axios';
import { getToken } from '../utils/auth';
var BASE_URL = process.env.REACT_APP_BASE_URL;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// an Axios instance
var api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
api.defaults.baseURL = BASE_URL;
api.defaults.headers.common['Content-Type'] = 'application/json';
api.interceptors.request.use(function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getToken()];
            case 1:
                token = _a.sent();
                //console.log(token);
                if (token) {
                    config.headers.Authorization = "Bearer ".concat(token);
                }
                return [2 /*return*/, config];
        }
    });
}); });
// Authentication API
var authApi = {
    signupByPhone: function (phone) {
        var url = "/api/auth/signup/phone";
        return api.post(url, {
            phone: '91' + phone,
        });
    },
    LOGIN_WITH_PHONE: function (phone) {
        var url = "/api/auth/login/phone";
        return api.post(url, {
            phone: '91' + phone,
        });
    },
    signupByEmail: function (email) {
        var url = "/api/auth/signup/email";
        return api.post(url, {
            email: email,
        });
    },
    LOGIN_WITH_EMAIL: function (email, password) {
        var url = "/api/auth/login/email";
        return api.post(url, {
            email: email,
            password: password,
        });
    },
    verifyOtpForPhone: function (otp, token) {
        var url = "/api/auth/verify-otp/phone";
        var config = {
            headers: { Authorization: "Bearer ".concat(token) },
        };
        return api.post(url, {
            otp: otp,
        }, config);
    },
    VERIFY_OTP_LOGIN_PHONE: function (otp, token) {
        var url = "/api/auth/login/verify-otp";
        var config = {
            headers: { Authorization: "Bearer ".concat(token) },
        };
        return api.post(url, {
            otp: otp,
        }, config);
    },
    verifyOtpByEmail: function (otp, token) {
        var url = "/api/auth/verify-otp/email";
        var config = {
            headers: { Authorization: "Bearer ".concat(token) },
        };
        return api.post(url, {
            otp: otp,
        }, config);
    },
    CREATE_ACCOUNT_WITH_PHONE: function (firstName, lastName, role, token) {
        var url = "/api/auth/create/phone";
        var config = {
            headers: { Authorization: "Bearer ".concat(token) },
        };
        return api.post(url, {
            firstName: firstName,
            lastName: lastName,
            role: role,
        }, config);
    },
    CREATE_FARMER_WITH_PHONE: function (firstName, lastName, token) {
        var url = "/api/auth/createFarmer";
        var config = {
            headers: { Authorization: "Bearer ".concat(token) },
        };
        return api.post(url, {
            firstName: firstName,
            lastName: lastName,
        }, config);
    },
    SIGNUP_FARMER_PHONE: function (role, token) {
        var url = "/api/auth/signupFarmer";
        var config = {
            headers: { Authorization: "Bearer ".concat(token) },
        };
        return api.post(url, {
            role: role,
        }, config);
    },
    CREATE_ACCOUNT_WITH_EMAIL: function (firstName, lastName, role, password, token) {
        var url = "/api/auth/create/email";
        var config = {
            headers: { Authorization: "Bearer ".concat(token) },
        };
        return api.post(url, {
            firstName: firstName,
            lastName: lastName,
            role: role,
            password: password,
        }, config);
    },
    SIGNUP_WITH_FARMER_WITH_EMAIL: function (firstName, lastName, password, token) {
        var url = "/api/auth/createFarmer/email";
        var config = {
            headers: { Authorization: "Bearer ".concat(token) },
        };
        return api.post(url, {
            firstName: firstName,
            lastName: lastName,
            password: password,
        }, config);
    },
    CREATE_FARMER_WITHROLE_EMAIL: function (role, token) {
        var url = "/api/auth/signupFarmer/email";
        var config = {
            headers: { Authorization: "Bearer ".concat(token) },
        };
        return api.post(url, {
            role: role,
        }, config);
    },
    RESET_PASSWORD: function (email) {
        var url = "/api/auth/resetpassword";
        return api.post(url, {
            email: email,
        });
    },
    VERIFY_OTP_PASSWORD: function (otp, token) {
        var url = "/api/auth/verifyResetPassword";
        var config = {
            headers: { Authorization: "Bearer ".concat(token) },
        };
        return api.post(url, {
            otp: otp,
            config: config,
        });
    },
    UPDATE_PASSWORD: function (email, password) {
        var url = "/api/auth/updatePassword";
        return api.post(url, {
            email: email,
            newPassword: password,
        });
    },
    updateUser: function (userData) { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "/api/auth/update";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api.put(url, userData)];
                case 2:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 3:
                    err_1 = _a.sent();
                    console.log('Error in useUser : ', err_1);
                    throw new Error('Error fetching user info');
                case 4: return [2 /*return*/];
            }
        });
    }); },
    getUser: function (user_id) { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = "api/auth/fetch/".concat(user_id);
                    return [4 /*yield*/, api.get(url)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_1 = _a.sent();
                    throw error_1;
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getUserProfile: function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = "api/auth/fetchUserInfo";
                    return [4 /*yield*/, api.get(url)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_2 = _a.sent();
                    throw error_2;
                case 3: return [2 /*return*/];
            }
        });
    }); },
};
// Warehouse API
var warehouseApi = {
    addWarehouse: function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            console.log("data in add warehouse : ", data);
            url = "/api/warehouse";
            return [2 /*return*/, api.post(url, data)];
        });
    }); },
    addWarehouseManager: function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            url = "/api/warehouse/add-manager";
            return [2 /*return*/, api.put(url, data)];
        });
    }); },
    assignWarehouseManager: function (warehouseId, managerId) { return __awaiter(void 0, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            url = "/api/warehouse/".concat(warehouseId, "/assign-manager/").concat(managerId);
            return [2 /*return*/, api.put(url)];
        });
    }); },
    getWarehouseManager: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var url, res, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "/api/warehouse/manager/".concat(id);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    res = api.get(url);
                    return [4 /*yield*/, res];
                case 2: return [2 /*return*/, (_a.sent()).data.data];
                case 3:
                    error_3 = _a.sent();
                    throw error_3;
                case 4: return [2 /*return*/];
            }
        });
    }); },
    getWarehouseManagerbyOwner: function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, res, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "/api/warehouse/managers/owner-all-managers";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    res = api.get(url);
                    return [4 /*yield*/, res];
                case 2: return [2 /*return*/, (_a.sent()).data.data];
                case 3:
                    error_4 = _a.sent();
                    throw error_4;
                case 4: return [2 /*return*/];
            }
        });
    }); },
    getAllWarehouses: function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "/api/warehouse";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api.get(url)];
                case 2:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 3:
                    error_5 = _a.sent();
                    console.error('Error fetching all warehouses:', error_5);
                    return [2 /*return*/, null]; // or handle error as needed
                case 4: return [2 /*return*/];
            }
        });
    }); },
    getAllWarehousesForOwner: function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "/api/warehouse/owner";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api.get(url)];
                case 2:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 3:
                    error_6 = _a.sent();
                    console.error('Error fetching all warehouses:', error_6);
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    getAllWarehousesForManager: function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "/api/warehouse/manager-wh";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api.get(url)];
                case 2:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 3:
                    error_7 = _a.sent();
                    console.error('Error fetching all warehouses:', error_7);
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    getWarehouseByLatLong: function (lat, long) { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "/api/warehouse/fetchWarehouseBylatlongkm";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api.get(url, { params: { lat: lat, long: long } })];
                case 2:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 3:
                    error_8 = _a.sent();
                    console.error("Error fetching warehouse at lat: ".concat(lat, ", long: ").concat(long), error_8);
                    return [2 /*return*/, null]; // or handle error as needed
                case 4: return [2 /*return*/];
            }
        });
    }); },
    searchWarehouses: function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var url, searchParams, response, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "/api/warehouse/search";
                    searchParams = new URLSearchParams(params).toString();
                    console.log("".concat(url, "?").concat(searchParams));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api.get("".concat(url, "?").concat(searchParams))];
                case 2:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 3:
                    error_9 = _a.sent();
                    console.error('Error searching warehouses:', error_9);
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    updateItemsInWarehouse: function (data, id) { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("data in add commodity api :", data);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    url = "/api/warehouse/commodity/".concat(id);
                    console.log(url);
                    return [4 /*yield*/, api.put(url, data)];
                case 2:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 3:
                    error_10 = _a.sent();
                    throw error_10;
                case 4: return [2 /*return*/];
            }
        });
    }); },
    FETCH_ALL_WAREHOUSES_BY_WAREHOUSE_OWNER_ID: function (id) {
        var url = "/api/warehouse/owner/".concat(id);
        return api.get(url);
    },
};
// Shipping API
var shippingApi = {
    addShipping: function (warehouseId, bookingId, data) {
        var url = "/api/shipping/".concat(warehouseId, "/").concat(bookingId);
        return api.post(url, data);
    },
    getShippingById: function (id) {
        var url = "/api/shipping/shipping/".concat(id);
        return api.get(url);
    },
    getWithdrawlId: function (id) {
        var url = "/api/shipping/".concat(id, "/withdrawlId");
        return api.get(url);
    },
    updateShipping: function (id, data) {
        var url = "/api/shipping/update/".concat(id);
        return api.put(url, data);
    },
    getShippingDetailsByWithdrawlId: function (withdrawlId) {
        var url = "/api/shipping/".concat(withdrawlId);
        return api.get(url);
    },
};
var GradeAndDeposit = {
    addDeposit: function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(payload);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    url = "/api/deposit/add";
                    return [4 /*yield*/, api.post(url, payload)];
                case 2:
                    response = _a.sent();
                    console.log(response.data, "hoohoo");
                    return [3 /*break*/, 4];
                case 3:
                    error_11 = _a.sent();
                    throw error_11;
                case 4: return [2 /*return*/];
            }
        });
    }); },
    get_deposit_by_status: function (status) {
        var url = "/api/deposit/status/".concat(status);
        return api.get(url);
    },
    get_deposit_by_deposit_Id: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            url = "/api/deposit/".concat(id);
            return [2 /*return*/, api.get(url)];
        });
    }); },
    add_grade: function (id, assignerName, gradeDate, foreignMatter, otherFoodGrain, other, damagedGrain, immatureGrain, weevilledGrain, grade) { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = "/api/grade/add/".concat(id);
                    return [4 /*yield*/, api.put(url, {
                            assignerName: assignerName,
                            gradeDate: gradeDate,
                            // "images": [
                            // ],
                            foreignMatter: foreignMatter,
                            otherFoodGrain: otherFoodGrain,
                            other: other,
                            damagedGrain: damagedGrain,
                            immatureGrain: immatureGrain,
                            weevilledGrain: weevilledGrain,
                            grade: grade,
                        })];
                case 1:
                    response = _a.sent();
                    console.log(response.data.message);
                    return [2 /*return*/, response.data.message];
                case 2:
                    error_12 = _a.sent();
                    throw error_12;
                case 3: return [2 /*return*/];
            }
        });
    }); },
    get_deposit: function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = "/api/deposit/";
                    return [4 /*yield*/, api.get(url)];
                case 1:
                    response = _a.sent();
                    console.log(response.data.data, 100);
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_13 = _a.sent();
                    throw error_13;
                case 3: return [2 /*return*/];
            }
        });
    }); },
    get_grading: function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = "/api/grade/fetch-all";
                    return [4 /*yield*/, api.get(url)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_14 = _a.sent();
                    throw error_14;
                case 3: return [2 /*return*/];
            }
        });
    }); },
    get_deposit_farmer: function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = "/api/deposit/farmer";
                    return [4 /*yield*/, api.get(url)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_15 = _a.sent();
                    throw error_15;
                case 3: return [2 /*return*/];
            }
        });
    }); }
};
var Booking = {
    get_all_bookings: function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_16;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(1);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    url = "/api/booking/owner-warehouses/all-bookings";
                    return [4 /*yield*/, api.get(url)];
                case 2:
                    response = _a.sent();
                    console.log(response.data.data);
                    return [2 /*return*/, response.data.data];
                case 3:
                    error_16 = _a.sent();
                    throw error_16;
                case 4: return [2 /*return*/];
            }
        });
    }); },
    get_all_bookings_farmer: function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_17;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = "/api/booking";
                    return [4 /*yield*/, api.get(url)];
                case 1:
                    response = _a.sent();
                    console.log(response.data.data.length);
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_17 = _a.sent();
                    throw error_17;
                case 3: return [2 /*return*/];
            }
        });
    }); },
    get_bookings_by_booking_id: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_18;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = "api/booking/booking/".concat(id);
                    return [4 /*yield*/, api.get(url)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_18 = _a.sent();
                    throw error_18;
                case 3: return [2 /*return*/];
            }
        });
    }); },
    accept_booking: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var token, url, response, error_19;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getToken()];
                case 1:
                    token = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    url = "api/booking/".concat(id, "/accept");
                    return [4 /*yield*/, api.put(url, {
                            acceptedBy: token,
                        })];
                case 3:
                    response = _a.sent();
                    console.log(response);
                    return [3 /*break*/, 5];
                case 4:
                    error_19 = _a.sent();
                    console.log(error_19, 1);
                    throw error_19;
                case 5: return [2 /*return*/];
            }
        });
    }); },
    reject_booking: function (id, reason) { return __awaiter(void 0, void 0, void 0, function () {
        var token, url, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getToken()];
                case 1:
                    token = _a.sent();
                    try {
                        url = "api/booking/".concat(id, "/reject");
                        response = api.put(url, {
                            rejectedBy: token,
                            reasonOfRejected: reason,
                        });
                        console.log(response);
                    }
                    catch (error) {
                        console.log(error, 1);
                        throw error;
                    }
                    return [2 /*return*/];
            }
        });
    }); },
    cancel_booking: function (id, reason) { return __awaiter(void 0, void 0, void 0, function () {
        var url, res, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "/api/booking/cancel/".concat(id);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api.post(url, {
                            reason: reason,
                        })];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res.data.data];
                case 3:
                    err_2 = _a.sent();
                    throw err_2;
                case 4: return [2 /*return*/];
            }
        });
    }); },
    create_booking: function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var url, res, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(data);
                    url = "/api/booking/farmer/".concat(id);
                    console.log(data);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api.post(url, data)];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res.data.data];
                case 3:
                    err_3 = _a.sent();
                    throw err_3;
                case 4: return [2 /*return*/];
            }
        });
    }); },
};
var Weighbridge = {
    get_all_details: function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_20;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = "api/weighbridge";
                    return [4 /*yield*/, api.get(url)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_20 = _a.sent();
                    throw error_20;
                case 3: return [2 /*return*/];
            }
        });
    }); },
    add_details: function (booking_id, gross_weight, gross_weight_unit, tore_weight, tore_weight_unit, time, truck_number, driver_name) { return __awaiter(void 0, void 0, void 0, function () {
        var today, url, response;
        return __generator(this, function (_a) {
            today = new Date().toISOString().substring(0, 10).replaceAll('-', '');
            try {
                url = "api/weighbridge/add";
                response = api.post(url, {
                    booking_id: booking_id,
                    today_date: today,
                    time: time,
                    gross_weight: gross_weight,
                    gross_weight_unit: gross_weight_unit,
                    tore_weight: tore_weight,
                    tore_weight_unit: tore_weight_unit,
                    truck_number: 'MH 47A\n2345',
                    driver_name: 'Arjun',
                });
                console.log(response);
            }
            catch (error) {
                console.log(error, 1);
                throw error;
            }
            return [2 /*return*/];
        });
    }); },
};
var Withdrawalapi = {
    get_all_withdrawal: function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_21;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = "api/shipping/getWithdrawl";
                    return [4 /*yield*/, api.get(url)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.data];
                case 2:
                    error_21 = _a.sent();
                    throw error_21;
                case 3: return [2 /*return*/];
            }
        });
    }); },
    add_shipping: function (payload, params) { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_22;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = "api/shipping/".concat(params.warehouse_id, "/").concat(params.booking_id);
                    console.log(url);
                    return [4 /*yield*/, api.post(url, payload)];
                case 1:
                    response = _a.sent();
                    console.log(response.data.message);
                    return [3 /*break*/, 3];
                case 2:
                    error_22 = _a.sent();
                    console.log(error_22, 1);
                    throw error_22;
                case 3: return [2 /*return*/];
            }
        });
    }); },
    sendOTP: function (phone) { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_23;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = "api/shipping/send-otp";
                    console.log(url, phone, 11);
                    return [4 /*yield*/, api.post(url, { phone: phone })];
                case 1:
                    response = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_23 = _a.sent();
                    console.log(error_23, 1);
                    throw error_23;
                case 3: return [2 /*return*/];
            }
        });
    }); },
    verifyOTP: function (otp, phone) { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_24;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = "api/shipping/verify-otp";
                    console.log(url);
                    return [4 /*yield*/, api.post(url, {
                            phone: phone,
                            otp: otp,
                        })];
                case 1:
                    response = _a.sent();
                    if (response.status === 200) {
                        return [2 /*return*/, true];
                    }
                    return [2 /*return*/, false];
                case 2:
                    error_24 = _a.sent();
                    console.log(error_24, 1);
                    throw error_24;
                case 3: return [2 /*return*/];
            }
        });
    }); },
};
var DashboardData = function (timeLine) { return __awaiter(void 0, void 0, void 0, function () {
    var base, filter, url1, url2, url3, url4, url5, url6, response1, response2, response3, response4, response5, response6, error_25;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                base = 'api/booking/';
                filter = "?filter=".concat(timeLine);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 8, , 9]);
                url1 = base + "current-booking/count" + filter;
                url2 = base + 'total-booking/count' + filter;
                url3 = base + 'totalGoods-count' + filter;
                url4 = base + "pending-count" + filter;
                url5 = base + "accepted-count" + filter;
                url6 = base + 'rejected-count' + filter;
                return [4 /*yield*/, api.get(url1)];
            case 2:
                response1 = _a.sent();
                return [4 /*yield*/, api.get(url2)];
            case 3:
                response2 = _a.sent();
                return [4 /*yield*/, api.get(url3)];
            case 4:
                response3 = _a.sent();
                return [4 /*yield*/, api.get(url4)];
            case 5:
                response4 = _a.sent();
                return [4 /*yield*/, api.get(url5)];
            case 6:
                response5 = _a.sent();
                return [4 /*yield*/, api.get(url6)];
            case 7:
                response6 = _a.sent();
                return [2 /*return*/, [
                        response1.data.data,
                        response2.data.data,
                        response3.data.data + ' MT',
                        response4.data.data,
                        response5.data.data,
                        response6.data.data,
                    ]];
            case 8:
                error_25 = _a.sent();
                throw error_25;
            case 9: return [2 /*return*/];
        }
    });
}); };
var DashboardGraph = function (timeLine) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, error_26;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                url = "current-booking/count?filter=".concat(timeLine);
                return [4 /*yield*/, api.get(url)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data.data];
            case 2:
                error_26 = _a.sent();
                throw error_26;
            case 3: return [2 /*return*/];
        }
    });
}); };
export { authApi, warehouseApi, shippingApi, Booking, GradeAndDeposit, Weighbridge, Withdrawalapi, DashboardData, DashboardGraph };
