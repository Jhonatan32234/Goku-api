import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { CharactersModule } from './characters/characters.module';
import { PlanetsModule } from './planets/planets.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharactersModule,
    PlanetsModule
    
],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
