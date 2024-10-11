import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
// Assuming you're using Ionicons for the back button
import LoginMain from '../login_signup/LoginMain';
import LoginMobScreen from '../login_signup/LoginMobScreen';
import LoginOTPScreen from '../login_signup/LoginOTPScreen';
import LoginScreen from '../login_signup/LoginEmailScreen';
import SignUpMob from '../login_signup/SignUpMob';
import Register from '../login_signup/Finish_creating_account';
const Stack = createStackNavigator();
const LoginNavigation = () => {
    return (_jsxs(Stack.Navigator, Object.assign({ initialRouteName: "LoginOTP" }, { children: [_jsx(Stack.Screen, { name: "SignupMob", component: SignUpMob, options: {
                    headerTitle: "Create Account",
                    headerTitleAlign: "center",
                    headerLeft: () => (_jsx(TouchableOpacity, { onPress: () => {
                            console.log("go back");
                        } }))
                } }), _jsx(Stack.Screen, { name: "LoginAs", component: LoginMain }), _jsx(Stack.Screen, { name: "LoginMob", component: LoginMobScreen }), _jsx(Stack.Screen, { name: "LoginOTP", component: LoginOTPScreen }), _jsx(Stack.Screen, { name: "Login", component: LoginScreen }), _jsx(Stack.Screen, { name: "FinishCreatingAccount", component: Register })] })));
};
export default LoginNavigation;
