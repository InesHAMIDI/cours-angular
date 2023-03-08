import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit{
  tableau: number[] = []
  ngOnInit(): void {
   const observable: Observable<number> =interval(3000).pipe(
    take(5)
   );
   observable.subscribe({
    next: (value) => this.tableau.push(value),
    error: (erreur) => alert("Erreur"),
    complete: () => alert("terminé")
   });
  }

}
