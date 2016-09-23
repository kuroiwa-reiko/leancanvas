console.log('Hello from service-worker.js!');

self.addEventListener('install', function(event) {
    // Perform install steps
    console.log(event);
});
