import React from 'react';
interface HeaderComponentProps {
    component?: React.FC;
    title: string;
    onPressBack?: () => void;
}
declare const HeaderComponent: React.FC<HeaderComponentProps>;
export default HeaderComponent;
