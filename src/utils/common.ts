export function getIntFromString(s: string, max: number) {
    return s.length % max;
}

export function limitText(text: string, max: number) {
    if (text.length < max) return text.split("&amp;").join("&");
    return text.slice(0, max).split("&amp;").join("&") + "...";
  }
  