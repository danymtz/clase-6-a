import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, concatMap, Observable, of } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';
// Los resolvers sirven para cargara cosas desde un inicio
@Injectable({
  providedIn: 'root'
})
export class GetCharactersResolver implements Resolve<any> {

  constructor(private data$: RequestService, private router: Router){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    
    //let charName: string = route.params['param'];
    //console.log('Name', route.params['param']);
    //console.log('Name', route.queryParams['name']);
    
    const charName: any = route.queryParams['name'];
   
    console.log('Route >', route);
    console.log('state', state);
    console.log('Name: ',charName);
    
    
    return this.data$.getCharacters().pipe(
      concatMap((resp: any) => {
        console.log(resp);
        let temp = (resp.results as any[]).find(item => {
          console.log('item ',item);
          return item.name.includes(charName)
        }
          )?.name
          if (!temp){
            throw {
              status:404
            };
          }
        return this.data$.getCharacter(charName);
      }),
      catchError ((err: any) => {
        if (err.status === 404){
          this.router.navigate(['404'])
        }
        console.log(err)
        return of(err);
      })
    );
  }
}
