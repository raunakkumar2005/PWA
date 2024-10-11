/// <reference types="react" />
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../types/navigationTypes";
type ListScreenProps = NativeStackScreenProps<RootStackParamList, 'ListManager'>;
declare const ListManager: React.FC<ListScreenProps>;
export default ListManager;
