
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal, Dimensions, } from 'react-native';
import { useEffect, useState } from 'react';
import Back from '../../assets/Back';
import Dropdown from '../../assets/Dropdown';
import Calender from '../../assets/Calender';
import CalendarModal from '../../components/Calendar';
import CustomInputText from '../../components/CustomInputText';
import Cross from '../../assets/Cross';
import Layout from '../../layouts/layout';
import { useSelector } from 'react-redux';
import { Withdrawalapi, authApi, GradeAndDeposit, Booking } from '../../service/api';
import { convertDate } from '../../utils/date';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { width, height } = Dimensions.get('window');
const WithdrawalData = ({ navigation, route }) => {
    const variant = useSelector((state) => state.user.role);
    const today = new Date();
    const month = today.toLocaleString('default', { month: 'short' });
    const day = today.getDate();
    const year = today.getFullYear();
    const date = `${day} ${month} ${year}`;
    const [data, setData] = useState(route.params.data ? route.params.data : []);
    const [payload, setPayload] = useState(route.params.payload ? route.params.payload : {});
    const [params, setParams] = useState(route.params.params ? route.params.params : {});
    const [toggleDeposite, setToggleDeposite] = useState(false);
    const [toggleWithdrawal, setToggleWithdrawal] = useState(false);
    const [toggleCalendar, setToggleCalendar] = useState(false);
    const [toggleOTP, setToggleOTP] = useState(false);
    const [phone, setPhone] = useState("");
    const [searchID, setSearchID] = useState('');
    const [depositId, setDepositId] = useState([]);
    const [StaticData, setStaticData] = useState([]);
    const [withdrawal, setWithdrawal] = useState('');
    const [tentative, setTentative] = useState('');
    const [withdrawalValue, setWithdrawalValue] = useState('');
    const [otp, setOtp] = useState(false);
    const [verifyOtp, setVerifyOtp] = useState(false);
    const [error, setError] = useState(false);
    const [condition, setCondition] = useState(false);
    const heading = [
        'Name',
        'Email id',
        'Warehouse name',
        'Commodity',
        'Start date',
        'End date',
        'Total weight',
        'Total actual weight',
        'Total no of bags',
        'Bag size',
    ];
    const [code, setCode] = useState('');
    // const ref = useBlurOnFulfill({value: code, cellCount: 4});
    // const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    //   value: code,
    //   setValue: setCode,
    // });
    const renderText = (item, index) => {
        console.log(index);
        return (_jsxs(View, Object.assign({ style: styles.requestTextContainer }, { children: [_jsx(Text, Object.assign({ style: styles.desc }, { children: item })), _jsx(Text, Object.assign({ style: styles.value }, { children: data[index] }))] })));
    };
    const handleToggleDeposite = () => {
        setToggleDeposite(!toggleDeposite);
    };
    const handleToggleWithdrawal = () => {
        setToggleWithdrawal(!toggleWithdrawal);
    };
    const handleSearch = (option) => __awaiter(void 0, void 0, void 0, function* () {
        setToggleDeposite(!toggleDeposite);
        setSearchID(option);
        const tempy = StaticData[depositId.indexOf(option)];
        // console.log(tempy,22)
        const temp = yield Booking.get_bookings_by_booking_id(tempy.bookingId._id);
        // console.log(temp)
        const user_id = tempy.bookingId.user;
        console.log(user_id === tempy.User);
        setCondition(user_id === tempy.User);
        // console.log(user_id,102)
        const userDetails = yield authApi.getUser(user_id);
        // console.log(userDetails)
        setPhone(userDetails.phone);
        setData([
            userDetails.firstName,
            userDetails.email,
            temp.warehouse.warehouse_name,
            temp.Commodity[0].name,
            convertDate(temp.fromDate),
            convertDate(temp.toDate),
            temp.totalWeight + 'MT',
            temp.totalWeight + 'MT',
            temp.noOfBags,
            temp.bagSize,
        ]);
        setPayload({
            driverName: "TN-12-9955",
            truckNumber: "Riyaz Khan",
            commodity: tempy.bookingId.Commodity.map((item) => ({ itemName: item.name, quantity: item.totalWeight })),
            totalBags: tempy.noOfBags
        });
        console.log(202);
        setParams({
            warehouse_id: tempy.bookingId.warehouse,
            booking_id: tempy.bookingId._id
        });
        console.log(100);
    });
    const handleWithdrawal = (option) => {
        setToggleWithdrawal(!toggleWithdrawal);
        setWithdrawal(option);
    };
    const handleToggleCalendar = () => {
        setToggleCalendar(!toggleCalendar);
        setError(false);
    };
    const handleValue = (value) => {
        setWithdrawalValue(value);
    };
    const handleWithdrawalRequest = () => __awaiter(void 0, void 0, void 0, function* () {
        yield Withdrawalapi.add_shipping(payload, params);
        navigation.goBack();
        // Toast.show({
        //   type: 'success',
        //   text1: 'Withdrawal is done',
        // });
    });
    const handleotp = () => __awaiter(void 0, void 0, void 0, function* () {
        setOtp(!otp);
        yield Withdrawalapi.sendOTP(phone);
    });
    const handleverifyotp = () => __awaiter(void 0, void 0, void 0, function* () {
        console.log(code, 1110);
        const response = yield Withdrawalapi.verifyOTP(code, phone);
        setCode("");
        if (response) {
            yield Withdrawalapi.add_shipping(payload, params);
        }
        setVerifyOtp(!verifyOtp);
        navigation.goBack();
        // Toast.show({
        //   type: 'success',
        //   text1: 'Withdrawal is done',
        // });
    });
    const withdrawalOptions = ['Partial withdrawal', 'Full withdrawal'];
    const renderDropdownOptions = (option, deposite) => {
        return (_jsx(TouchableOpacity, Object.assign({ style: [
                styles.dropDownOptions,
                deposite && { height: height * 0.07 },
            ], onPress: () => deposite ? handleSearch(option) : handleWithdrawal(option) }, { children: _jsx(Text, Object.assign({ style: styles.dropDownText }, { children: option })) })));
    };
    useEffect(() => {
        const getData = () => __awaiter(void 0, void 0, void 0, function* () {
            if (data.length > 0) {
                return;
            }
            const temp = yield GradeAndDeposit.get_deposit();
            setDepositId(temp.map((item) => item._id));
            setStaticData(temp);
            // console.log(temp[0],222)
        });
        getData();
    }, []);
    return (_jsx(Layout, { children: _jsxs(ScrollView
        // style={styles.container}
        , Object.assign({ 
            // style={styles.container}
            scrollEnabled: !toggleDeposite, contentContainerStyle: { alignItems: 'center' } }, { children: [_jsxs(View, Object.assign({ style: styles.header }, { children: [_jsx(TouchableOpacity, Object.assign({ onPress: () => navigation.goBack() }, { children: _jsx(Back, {}) })), _jsx(Text, Object.assign({ style: styles.heading }, { children: "Withdrawal data" }))] })), variant !== "user" &&
                    _jsxs(TouchableOpacity, Object.assign({ style: styles.sortby, onPress: handleToggleDeposite }, { children: [_jsxs(View, Object.assign({ style: {
                                    justifyContent: searchID ? 'space-between' : 'center',
                                    height: '70%',
                                } }, { children: [_jsx(Text, Object.assign({ style: searchID ? styles.sortText1 : styles.sortText2 }, { children: "Deposite ID" })), searchID && _jsx(Text, Object.assign({ style: styles.selectedText }, { children: searchID }))] })), _jsx(Dropdown, {})] })), toggleDeposite && (_jsx(ScrollView, Object.assign({ style: [
                        styles.dropDownOptionsContainerDeposite,
                        { top: searchID ? "18%" : "36%" }
                    ], contentContainerStyle: {
                        alignItems: 'center',
                        justifyContent: 'center',
                    } }, { children: depositId.map(option => renderDropdownOptions(option, true)) }))), (searchID || data.length > 0) && (_jsxs(View, Object.assign({ style: styles.requestContainer }, { children: [(variant !== "user" && !condition) && heading.map((item, index) => renderText(item, index)), (variant === "user" || condition) && heading.slice(2).map((item, index) => renderText(item, index))] }))), _jsxs(View, Object.assign({ style: styles.inputContainer }, { children: [_jsxs(View, Object.assign({ style: styles.input }, { children: [_jsx(Calender, {}), _jsxs(View, Object.assign({ style: {
                                        justifyContent: withdrawal ? 'space-between' : 'center',
                                        height: '70%',
                                        width: '75%',
                                    } }, { children: [_jsx(Text, Object.assign({ style: styles.sortText1 }, { children: "Initial Date" })), _jsx(Text, Object.assign({ style: styles.selectedText }, { children: date }))] }))] })), _jsxs(TouchableOpacity, Object.assign({ style: styles.input, onPress: handleToggleCalendar }, { children: [_jsx(Calender, {}), _jsxs(View, Object.assign({ style: {
                                        justifyContent: tentative ? 'space-between' : 'center',
                                        height: '70%',
                                        width: '75%',
                                    } }, { children: [_jsx(Text, Object.assign({ style: tentative ? styles.sortText1 : styles.sortText2 }, { children: "Tentative wi..." })), tentative && _jsx(Text, Object.assign({ style: styles.selectedText }, { children: tentative }))] }))] }))] })), _jsxs(TouchableOpacity, Object.assign({ style: styles.sortby, onPress: handleToggleWithdrawal, disabled: !searchID && data.length === 0 }, { children: [_jsxs(View, Object.assign({ style: {
                                justifyContent: withdrawal ? 'space-between' : 'center',
                                height: '70%',
                            } }, { children: [_jsx(Text, Object.assign({ style: withdrawal ? styles.sortText1 : styles.sortText2 }, { children: "Withdrawal" })), withdrawal && _jsx(Text, Object.assign({ style: styles.selectedText }, { children: withdrawal }))] })), _jsx(Dropdown, {})] })), toggleWithdrawal && (_jsx(View, Object.assign({ style: [styles.dropDownOptionsContainerWithdrawal, { top: variant === "owner" ? '88%' : "62%", }] }, { children: withdrawalOptions.map(option => renderDropdownOptions(option)) }))), withdrawal === 'Partial withdrawal' && (_jsx(View, Object.assign({ style: [styles.sortby, { marginTop: 16 }] }, { children: _jsx(CustomInputText, { PlaceHolder: "Weight to be withdrawn", onTextChange: handleValue, keyboard: "numeric", metric: data[7].split(" ")[1] }) }))), withdrawal === 'Full withdrawal' && (_jsx(View, Object.assign({ style: styles.fullWithdrawal }, { children: _jsxs(View, Object.assign({ style: {
                            justifyContent: withdrawal ? 'space-between' : 'center',
                            height: '70%',
                            width: '100%',
                        } }, { children: [_jsx(Text, Object.assign({ style: styles.sortText1 }, { children: "Weight to be withdrawn" })), _jsx(Text, Object.assign({ style: styles.selectedText }, { children: (variant !== "owner" || condition) ? data[4] : data[7] }))] })) }))), (searchID || data) &&
                    (withdrawal === 'Full withdrawal' || withdrawalValue) &&
                    tentative ? (_jsx(TouchableOpacity, Object.assign({ style: styles.withdrawButton, onPress: (variant === "owner" && !condition) ? handleotp : handleWithdrawalRequest }, { children: _jsx(Text, Object.assign({ style: [styles.selectedText, { color: 'white' }] }, { children: "Withdraw" })) }))) : (_jsx(TouchableOpacity, Object.assign({ style: styles.withdrawButtonIdle, disabled: true }, { children: _jsx(Text, Object.assign({ style: styles.selectedText }, { children: "Withdraw" })) }))), _jsx(CalendarModal, { toggleCalendar: toggleCalendar, handleToggleCalendar: handleToggleCalendar, setDate: setTentative }), _jsx(Modal, Object.assign({ transparent: true, visible: otp }, { children: _jsx(TouchableOpacity, Object.assign({ style: styles.modalContainer, onPress: () => setOtp(!otp) }, { children: _jsxs(View, Object.assign({ style: styles.modalInnerContainer }, { children: [_jsx(TouchableOpacity, Object.assign({ style: { alignItems: 'flex-end' }, onPress: () => setOtp(!otp) }, { children: _jsx(Cross, {}) })), _jsxs(Text, Object.assign({ style: [styles.selectedText, { textAlign: 'center' }] }, { children: ["Verify the OTP sent to the farmer/", '\n', "trader/FPOs"] })), _jsxs(View, Object.assign({ style: styles.buttonModalContainer }, { children: [_jsx(TouchableOpacity, Object.assign({ style: styles.reject, onPress: () => setOtp(!otp) }, { children: _jsx(Text, Object.assign({ style: styles.rejectText }, { children: "Back" })) })), _jsx(TouchableOpacity, Object.assign({ style: styles.accept }, { children: _jsx(Text, Object.assign({ style: styles.acceptText, onPress: () => {
                                                    setVerifyOtp(!verifyOtp);
                                                    setOtp(!otp);
                                                } }, { children: "Verify OTP" })) }))] }))] })) })) })), _jsx(Modal, Object.assign({ transparent: true, visible: verifyOtp }, { children: _jsx(TouchableOpacity, Object.assign({ style: styles.modalContainer, onPress: () => setVerifyOtp(!verifyOtp) }, { children: _jsxs(View, Object.assign({ style: [styles.modalInnerContainer, { height: '40%' }] }, { children: [_jsx(TouchableOpacity, Object.assign({ style: { alignItems: 'flex-end' }, onPress: () => setVerifyOtp(!verifyOtp) }, { children: _jsx(Cross, {}) })), _jsx(Text, Object.assign({ style: [styles.selectedText, { textAlign: 'center' }] }, { children: "Verify OTP" })), _jsx(Text, Object.assign({ style: styles.otpPrompt }, { children: "Enter the 4 digit code sent to farmer/trader/FPOs in sms" })), code.length === 4 ? (_jsx(TouchableOpacity, Object.assign({ style: styles.OTPButton }, { children: _jsx(Text, Object.assign({ style: styles.acceptText, onPress: handleverifyotp }, { children: "Verify OTP" })) }))) : (_jsx(TouchableOpacity, Object.assign({ style: [styles.OTPButton, { backgroundColor: '#989E9A' }] }, { children: _jsx(Text, Object.assign({ style: [styles.rejectText, { color: 'black' }], disabled: true }, { children: "Verify OTP" })) })))] })) })) }))] })) }));
};
export default WithdrawalData;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        height: height * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3%',
        // marginBottom: 24,
    },
    heading: {
        color: 'black',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        flexGrow: 1,
        textAlign: 'center',
    },
    selectedText: { color: 'black', fontFamily: 'Poppins-SemiBold', fontSize: 16 },
    inputContainer: {
        width: '90%',
        height: height * 0.08,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
        marginBottom: 24,
    },
    input: {
        width: '47%',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '2%',
        borderRadius: 8,
    },
    sortby: {
        width: '90%',
        height: height * 0.08,
        paddingHorizontal: '3%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#707371',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        opacity: 1,
        marginBottom: 14
    },
    sortText1: {
        color: '#707371',
        fontFamily: 'NotoSerif-Regular',
        fontSize: 12,
        marginRight: 5,
    },
    sortText2: {
        color: '#707371',
        fontFamily: 'NotoSerif-Regular',
        fontSize: 14,
        marginRight: 5,
    },
    dropDownOptions: { height: '50%', width: '80%', justifyContent: 'center' },
    dropDownText: {
        fontFamily: 'NotoSerif-Regular',
        color: 'black',
        fontSize: 14,
        marginRight: 8,
    },
    dropDownOptionsContainerDeposite: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        width: '90%',
        zIndex: 1,
        position: 'absolute',
        height: height * 0.3,
        paddingVertical: '1%',
        borderColor: '#989E9A',
        borderWidth: 1,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    requestContainer: {
        width: '90%',
        height: "auto",
        alignSelf: 'center',
        borderColor: '#C1C4C2',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: '5%',
        paddingVertical: "5%",
        // marginTop: 24,
    },
    requestTextContainer: {
        height: height * 0.045,
        flexDirection: 'row',
    },
    desc: {
        fontFamily: 'NotoSerif-Regular',
        color: 'black',
        fontSize: 12,
        flex: 1,
    },
    value: {
        fontFamily: 'Poppins-SemiBold',
        color: 'black',
        fontSize: 11,
        flex: 1,
    },
    dropDownOptionsContainerWithdrawal: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        width: '90%',
        zIndex: 1,
        position: 'absolute',
        height: height * 0.12,
        paddingVertical: '1%',
        borderColor: '#989E9A',
        borderWidth: 1,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonModalContainer: {
        height: '35%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
    },
    reject: {
        width: '47%',
        borderColor: '#07294B',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rejectText: {
        color: '#07294B',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
    },
    accept: {
        width: '47%',
        backgroundColor: '#07294B',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    acceptText: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
    },
    codeFieldRoot: {
        marginTop: 20,
    },
    cell: {
        width: 64,
        height: 72,
        color: '#1C1C1C',
        lineHeight: 69,
        fontSize: 24,
        textAlign: 'center',
        backgroundColor: '#CEDAE5',
        borderRadius: 10,
    },
    focusCell: {
        borderColor: '#000',
    },
    fullWithdrawal: {
        width: '90%',
        height: height * 0.08,
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '2%',
        borderRadius: 8,
        backgroundColor: '#CEDAE5',
    },
    withdrawButton: {
        width: '80%',
        height: height * 0.08,
        backgroundColor: '#0C447D',
        marginTop: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    withdrawButtonIdle: {
        width: '80%',
        height: height * 0.08,
        backgroundColor: '#989E9A',
        marginTop: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalInnerContainer: {
        width: '90%',
        height: '25%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        padding: '5%',
    },
    otpPrompt: { color: 'black', fontSize: 14, fontFamily: 'NotoSerif-Regular' },
    OTPButton: {
        width: '50%',
        height: '20%',
        backgroundColor: '#07294B',
        alignSelf: 'center',
        marginTop: 16,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
