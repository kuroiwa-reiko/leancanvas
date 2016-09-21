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

                const objectStore = db.createObjectStore('canvases', {autoIncrement: true});
                const testData = {
                    timestamp: new Date().getTime(),
                    canvas: {
                        problem: 'sample problem',
                        solution: 'sample solution',
                        keyMetrics: 'sample key metrics',
                        uvp: 'sample uvp',
                        unfairAdvantage: 'sample unfair advantages',
                        channels: 'sample channels',
                        customerSegments: 'sample customer segments',
                        costStructure: 'sample cost structure',
                        revenueStreams: 'sample revenue streams'
                    }
                };
                objectStore.add(testData);

                resolve(db);
            };
        });
    }

    static _openTransaction() {
        return this._requestDb()
            .then(db => {
                const transaction = db.transaction(['canvases'], 'readwrite');
                transaction.oncomplete = (event) => {
                    console.log('transaction oncomplete');
                    console.log(event);
                };
                transaction.onerror = (event) => {
                    console.log('transaction onerror');
                    console.error(event);
                };
                return Promise.resolve(transaction);
            })
            .catch(err => {
                return Promise.reject(err);
            });
    }

    static _getObjectStore(storeName) {
        return this._openTransaction()
            .then(transaction => {
                const objectStore = transaction.objectStore(storeName);
                return Promise.resolve(objectStore);
            })
            .catch(err => {
                return Promise.reject(err);
            });
    }

    static pushItem(item) {
        this._getObjectStore('canvases')
            .then(objectStore => {
                const testData = {
                    timestamp: new Date().getTime(),
                    canvas: item
                };
                objectStore.add(testData);
            })
            .catch(err => {
                console.error(err);
            });
    };

    static getItem(key) {

    };

    static clear() {

    };

}

export default IndexedDBAdapter;
