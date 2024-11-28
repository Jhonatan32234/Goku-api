import { Component, OnInit } from '@angular/core';
import { Info } from '../interface/info';
import { CharactersService } from '../service/characters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  characters: Info[] = [];

  constructor(private characterService: CharactersService,private router:Router) {}

  ngOnInit(): void {
    this.cargarPersonajes();
  }

  cargarPersonajes(): void {
    this.characterService.getInfo().subscribe(response => {
      this.characters = response.items;
    });
  }
  mostrar(id: number): void {
    localStorage.setItem("idt", id.toString());
    this.router.navigate(["/transformations"])
    
  }

  async mostrarPlaneta(id:number):Promise<void>{
    localStorage.setItem("id", id.toString());
    //const result = await this.characterService.getOrigin(id).toPromise(); 
     // console.log(result);
      this.router.navigate(["planet"])
   
  }
  
}
