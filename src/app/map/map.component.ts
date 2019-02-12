import {
  Component,
  OnInit,
  Input,
  Inject,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Post } from '../shared/models/post.model';
import { AnimalService } from '../shared/animal.service';
import { Map, MapMouseEvent } from 'mapbox-gl';
import { MatDialog } from '@angular/material';
import { AddPopupComponent } from './add-popup/add-popup.component';
import { latLng, marker, bounds } from 'leaflet';
import { element } from 'protractor';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: Map;
  location;
  @Input() markers: Post[];
  constructor(private animalService: AnimalService, public dialog: MatDialog) {}

  ngOnInit() {
  //  this.map = new mapboxgl.Map();
  //   this.map.on('click', 'symbols', function (e) {
  //     this.map.flyTo({center: e.this.markers[0].location});
  // });
  }

  mapClicked($event) {
    const isMouseEvent = $event instanceof MouseEvent;
    const myMarker = $event.target.nodeName;
    console.log(myMarker);
    if (!isMouseEvent) {
      this.location = $event.lngLat;
    }
      if (myMarker === 'CANVAS') {
        const dialogRef = this.dialog.open(AddPopupComponent, {
          width: '400px',
          data: { location: this.location }
        });
        dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        if (result !== undefined ) {
        this.markers.push(result);
        }
        console.log('The dialog was closed');
        });
      }
  }

  delMarker(id) {
   const resultConfirm = confirm('Want to delete?');
   if (resultConfirm === true) {
    this.animalService.deletePet(id).subscribe(data => console.log(data));
    console.log(id);
    this.markers = this.markers.filter((element) => {
      if (element.id !== id) {
       return element.id;
      }
    });
    console.log(this.markers);
   }
   return;
  }
}
