interface TableProps {
    height: number;
    heading: string[];
    data: (string | boolean | undefined)[][];
    commodity?: number;
    weight?: number;
    action?: boolean;
    expiry?: number;
    grading?: number;
}
export default function Table(props: TableProps): import("react/jsx-runtime").JSX.Element;
export {};
