interface DateObject {
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
    year: number;
}
export interface NavigationData {
    SelectedBagsize: string | null;
    SelectedCommodity: string | null;
    SelectedUnit: string | null;
    endDate: DateObject | null;
    startDate: DateObject | null;
    weight: string | null;
    numberOfBags?: number;
}
declare const SearchWarehouse: () => import("react/jsx-runtime").JSX.Element;
export default SearchWarehouse;
