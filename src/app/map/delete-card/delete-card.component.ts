import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.css']
})
export class DeleteCardComponent implements OnInit {
  data = true;

  constructor(public dialogRef: MatDialogRef<DeleteCardComponent>,
    @Inject(MAT_DIALOG_DATA)) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
