import React from 'react';
import { RootStackParamList } from '../../types/navigationTypes';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
type CancelScreenProps = NativeStackScreenProps<RootStackParamList, 'CancelBooking'>;
declare const CancelBooking: React.FC<CancelScreenProps>;
export default CancelBooking;
