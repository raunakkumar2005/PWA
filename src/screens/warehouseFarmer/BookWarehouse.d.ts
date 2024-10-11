import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../../types/navigationTypes';
type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'BookWarehouse'>;
declare const BookWarehouse: React.FC<SearchScreenProps>;
export default BookWarehouse;
