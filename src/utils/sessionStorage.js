export function writeStorage (key, value) {
    window.sessionStorage.setItem(key, value);
}

export function getStorage (key, defaultValue) {
    const value = window.sessionStorage.getItem(key);
    if (!value) {
        writeStorage(key, defaultValue);
        return defaultValue;
    }
    return value;
}