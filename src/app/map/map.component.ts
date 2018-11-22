import { Component, OnInit,  Input, Inject } from '@angular/core';
import { Post } from '../shared/models/post.model';
import { AnimalService } from '../shared/animal.service';
import { Map } from 'mapbox-gl';
import { MatDialog } from '@angular/material';
import { AddPopupComponent } from './add-popup/add-popup.component';
import { latLng } from 'leaflet';




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: Map;
  @Input() markers: Post[];
  constructor(private animalService: AnimalService,
              public dialog: MatDialog) { }

  ngOnInit() {

  }
  mapClicked($event) {
    let coord = this.map.getCenter();
    let lngLat = $event.lngLat;
    console.log(lngLat);
    console.log(coord);
    
    console.log($event);
    // let lng = $event.lngLat.lng;
    // let lat = $event.lngLat.lat;
    // console.log(lng, lat);
    const dialogRef = this.dialog.open(AddPopupComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
   // this.animalService.addPet(lngLat).subscribe(data => console.log(data)
   // );
  }
  }

