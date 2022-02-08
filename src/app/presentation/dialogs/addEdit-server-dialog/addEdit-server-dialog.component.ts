import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Server } from './../../../domain/server';

@Component({
  selector: 'app-add-server-dialog',
  templateUrl: './addEdit-server-dialog.component.html',
  styleUrls: ['./addEdit-server-dialog.component.css'],
})
export class AddEditServerDialogComponent implements OnInit {
  form: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<AddEditServerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Server
  ) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.data != null ? this.data.name : '', [
        Validators.required,
        Validators.minLength(1),
      ]),
      url: new FormControl(this.data != null ? this.data.url : '', [
        Validators.required,
      ]),
    });
  }

  close() {
    this.dialogRef.close();
  }
  save() {
    this.dialogRef.close(this.form.value);
  }

  get name() {
    return this.form.get('name');
  }

  get url() {
    return this.form.get('url');
  }

  isValid() {
    return this.form.valid;
  }
}
