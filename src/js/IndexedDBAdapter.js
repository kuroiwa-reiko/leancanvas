/**
 * IndexedDBAdapter.js
 */

class IndexedDBAdapter {

    static open() {
        const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        if (!indexedDB) {
            console.error('This browser does not support IndexedDB API');
        }

        const DB_NAME = 'LeanCanvasOnline';
        const DB_VERSION = 1;
        const DBOpenRequest = indexedDB.open(DB_NAME, DB_VERSION);

        DBOpenRequest.onerror = (event) => {
            console.error('Error loading database');
            console.error(event);
        };

        DBOpenRequest.onsuccess = (event) => {
            const db = event.target.result;
            console.log(db);
            return db;
        };

        return indexedDB;
    }


    static setItem(key, value) {

    };

    static getItem(key) {

    };

    static clear() {

    };

}

export default IndexedDBAdapter;
