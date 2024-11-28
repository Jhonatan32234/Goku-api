import { Component } from '@angular/core';
import { TransformationService } from '../service/transformation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transformations',
  templateUrl: './transformations.component.html',
  styleUrl: './transformations.component.css'
})
export class TransformationsComponent {

  idp= 1;

  transformations: any[] = [];

  constructor(
    private transformationService: TransformationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.transformationService.transformations$.subscribe(data => {
      this.transformations = data;
    });
  }

  editTransformation(transformation: any): void {
    this.transformationService.setTransformation(transformation);
    this.router.navigate(['/editki']);
  }

  volver():void{
    localStorage.setItem("idt","")
    this.router.navigate(["/characters"])
  }

}
