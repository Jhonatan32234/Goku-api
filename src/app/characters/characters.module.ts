import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { TransformationsComponent } from './transformations/transformations.component';
import { HttpClientModule } from '@angular/common/http';
import { EditKiComponent } from './edit-ki/edit-ki.component';



@NgModule({
  declarations: [InfoComponent,TransformationsComponent, EditKiComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],exports:[
    InfoComponent,TransformationsComponent
  ]
})
export class CharactersModule { }
