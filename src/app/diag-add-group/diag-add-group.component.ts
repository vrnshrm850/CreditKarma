import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'app-diag-add-group',
  templateUrl: './diag-add-group.component.html',
  styleUrls: ['./diag-add-group.component.scss']
})
export class DiagAddGroupComponent implements OnInit {
  data:any;
  
  constructor(public dialogRef: MatDialogRef<DiagAddGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public _data: any) {
      this.data=_data;
   
    }

  ngOnInit() {
  }
  cancel(): any {
    let dataToSendBack: any = {};
    this.dialogRef.close(dataToSendBack);
  }
save(){}


}
