import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../../types/navigationTypes';
type AcceptedScreenProps = NativeStackScreenProps<RootStackParamList, 'AcceptedBookingDetails'>;
declare const AcceptedBookingDetails: React.FC<AcceptedScreenProps>;
export default AcceptedBookingDetails;
