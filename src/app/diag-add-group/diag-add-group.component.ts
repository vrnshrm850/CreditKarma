import { Component, OnInit, Inject, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';





@Component({
  selector: 'app-diag-add-group',
  templateUrl: './diag-add-group.component.html',
  styleUrls: ['./diag-add-group.component.scss']
})
export class DiagAddGroupComponent implements OnInit ,  AfterViewInit{
  @ViewChild('addGroupMainDiv') _addGroup: ElementRef;
  data:any;
  groupName: any = '';
  categoryName: any = '';
 fieldsArray: any = [];
 disableCategoryButton: Boolean = false;
 disableGroupButton: Boolean = false;


 


  constructor(public dialogRef: MatDialogRef<DiagAddGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public _data: any,   private element: ElementRef) {
      this.data=_data;
   
    }

  ngOnInit() {
   let ele = this.element.nativeElement.querySelector('#addGroupMainDiv');
  }

  ngAfterViewInit(){
 //   let ele = this.element.nativeElement.querySelector('#addGroupMainDiv');

  }

  addCategory(){
    let obj =  {
      title: this.categoryName,
      dataType:[{name: 'Numeric', value:'number'},
                {name: 'Boolean', value:'boolean'}
                 ],
      format:[{name: '%', value:'percent'},
                {name: '$', value:'dollar'}
                 ],
      };

      this.fieldsArray.push(obj);

      this.categoryName =  "";
      
  }

  cancel(): any {
    let dataToSendBack: any = {};
    this.dialogRef.close(dataToSendBack);
  }


addGroup(){
  this.disableGroupButton = true;
}

deleteCategory(i){
  this.fieldsArray.splice(i, 1);
console.log(i);


}
addInfo(){
  
}
}
