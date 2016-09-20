/**
 * localStorageAdapter.js
 */

class LocalStorageHandler {

    static setItem(key, value) {
        if (localStorage) {
            localStorage.setItem(key, value);
        }
    };

    static getItem(key) {
        if (localStorage) {
            return localStorage.getItem(key);
        }
    };

    static clear() {
        if (localStorage) {
            localStorage.clear();
        }
    };

}

export default LocalStorageHandler;
