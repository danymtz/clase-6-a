import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/first/first.component';
import { FirstRoutingModule } from './first-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [FirstComponent, NotFoundComponent],
  imports: [
    CommonModule,
    FirstRoutingModule
  ]
})
export class FirstModule { }
