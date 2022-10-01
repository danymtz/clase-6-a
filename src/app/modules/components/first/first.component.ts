import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  public personaje$!: Observable<any>;
  public name: string = 'rick';

  constructor(private activateRoute: ActivatedRoute) { 
    this.personaje$ = this.activateRoute.data.pipe(
      tap(
        console.log
      )
    );
  }

  ngOnInit(): void {

    /* console.log();
    this.activateRoute.data.subscribe({
      next: (resp) => {
        //console.log('Componente 1: ',resp);
      }
    }
    ) */
  }

}
