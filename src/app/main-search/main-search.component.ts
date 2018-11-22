import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import {  FormControl } from '@angular/forms';
import { Post } from '../shared/models/post.model';
import { AnimalService } from '../shared/animal.service';



@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent implements OnInit {
  name = new FormControl('');
  searchName: string;
 // @Input() arrayPets: Post[];
 markers: Post[];

  @Output()
  newAnimal = new EventEmitter<Post[]>();

  constructor(private animalService: AnimalService) { }

  ngOnInit() { 
    this.animalService.getPets().subscribe(
      data => {
        this.markers = data;
        console.log(this.markers);
      }
    );
  }

  searchPet() {
    this.searchName = this.name.value;
   // console.log(this.arrayPets);
   console.log(this.markers);
   

    let newAnimal = this.markers.filter(name => {
        return name.animal === this.searchName;
      });

      console.log(newAnimal);

    if (newAnimal.length === 0) {
      alert ('Pets not found');
      newAnimal = this.markers;
    }
    this.newAnimal.emit(newAnimal);
     this.name.setValue('');
      console.log(newAnimal);
      console.log(this.markers);
  }

}
