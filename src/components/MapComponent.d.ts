import React from 'react';
export type Address = {
    locality_area: string;
    landmark: string;
    pincode: string;
    city: string;
    State: string;
};
export type Location = {
    latitude: number;
    longitude: number;
};
interface MapComponentProps {
    onAddressSelected: (address: Address | undefined) => void;
}
declare const MapComponent: React.FC<MapComponentProps>;
export default MapComponent;
