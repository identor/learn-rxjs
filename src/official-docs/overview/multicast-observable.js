import Rx from 'rxjs/Rx';

const subject = new Rx.Subject();

const observers = [...Array(3).keys()]
  .map(i => ({
    next: x => console.log('Observer', i + 1 + ',', x)
  }));

observers.forEach(e => subject.subscribe(e));

Rx.Observable.from([1, 2, 3]).subscribe(subject);


