import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { Post } from '../shared/models/post.model';
import { AnimalService } from '../shared/animal.service';
import { Map } from 'mapbox-gl';
import { MatDialog } from '@angular/material';
import { AddPopupComponent } from './add-popup/add-popup.component';
import { DeleteCardComponent } from './delete-card/delete-card.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: Map;
  location;
  data: boolean;
  @Input() markers: Post[];
  constructor(private animalService: AnimalService, public dialog: MatDialog) {}

  ngOnInit() {
  }

  mapClicked($event) {
    const isMouseEvent = $event instanceof MouseEvent;
    const myMarker = $event.target.nodeName;
    if (!isMouseEvent) {
      this.location = $event.lngLat;
    }
      if (myMarker === 'CANVAS') {
        const dialogRef = this.dialog.open(AddPopupComponent, {
          width: '400px',
          data: { location: this.location }
        });
        dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined ) {
        this.markers.push(result);
        }
        });
      }
  }

  delMarker(id) {
    const dialogRef = this.dialog.open(DeleteCardComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.data = result;
      if (this.data === true) {
        this.animalService.deletePet(id).subscribe(data => console.log(data));
        this.markers = this.markers.filter((elem) => {
          if (elem.id !== id) {
           return elem.id;
          }
        });
      }
    });
   return;
  }
}
