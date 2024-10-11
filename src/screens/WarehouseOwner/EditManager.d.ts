/// <reference types="react" />
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../types/navigationTypes";
type EditmanagerScreenProps = NativeStackScreenProps<RootStackParamList, 'Add Manager'>;
declare const EditManager: React.FC<EditmanagerScreenProps>;
export default EditManager;
