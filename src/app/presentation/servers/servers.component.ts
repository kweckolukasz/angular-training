import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetsServers, GETS_SERVERS } from 'src/app/domain/getsServers';
import { AddEditServerDialogComponent } from '../dialogs/addEdit-server-dialog/addEdit-server-dialog.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  servers$ = this.getsServers.getAll();
  displayedColumns: string[] = ['server', 'status'];

  constructor(
    @Inject(GETS_SERVERS) private getsServers: GetsServers,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(
      AddEditServerDialogComponent,
      dialogConfig
    );

    dialogRef
      .afterClosed()
      .subscribe((data) => console.debug('dialog output', data));
  }
}
