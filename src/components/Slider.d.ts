interface filterNumericData {
    'Distance from rake point (km)': number[];
    'Distance from APMC point (km)': number[];
}
interface SliderProps {
    min: number;
    max: number;
    onChange: (option: keyof filterNumericData, data: number, variant: string) => void;
    option: string;
}
export default function Slider(props: SliderProps): import("react/jsx-runtime").JSX.Element;
export {};
