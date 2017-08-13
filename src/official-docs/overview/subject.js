import { Subject } from 'rxjs/Rx';

const subject = new Subject();

const observers = [
  { next: x => console.log('observer 1,', x) },
  { next: x => console.log('observer 2,', x) }
];

subject.subscribe(observers[0]);
subject.subscribe(observers[1]);

subject.next('hello');
subject.next('world');
