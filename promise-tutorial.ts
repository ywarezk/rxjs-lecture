// Promise

// promise class

const myTimer: Promise<string> = new Promise(function(resolve, reject) {
    // our async code will be in this 
    
    console.log('async function in promise is running...');

    setTimeout(function() {
        console.log('timeout');
        resolve('hello world from promise')

        //reject(new Error('something happened'))
    }, 1000)

});

myTimer.then(function() {

});

myTimer.then(function() {
    
});

// promise listener is with then

// const promise2: Promise<number | boolean> = myTimer.then(function(msg: string) {
//     // resolve
//     console.log(msg);
//     return msg.length;
// }, function(err: Error) {
//     // reject
//     console.log(err.message);
//     return true;
// });

// // promise chaining

// // promise2.then(function() {

// // })

// // promise1.then(function() {}).then(function(){}).then(function() {})

// // {id: 1, title: 'dsfgsd'}

// class Todo {
//     id: number;
//     title: string;
//     constructor(json: any) {
//         this.id = json.id;
//         this.title = json.title
//     }
// }

// // fetch() => Promise<Response>

// const myServerRequestPromise: Promise<Todo> = fetch('https://stam.com')
//     .then(function(res: Response) {
//         return res.json()
//     })
//     .then(function(json) {
//         return new Todo(json);
//     })
