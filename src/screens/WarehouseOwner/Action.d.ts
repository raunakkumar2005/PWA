import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../../types/navigationTypes';
type ActionProps = NativeStackScreenProps<RootStackParamList, 'Action'>;
declare const Action: React.FC<ActionProps>;
export default Action;
