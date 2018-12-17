"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
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
var twoSec = rxjs_1.interval(2000);
var threeSec = rxjs_1.interval(3000);
rxjs_1.merge(twoSec, threeSec).subscribe(function (num) {
    // 2 - 0
    // 3 - 0
    // 4 - 1
    // 5
    // 6 - 2,1
    console.log('merge');
    console.log(num);
});
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
function stam() {
    return __awaiter(this, void 0, void 0, function () {
        var stam;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, twoSec.toPromise()];
                case 1:
                    stam = _a.sent();
                    console.log('continue function');
                    return [2 /*return*/];
            }
        });
    });
}
