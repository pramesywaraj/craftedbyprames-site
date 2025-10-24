export function formatUTCDateRange(start: string, end: string) {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const startFormatted = startDate.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
        timeZone: "UTC",
    });
    const endFormatted = endDate.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
        timeZone: "UTC",
    });
    return `${startFormatted} — ${endFormatted}`;
}
