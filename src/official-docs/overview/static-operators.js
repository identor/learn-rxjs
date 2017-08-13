import Rx from 'rxjs';

var observable1 = Rx.Observable.interval(1000);
var observable2 = Rx.Observable.interval(400);

var merged = Rx.Observable.merge(observable1, observable2);

const subscription = merged.subscribe(x => console.log(x));

setTimeout(() => subscription.unsubscribe(), 3000);

