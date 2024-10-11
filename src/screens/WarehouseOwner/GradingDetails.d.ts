import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../../types/navigationTypes';
type GradingDetailsProps = NativeStackScreenProps<RootStackParamList, 'Grading and expiry details'>;
declare const GradingDetails: React.FC<GradingDetailsProps>;
export default GradingDetails;
