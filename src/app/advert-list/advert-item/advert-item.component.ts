import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../shared/models/post.model';

@Component({
  selector: 'app-advert-item',
  templateUrl: './advert-item.component.html',
  styleUrls: ['./advert-item.component.css']
})
export class AdvertItemComponent implements OnInit {
@Input() post: Post;

constructor() { }

  ngOnInit() {
  }

}
