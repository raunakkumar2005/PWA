import React from 'react';
interface CustomButtonProps {
    text?: string;
    onPress?: () => void;
    bgcolor?: string;
    borderColor?: string;
    txtcolor?: string;
    marginT?: number;
    marginB?: number;
    role?: string;
    component?: React.FC;
    disabled?: boolean;
}
declare const ButtonWithAutoWidth: React.FC<CustomButtonProps>;
export default ButtonWithAutoWidth;
