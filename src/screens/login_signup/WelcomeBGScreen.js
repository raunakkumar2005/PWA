import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Modal } from 'react-native';
import WelcomeImg from '../../assets/Welcome';
import CustomButton from '../../components/CustomButton';
import Or from '../../assets/Or';
import { useNavigation } from '@react-navigation/native';
import Dissmiss from '../../assets/Dissmiss';
import Google from '../../assets/Google';
import textStyles from '../../components/textStyles';
const { width, height } = Dimensions.get('window');
const WelcomeBGScreen = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [role, setRole] = useState('');
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#ffffff'
        },
        title: {
            marginTop: height * 0.05,
            marginBottom: height * 0.08,
            fontFamily: 'Poppins-Regular',
            fontSize: height * 0.04,
            lineHeight: 38.4,
            textAlign: 'center',
            color: '#1C1C1C',
            width: 328,
        },
        buttonBox: {
            marginTop: height * 0.07375,
            // width: width * 0.9111111111111111,
            height: height * 0.1775,
        },
        signup: {
            textAlign: 'center',
        },
        textmodal: {
            position: 'absolute',
            top: height * 0.09,
            marginHorizontal: width * 0.1375,
            fontFamily: 'Poppins',
            fontSize: 20,
            fontWeight: 'bold',
            lineHeight: 24,
            textAlign: 'center',
            color: '#626262',
        },
        DissmissBotton: {
            position: 'absolute',
            width: width * 0.0666666666666667,
            height: height * 0.03,
            justifyContent: 'center',
            alignItems: 'center',
            left: width - (width * 0.1111111111111111),
            top: height * 0.02,
        },
        modelBox: {
            position: 'absolute',
            top: height * 0.15,
            marginHorizontal: width * 0.0444444444444444,
            height: role == 'Log in' ? height * 0.295 : height * 0.20625,
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        modalContainer: {
            width: width,
            height: role == 'Log in' ? height * 0.5175 : height * 0.4375,
            bottom: 0,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            backgroundColor: 'white',
            position: 'absolute',
        },
    });
    const openModal = () => {
        setIsVisible(true);
    };
    const navigation = useNavigation();
    return (_jsxs(View, Object.assign({ style: styles.container }, {
        children: [_jsx(Text, Object.assign({ style: styles.title }, { children: "Welcome to BharatGodam" })), _jsx(View, { children: _jsx(WelcomeImg, {}) }), _jsxs(View, Object.assign({ style: styles.buttonBox }, {
            children: [_jsx(CustomButton, {
                width: 350, text: 'Sign up', role: 'iButton', bgcolor: '#0C447D', txtcolor: '#FFFFFF', borderColor: '#0C447D', onPress: () => {
                    setRole('Sign up');
                    openModal();
                }
            }), _jsx(CustomButton, {
                width: 350, text: 'Log in', role: 'iButton', bgcolor: '', txtcolor: '#07294B', borderColor: '#07294B', marginT: height * 0.02, marginB: height * 0.02, onPress: () => {
                    setRole('Log in');
                    openModal();
                }
            }), _jsx(TouchableOpacity, Object.assign({ onPress: () => navigation.navigate('Home') }, { children: _jsx(Text, Object.assign({ style: [textStyles.buttonTextUnderline, styles.signup] }, { children: 'Skip for now' })) })), _jsxs(Modal, Object.assign({ animationType: "fade", transparent: true, visible: isVisible, onRequestClose: () => setIsVisible(false) }, {
                children: [_jsx(TouchableOpacity, { style: { backgroundColor: 'rgba(0, 0, 0, 0.5)', width: width, height: height }, onPress: () => setIsVisible(false) }), _jsxs(View, Object.assign({ style: [styles.modalContainer] }, {
                    children: [_jsx(TouchableOpacity, Object.assign({ onPress: () => setIsVisible(false), style: styles.DissmissBotton }, { children: _jsx(Dissmiss, {}) })), _jsxs(Text, Object.assign({ style: styles.textmodal }, { children: ["Choose a ", role, " method"] })), _jsxs(View, Object.assign({ style: styles.modelBox }, {
                        children: [_jsx(CustomButton, {
                            role: 'phone', text: role, bgcolor: '#0C447D', borderColor: '#0C447D', txtcolor: '#FFFFFF', onPress: () => {
                                if (role == 'Sign up') {
                                    navigation.navigate('SignupMob');
                                }
                                else {
                                    navigation.navigate('LoginMob');
                                }
                                setIsVisible(false);
                            }
                        }), _jsx(Or, {}), _jsx(CustomButton, {
                            text: role, bgcolor: 'white', borderColor: '#07294B', txtcolor: '#07294B', onPress: () => {
                                if (role == 'Sign up') {
                                    navigation.navigate('SignupEmail');
                                }
                                else {
                                    navigation.navigate('LoginEmail');
                                }
                                setIsVisible(false);
                            }
                        }), role == 'Log in' && (_jsxs(_Fragment, { children: [_jsx(Or, {}), _jsx(CustomButton, { role: 'iButton', text: '   Log in with Google', txtcolor: '#07294B', component: () => _jsx(Google, {}) })] }))]
                    }))]
                }))]
            }))]
        }))]
    })));
};
export default WelcomeBGScreen;
