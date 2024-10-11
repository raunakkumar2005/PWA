import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../../types/navigationTypes';
type FilterProps = NativeStackScreenProps<RootStackParamList, 'Filter'>;
declare const Filter: React.FC<FilterProps>;
export default Filter;
