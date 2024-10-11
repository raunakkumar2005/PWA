import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../types/navigationTypes";
import React from "react";
type TransitionScreenProps = NativeStackScreenProps<RootStackParamList, 'Transition history'>;
declare const TransitionScreen: React.FC<TransitionScreenProps>;
export default TransitionScreen;
