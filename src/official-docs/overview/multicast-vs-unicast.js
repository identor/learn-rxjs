import Rx from 'rxjs/Rx';

// Sends execution logs to the observer
const subscribe = observer => {
  // Time change
  let delta = 0;

  observer.next('Starting program');

  setTimeout(() => observer.next('Processing x'), delta += 1000)
  setTimeout(() => observer.next('Processing y'), delta += 1000)
  setTimeout(() => observer.next('Processing kk'), delta += 1000)
  setTimeout(() => observer.next('Processing aa'), delta += 1000)
  setTimeout(() => observer.next('execution finished'), delta += 1000)
  setTimeout(() => {
    observer.complete();
  }, delta += 1000)
};


// Unicast
const unicastObservable = Rx.Observable.create(subscribe);

// Multicast
const multicastObservable = unicastObservable.multicast(new Rx.Subject).refCount();

unicastObservable.subscribe(x => console.log('Unicast 1::',x))

// Subscribe first before connect to ensure that all data is processed by Multicast 1
multicastObservable.subscribe({ next: x => console.log('Multicast 1::', x) });

// Middle of execution
setTimeout(() => {
  // Finishes at the same time with unicast 1, and multicast 1 but didnt process
  // x, y, and kk
  multicastObservable.subscribe({ next: x => console.log('Multicast 2::', x) });

  // Unicast observable processes all data but finishes after 3 more seconds
  unicastObservable.subscribe(x => console.log('Unicast 2::',x))
}, 3000)

