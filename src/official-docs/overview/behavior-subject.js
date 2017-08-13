import Rx from 'rxjs/Rx';

const subject = new Rx.BehaviorSubject(0);

subject.subscribe({
  next: x => console.log('Observer A:', x)
});

subject.next(1);
subject.next(2);

subject.subscribe({
  next: x => console.log('Observer B:', x)
});

subject.next(3);

