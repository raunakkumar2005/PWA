import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigationTypes';
type WarehouseDetailsRouteProp = RouteProp<RootStackParamList, 'WarehouseDetails'>;
type Props = {
    route: WarehouseDetailsRouteProp;
};
declare const WarehouseDetails: ({ route }: Props) => import("react/jsx-runtime").JSX.Element;
export default WarehouseDetails;
