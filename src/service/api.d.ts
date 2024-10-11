import { AxiosResponse } from 'axios';
import { ICreateBooking, IUpdateUserRequest, User, Warehouse, WeighbridgeDetails, FarmerBooking, WithdrawalDetails, addShipping, addShippingParams, GradingDetails, addDeposit, AddCommodity, Manager } from '../types/entities';
interface ApiResponse {
    data: any;
    status: number;
}
declare const authApi: {
    signupByPhone: (phone: string) => Promise<AxiosResponse<ApiResponse>>;
    LOGIN_WITH_PHONE: (phone: string) => Promise<AxiosResponse<ApiResponse>>;
    signupByEmail: (email: string) => Promise<AxiosResponse<ApiResponse>>;
    LOGIN_WITH_EMAIL: (email: string, password: string) => Promise<AxiosResponse<ApiResponse>>;
    verifyOtpForPhone: (otp: string, token: string) => Promise<AxiosResponse<ApiResponse>>;
    VERIFY_OTP_LOGIN_PHONE: (otp: string, token: string) => Promise<AxiosResponse<ApiResponse>>;
    verifyOtpByEmail: (otp: string, token: string) => Promise<AxiosResponse<ApiResponse>>;
    CREATE_ACCOUNT_WITH_PHONE: (firstName: string, lastName: string, role: string, token: string) => Promise<AxiosResponse<ApiResponse>>;
    CREATE_FARMER_WITH_PHONE: (firstName: string, lastName: string, token: string) => Promise<AxiosResponse<ApiResponse>>;
    SIGNUP_FARMER_PHONE: (role: string, token: string) => Promise<AxiosResponse<ApiResponse>>;
    CREATE_ACCOUNT_WITH_EMAIL: (firstName: string, lastName: string, role: string, password: string, token: string) => Promise<AxiosResponse<ApiResponse>>;
    SIGNUP_WITH_FARMER_WITH_EMAIL: (firstName: string, lastName: string, password: string, token: string) => Promise<AxiosResponse<ApiResponse>>;
    CREATE_FARMER_WITHROLE_EMAIL: (role: string, token: string) => Promise<AxiosResponse<ApiResponse>>;
    RESET_PASSWORD: (email: string) => Promise<AxiosResponse<ApiResponse>>;
    VERIFY_OTP_PASSWORD: (otp: string, token: string) => Promise<AxiosResponse<ApiResponse>>;
    UPDATE_PASSWORD: (email: string, password: string) => Promise<AxiosResponse<ApiResponse>>;
    updateUser: (userData: IUpdateUserRequest) => Promise<User>;
    getUser: (user_id: string) => Promise<User>;
    getUserProfile: () => Promise<User>;
};
declare const warehouseApi: {
    addWarehouse: (data: any) => Promise<AxiosResponse<ApiResponse>>;
    addWarehouseManager: (data: any) => Promise<AxiosResponse<ApiResponse>>;
    assignWarehouseManager: (warehouseId: string, managerId: string) => Promise<AxiosResponse<ApiResponse>>;
    getWarehouseManager: (id: string | undefined) => Promise<Manager>;
    getWarehouseManagerbyOwner: () => Promise<Manager[]>;
    getAllWarehouses: () => Promise<Warehouse[] | null>;
    getAllWarehousesForOwner: () => Promise<Warehouse[] | null>;
    getAllWarehousesForManager: () => Promise<Warehouse[] | null>;
    getWarehouseByLatLong: (lat: number, long: number) => Promise<Warehouse[] | null>;
    searchWarehouses: (params: {
        locality_area?: string;
        landmark?: string;
        pincode?: string;
        city?: string;
        State?: string;
        mobile_number?: string;
        bags?: number;
        weight?: string;
        commodity_name?: string;
    }) => Promise<Warehouse[] | null>;
    updateItemsInWarehouse: (data: AddCommodity, id: string) => Promise<AxiosResponse<ApiResponse>>;
    FETCH_ALL_WAREHOUSES_BY_WAREHOUSE_OWNER_ID: (id: string) => Promise<AxiosResponse<ApiResponse>>;
};
declare const shippingApi: {
    addShipping: (warehouseId: string, bookingId: string, data: any) => Promise<AxiosResponse<ApiResponse>>;
    getShippingById: (id: string) => Promise<AxiosResponse<ApiResponse>>;
    getWithdrawlId: (id: string) => Promise<AxiosResponse<ApiResponse>>;
    updateShipping: (id: string, data: any) => Promise<AxiosResponse<ApiResponse>>;
    getShippingDetailsByWithdrawlId: (withdrawlId: string) => Promise<AxiosResponse<ApiResponse>>;
};
declare const GradeAndDeposit: {
    addDeposit: (payload: addDeposit) => Promise<void>;
    get_deposit_by_status: (status: string) => Promise<AxiosResponse<ApiResponse>>;
    get_deposit_by_deposit_Id: (id: string) => Promise<AxiosResponse<ApiResponse>>;
    add_grade: (id: string, assignerName: string, gradeDate: string, foreignMatter: number, otherFoodGrain: number, other: number, damagedGrain: number, immatureGrain: number, weevilledGrain: number, grade: string) => Promise<AxiosResponse<ApiResponse>>;
    get_deposit: () => Promise<addDeposit[]>;
    get_grading: () => Promise<GradingDetails[]>;
    get_deposit_farmer: () => Promise<addDeposit[]>;
};
declare const Booking: {
    get_all_bookings: () => Promise<FarmerBooking[]>;
    get_all_bookings_farmer: () => Promise<FarmerBooking[]>;
    get_bookings_by_booking_id: (id: string) => Promise<FarmerBooking[]>;
    accept_booking: (id: string) => Promise<void>;
    reject_booking: (id: string, reason: string) => Promise<void>;
    cancel_booking: (id: string, reason: string) => Promise<AxiosResponse<ApiResponse>>;
    create_booking: (id: string, data: ICreateBooking) => Promise<AxiosResponse<ApiResponse>>;
};
declare const Weighbridge: {
    get_all_details: () => Promise<WeighbridgeDetails[]>;
    add_details: (booking_id: string, gross_weight: string, gross_weight_unit: string, tore_weight: string, tore_weight_unit: string, time: string, truck_number?: string, driver_name?: string) => Promise<void>;
};
declare const Withdrawalapi: {
    get_all_withdrawal: () => Promise<WithdrawalDetails[]>;
    add_shipping: (payload: addShipping, params: addShippingParams) => Promise<void>;
    sendOTP: (phone: string) => Promise<void>;
    verifyOTP: (otp: string, phone: string) => Promise<boolean>;
};
declare const DashboardData: (timeLine: string) => Promise<any[]>;
declare const DashboardGraph: (timeLine: string) => Promise<any>;
export { authApi, warehouseApi, shippingApi, Booking, GradeAndDeposit, Weighbridge, Withdrawalapi, DashboardData, DashboardGraph };
