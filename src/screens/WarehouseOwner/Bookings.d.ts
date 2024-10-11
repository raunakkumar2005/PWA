import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../../types/navigationTypes';
type BookingsProps = NativeStackScreenProps<RootStackParamList, 'Bookings'>;
declare const Bookings: React.FC<BookingsProps>;
export default Bookings;
