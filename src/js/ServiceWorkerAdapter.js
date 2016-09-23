/**
 * ServiceWorkerAdapter.js
 */

class ServiceWorkerAdapter {
    register() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/leancanvas/service-worker.js', {scope: '/leancanvas'})
                .then((registration) => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch((err) => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        }
    }
}

export default ServiceWorkerAdapter;
