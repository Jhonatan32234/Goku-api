import { Component, OnInit } from '@angular/core';
import { Info } from '../interface/info';
import { CharactersService } from '../service/characters.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  characters: Info[] = [];

  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.cargarPersonajes();
  }

  cargarPersonajes(): void {
    this.characterService.getInfo().subscribe(response => {
      this.characters = response.items;
    });
  }
  mostrar(id: number): void {
    console.log(`Personaje seleccionado: ${id}`);
  }
  
}
