import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule } from '@angular/material';
  import {MatDialogModule} from '@angular/material/dialog';


const MATERIAL_COMPONENTS = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatDialogModule
];
@NgModule({
  imports: [
    CommonModule,
    MATERIAL_COMPONENTS
  ],
  exports: [ MATERIAL_COMPONENTS],
  declarations: []
})
export class MaterialModule { }
