import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { OutputComponent } from './output/output.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
 

const appRoutes: Routes = [
  { path: 'input', component: InputComponent },
  { path: 'puzzle',      component: PuzzleComponent },
  { path: 'output',      component: OutputComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    PuzzleComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
