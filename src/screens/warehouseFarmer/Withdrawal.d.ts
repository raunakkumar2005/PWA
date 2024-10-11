import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../../types/navigationTypes';
type WithdrawalProps = NativeStackScreenProps<RootStackParamList, 'Withdrawal'>;
declare const Withdrawal: React.FC<WithdrawalProps>;
export default Withdrawal;
