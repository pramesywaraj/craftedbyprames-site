import dayjs from "dayjs";

export function formatUTCDateRange(start: string, end: string) {
    const startDate = dayjs(start).format("MMM YYYY");
    const endDate = dayjs(end).format("MMM YYYY");

    return `${startDate} — ${endDate}`;
}
