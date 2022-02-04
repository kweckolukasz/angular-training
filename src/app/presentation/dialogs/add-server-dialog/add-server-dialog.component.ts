import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-server-dialog',
  templateUrl: './add-server-dialog.component.html',
  styleUrls: ['./add-server-dialog.component.css'],
})
export class AddServerDialogComponent implements OnInit {
  form = new FormGroup({ name: new FormControl(''), url: new FormControl('') });
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddServerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {}
  ngOnInit(): void {}

  userName: string = '';
  serverName: string = '';

  close() {
    this.dialogRef.close();
  }
  save() {
    this.dialogRef.close(this.form.value);
  }
}
