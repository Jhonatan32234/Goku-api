import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { TransformationsComponent } from './transformations/transformations.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { EditKiComponent } from './edit-ki/edit-ki.component';




@NgModule({
  declarations: [InfoComponent,TransformationsComponent,EditKiComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],exports:[
    InfoComponent,TransformationsComponent,EditKiComponent
  ]
})
export class CharactersModule { }
