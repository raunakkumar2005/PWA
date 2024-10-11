import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../../types/navigationTypes';
type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'RejectedBookingDetails'>;
declare const RejectedBookingDetails: React.FC<SearchScreenProps>;
export default RejectedBookingDetails;
