import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DiagAddGroupComponent } from 'app/diag-add-group/diag-add-group.component';
import {map, share} from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  
  constructor(private matDialog:MatDialog) { }

  ngOnInit() {
  }
  diagOpen(){
    this.matDialog
            .open(DiagAddGroupComponent, {  panelClass: 'confirm-dialog' , hasBackdrop: true, disableClose: true})
            .afterClosed().pipe(share(),map(confirm => {
                return confirm;
            }),);
}

}
