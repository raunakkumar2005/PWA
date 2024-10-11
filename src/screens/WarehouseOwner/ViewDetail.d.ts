import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../../types/navigationTypes';
type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'ViewDetails'>;
declare const ViewDetails: React.FC<DetailsScreenProps>;
export default ViewDetails;
