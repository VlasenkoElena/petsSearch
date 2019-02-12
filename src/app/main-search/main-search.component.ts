import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FormControl } from '@angular/forms';
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

  constructor(private animalService: AnimalService) {}

  ngOnInit() {
    this.getPets();
  }
  getPets() {
    this.animalService.getPets().subscribe(data => {
      this.markers = data;
    });
  }

  searchPet() {
    this.searchName = this.name.value;
    console.log(this.searchName);

    let filterArray = this.markers.filter(element => {
      if (element.animal.includes(this.searchName)) {
        return element;
      } else if (element.color.includes(this.searchName)) {
        return element;
      } else if (element.marker.includes(this.searchName)) {
        return element;
      }
    });

    if (filterArray.length === 0) {
      alert('Pets not found');
      filterArray = this.markers;
    }
    this.newAnimal.emit(filterArray);
  }

  allMarkers() {
    this.newAnimal.emit(this.markers);
    this.name.setValue('');
  }
}
