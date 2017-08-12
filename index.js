import Rx from 'rxjs/Rx';

Rx.Observable.of('Hello World')
    .subscribe(console.log.bind(console));

