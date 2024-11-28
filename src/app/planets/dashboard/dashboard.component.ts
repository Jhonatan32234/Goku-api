import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../characters/service/characters.service';
import { Planets } from '../interface/planets';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  planetas!: Planets;
  

  constructor(private characterService:CharactersService,private route:Router){}

  ngOnInit(): void {
    const idString = localStorage.getItem("id");
  
    // Convertir a número
    const id = idString !== null ? +idString : null;
  
    if (id !== null) {
      this.characterService.getOrigin(id).subscribe({
        next: (data) => {
          this.planetas = data;
          console.log("planeta",this.planetas.originPlanet.name);
          
        },
        error: (err) => {
          console.error('Error fetching planet:', err);
        },
      });
    } else {
      console.warn('No valid ID found in localStorage.');
    }
  }

  volver():void{
    localStorage.setItem("id","")
    this.route.navigate(["characters"])
    
  }
  
}
