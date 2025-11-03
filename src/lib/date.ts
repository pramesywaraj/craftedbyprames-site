import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export function formatUTCDateRange(start: string, end: string) {
    const startDate = dayjs(start, ["MMM YYYY", "YYYY-MM", "YYYY-MM-DD"], true);
    const endDate = dayjs(end, ["MMM YYYY", "YYYY-MM", "YYYY-MM-DD"], true);

    const s = startDate.isValid() ? startDate.format("MMM YYYY") : start;
    const e = endDate.isValid() ? endDate.format("MMM YYYY") : end;

    return `${s} — ${e}`;
}
