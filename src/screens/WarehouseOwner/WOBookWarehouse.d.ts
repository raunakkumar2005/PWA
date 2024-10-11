import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../../types/navigationTypes';
type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'WOBookWarehouse'>;
declare const WOBookWarehouse: React.FC<DetailsScreenProps>;
export default WOBookWarehouse;
