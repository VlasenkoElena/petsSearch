import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-popup',
  templateUrl: './add-popup.component.html',
  styleUrls: ['./add-popup.component.css']
})
export class AddPopupComponent  {
  name = new FormControl('');

  constructor(public dialogRef: MatDialogRef<AddPopupComponent>) {}


  addPet() {
   let addName = this.name.value;
    console.log(addName);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
