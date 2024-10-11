import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../../types/navigationTypes';
type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
declare const Profile: React.FC<ProfileProps>;
export default Profile;
