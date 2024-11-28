import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { InfoComponent } from './characters/info/info.component';
import { TransformationsComponent } from './characters/transformations/transformations.component';
import { EditKiComponent } from './characters/edit-ki/edit-ki.component';
import { DashboardComponent } from './planets/dashboard/dashboard.component';




export const routes: Routes = [
    {path:'characters',component:InfoComponent},
    {path:'transformations',component:TransformationsComponent},
    {path:'editki',component:EditKiComponent},
    {path:'planet',component:DashboardComponent},
    {path:'', redirectTo: "/characters",pathMatch:'full'},
    {path:'**', redirectTo: '/characters'},



];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
