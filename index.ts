import { of } from 'rxjs'; 
import { fromEvent } from 'rxjs'; 
import { paint } from './canvas.js';
import { mergeMap, takeUntil, delay } from 'rxjs/operators';
 

// const mouse$ = fromEvent(document, 'mousemove');
// mouse$.subscribe(console.log);

const move$ = fromEvent(document, 'mousemove').pipe(delay(2000));
// const down$ = fromEvent(document, 'mousedown')
// const up$ = fromEvent(document, 'mouseup')

// const paints$ = down$.pipe(
//   mergeMap(down => move$.pipe(takeUntil(up$)))
// );

// paints$.subscribe((v)=> paint(v));

move$.subscribe((v)=> paint(v));
