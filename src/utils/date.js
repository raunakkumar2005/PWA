export const convertDate = (dateString) => {
    dateString = String(dateString);
    const year = Number(dateString.slice(0, 4));
    const month = Number(dateString.slice(4, 6)) - 1;
    const day = Number(dateString.slice(6, 8));
    let monthName = new Date(year, month, day).toLocaleDateString('en-US', {
        month: 'short',
    });
    return `${day} ${monthName} ${year} `;
};
export function formatDate(dateString) {
    const date = new Date(dateString);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getDate();
    const month = months[date.getMonth()];
    return `${day} ${month}`;
}
