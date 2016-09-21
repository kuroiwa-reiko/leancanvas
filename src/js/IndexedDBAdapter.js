/**
 * IndexedDBAdapter.js
 */

class IndexedDBAdapter {

    static _requestDb() {
        return new Promise((resolve, reject) => {
            const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
            if (!indexedDB) {
                reject('This browser does not support IndexedDB API');
            }
            const DB_NAME = 'LeanCanvasOnline';
            const DB_VERSION = 3;
            const DBOpenRequest = indexedDB.open(DB_NAME, DB_VERSION);

            DBOpenRequest.onerror = (event) => {
                reject(event);
            };
            DBOpenRequest.onsuccess = (event) => {
                const db = event.target.result;
                resolve(db);
            };
            DBOpenRequest.onupgradeneeded = (event) => {
                const db = event.target.result;
                db.createObjectStore('canvases', {autoIncrement: true});
                resolve(db);
            };
        });
    }

    static _openTransaction(storeNames) {
        return this._requestDb()
            .then(db => {
                const transaction = db.transaction(storeNames, 'readwrite');
                transaction.oncomplete = (event) => {
                    console.log('transaction oncomplete');
                };
                transaction.onerror = (event) => {
                    return Promise.reject('transaction onerror');
                };
                return Promise.resolve(transaction);
            })
            .catch(err => {
                return Promise.reject(err);
            });
    }

    static _getObjectStore(storeName) {
        return this._openTransaction([storeName])
            .then(transaction => {
                const objectStore = transaction.objectStore(storeName);
                return Promise.resolve(objectStore);
            })
            .catch(err => {
                return Promise.reject(err);
            });
    }

    static pushItem(item) {
        return this._getObjectStore('canvases')
            .then(objectStore => {
                const canvasItem = {
                    timestamp: new Date().getTime(),
                    canvas: item
                };
                objectStore.add(canvasItem);
            })
            .catch(err => {
                return Promise.reject(err);
            });
    };

    static getAll() {
        return this._getObjectStore('canvases')
            .then(objectStore => {
                const items = [];
                objectStore.openCursor().onsuccess = (event) => {
                    const cursor = event.target.result;
                    if (cursor) {
                        items.push(cursor.value);
                        cursor.continue();
                    }
                };
                return Promise.resolve(items);
            })
            .catch(err => {
                return Promise.reject(err);
            });
    }

    static clear() {
        return this._getObjectStore('canvases')
            .then(objectStore => {
                objectStore.clear();
                return Promise.resolve('Successfully cleared history.');
            })
            .catch(err => {
                return Promise.reject(err);
            });
    };

}

export default IndexedDBAdapter;
