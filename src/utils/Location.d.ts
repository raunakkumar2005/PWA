declare function getAddressFromLocation(cb: any): Promise<void>;
export declare function fetchGeocodeData(latitude: number, longitude: number): Promise<{
    locality_area: string;
    landmark: string;
    pincode: string;
    city: string;
    State: string;
}>;
export declare function requestLocationPermission(): Promise<boolean>;
export default getAddressFromLocation;
