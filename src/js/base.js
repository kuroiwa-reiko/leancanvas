app = {};

//add eventlistenr of blur for each canvas boxes
app.initializeCanvasItems = function () {
    var classnames = document.getElementsByClassName('canvas-item');
    app.addEventListenerToClassnames(classnames);

    for (var i = 0, len = classnames.length; i < len; i++) {
        var classname = classnames[i];
        var key = classname.id;
        var value = app.getFromLocalStorage(key);
        classname.innerText = value;
    }
};

//generic code for adding event listner for classnames
app.addEventListenerToClassnames = function (classnames) {
    for (var i = 0, len = classnames.length; i < len; i++) {
        classnames[i].addEventListener('blur', function () {
            var key = this.id;
            var value = this.innerText;
            app.setToLocalStorage(key, value);
        });
    }
};

//generic code for setting key/value to localStorage
app.setToLocalStorage = function (key, value) {
    if (localStorage) {
        localStorage.setItem(key, value);
    }
};

//generic code for getting value from localStorage
app.getFromLocalStorage = function (key) {
    if (localStorage) {
        return localStorage.getItem(key);
    }
};

app.clearLocalStorage = function () {
    if (localStorage) {
        localStorage.clear();
    }
};

window.onload = function () {
    app.initializeCanvasItems();
    //save button
    var btn = document.getElementById('btn_save');
    var toast = document.getElementById('toast');
    btn.addEventListener('click', function () {
        console.log('clicked');
        var result = confirm('Are you sure you clear canvas items?');
        if (result) {
            app.clearLocalStorage();
            app.initializeCanvasItems();
        }
        // toast.classList.remove("display-none");
    });
};
