import { from } from 'rxjs';
import {filter, findIndex, take} from 'rxjs/operators';


describe('observable playground', () => {
  it('standard filtering', () => {
    const data = from([2, 30, 22, 5, 60, 1]).pipe(filter(x => x > 10));
    data.subscribe(x => console.log(x));
  });

  it('take', () => {
    const data = from([2, 30, 22, 5, 60, 1]).pipe(take(2));
    data.subscribe(x => console.log('First two values: ' + x));
  });

  it('find index', () => {
    const data = from([2, 30, 22, 5, 60, 1]).pipe(findIndex(x => x === 22));
    data.subscribe(x => console.log('Index of 22: ' + x));
  });


});
