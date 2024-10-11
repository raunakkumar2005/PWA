interface HomeMenuProps {
    exitCallBack: () => void;
    Notification: Notification[];
}
interface Notification {
    content: string;
    read: boolean;
    time: string;
}
export default function HomeNotification(props: HomeMenuProps): import("react/jsx-runtime").JSX.Element;
export {};
