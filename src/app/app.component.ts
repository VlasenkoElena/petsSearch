import { Component, OnInit } from '@angular/core';
import { AnimalService } from './shared/animal.service';
import { Post } from './shared/models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sirkoSearch';
  markers: Post[];
  constructor(private animalService: AnimalService) {}

  ngOnInit() {
    this.animalService.getPets().subscribe(
      data => {
        this.markers = data;
        console.log(this.markers);
      }
    );
  }

  changeMarkets(value) {
    console.log(value);
    this.markers = value;
  }

}
