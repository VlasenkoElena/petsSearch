import { RouterModule, Routes  } from '@angular/router';
import { AdvertListComponent } from './advert-list/advert-list.component';
import { MapComponent } from './map/map.component';

const appRoutes: Routes = [
  {
    path: 'advert-list',
    component: AdvertListComponent
},
  {
    path: 'map',
    component: MapComponent
  }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
