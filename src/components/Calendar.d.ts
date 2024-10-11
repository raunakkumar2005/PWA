import React from 'react';
interface CalendarModalProps {
    toggleCalendar: boolean;
    handleToggleCalendar: () => void;
    setDate: React.Dispatch<React.SetStateAction<string>>;
}
export default function CalendarModal({ toggleCalendar, handleToggleCalendar, setDate, }: CalendarModalProps): import("react/jsx-runtime").JSX.Element;
export {};
