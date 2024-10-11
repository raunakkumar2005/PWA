import React from "react";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../types/navigationTypes";
type DashboardProps = NativeStackScreenProps<RootStackParamList, "Dashboard">;
declare const Dashboard: React.FC<DashboardProps>;
export default Dashboard;
