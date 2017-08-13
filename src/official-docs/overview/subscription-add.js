import Rx from 'rxjs/Rx';

const observable1 = Rx.Observable.interval(400);
const observable2 = Rx.Observable.interval(300);

const subscription = observable1.subscribe(console.log.bind(console));
const childSubscription = observable2.subscribe(console.log.bind(console));

subscription.add(childSubscription);

setTimeout(() => {
  subscription.unsubscribe();
}, 1000);

