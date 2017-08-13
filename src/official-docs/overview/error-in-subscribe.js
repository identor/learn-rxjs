import { Observable } from 'rxjs/Rx';

Observable.create(() => { throw new Error('Error')})
  .subscribe(
    () => {},
    err => {
      console.log(err.message);
    }
  );

// Doesn't execute
console.log('Exit properly??')

