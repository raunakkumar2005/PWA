import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../../types/navigationTypes';
type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'WarehouseDetailOwner'>;
declare const WarehouseDetailsOwner: React.FC<DetailsScreenProps>;
export default WarehouseDetailsOwner;
