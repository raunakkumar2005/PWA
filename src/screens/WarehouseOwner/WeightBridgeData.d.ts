import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../../types/navigationTypes';
type WeightBridgeDataProps = NativeStackScreenProps<RootStackParamList, 'New weighbridge data'>;
declare const WeightBridgeData: React.FC<WeightBridgeDataProps>;
export default WeightBridgeData;
