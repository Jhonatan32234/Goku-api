import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CharactersModule } from './characters/characters.module';
import { PlanetsModule } from './planets/planets.module';
import { EditKiComponent } from './character/edit-ki/edit-ki.component';


@NgModule({
  declarations: [
    AppComponent,
    EditKiComponent,
    
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
