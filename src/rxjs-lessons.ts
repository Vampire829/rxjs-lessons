import { BehaviorSubject, Observable, Subject, debounce, debounceTime, distinctUntilChanged } from "rxjs";
//1 пример использования  Cold  observable
// const stream$ = new Observable(observer=>{
//     observer.next(1);
//     setTimeout(()=>{
//         observer.next(2)
//     },2000);
//     observer.next(3)
// })

// stream$.subscribe({
//     next: ((value)=>{
//         console.log(value)
//     })
// })
//2 пример использования Hot subject
// const sub$ = new Subject();
// sub$.subscribe({
//     next:((value)=>{
//         console.log(value)
//     }),
//     error:((err)=>{
//         console.log(err)
//     })
// })
// sub$.next(1);
// sub$.error('error')
// sub$.complete()

//3 пример использования

// const stream$ = new Observable<Event>((observer)=>{
//     const searc = document.getElementById('searc'); //getElementById- находим элемент с айдишником и присваеваем его в переменную
// if(!searc){
//     observer.error('Не найден элемент searc')
//     return;
// }
//         searc?.addEventListener('input',(event)=>{ // Создаем событие 
//             observer.next(event);
//            setTimeout(()=>{
//             observer.complete()
//            },3000) 
//         })
// })

// stream$.pipe(
    // map(event=>{
    //     return (event.target as HTMLInputElement).value;
    // }),
//   debounceTime(500),
// //   map(value=>value.length > 3? value : ''),
//   distinctUntilChanged() // убирает повторящиеся вызовы
// ).subscribe({
//     next:(value)=>{
//         console.log(value)
//     },
//      error:(err)=>{
//         console.log(err)
//      },
//      complete:()=>{
//         console.log('end event')
//      }
// }
// )

//4 пример использования (Семейство subject)

const behavor$ = new BehaviorSubject(1);

behavor$.subscribe(value=>{console.log(value)})

behavor$.next(2)
behavor$.subscribe(value=>{console.log(value)})








