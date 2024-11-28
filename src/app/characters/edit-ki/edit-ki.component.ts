import { Component, OnInit } from '@angular/core';
import { TransformationService } from '../service/transformation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-ki',
  templateUrl: './edit-ki.component.html',
  styleUrls: ['./edit-ki.component.css']
})
export class EditKiComponent implements OnInit {
  transformation: any;
  isEditing: boolean = false; 
  editedKi: string = '';
  newKi: string ='';


  constructor(private transformationService: TransformationService,       private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
   
    
    this.transformation = this.transformationService.getTransformation();

    const storedKi = localStorage.getItem('ki');
    if (storedKi) {
      this.transformation.ki = storedKi;
    }

    this.editedKi = this.transformation.ki;
    this.transformation = this.transformationService.getTransformation();
    this.editedKi = this.transformation.ki;  
  }

  editKi() {
    this.isEditing = true;
  }

  saveKi() {
    this.transformation.ki = this.editedKi;
    localStorage.setItem('ki', this.editedKi);
    this.isEditing = false;
  }

  cancelEdit() {
    this.editedKi = this.transformation.ki; 
    this.isEditing = false;
  }
  saveChanges(): void {
    this.transformation.ki = this.editedKi;
    this.transformationService.updateTransformation(this.transformation);
    this.router.navigate(['/transformations']);
  }
}
