import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DiagAddGroupComponent } from '../diag-add-group/diag-add-group.component';
import {map, share} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  appGroupsData = {};
  
  constructor(private httpService: HttpClient, private matDialog:MatDialog) { }

  ngOnInit() {
    this.getaddGroups();
  }
  diagOpen(){
    this.matDialog
            .open(DiagAddGroupComponent, {  panelClass: 'confirm-dialog' , hasBackdrop: true, disableClose: true})
            .afterClosed().pipe(share(),map(confirm => {
                return confirm;
            }),);
}

getaddGroups(): void {
  this.httpService.get("data/groups.json").subscribe(
    (data: any) => {
    this.appGroupsData = data as string[];
    },
    (err: HttpErrorResponse) => {
    }
    );

}

}
