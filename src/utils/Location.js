import Geolocation from '@react-native-community/geolocation';
const GOOGLE_MAPS_API_KEY = 'AIzaSyA45cVTPi8-ePUls0EQsv2q7nSAZIUux9Y';

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getAddressFromLocation(cb) {
    return __awaiter(this, void 0, void 0, function* () {
        const granted = yield requestLocationPermission();
        if (!granted) {
            console.warn('Location permission not granted');
            return;
        }
        try {
            const position = Geolocation.getCurrentPosition((location) => __awaiter(this, void 0, void 0, function* () {
                const { latitude, longitude } = location.coords;
                console.log(latitude, longitude);
                const temp = yield fetchGeocodeData(latitude, longitude);
                console.log(temp, 111);
                cb(temp, { latitude, longitude });
            }));
            console.log(position, 102);
        }
        catch (error) {
            console.error('Error getting location:', error);
        }
    });
}
export function fetchGeocodeData(latitude, longitude) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`;
        const response = yield fetch(url);
        const data = yield response.json();
        // console.log(data)
        if (data.status === 'OK') {
            const addressComponents = data.results[0].address_components;
            const address = {
                locality_area: '',
                landmark: '',
                pincode: '',
                city: '',
                State: '',
            };
            for (const component of addressComponents) {
                const types = component.types;
                switch (true) {
                    case types.includes('sublocality_level_1'): // Locality (e.g., neighborhood)
                        address.locality_area = component.long_name;
                        break;
                    case types.includes('sublocality_level_2'): // Landmark (e.g., point of interest)
                        address.landmark = component.long_name;
                        break;
                    case types.includes('postal_code'):
                        address.pincode = component.long_name;
                        break;
                    case types.includes('locality'):
                        address.city = component.long_name;
                        break;
                    case types.includes('administrative_area_level_1'): // State
                        address.State = component.long_name;
                        break;
                    default:
                        // Ensure there's a default case
                        break;
                }
            }
            
            return address;
        }
        else {
            console.error('Error fetching geocode data:', data.status);
        }
    });
}
export function requestLocationPermission() {
    return __awaiter(this, void 0, void 0, function* () {
        return true;
        // if (Platform.OS === 'android') {
        //   const granted = await PermissionsAndroid.request(
        //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        //     {
        //       title: 'Location Permission',
        //       message: 'This app needs access to your location to provide you with the best experience.',
        //       buttonPositive:'Allow',
        //       buttonNegative:'Deny'
        //     }
        //   );
        //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //     return true;
        //   } else {
        //     return false;
        //   }
        // } else {
        //   // iOS permission handling (if needed)
        //   return true; // Assuming iOS permission is handled automatically
        // }
    });
}
export default getAddressFromLocation;
