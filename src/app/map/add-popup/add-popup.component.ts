import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../../shared/models/post.model';
import { AnimalService } from '../../shared/animal.service';

@Component({
  selector: 'app-add-popup',
  templateUrl: './add-popup.component.html',
  styleUrls: ['./add-popup.component.css']
})
export class AddPopupComponent implements OnInit  {
  petsForm: FormGroup;
  lostPets: Post;
  pets: Post;
  marker = 'lost';
  options: string[] = ['cat', 'dog', 'parrot', 'horse', 'fish', 'mouse', 'cavy'];
  colors: string[] = ['white', 'black', 'blue', 'green', 'broun', 'yellow', 'colorful'];
  constructor(private fb: FormBuilder, private animalService: AnimalService,
    public dialogRef: MatDialogRef<AddPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Post) {}


  ngOnInit() {
  this.petsForms();
  }

  petsForms() {
    this.petsForm = this.fb.group({
      animal: ['', Validators.required],
      kind: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      phone: ['', [Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/), Validators.required]],
      color: ['', Validators.required],
      photo: ['', Validators.required]
    });
  }
  addPet() {
   const addNewPet = this.petsForm.value;
   console.log(addNewPet.photo);
   const pets: Post = new Post(
     addNewPet.animal,
     addNewPet.kind,
     addNewPet.name,
     addNewPet.age,
     addNewPet.color,
     this.data.location,
     addNewPet.phone,
     addNewPet.photo,
     this.marker
   );
   console.log(pets);
   this.animalService.addPet(pets).subscribe(
     data => {
     this.dialogRef.close(data);
     });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
