import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createStackNavigator } from '@react-navigation/stack';
import LoginMobScreen from '../login_signup/LoginMobScreen';
import LoginOTPScreen from '../login_signup/LoginOTPScreen';
import LoginScreen from '../login_signup/LoginEmailScreen';
import WelcomeBGScreen from '../login_signup/WelcomeBGScreen';
import SignUpMob from '../login_signup/SignUpMob';
import Register from '../login_signup/Finish_creating_account';
import ChooseRoleScreen from '../login_signup/Select_role';
import SignUpEmail from '../login_signup/SignUpEmail';
import VerifyEmail from '../login_signup/VerifyEmail';
import FinishWithEmail from '../login_signup/FinishCreatingAccountEmail';
import VerifyMob from '../login_signup/VerifyMob';
import ResetOtp from '../login_signup/ResetOtp';
import ResetPassword from '../login_signup/ResetPassword';
import ResetAndLogin from '../login_signup/ResetAndLogin';
import Dashboard from '../warehouseFarmer/Dashboard';
const Stack = createStackNavigator();
const AuthStack = () => {
    return (_jsxs(Stack.Navigator, Object.assign({ initialRouteName: "LoginAs", screenOptions: { headerShown: false } }, { children: [_jsx(Stack.Screen, { name: "LoginAs", component: WelcomeBGScreen }), _jsx(Stack.Screen, { name: "LoginMob", component: LoginMobScreen }), _jsx(Stack.Screen, { name: "LoginOTP", component: LoginOTPScreen }), _jsx(Stack.Screen, { name: "LoginEmail", component: LoginScreen }), _jsx(Stack.Screen, { name: "FinishCreatingAccountPhone", component: Register }), _jsx(Stack.Screen, { name: "FinishCreatingAccountEmail", component: FinishWithEmail }), _jsx(Stack.Screen, { name: "SelectRole", component: ChooseRoleScreen }), _jsx(Stack.Screen, { name: "SignupMob", component: SignUpMob }), _jsx(Stack.Screen, { name: "SignupEmail", component: SignUpEmail }), _jsx(Stack.Screen, { name: "VerifyEmail", component: VerifyEmail }), _jsx(Stack.Screen, { name: "VerifyMob", component: VerifyMob }), _jsx(Stack.Screen, { name: "ResetPassword", component: ResetPassword }), _jsx(Stack.Screen, { name: "ResetOtp", component: ResetOtp }), _jsx(Stack.Screen, { name: "ResetAndLogin", component: ResetAndLogin }), _jsx(Stack.Screen, { name: "Dashboard", component: Dashboard })] })));
};
export default AuthStack;