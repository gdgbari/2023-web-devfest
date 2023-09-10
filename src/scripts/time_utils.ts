export function formatTime(date: Date): string {
    const hours = date.getHours();
    const hh = hours > 9 ? hours.toString() : `0${hours}`;

    const minutes = date.getMinutes();
    const mm = minutes > 9 ? minutes.toString() : `0${minutes}`;
    
    return `${hh}:${mm}`;
}