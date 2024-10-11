import { jsx as _jsx } from "react/jsx-runtime";
import { Modal, View, ActivityIndicator, Dimensions } from 'react-native';
const CustomModal = ({ isVisible, setIsVisible }) => {
    const { width, height } = Dimensions.get('window');
    return (_jsx(Modal, Object.assign({ animationType: "fade", transparent: true, visible: isVisible, onRequestClose: () => setIsVisible(false) }, { children: _jsx(View, Object.assign({ style: { backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1, alignItems: 'center', justifyContent: 'center' } }, { children: _jsx(ActivityIndicator, { style: { position: 'absolute' }, color: 'white', size: 'large' }) })) })));
};
export default CustomModal;
