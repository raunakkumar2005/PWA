
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// UserStack.tsx
import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchWarehouse from '../warehouseFarmer/SearchWarehouse';
import SearchResult from '../warehouseFarmer/SearchResult';
import WarehouseDetails from '../warehouseFarmer/WarehouseDetails';
import Filter from '../warehouseFarmer/Filter';
import KycFarmer from '../warehouseFarmer/KycFarmer';
import Profile from '../warehouseFarmer/Profile';
import BookWarehouse from '../warehouseFarmer/BookWarehouse';
import MyBooking from '../warehouseFarmer/MyBooking';
import CancelBooking from '../warehouseFarmer/CancelBooking';
import AcceptedBookingDetails from '../warehouseFarmer/AcceptedBookingDetails';
import RejectedBookingDetails from '../warehouseFarmer/RejectedBookingDetails';
import Dashboard from '../warehouseFarmer/Dashboard';
import WarehouseDetailsOwner from '../WarehouseOwner/WarehouseDetailsOwner';
import Warehouse from '../WarehouseOwner/Warehouse';
import KycOwner from '../WarehouseOwner/KycOwner';
import AddWarehouse from '../WarehouseOwner/AddWarehouse';
import ParentComponent from '../Test';
import ViewDetail from '../WarehouseOwner/ViewDetail';
import WOBookWarehouse from '../WarehouseOwner/WOBookWarehouse';
import Bookings from '../WarehouseOwner/Bookings';
import Action from '../WarehouseOwner/Action';
import Reasons from '../WarehouseOwner/Reasons';
import { getName, getRole, getToken } from '../../utils/auth';
import { ActivityIndicator } from 'react-native-paper';
import NewDeposit from '../WarehouseOwner/NewDeposit';
import PendingTransitions from '../WarehouseOwner/PendingTransitions';
import Grading from '../WarehouseOwner/Grading';
import GradingDetails from '../WarehouseOwner/GradingDetails';
import WithdrawalData from '../WarehouseOwner/WithdrawalData';
import WeighbridgeDetails from '../WarehouseOwner/WeighbridgeDetails';
import { updateLoggedIn, setRole, setToken, setName } from '../../redux/slices/user';
import { useDispatch } from 'react-redux';
import WarehouseOwner from '../WarehouseOwner/OwnerDashboard';
import WeightVerification from '../WarehouseOwner/WeightVerification';
import WeightBridgeData from '../WarehouseOwner/WeightBridgeData';
import Withdrawal from '../warehouseFarmer/Withdrawal';
import EditManager from '../WarehouseOwner/EditManager';
import ListManager from '../WarehouseOwner/ListManager';
import TransitionScreen from '../warehouseFarmer/TransitionScreen';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Stack = createStackNavigator();
const UserStack = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const role = yield getRole();
                const token = yield getToken();
                const name = yield getName();
                dispatch(updateLoggedIn(true));
                dispatch(setRole(role));
                dispatch(setToken(token));
                dispatch(setName(name));
            }
            catch (error) {
                console.error('Error fetching data', error);
            }
            finally {
                setIsLoading(false);
            }
        });
        fetchData();
    }, []);
    if (isLoading) {
        // Render a loading indicator or any placeholder while waiting for initialRoute
        return _jsx(ActivityIndicator, { style: { flex: 1 } });
    }
    return (_jsxs(Stack.Navigator, Object.assign({ initialRouteName: 'Dashboard', screenOptions: { headerShown: false } }, { children: [_jsx(Stack.Screen, { name: "SearchWarehouse", component: SearchWarehouse }), _jsx(Stack.Screen, { name: "SearchResult", component: SearchResult }), _jsx(Stack.Screen, { name: "WarehouseDetails", component: WarehouseDetails }), _jsx(Stack.Screen, { name: "Warehouse", component: Warehouse }), _jsx(Stack.Screen, { name: "WarehouseDetailOwner", component: WarehouseDetailsOwner }), _jsx(Stack.Screen, { name: "Filter", component: Filter }), _jsx(Stack.Screen, { name: "KycFarmer", component: KycFarmer }), _jsx(Stack.Screen, { name: "KycOwner", component: KycOwner }), _jsx(Stack.Screen, { name: "Profile", component: Profile }), _jsx(Stack.Screen, { name: "BookWarehouse", component: BookWarehouse }), _jsx(Stack.Screen, { name: "WOBookWarehouse", component: WOBookWarehouse }), _jsx(Stack.Screen, { name: "MyBooking", component: MyBooking }), _jsx(Stack.Screen, { name: "CancelBooking", component: CancelBooking }), _jsx(Stack.Screen, { name: "AcceptedBookingDetails", component: AcceptedBookingDetails }), _jsx(Stack.Screen, { name: "RejectedBookingDetails", component: RejectedBookingDetails }), _jsx(Stack.Screen, { name: "Dashboard", component: Dashboard }), _jsx(Stack.Screen, { name: "AddWarehouse", component: AddWarehouse }), _jsx(Stack.Screen, { name: "ViewDetails", component: ViewDetail }), _jsx(Stack.Screen, { name: "Test", component: ParentComponent }), _jsx(Stack.Screen, { name: "Bookings", component: Bookings }), _jsx(Stack.Screen, { name: "Action", component: Action }), _jsx(Stack.Screen, { name: "Reasons", component: Reasons }), _jsx(Stack.Screen, { name: "New deposit", component: NewDeposit }), _jsx(Stack.Screen, { name: "Pending transactions", component: PendingTransitions }), _jsx(Stack.Screen, { name: "Grading", component: Grading }), _jsx(Stack.Screen, { name: "Grading and expiry details", component: GradingDetails }), _jsx(Stack.Screen, { name: "Withdrawal", component: Withdrawal }), _jsx(Stack.Screen, { name: "WithdrawalData", component: WithdrawalData }), _jsx(Stack.Screen, { name: "Weighbridge details", component: WeighbridgeDetails }), _jsx(Stack.Screen, { name: "New weighbridge data", component: WeightBridgeData }), _jsx(Stack.Screen, { name: "Owner Dashboard", component: WarehouseOwner }), _jsx(Stack.Screen, { name: "Weight Verification", component: WeightVerification }), _jsx(Stack.Screen, { name: "Add Manager", component: EditManager }), _jsx(Stack.Screen, { name: "ListManager", component: ListManager }), _jsx(Stack.Screen, { name: "Transition history", component: TransitionScreen })] })));
};
export default UserStack;
