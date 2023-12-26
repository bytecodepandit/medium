export function getTimeOfDay() {
    const today = new Date();
    const currHour = today.getHours();
    if (currHour < 12) {
        return "Good morning";
    } else if (currHour < 18) {
        return "Good afternoon";
    }
    return "Good evening";
}
