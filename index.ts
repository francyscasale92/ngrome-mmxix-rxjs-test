import { of } from 'rxjs'; 
import { fromEvent } from 'rxjs'; 
import { paint } from './canvas.js';
//import { delay, debounceTime, tap } from 'rxjs/operators';
// BONUS
import { mergeMap, takeUntil, delay } from 'rxjs/operators';
 
// TEST 1
const mouse$ = fromEvent(document, 'mousemove');
mouse$.subscribe(console.log);

// TEST 2
// const move$ = fromEvent(document, 'mousemove');
// move$.subscribe((v)=> paint(v));

// TEST 3
// const move$ = fromEvent(document, 'mousemove').pipe(delay(2000));
// move$.subscribe((v)=> paint(v));

// TEST 4
// const move$ = fromEvent(document, 'mousemove').pipe(debounceTime(1000));
// move$.subscribe((v)=> paint(v));

// TEST 5
// const move$ = fromEvent(document, 'mousemove').pipe(tap(paint));
// move$.subscribe();

// BONUS
// const move$ = fromEvent(document, 'mousemove');
// const down$ = fromEvent(document, 'mousedown')
// const up$ = fromEvent(document, 'mouseup')
// const paints$ = down$.pipe(
//   mergeMap(down => move$.pipe(takeUntil(up$)))
// );
// paints$.subscribe((v)=> paint(v));