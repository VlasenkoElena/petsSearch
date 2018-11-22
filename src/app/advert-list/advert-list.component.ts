import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../shared/animal.service';
import { Post } from '../shared/models/post.model';

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.css']
})
export class AdvertListComponent implements OnInit {
posts: Post[];
  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.animalService.getPets()
    .subscribe(data => {
     this.posts = data;
      console.log(data);
    });
  }

}
