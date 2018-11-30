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
    this.getPets();
  }
  getPets() {
    this.animalService.getPets().subscribe(
      data => {
        this.markers = data;
      }
    );
  }

  searchPet() {
    this.searchName = this.name.value;
    console.log(this.searchName);
    // let newColor = this.markers.filter(element => {
    //   return element.color === this.searchName;
    // });

    let newAnimal = this.markers.filter(name => {
        return name.animal === this.searchName.toLowerCase();
      });

    if (newAnimal.length === 0) {
      alert ('Pets not found');
      newAnimal = this.markers;
    }
    this.newAnimal.emit(newAnimal);
     this.name.setValue('');
      console.log(newAnimal);
      console.log(this.markers);
  }

  allMarkers() {
    this.newAnimal.emit(this.markers);
    console.log(this.markers);
  }

}
