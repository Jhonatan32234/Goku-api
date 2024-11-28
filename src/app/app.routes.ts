import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InfoComponent } from './characters/info/info.component';
import { TransformationsComponent } from './characters/transformations/transformations.component';




export const routes: Routes = [
    {path:'characters',component:InfoComponent},
    {path:'transformations',component:TransformationsComponent},

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
