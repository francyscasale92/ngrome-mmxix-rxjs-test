import { of } from 'rxjs'; 
import { fromEvent } from 'rxjs'; 
import { paint } from './canvas.js';
import { mergeMap, takeUntil } from 'rxjs/operators';
 

const mouse$ = fromEvent(document, 'mousemove');
mouse$.subscribe(console.log);

// const move$ = fromEvent(document, 'mousemove');
// const down$ = fromEvent(document, 'mousedown')
// const up$ = fromEvent(document, 'mouseup')

// const paints$ = down$.pipe(
//   mergeMap(down => move$.pipe(takeUntil(up$)))
// );

// paints$.subscribe((v)=> paint(v));