
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import ButtonWithAutoWidth from '../../components/ButtonWithAutoWidth';
import Dissmiss from '../../assets/Dissmiss';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../../components/Header';
import Search from '../../assets/Search';
import Like from '../../assets/Like';
import Share from '../../assets/Share';
import textStyles from '../../components/textStyles';
import Location from '../../assets/Location';
import Commodity from '../../assets/Commodity';
//import { Calendar } from 'react-native-calendars';
import Calender from '../../assets/Calender';
import Weight from '../../assets/Weight';
import Bag from '../../assets/Bag';
import Security from '../../assets/Security';
import BankLoan from '../../assets/BankLoan';
import Logistic from '../../assets/Logistic';
import WDRA from '../../assets/WDRA';
import Tick from '../../assets/Tick';
import { formatDate } from '../../utils/date';
import { authApi } from '../../service/api';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function calculateCostPerBagPerDay(warehouse, bookingdata) {
    const selectedCommodity = warehouse.Commodity.find(commodity => commodity.name === bookingdata.SelectedCommodity);
    if (!selectedCommodity) {
        console.error('Commodity not found in the warehouse');
        return null;
    }
    const bagWeight = parseFloat(bookingdata.SelectedBagsize.split(' ')[0]);
    const pricePerDay = selectedCommodity.price_perday.find(price => parseFloat(price.weight) === bagWeight);
    if (!pricePerDay) {
        console.error('Price per day not found for the selected bag size');
        return null;
    }
    return pricePerDay.price;
}
function calculateDaysBetweenDates(startDate, endDate) {
    // Parse the start and end dates into Date objects
    const start = new Date(startDate || "");
    const end = new Date(endDate || "");
    // Calculate the difference in time (milliseconds)
    const differenceInTime = end.getTime() - start.getTime();
    // Convert the time difference from milliseconds to days
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    // Return the absolute value of the difference in days to avoid negative results
    return Math.abs(differenceInDays);
}
const WarehouseDetails = ({ route }) => {
    var _a, _b, _c, _d;
    const { warehouse, Bookingdata } = route.params;
    console.log(Bookingdata);
    const totalDays = calculateDaysBetweenDates((_a = Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.startDate) === null || _a === void 0 ? void 0 : _a.dateString, (_b = Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.endDate) === null || _b === void 0 ? void 0 : _b.dateString);
    const totalCost = calculateCostPerBagPerDay(warehouse, Bookingdata) * totalDays * (Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.numberOfBags);
    //const token = useSelector((state)=>state.user.token);
    const [isVisible, setIsVisible] = useState(false);
    const navigation = useNavigation();
    const [kycStatus, setKycStatus] = useState(false);
    useEffect(() => {
        const fetchKycStatus = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield authApi.getUserProfile();
                setKycStatus(response.isKycDone);
            }
            catch (e) {
                // handle error
                console.error(e);
            }
        });
        fetchKycStatus();
        // setKycStatus(true);
    }, []);
    return (_jsxs(SafeAreaView, Object.assign({ style: styles.container }, { children: [_jsx(HeaderComponent, { title: '', component: () => (_jsxs(View, Object.assign({ style: styles.headerIcons }, { children: [_jsx(TouchableOpacity, Object.assign({ style: styles.iconButton }, { children: _jsx(Search, { props: undefined, color: '#212121' }) })), _jsx(TouchableOpacity, Object.assign({ style: styles.iconButton }, { children: _jsx(Like, {}) })), _jsx(TouchableOpacity, Object.assign({ style: styles.iconButton }, { children: _jsx(Share, {}) }))] }))) }), _jsxs(ScrollView, Object.assign({ style: styles.scrollView,showsVerticalScrollIndicator: false, 
        showsHorizontalScrollIndicator: false,}, { children: [_jsx(View, { style: styles.banner }), _jsxs(View, Object.assign({ style: styles.customView1 }, { children: [_jsxs(View, Object.assign({ style: styles.customView3 }, { children: [_jsx(View, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { color: 'black' }] }, { children: warehouse.warehouse_name })) }), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center' } }, { children: [_jsx(View, Object.assign({ style: { padding: 5 } }, { children: _jsx(Location, {}) })), _jsxs(View, Object.assign({ style: { flexDirection: 'column' } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB3, { width: 'auto', color: 'black' }] }, { children: warehouse.locality_area })), _jsx(Text, Object.assign({ style: [textStyles.bodyB4, { color: '#0038FF' }] }, { children: "View on map" }))] }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row' } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: "Available capacity :" })), _jsxs(Text, Object.assign({ style: [textStyles.bodyBoldB3, { color: 'black' }] }, { children: [" ", warehouse.remainingCapacity] }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row' } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: "Total capacity :" })), _jsxs(Text, Object.assign({ style: [textStyles.bodyBoldB3, { color: 'black' }] }, { children: [" ", warehouse.total_capacity] }))] }))] })), _jsx(View, { style: styles.line }), _jsxs(View, Object.assign({ style: styles.customView4 }, { children: [_jsx(View, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: 'black' }] }, { children: "Dates, commodity & weight" })) }), _jsxs(View, Object.assign({ style: styles.DetailContainer }, { children: [_jsxs(View, Object.assign({ style: { height: 40, width: 312, flexDirection: 'row' } }, { children: [_jsxs(TouchableOpacity, Object.assign({ style: { borderColor: '#989E9A', borderWidth: 1, height: 40, width: 141, borderRadius: 4, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' } }, { children: [_jsx(Calender, {}), _jsxs(Text, Object.assign({ style: [textStyles.uiText, { color: '#0038FF', lineHeight: 19 }] }, { children: [formatDate(((_c = Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.startDate) === null || _c === void 0 ? void 0 : _c.dateString) || ""), " - ", formatDate(((_d = Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.endDate) === null || _d === void 0 ? void 0 : _d.dateString) || "")] }))] })), _jsxs(TouchableOpacity, Object.assign({ style: { borderColor: '#989E9A', borderWidth: 1, height: 40, width: 90, marginLeft: 8, borderRadius: 4, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' } }, { children: [_jsx(Commodity, {}), _jsx(Text, Object.assign({ style: [textStyles.uiText, { color: '#0038FF', lineHeight: 19 }] }, { children: Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.SelectedCommodity }))] }))] })), _jsxs(View, Object.assign({ style: { height: 40, width: 312, flexDirection: 'row' } }, { children: [_jsxs(TouchableOpacity, Object.assign({ style: { borderColor: '#989E9A', borderWidth: 1, height: 40, width: 81, borderRadius: 4, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' } }, { children: [_jsx(Weight, {}), _jsxs(Text, Object.assign({ style: [textStyles.uiText, { color: '#0038FF', lineHeight: 19 }] }, { children: [Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.weight, " ", Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.SelectedUnit] }))] })), _jsxs(TouchableOpacity, Object.assign({ style: { borderColor: '#989E9A', borderWidth: 1, height: 40, width: 155, marginLeft: 8, borderRadius: 4, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' } }, { children: [_jsx(Bag, {}), _jsx(Text, Object.assign({ style: [textStyles.uiText, { color: '#0038FF', lineHeight: 19 }] }, { children: `${Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.numberOfBags} (${Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.SelectedBagsize})` }))] }))] }))] }))] }))] })), _jsx(View, Object.assign({ style: styles.emptyView }, { children: _jsx(Text, Object.assign({ style: textStyles.headingH7 }, { children: "Other price details" })) })), _jsxs(View, Object.assign({ style: styles.largeEmptyView }, { children: [_jsx(View, Object.assign({ style: { height: 19 } }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: 'black' }] }, { children: "Services Offered" })) })), _jsxs(View, Object.assign({ style: { height: 168, width: 312, justifyContent: 'space-between' } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row' } }, { children: [_jsxs(View, Object.assign({ style: { justifyContent: 'space-evenly', alignItems: 'center', width: 96, height: 80 } }, { children: [_jsx(View, { children: _jsx(Security, {}) }), _jsx(View, Object.assign({ style: { width: 79, height: 34 } }, { children: _jsx(Text, Object.assign({ style: [textStyles.bodyTable, { color: 'black' }] }, { children: "24x7 security" })) }))] })), _jsxs(View, Object.assign({ style: { justifyContent: 'space-evenly', alignItems: 'center', width: 96, height: 80 } }, { children: [_jsx(View, { children: _jsx(BankLoan, {}) }), _jsx(View, Object.assign({ style: { width: 59, height: 34 } }, { children: _jsx(Text, Object.assign({ style: [textStyles.bodyTable, { color: 'black' }] }, { children: "Bank loan" })) }))] })), _jsxs(View, Object.assign({ style: { justifyContent: 'space-evenly', alignItems: 'center', width: 96, height: 80 } }, { children: [_jsx(View, { children: _jsx(Logistic, {}) }), _jsx(View, Object.assign({ style: { width: 79, height: 34 } }, { children: _jsx(Text, Object.assign({ style: [textStyles.bodyTable, { color: 'black' }] }, { children: "Logistics" })) }))] }))] })), _jsx(View, Object.assign({ style: { flexDirection: 'row' } }, { children: _jsxs(View, Object.assign({ style: { justifyContent: 'space-evenly', alignItems: 'center', width: 96, height: 80 } }, { children: [_jsx(View, { children: _jsx(WDRA, {}) }), _jsx(View, Object.assign({ style: { width: 79, height: 34 } }, { children: _jsx(Text, Object.assign({ style: [textStyles.bodyTable, { color: 'black' }] }, { children: "WDRA registered" })) }))] })) }))] })), _jsxs(View, Object.assign({ style: { height: 246, width: 312, paddingHorizontal: 8, justifyContent: 'space-evenly' } }, { children: [_jsx(View, Object.assign({ style: { height: 19 } }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: 'black' }] }, { children: "Can Store" })) })), _jsxs(View, Object.assign({ style: { width: 312, height: 187, justifyContent: 'space-between' } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row' } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', width: 92, height: 40, justifyContent: 'space-evenly' } }, { children: [_jsx(View, Object.assign({ style: { width: 24, height: 24 } }, { children: _jsx(Image, { style: { width: 24, height: 24 }, source: { uri: 'https://s3-alpha-sig.figma.com/img/c2bf/bb0c/3f1392f8c025981818800f30422215ed?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F03vHALr51PbGY3gjYLq-MG-bXbQy-TxB7A4Hj9zWRPvjZHbnZ1Clp4JvKSzO2b05Fk8KoL83dtq8V1NmjIM7yVl1k2ja0Li9BOECHPUs0leVeuIUJXOEPjA-8fgl83N-YJIkzgII-qUB6SZ-AEDlGyvF9WORguDC8geN1pzYJgLFrNhlNJZv~GVxRiiVekLoEf-MCmWJwp8rsmdpXReDAGpNzkZrRzt1x5bcTGedjr9-gNWonYi2xmpmlQFudP1FJIunv3glBBnS7zdMIU8SNYa4otw7kpbqbbO7Uu-MjkgUU2FNqf4HfqD6s6lmmKcsGis0cZmGbVXt3HUiWSXng__' } }) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: "Wheat" }))] })), _jsxs(View, Object.assign({ style: { marginLeft: 16, flexDirection: 'row', alignItems: 'center', width: 112, height: 40, justifyContent: 'space-evenly' } }, { children: [_jsx(View, Object.assign({ style: { width: 24, height: 24 } }, { children: _jsx(Image, { style: { width: 24, height: 24 }, source: { uri: 'https://s3-alpha-sig.figma.com/img/93b8/5568/b3ef1756af8939cf0437b844e0c8973e?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g5NDM~uAnmYbKy9MnbUr-V7JTusi4U9sD~J5gKzuHEprE4bHXP6ItEJ-pTkq8h8NPya2Y8AHvq32ZBOTr93SJrHRtDtDvPFgIwFze89DyQSLgy3f3Y7RCQwSRjQQcBiCUXgEGF25LH7mIiWVHiW4Z~-YjUW7rtEbKAXxMbxmUf4jKmcSv5f~89HLrOIENu57WIuaDRYeXiw26mLAp4AcIofETRQ8~CrFryOQ6~VFRgwjAdRY1ckWGLNK43GTBE4NiCktI55Fcy7SJ3evD0ApHy8lvf6erzWtwlXkH08piv4Tc-Xc-zessauOhrQMwfoPNF6S2KRyxd2btCIJKwB-Lg__' } }) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: "Soyabean" }))] }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row' } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', width: 95, height: 40, justifyContent: 'space-evenly' } }, { children: [_jsx(View, Object.assign({ style: { width: 24, height: 24 } }, { children: _jsx(Image, { style: { width: 24, height: 24 }, source: { uri: 'https://s3-alpha-sig.figma.com/img/5823/6862/8e1c51bfde46ae5475639f01001e6c57?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GWLKzZIqbwFTdQCu1Ww1BSfzzHoOON1nwMGEFISPQ4NDB6t1ela28E8fikJaneh~02LpoQmxtoGfHE0KyMmjNnn6wnezqdtZLKWVzeu4sBV8OgL1zKenXFrM2PCB3~kjzJ~VhtxTod38-HhyzlQ9sdBp8b-5qiUz-uefmCWQkv6mSemJ-qSTNy4L3Z-5YdOgQNOCTLaogw2iIWByPgYnps46ETkZdYEUqSs-~pj8k9rc7brVIWkgLzD16dhmFa-kfLry-cdFjndCpvsop2C0EHVuOZpe4vdkbYaEl3IzMGEdNAhKtSrrnD2fOQJVRNFUS~h~XN~zD-wJd002v5H0ag__' } }) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: "Ajwain" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', marginLeft: 16, alignItems: 'center', width: 87, height: 40, justifyContent: 'space-evenly' } }, { children: [_jsx(View, Object.assign({ style: { width: 24, height: 24 } }, { children: _jsx(Image, { style: { width: 24, height: 24 }, source: { uri: 'https://s3-alpha-sig.figma.com/img/3501/eb80/2e5c9c2211d75b43882190471db62eb2?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PPe-l-3Icfm5qFvNmsz1dC-HBwwrOj7jNhx0UUsUt-TViyVxtcsigS6NqbQvSAEHl2r8cezYEZa85Bxk5XgVbm-XU29Pin2NUtfW01ctthCXC61XQcGXmUV6d81KIxFipZxCql96IwawgN7BuNlGtnhXDyTcIQtwHcusNDedxYW2gYIvXQr5FfgQpfge69KennfhJwGX6ri2vlQpM8wxB~vOCRG11b2y1kssGjg~wX-0bxaESMYV2Gzge0WVPNCIYpC0s7DBv-E-6OYKe52ePczeUyLMll8HpLdwhLfGtG4ejgj~paiedT9SBO5BT2cNVGejw7oe1jo6B11NtOKDxw__' } }) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: "Jawar" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', marginLeft: 16, alignItems: 'center', width: 89, height: 40, justifyContent: 'space-evenly' } }, { children: [_jsx(View, Object.assign({ style: { width: 24, height: 24 } }, { children: _jsx(Image, { style: { width: 24, height: 24 }, source: { uri: 'https://s3-alpha-sig.figma.com/img/0cce/8e27/a3e86a83b5ede192264adb1e4d1a82cf?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FI7zt7dEZ22y7tE0fgfmKh~E9U8fKS06wo0FcehFmlPYFbUk4~Q4rOL6rFRMZx49tuBptvJ9wA2~p9PxXy0o11CJdj3d7LFK7THUYewJdpcR39JIUvUkzlWM7xEF7IN1gkEhDpVmCEABMCRck1rGCqZYtsnJGiqRwQCErNEW0Sjsxs36tb6eQ0WW9gU6s3W64LPuJv-quYNu8qAhqAi6kolLTt7wgWuRyAexdJA~laTHRILU14qA3ArCl9nDr2R-qNrwlxbRXqWCmzPZLCp3z-CbfNkdzi14l9GUip6YZzZ2UFYRZ~HsmFLOU4KzTAF0AplYUDR3V9YRq9vOvJMl-w__' } }) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: "Paddy" }))] }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row' } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', width: 89, height: 40, justifyContent: 'space-evenly' } }, { children: [_jsx(View, Object.assign({ style: { width: 24, height: 24 } }, { children: _jsx(Image, { style: { width: 24, height: 24 }, source: { uri: 'https://s3-alpha-sig.figma.com/img/0cce/8e27/a3e86a83b5ede192264adb1e4d1a82cf?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FI7zt7dEZ22y7tE0fgfmKh~E9U8fKS06wo0FcehFmlPYFbUk4~Q4rOL6rFRMZx49tuBptvJ9wA2~p9PxXy0o11CJdj3d7LFK7THUYewJdpcR39JIUvUkzlWM7xEF7IN1gkEhDpVmCEABMCRck1rGCqZYtsnJGiqRwQCErNEW0Sjsxs36tb6eQ0WW9gU6s3W64LPuJv-quYNu8qAhqAi6kolLTt7wgWuRyAexdJA~laTHRILU14qA3ArCl9nDr2R-qNrwlxbRXqWCmzPZLCp3z-CbfNkdzi14l9GUip6YZzZ2UFYRZ~HsmFLOU4KzTAF0AplYUDR3V9YRq9vOvJMl-w__' } }) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: "Paddy" }))] })), _jsxs(View, Object.assign({ style: { marginLeft: 16, flexDirection: 'row', alignItems: 'center', width: 112, height: 40, justifyContent: 'space-evenly' } }, { children: [_jsx(View, Object.assign({ style: { width: 24, height: 24 } }, { children: _jsx(Image, { style: { width: 24, height: 24 }, source: { uri: 'https://s3-alpha-sig.figma.com/img/93b8/5568/b3ef1756af8939cf0437b844e0c8973e?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g5NDM~uAnmYbKy9MnbUr-V7JTusi4U9sD~J5gKzuHEprE4bHXP6ItEJ-pTkq8h8NPya2Y8AHvq32ZBOTr93SJrHRtDtDvPFgIwFze89DyQSLgy3f3Y7RCQwSRjQQcBiCUXgEGF25LH7mIiWVHiW4Z~-YjUW7rtEbKAXxMbxmUf4jKmcSv5f~89HLrOIENu57WIuaDRYeXiw26mLAp4AcIofETRQ8~CrFryOQ6~VFRgwjAdRY1ckWGLNK43GTBE4NiCktI55Fcy7SJ3evD0ApHy8lvf6erzWtwlXkH08piv4Tc-Xc-zessauOhrQMwfoPNF6S2KRyxd2btCIJKwB-Lg__' } }) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: "Soyabean" }))] }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row' } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', width: 92, height: 40, justifyContent: 'space-evenly' } }, { children: [_jsx(View, Object.assign({ style: { width: 24, height: 24 } }, { children: _jsx(Image, { style: { width: 24, height: 24 }, source: { uri: 'https://s3-alpha-sig.figma.com/img/c2bf/bb0c/3f1392f8c025981818800f30422215ed?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F03vHALr51PbGY3gjYLq-MG-bXbQy-TxB7A4Hj9zWRPvjZHbnZ1Clp4JvKSzO2b05Fk8KoL83dtq8V1NmjIM7yVl1k2ja0Li9BOECHPUs0leVeuIUJXOEPjA-8fgl83N-YJIkzgII-qUB6SZ-AEDlGyvF9WORguDC8geN1pzYJgLFrNhlNJZv~GVxRiiVekLoEf-MCmWJwp8rsmdpXReDAGpNzkZrRzt1x5bcTGedjr9-gNWonYi2xmpmlQFudP1FJIunv3glBBnS7zdMIU8SNYa4otw7kpbqbbO7Uu-MjkgUU2FNqf4HfqD6s6lmmKcsGis0cZmGbVXt3HUiWSXng__' } }) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: "Wheat" }))] })), _jsx(View, Object.assign({ style: { marginLeft: 16, flexDirection: 'row', alignItems: 'center', width: 87, height: 43, justifyContent: 'space-evenly' } }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: '#0C447D' }] }, { children: "+15 more" })) }))] }))] }))] })), _jsxs(View, Object.assign({ style: { height: 244, width: 312, paddingHorizontal: 8, justifyContent: 'space-evenly' } }, { children: [_jsx(View, Object.assign({ style: { height: 19 } }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: 'black' }] }, { children: "Can Store" })) })), _jsxs(View, Object.assign({ style: { width: 312, height: 185, justifyContent: 'space-between' } }, { children: [_jsx(View, Object.assign({ style: { flexDirection: 'row' } }, { children: _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', padding: 8, gap: 8, justifyContent: 'space-evenly' } }, { children: [_jsx(View, Object.assign({ style: { width: 24, height: 24, alignItems: 'center', justifyContent: 'center' } }, { children: _jsx(Tick, {}) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: "Warehouse management" }))] })) })), _jsxs(View, Object.assign({ style: { flexDirection: 'row' } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', padding: 8, gap: 8, justifyContent: 'space-evenly' } }, { children: [_jsx(View, Object.assign({ style: { width: 24, height: 24, alignItems: 'center', justifyContent: 'center' } }, { children: _jsx(Tick, {}) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: "Fumigation" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', marginLeft: 16, alignItems: 'center', padding: 8, gap: 8, justifyContent: 'space-evenly' } }, { children: [_jsx(View, Object.assign({ style: { width: 24, height: 24, alignItems: 'center', justifyContent: 'center' } }, { children: _jsx(Tick, {}) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: "Logistics" }))] }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row' } }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', padding: 8, gap: 8, justifyContent: 'space-evenly' } }, { children: [_jsx(View, Object.assign({ style: { width: 24, height: 24, alignItems: 'center', justifyContent: 'center' } }, { children: _jsx(Tick, {}) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: "Insurance" }))] })), _jsxs(View, Object.assign({ style: { flexDirection: 'row', marginLeft: 16, alignItems: 'center', padding: 8, gap: 8, justifyContent: 'space-evenly' } }, { children: [_jsx(View, Object.assign({ style: { width: 24, height: 24, alignItems: 'center', justifyContent: 'center' } }, { children: _jsx(Tick, {}) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: "Monitoring" }))] }))] })), _jsx(View, Object.assign({ style: { flexDirection: 'row' } }, { children: _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center', padding: 8, gap: 8, justifyContent: 'space-evenly' } }, { children: [_jsx(View, Object.assign({ style: { width: 24, height: 24, alignItems: 'center', justifyContent: 'center' } }, { children: _jsx(Tick, {}) })), _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { color: 'black' }] }, { children: "Finance" }))] })) }))] }))] }))] })), _jsxs(View, Object.assign({ style: styles.bottomEmptyView }, { children: [_jsx(View, Object.assign({ style: { top: 12, left: 8 } }, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: 'black' }] }, { children: "Similar warehouses" })) })), _jsx(View, Object.assign({ style: { top: 47, position: 'absolute' } }, { children: _jsxs(ScrollView, Object.assign({ horizontal: true }, { children: [_jsxs(View, Object.assign({ style: { marginHorizontal: 8, borderRadius: 8, borderWidth: 1 } }, { children: [_jsx(View, Object.assign({ style: { width: 263, height: 126, borderTopLeftRadius: 8, borderTopRightRadius: 8, backgroundColor: 'brown' } }, { children: _jsx(Image, { source: { uri: 'https://s3-alpha-sig.figma.com/img/eda3/a744/06b063ca426f3e1483290b1c01ebba1d?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SeCb2zn23HyRPqCyiXG10b3PuCPoMWE0zCCr2Vz1Wo-GQ5gkNtBX1wlFJ9wEIdDsRifbcuu9ofJW9ujmOYilnrMAVN2iWdPsKVZM7q1TCGY~2iYuFHqszpzXFik7WkokC1m83JEjH5oHjKcBTZDsP6Cv0StFRZkzI1LjyH1U1AUXiz27C~6rUMhA8BK5LiZcwjIk2YNuiFG-IqTfiKlORrStMwdOTHkyowQZx7VsLDOmFNMjGf6ZUAjWgCFV1Nk3xUPcz5iP1ZfrxoHH-UAL4PMfaOa7vbK3ZvsNclx4zQlALZLg0HfrYBU5lu6XSFCSWpMo4zF4Vky36mTRhctGOg__' }, style: { width: '100%', height: '100%', borderTopRightRadius: 8, borderTopLeftRadius: 8 } }) })), _jsxs(View, Object.assign({ style: { paddingVertical: 12, paddingHorizontal: 8, justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row' } }, { children: [_jsxs(View, Object.assign({ style: { gap: 4 } }, { children: [_jsx(View, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { color: 'black' }] }, { children: warehouse.warehouse_name })) }), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center' } }, { children: [_jsx(View, Object.assign({ style: { padding: 5 } }, { children: _jsx(Location, {}) })), _jsx(View, Object.assign({ style: { flexDirection: 'column' } }, { children: _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { width: 'auto', color: 'black' }] }, { children: "Alipur, Delhi" })) }))] }))] })), _jsxs(View, Object.assign({ style: { gap: 4, height: 38, width: 39 } }, { children: [_jsx(View, { children: _jsx(Text, Object.assign({ style: { fontFamily: 'Poppins-Regular', fontSize: 16, fontWeight: '500', lineHeight: 18, color: 'black' } }, { children: "\u20B9 0.3" })) }), _jsx(View, { children: _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "\u20B9 5/km" })) })] }))] }))] })), _jsxs(View, Object.assign({ style: { marginHorizontal: 8, borderRadius: 8, borderWidth: 1 } }, { children: [_jsx(View, Object.assign({ style: { width: 263, height: 126, borderTopLeftRadius: 8, borderTopRightRadius: 8, backgroundColor: 'brown' } }, { children: _jsx(Image, { source: { uri: 'https://s3-alpha-sig.figma.com/img/eda3/a744/06b063ca426f3e1483290b1c01ebba1d?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SeCb2zn23HyRPqCyiXG10b3PuCPoMWE0zCCr2Vz1Wo-GQ5gkNtBX1wlFJ9wEIdDsRifbcuu9ofJW9ujmOYilnrMAVN2iWdPsKVZM7q1TCGY~2iYuFHqszpzXFik7WkokC1m83JEjH5oHjKcBTZDsP6Cv0StFRZkzI1LjyH1U1AUXiz27C~6rUMhA8BK5LiZcwjIk2YNuiFG-IqTfiKlORrStMwdOTHkyowQZx7VsLDOmFNMjGf6ZUAjWgCFV1Nk3xUPcz5iP1ZfrxoHH-UAL4PMfaOa7vbK3ZvsNclx4zQlALZLg0HfrYBU5lu6XSFCSWpMo4zF4Vky36mTRhctGOg__' }, style: { width: '100%', height: '100%', borderTopRightRadius: 8, borderTopLeftRadius: 8 } }) })), _jsxs(View, Object.assign({ style: { paddingVertical: 12, paddingHorizontal: 8, justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row' } }, { children: [_jsxs(View, Object.assign({ style: { gap: 4 } }, { children: [_jsx(View, { children: _jsx(Text, Object.assign({ style: [textStyles.headingH6_5, { color: 'black' }] }, { children: warehouse.warehouse_name })) }), _jsxs(View, Object.assign({ style: { flexDirection: 'row', alignItems: 'center' } }, { children: [_jsx(View, Object.assign({ style: { padding: 5 } }, { children: _jsx(Location, {}) })), _jsx(View, Object.assign({ style: { flexDirection: 'column' } }, { children: _jsx(Text, Object.assign({ style: [textStyles.bodyB3, { width: 'auto', color: 'black' }] }, { children: "Alipur, Delhi" })) }))] }))] })), _jsxs(View, Object.assign({ style: { gap: 4, height: 38, width: 39 } }, { children: [_jsx(View, { children: _jsx(Text, Object.assign({ style: { fontFamily: 'Poppins-Regular', fontSize: 16, fontWeight: '500', lineHeight: 18, color: 'black' } }, { children: "\u20B9 0.3" })) }), _jsx(View, { children: _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "\u20B9 5/km" })) })] }))] }))] }))] })) }))] }))] })), _jsxs(View, Object.assign({ style: styles.paymentDetails }, { children: [_jsxs(View, Object.assign({ style: styles.bookInfoContainer }, { children: [_jsxs(View, Object.assign({ style: { flexDirection: 'row' } }, { children: [_jsx(Text, Object.assign({ style: [textStyles.headingH7, { color: 'black' }] }, { children: totalCost })), _jsxs(Text, Object.assign({ style: [textStyles.bodyB3, { color: '#1C1C1C' }] }, { children: [" for", totalDays, " days, ", Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.weight, " ", Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.SelectedUnit, " / ", Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.numberOfBags, " (", Bookingdata === null || Bookingdata === void 0 ? void 0 : Bookingdata.SelectedBagsize, ")"] }))] })), _jsx(Text, Object.assign({ style: textStyles.bodyB4 }, { children: "+\u20B9 100 for 20 km transport charge" })), _jsxs(Text, Object.assign({ style: [textStyles.headingH6_5, { color: 'black' }] }, { children: ["To pay : \u20B9 ", totalCost + 100] }))] })), _jsx(View, Object.assign({ style: styles.bookButtonContainer }, { children: _jsx(ButtonWithAutoWidth, { role: "iButton", text: "Book now", bgcolor: "#0C447D", borderColor: "#0C447D", txtcolor: "#FFFFFF", onPress: () => {
                                // if kyc is false we will add kyc
                                // setIsVisible(true)
                                if (kycStatus == true) {
                                    navigation.navigate('BookWarehouse', {
                                        warehouse: warehouse,
                                        Bookingdata: Bookingdata,
                                        TotalCost: totalCost,
                                        Totaldays: totalDays
                                    });
                                }
                                else {
                                    setIsVisible(true);
                                }
                            } }) }))] })), _jsxs(Modal, Object.assign({ animationType: "fade", transparent: true, visible: isVisible, onRequestClose: () => setIsVisible(false) }, { children: [_jsx(View, { style: styles.modalOverlay }), _jsxs(View, Object.assign({ style: styles.modalContainer }, { children: [_jsx(TouchableOpacity, Object.assign({ onPress: () => setIsVisible(false), style: styles.DissmissBotton }, { children: _jsx(Dissmiss, {}) })), _jsx(View, Object.assign({ style: styles.optionPosition }, { children: _jsxs(View, Object.assign({ style: styles.modalTitle }, { children: [_jsx(Text, Object.assign({ style: styles.modalText }, { children: "Complete your Know Your Customer (KYC) to book your warehouse" })), _jsxs(View, Object.assign({ style: styles.buttonRow }, { children: [_jsx(View, Object.assign({ style: styles.buttonHalf }, { children: _jsx(ButtonWithAutoWidth, { txtcolor: "#07294B", borderColor: "#07294B", text: "Back", role: "iButton", onPress: () => setIsVisible(false) }) })), _jsx(View, Object.assign({ style: styles.buttonHalf }, { children: _jsx(ButtonWithAutoWidth, { role: "iButton", text: "Verify KYC", bgcolor: "#0C447D", borderColor: "#0C447D", txtcolor: "#FFFFFF", onPress: () => {
                                                            navigation.navigate('KycFarmer', {});
                                                            setIsVisible(false);
                                                        } }) }))] }))] })) }))] }))] }))] })));
};
export default WarehouseDetails;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'scroll',
        // backgroundColor: 'green',
    },
    headerIcons: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
    },
    iconButton: {
        marginRight: 16,
    },
    scrollView: {
        width: '91%',
        height: 'auto',
        marginHorizontal: 16,
        marginTop: -8,
        // backgroundColor: 'red',
    },
    banner: {
        width: 328,
        height: 152,
        borderRadius: 8,
        // backgroundColor: 'blue'
    },
    customView1: {
        width: 328,
        height: 324,
        paddingVertical: 12,
        paddingHorizontal: 8,
        marginVertical: 16,
        borderRadius: 8,
        justifyContent: 'space-between',
        backgroundColor: '#F7F7F7',
    },
    customView3: {
        width: 312,
        height: 145,
        justifyContent: 'space-between',
        // backgroundColor: 'pink',
    },
    customView5: {
        width: 'auto',
        height: 'auto',
    },
    customView6: {
        width: 312,
        height: 'auto',
        paddingHorizontal: 8,
        justifyContent: 'space-between',
    },
    customView7: {
        width: 'auto',
        height: 'auto',
        marginVertical: 8,
    },
    ViewinC6: {
        width: 'auto',
        height: 'auto',
        marginVertical: 3,
    },
    line: {
        width: 312,
        height: 0,
        marginVertical: 0,
        borderTopWidth: 1,
        borderColor: '#E0E1E1'
    },
    customView4: {
        width: 312,
        height: 123,
        justifyContent: 'space-between',
        // backgroundColor: 'pink',
    },
    DetailContainer: {
        width: 312,
        height: 88,
        justifyContent: 'space-between'
    },
    emptyView: {
        width: 328,
        height: 64,
        marginBottom: 16,
        paddingTop: 12,
        paddingRight: 8,
        paddingBottom: 12,
        paddingLeft: 8,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F7F7F7',
    },
    largeEmptyView: {
        width: 328,
        height: 749,
        paddingTop: 12,
        paddingRight: 8,
        paddingBottom: 12,
        paddingLeft: 8,
        gap: 16,
        borderRadius: 8,
        backgroundColor: '#F7F7F7',
    },
    bottomEmptyView: {
        width: 328,
        height: 261,
        gap: 0,
        marginVertical: 16,
        borderRadius: 8,
        backgroundColor: '#F7F7F7',
    },
    paymentDetails: {
        padding: 16,
        backgroundColor: '#CEDAE5',
    },
    bookInfoContainer: {
        gap: 8,
        width: 283
    },
    bookButtonContainer: {
        position: 'relative',
        left: '50%',
        width: '46%',
    },
    modalOverlay: {
        backgroundColor: '#5E5E5EB2',
        width: '100%',
        height: '100%',
    },
    modalContainer: {
        width: 330,
        height: 222,
        top: 257,
        left: 16,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
    },
    DissmissBotton: {
        position: 'absolute',
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        right: 22,
        top: 24,
    },
    optionPosition: {
        top: 70,
        marginHorizontal: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalTitle: {
        top: 36,
        position: 'absolute',
        width: 285,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalText: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19.2,
        color: '#1C1C1C',
        textAlign: 'center',
    },
    buttonRow: {
        width: '100%',
        marginHorizontal: '5%',
        marginVertical: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32,
    },
    buttonHalf: {
        flexDirection: 'row',
        width: '48%',
    },
});
