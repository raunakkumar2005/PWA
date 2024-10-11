import { jsx as _jsx } from "react/jsx-runtime";
// @ts-nocheck
import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
const CustomImageCarousal = ({ data, autoPlay, pagination, }) => {
    // const scrollViewRef = React.useRef<Animated.ScrollView>(null);
    const interval = React.useRef(null);
    const [isAutoPlay, setIsAutoPlay] = React.useState(autoPlay);
    const [newData] = React.useState([
        { key: 'spacer-left' },
        ...data,
        { key: 'spacer-right' },
    ]);
    const { width } = useWindowDimensions();
    const SIZE = width * 0.6;
    const SPACER = (width - SIZE) / 8;
    // const x = useSharedValue(0);
    // const onScroll = useAnimatedScrollHandler({
    //     onScroll: (event) => {
    //         x.value = event.contentOffset.x;
    //     },
    // });
    // React.useEffect(() => {
    //     if (isAutoPlay === true) {
    //         let _offSet = x.value;
    //         interval.current = setInterval(() => {
    //             if (_offSet >= Math.floor(SIZE * (data.length - 1) - 10)) {
    //                 _offSet = 0;
    //             } else {
    //                 _offSet = Math.floor(_offSet + SIZE);
    //             }
    //             if (scrollViewRef.current) {
    //                 scrollViewRef.current.scrollTo({ x: _offSet, y: 0, animated: true });
    //             }
    //         }, 2000);
    //     } else {
    //         if (interval.current) clearInterval(interval.current);
    //     }
    //     return () => {
    //         if (interval.current) clearInterval(interval.current);
    //     };
    // }, [SIZE, isAutoPlay, data.length, x]);
    return (_jsx(View, {}));
};
export default CustomImageCarousal;
const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 16,
        height: '100%',
        borderWidth: 1,
        borderColor: '#C1C4C2',
        gap: 8,
        paddingHorizontal: 8,
        paddingVertical: 12,
        alignItems: 'center'
        // marginRight: 16,
        // backgroundColor: 'pink',
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 16 / 9,
    },
});
