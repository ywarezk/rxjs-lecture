"use strict";
// Promise
// promise class
var myTimer = new Promise(function (resolve, reject) {
    // our async code will be in this 
    setTimeout(function () {
        resolve('hello world from promise');
        //reject(new Error('something happened'))
    }, 1000);
});
// promise listener is with then
var promise2 = myTimer.then(function (msg) {
    // resolve
    console.log(msg);
    return msg.length;
}, function (err) {
    // reject
    console.log(err.message);
    return true;
});
// promise chaining
// promise2.then(function() {
// })
// promise1.then(function() {}).then(function(){}).then(function() {})
// {id: 1, title: 'dsfgsd'}
var Todo = /** @class */ (function () {
    function Todo(json) {
        this.id = json.id;
        this.title = json.title;
    }
    return Todo;
}());
// fetch() => Promise<Response>
var myServerRequestPromise = fetch('https://stam.com')
    .then(function (res) {
    return res.json();
})
    .then(function (json) {
    return new Todo(json);
});
