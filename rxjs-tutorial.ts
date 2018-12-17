import { Observable, Observer, Subscription, Subject, BehaviorSubject, from, of, interval, merge } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, catchError } from 'rxjs/operators';


// observable 
// represents data stream

// const intervalObservable: Observable<number> = Observable.create(function(observer: any) {
//     console.log('async function is running...');
//     let counter = 0;
//     const intervalId = setInterval(function() {
//         console.log('interval running... ' + counter);
//         observer.next(counter);
        
//         if (counter > 5) {
//             observer.error(new Error('stam error'));
//         }

//         counter++;
//     }, 1000)

//     return function() {
//         // kill the interval 
//         console.log('tearDownFunction cleanning');   
//         clearInterval(intervalId);
//     }
// });

// // Observable VS Promise
// // observable can call next multiple times
// // promise can call resolve one time

// const subscription1: Subscription = intervalObservable.subscribe(function(num: number) {
//     // next
//     console.log(num);
// }, function(err: Error) {
//     console.log('error function');
//     // error
// }, function() {
//     // complete
//     console.log('complete of first listener');
// });

// // Observable VS Promise
// // Observable is lazy - won't run async code unless there are listeners
// // Promise will always run the async code

// const subscription2: Subscription = intervalObservable.subscribe(function(num: number) {
//     console.log(`second listener counter ${num}`);
// })

// // Observable VS Promise
// // Observable async code is duplicated for every listener
// // Promise async code is one for all the listeners

// // Subscription
// // return after we do subscribe
// // represent connection between observable and listener
// // 

// setTimeout(function() {
//     subscription2.unsubscribe();
// }, 3000);

// // how to disconnect observable
// // - unsubscribe
// // - error
// // - complete

// // Promise Vs Observable
// // - Observable is cancelable
// // - promise is not


// // Subject
// // represents data stream
// // - async code is outside
// // - one data stream for many listeners

// const myIntervalSubject: Subject<number> = new Subject();

// let counter = 0;

// setInterval(function() {
//     myIntervalSubject.next(counter);
//     counter++;
// }, 1000);

// const subscription : Subscription = myIntervalSubject.subscribe(function(index: number) {
//     // next
//     console.log(index);
// });

// const myBehaviourSubject: BehaviorSubject<number> = new BehaviorSubject(0);

// // Operators

// // create or manipulate data stream
// // 1 - decide the initial data stream
// // 2 - decide the final data stream
// // 3 - decide transformation steps

// // operator of

// const a = [1, 2, 3, 4];

// // observable the will pulse the array above


// // Observable<number> -> Observable<number> -> Observable<string>
// from(a).pipe(
//     filter(function(num: number) {
//         return num % 2 === 0;
//     }),
//     map(function(num: number) {
//         return num.toString();
//     })
// )

// a : every 2 seconds pulse
// b : every 3 seconds pulse
// a + b : every 2 sec and 3 sec

const twoSec: Observable<number> = interval(2000);
const threeSec: Observable<number> = interval(3000);

merge(twoSec, threeSec).subscribe(function(num: number) {
    // 2 - 0
    // 3 - 0
    // 4 - 1
    // 5
    // 6 - 2,1
    console.log('merge');
    console.log(num) 
})



// Error handling
// decide if the error should continue to next
// error - should jump the error function


// httpClient
//     .get('some url')
//     .pipe(
//          catchError(function(err) { return new data from cache}
//     )

// promise -> observable
// from(promise)

// observable -> promise
twoSec.toPromise();

async function stam(): Promise<any> {
    const stam = await twoSec.toPromise();
    console.log('continue function');
}