import { FarmerBooking, Warehouse, addShipping, addShippingParams } from './entities';
export type RootStackParamList = {
    Test: undefined;
    LoginAs: undefined;
    LoginMob: undefined;
    LoginOTP: undefined;
    LoginEmail: undefined;
    SignupMob: undefined;
    SignupEmail: undefined;
    FinishCreatingAccountPhone: undefined;
    FinishCreatingAccountEmail: undefined;
    SelectRole: undefined;
    SearchWarehouse: undefined;
    SearchResult: {
        warehouses: Warehouse[];
        addr?: string;
        Bookingdata?: any;
    };
    WarehouseDetails: {
        warehouse: Warehouse;
        Bookingdata?: any;
    };
    WarehouseDetailOwner: {
        warehouse?: Warehouse;
    };
    Filter: undefined;
    VerifyEmail: undefined;
    VerifyMob: undefined;
    ResetPassword: undefined;
    ResetOtp: undefined;
    ResetAndLogin: undefined;
    KycFarmer: undefined;
    KycOwner: undefined;
    Profile: undefined;
    Warehouse: undefined;
    BookWarehouse: {
        warehouse: Warehouse;
        Bookingdata: any;
        Totaldays: number;
        TotalCost: number;
    };
    WOBookWarehouse: {
        warehouse?: Partial<Warehouse>;
    };
    MyBooking: undefined;
    CancelBooking: {
        bookingId: string;
        warehouse?: Partial<Warehouse>;
    };
    AcceptedBookingDetails: {
        booking?: Partial<FarmerBooking>;
        warehouse?: Partial<Warehouse>;
    };
    RejectedBookingDetails: {
        booking?: Partial<FarmerBooking>;
    };
    'New deposit': undefined;
    WeightBridgeData: undefined;
    "Pending transactions": undefined;
    Grading: undefined;
    Bookings: {
        variant: string;
    };
    Dashboard: undefined;
    AddWarehouse: undefined;
    ViewDetails: {
        warehouse?: Warehouse;
    };
    Action: {
        data: string[];
    };
    Reasons: {};
    'Grading and expiry details': {};
    Withdrawal: {};
    WithdrawalData: {
        data?: string[];
        payload?: addShipping;
        params: addShippingParams;
    };
    "Add Manager": undefined;
    ListManager: {
        warehouse?: Warehouse;
    };
    "Transition history": undefined;
    'Weighbridge details': {
        variant: string;
    };
    'New weighbridge data': {};
    'Owner Dashboard': {};
    'Weight Verification': {};
};
